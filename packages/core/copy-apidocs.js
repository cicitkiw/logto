// rsync -a -m --include '*/' --include '*.openapi.json' --exclude '*' src/routes/ build/routes/

import {glob} from "glob";
import fs from "fs-extra";
import path from "path";

const srcDir = "src/routes";
const destDir = "build/routes";

// 使用 glob 查找所有符合条件的文件
glob(`${srcDir}/**/*.openapi.json`, (err, files) => {
  if (err) {
    console.error("Error finding files:", err);
    return;
  }

  // 复制每个文件到目标目录
  files.forEach(file => {
    const destPath = path.join(destDir, path.relative(srcDir, file));
    fs.copy(file, destPath)
      .then(() => console.log(`Copied: ${file} to ${destPath}`))
      .catch(err => console.error("Error copying file:", err));
  });
});