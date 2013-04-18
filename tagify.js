exports.tagify = function(tag, content) {
  return '<' + tag + '>' + content + '</' + tag + '>'
}