import fs from 'node:fs/promises';
import { glob } from 'glob';
import fm from "front-matter";
import type { FrontMatterResult } from 'front-matter';
import path from 'node:path';

/**
 * Gets the front matter from a specified file and checks if it should be published or not
 * @param path
 * @returns boolean flag if publish is true or false
 */
async function checkPublish(path: string): Promise<boolean | undefined> {
  try {
    const contents: FrontMatterResult<{publish?: boolean}> = fm(await fs.readFile(path, {encoding: "utf8"}));
    if ("publish" in contents.attributes && typeof contents.attributes.publish === "boolean") {
      return contents.attributes.publish;
    }
    return true;
  } catch (err) {
    console.error("failed to get frontmatter from", path);
    console.error(err);
  }
}

const allmdfiles = await glob('./vault/**/*.md',);
const mdfiles = (await Promise.all(allmdfiles.map(async (filePath) => {
  const result = await checkPublish(filePath);
  return result === true ? filePath : false;
}))).filter(filePath => filePath !== false);

const baseUrl = "swtcpedia/"

const groupItems = (filePaths: string[], target: string) => {
  return filePaths
  .filter(filePath => filePath.toLowerCase().includes(target))
  .map(filePath => ({
    file: path.basename(filePath, ".md")
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll(".", "")
      .replace(/\(|\)|,/gi, ""), 
    name: path.basename(filePath, ".md")
  }))
  .map(fileObj => ({
    label: fileObj.name, 
    slug: baseUrl + fileObj.file
  }))
  .sort(sortGroupFunc)
}

const findFolders = (filePaths: string[], target: string) => {
  const folderNames = new Set(
    filePaths.filter(filePath => filePath.toLowerCase().includes(target))
    .map(filePath => path.dirname(filePath).split(path.sep).pop())
    
  )
  return Array.from(folderNames).sort().map(name => {
    return {label: name, collapsed: false, items: groupItems(mdfiles, name!.toLowerCase())}
  })

}

type GroupItem = {
  label: string,
  slug: string
}

const sortGroupFunc = (a: GroupItem, b: GroupItem) => {
  const modA = a.label;
  const modB = b.label;
  if (modA < modB) return -1;
  if (modA > modB) return 1;
  return 0;
}


export const groupedItems = [
  {label: "Glossary", collapsed: true, items: groupItems(mdfiles, "glossary")},
  {label: "Tutorial", collapsed: true, items: findFolders(mdfiles, "tutorial")},
  // {label: "Modules", collapsed: true, items: groupItems(findModules(mdfiles), "modules")}, // need to update this for the new structure
  {label: "Scenarios", collapsed: true, items: groupItems(mdfiles, "scenarios")},
  {label: "Roles", collapsed: true, items: groupItems(mdfiles, "roles")},
  {label: "Characteristics", collapsed: true, items: groupItems(mdfiles, "characteristics")},
  {label: "Locations", collapsed: true, items: groupItems(mdfiles, "locations")},
]
