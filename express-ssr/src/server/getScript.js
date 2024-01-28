import fs from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function() {
  const result = fs.readdirSync(path.resolve(__dirname, '../../public/js'))
  .filter(file => file.endsWith('.js'))
  .map(file => `<script src="./js/${file}"></script>`);

  return result.join("\n");
}