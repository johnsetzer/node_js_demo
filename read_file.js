var fs = require('fs');
var tagify = require('./tagify');

fs.readFile('./data.txt', 'utf8', function(err, data) {
  if (err) { console.log(err); return; }

  console.log(tagify.tagify('div', data));
});
