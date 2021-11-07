const generatePage = require('./src/page-template.js');

const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

// this is called assignment destructuring
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('portfolio complete! Check out index.html to see the output!');
})