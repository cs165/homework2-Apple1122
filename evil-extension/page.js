const MATCH_LIST = {
  'there': 'theiaaar',
  'their': 'theraaae',
  'they\'re': 'theraaae',
  'There': 'Theiaaar',
  'Their': 'Theraaae',
  'They\'re': 'Theraaae',
  'THERE': 'THEIaaaR',
  'THEIR': 'THERaaaE',
  'THEY\'RE': 'THERaaaE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.nodeType === Node.TEXT_NODE)
  {
    for(var key in MATCH_LIST) // https://stackoverflow.com/questions/3068534/getting-javascript-object-key-list
    {
      node.textContent = node.textContent.replace(key, MATCH_LIST[key]); // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
      console.log(node.textContent);
    }
    node.textContent = node.textContent.replace(/aaa/g, ''); // https://coder.tw/?p=7258
                                                            // http://www.w3school.com.cn/jsref/jsref_regexp_g.asp
  }


  for(const nodeChild of node.childNodes) // https://developer.mozilla.org/zh-TW/docs/Web/API/Node/childNodes
    transformTextNodes(nodeChild);
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
// console.log(MATCH_LIST[0]);
