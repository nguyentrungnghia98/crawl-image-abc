const fs = require("fs");

const getBaseFileName = (name) => {
  const names = name.split(".")[0].split(" (");
  if (names.length <= 1) return names[0];
  return names.slice(0, names.length - 1).join(" (");
};

process.stdin.setEncoding("utf-8");

console.log("Please enter a folder path:");

// Process the entered string

// Perform other operations with the string

// End the input stream

// Read files in the folder
// fs.readdir(folderPath, (err, filesInput) => {
// if (err) {
//   console.error('Error reading folder:', err);
//   return;
// }

const saveFolderPath = `c:/Users/Admin/Downloads/New folder/${Date.now()}`;

fs.mkdirSync(saveFolderPath);

const folders =
  "token theme social os language image icon currency connector client";
folders.split(" ").forEach((folder) => {
  fs.readdir(
    `c:/Users/Admin/Downloads/New folder/${folder}`,
    (err, filesInput) => {
      fs.mkdirSync(`${saveFolderPath}/${folder}`);
      for (let index = filesInput.length - 1; index >= 0; index--) {
        const file = filesInput[index];
        if (file.split(".").length === 1) continue;
        const [fileName] = file.split(".");

        fs.copyFileSync(
          `c:/Users/Admin/Downloads/New folder/${folder}/${file}`,
          `${saveFolderPath}/${folder}/${fileName}.svg`
        );
      }
    }
  );
});

// const folderPath = 'C:/Users/Admin/Downloads/www.stakewise.io/webpack---_N_E/packages/sw-components/src/ImagesProvider/images/icon'
// const res = []
// fs.readdir(
//   folderPath,
//   (err, filesInput) => {
//     for (let index = filesInput.length - 1; index >= 0; index--) {
//       const file = filesInput[index];

//       try {
//         const svgData = fs.readFileSync(`${folderPath}/${file}`, 'utf8');
//         console.log('SVG Data:', svgData);
//         res.push(`https://www.stakewise.io${svgData.split(`"src":"`)[1].split(`","`)[0]}`)
//       } catch (err) {
//         console.error('Error reading SVG file:', err);
//       }
//     }
//     console.log('res', JSON.stringify(res));
//   }
// );