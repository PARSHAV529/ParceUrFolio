const JSZip = require("jszip");
const fs = require("fs");
const path = require("path");

// Function to recursively add files to ZIP
const addFolderToZip = (zip, folderPath, zipFolderPath = "") => {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const fullPath = path.join(folderPath, file);
    const zipPath = path.join(zipFolderPath, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      // Add folder recursively
      const folderZip = zip.folder(file);
      addFolderToZip(folderZip, fullPath, zipPath);
    } else {
      // Add file
      zip.file(zipPath, fs.readFileSync(fullPath));
    }
  });
};

// Main function to create ZIP from existing folder
const createTemplateZip = async (templateFolderPath, outputFileName) => {
  const zip = new JSZip();

  addFolderToZip(zip, templateFolderPath);

  zip
    .generateAsync({ type: "nodebuffer" })
    .then((content) => {
      const outputPath = path.join(__dirname, outputFileName);
      fs.writeFileSync(outputPath, content);
      console.log(`ZIP file created: ${outputPath}`);
    })
    .catch((err) => console.error("Error creating ZIP:", err));
};

// Example Usage
const templateFolderPath = path.join(__dirname, "../frontend/src/templates/T1");
const outputFileName = "TemplateT1.zip";

createTemplateZip(templateFolderPath, outputFileName);
