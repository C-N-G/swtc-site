import { glob } from 'glob';
import path from 'node:path';

const mdfiles = await glob('./vault/**/*.md',);
const baseUrl = "swtcpedia/"

const groupItems = (filePaths: string[], target: string) => {
  return filePaths
  .filter(filePath => filePath.toLowerCase().includes(target))
  .map(filePath => ({file: path.basename(filePath, ".md").toLowerCase().replace(" ", "-"), name: path.basename(filePath, ".md")}))
  .map(fileObj => ({label: fileObj.name, slug: baseUrl + fileObj.file}))
  .sort(sortGroupFunc)
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
  {label: "Concepts", collapsed: true, items: groupItems(mdfiles, "concepts")},
  {label: "Modules", collapsed: true, items: groupItems(mdfiles, "modules")},
  {label: "All Roles", collapsed: true, items: groupItems(mdfiles, "roles")},
  {label: "All Characteristics", collapsed: true, items: groupItems(mdfiles, "characteristics")},
]
