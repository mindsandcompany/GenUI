import fs from 'node:fs';
import path from 'node:path';

const fromDir = 'src/components/ui';
const toDir = 'src/stories/ui';
fs.mkdirSync(toDir, { recursive: true });

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (/\.stories\.(t|j)sx?$/.test(name)) {
      const dest = path.join(toDir, name);
      fs.renameSync(p, dest);
      console.log(`moved: ${p} -> ${dest}`);
    }
  }
}
walk(fromDir);
