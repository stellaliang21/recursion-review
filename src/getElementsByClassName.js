// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var arr = [];
  var searchNodes = function (nodes) {
    if (nodes.classList && nodes.classList.contains(className)) {
      arr.push(nodes);
    }
    if (nodes.childNodes) {
      for (var i = 0; i < nodes.childNodes.length; i++) {
        searchNodes(nodes.childNodes[i]);
      }
    }
  };
  searchNodes(document.body);
  return arr;
};


//document.body, element.childNodes, and element.classList


  //   for (var i = 0; i < nodes.length; i++) {
  //     var node = nodes[i];
  //     if (node.classList && node.classList.contains(className)) {
  //       arr.push(node);
  //     }
  //   }
  //   if (nodes.childNodes) {
  //     searchNodes(nodes.childNodes);
  //   }
  // };
  // searchNodes(document.body);
  // return arr;