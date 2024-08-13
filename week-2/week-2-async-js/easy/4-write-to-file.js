const fs = require("fs");
const data="Modified from another file"

fs.writeFile('a.txt', data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully');
});