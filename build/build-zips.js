const path = require('path');
const chalk = require('chalk');
const rm = require('rimraf');
const fs = require('fs');
const archiver = require('archiver');

const zipPath = './dist/download';

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}
class BuildZips {
  constructor() {
    const files = fs.readdirSync('./dist/components');
    mkdirsSync(zipPath);
    files.forEach(filesName => {
      const output = fs.createWriteStream(`${zipPath}/${filesName}.zip`);
      const archive = archiver('zip', {
        zlib: {
          level: 9,
        },
      });
      output.on('close', () => {
        let size = archive.pointer() / 1024;
        size = size > 1024 ? (size / 1024).toFixed(2) + 'MB' : size.toFixed(2) + 'KB';
        console.log(chalk.green(`成功压缩 ${filesName}.zip ----- [ ${size} ]`));
      });
      archive.pipe(output);
      archive.directory('dist/components/' + filesName, filesName);
      archive.finalize();
      archive.on('error', (err) => {
        console.log(err);
      });
      output.on('close', () => {
      });
    });
  }
}

rm(zipPath, err => {
  if (err) throw err;
  console.log(chalk.yellow('成功清除旧文件!\n'));
  new BuildZips();
});
