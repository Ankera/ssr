import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function() {
  const result = fs.readdirSync(path.resolve(__dirname, '../../public/css'))
  .filter(file => file.endsWith('.css'))
  .map(file => `<link rel="stylesheet" href="./css/${file}"></link>`);

  return result.join("\n");
}