const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.nodeType === Node.TEXT_NODE)
  {
    for(var key in MATCH_LIST) // https://stackoverflow.com/questions/3068534/getting-javascript-object-key-list
    {
      node.textContent = node.textContent.replace(key, MATCH_LIST[key]);
      console.log(node.textContent);
    }
    
  }

  for(const nodeChild of node.childNodes) // https://developer.mozilla.org/zh-TW/docs/Web/API/Node/childNodes
    transformTextNodes(nodeChild);
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
// console.log(MATCH_LIST[0]);
