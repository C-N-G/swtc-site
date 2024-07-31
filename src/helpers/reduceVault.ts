import { glob } from 'glob';
import fs from 'node:fs/promises';
import path from 'node:path';

const mdfiles = await glob('./vault/**/*.md',);
const reducedPath = path.join(".", "vault-reduced");
const obsidianPath = path.join(".", "vault", ".obsidian");

let folderExists = false;

try {
  await fs.access(reducedPath, fs.constants.F_OK);
  folderExists = true;
  console.log("vault-reduced folder already exists");
} catch {
  console.error("vault-reduced folder does not exist")
}

if (!folderExists) {
  try {
    await fs.mkdir(reducedPath);
    console.log("created new vault-reduced folder");
  } catch {
    console.error("failed creating vault-reduced folder")
  }
}

mdfiles.forEach(async filePath => {
  try {
    await fs.copyFile(filePath, path.join(reducedPath, path.basename(filePath)));
    console.log(`copied ${filePath}`);
  } catch {
    console.error(`copying ${filePath} failed`);
  }
})

folderExists = false;

try {
  await fs.access(path.join(reducedPath, ".obsidian"), fs.constants.F_OK);
  folderExists = true;
  console.log("obsidian folder already exists");
} catch {
  console.error("obsidian folder does not exist")
}

if (!folderExists) {
  try {
    await fs.mkdir(path.join(reducedPath, ".obsidian"));
    console.log("created new obsidian folder");
  } catch {
    console.error("failed creating obsidian folder")
  }
}

try {
  await fs.cp(obsidianPath, path.join(reducedPath, ".obsidian"), {recursive: true});
  console.log("copied obsidian folder contents");
} catch {
  console.error("failed copying obsidian folder contents")
}

