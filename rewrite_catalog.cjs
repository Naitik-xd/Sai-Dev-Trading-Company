const fs = require('fs');
const path = require('path');

const webDir = path.join(__dirname, 'public', 'web');
const categories = fs.readdirSync(webDir);

const catalogData = {};

categories.forEach(category => {
  const categoryPath = path.join(webDir, category);
  const stat = fs.statSync(categoryPath);
  if (!stat.isDirectory()) return;

  const images = fs.readdirSync(categoryPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  // Sort images numerically if they have numbers, or just alphabetically
  images.sort();

  catalogData[category.trim()] = images.map((image, index) => ({
    id: index + 1,
    image: `/web/${category}/${image}`
  }));
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'catalogData.json'), JSON.stringify(catalogData, null, 2));
console.log('Done!');
