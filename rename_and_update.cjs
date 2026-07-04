const fs = require('fs');
const path = require('path');

const webDir = path.join(__dirname, 'public', 'web');
const dataFile = path.join(__dirname, 'src', 'data', 'catalogData.json');

const catalogData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const newCatalogData = {};

for (const [key, items] of Object.entries(catalogData)) {
  const folderName = key.toLowerCase().replace(/ /g, '-');
  
  const oldPath = path.join(webDir, key);
  const newPath = path.join(webDir, folderName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
  
  newCatalogData[key] = items.map(item => {
    let newImage = item.image;
    if (newImage) {
        newImage = newImage.replace(`/web/${key}/`, `/web/${folderName}/`);
    }
    return { ...item, image: newImage };
  });
}

fs.writeFileSync(dataFile, JSON.stringify(newCatalogData, null, 2));
console.log('Done!');
