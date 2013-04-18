var fs = require('fs');
var tagify = require('./tagify');

var content = fs.readFileSync('./data.txt', 'utf8');
console.log(tagify.tagify('div', content));