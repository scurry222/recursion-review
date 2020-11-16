// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //create an array to hold matching nodes
  const nodes = [];
  //define the recursive function
  const checkClassList = function(node) {
    //make an if statement to check nodes for matching classnames
    if (node.classList && node.classList.contains(className)) {
      nodes.push(node);
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      checkClassList(node.childNodes[i]);
    }
  }
  checkClassList(document.body);
  return nodes;
};

