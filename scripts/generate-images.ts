import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets');

const images = [
  { name: 'logo', file: 'logo.jpg' },
  { name: 'wechatQr', file: 'wechat_qr.png' },
  { name: 'groupQr', file: '互助群16.png' },
];

let output = `export const images = {\n`;

images.forEach(({ name, file }) => {
  const filePath = path.join(imagesDir, file);
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    const base64 = buffer.toString('base64');
    const ext = file.split('.').pop();
    const dataUrl = `data:image/${ext};base64,${base64}`;
    output += `  ${name}: '${dataUrl}',\n`;
    console.log(`Generated ${name}: ${(buffer.length / 1024).toFixed(2)} KB -> base64`);
  } else {
    console.error(`File not found: ${filePath}`);
  }
});

output += `};\n`;

fs.writeFileSync(path.join(outputDir, 'images.ts'), output);
console.log('Generated src/assets/images.ts');
console.log('Total size:', images.reduce((acc, { file }) => {
  const filePath = path.join(imagesDir, file);
  return acc + (fs.existsSync(filePath) ? fs.readFileSync(filePath).length : 0);
}, 0) / 1024, 'KB');
