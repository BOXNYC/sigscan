'use server'
import fs from 'fs/promises';
export async function getFiles(path: string) {
  const files = await fs.readdir(`${process.cwd()}/public${path}`);
  return files;
}