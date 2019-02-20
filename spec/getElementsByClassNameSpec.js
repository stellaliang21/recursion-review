var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName'); // adding "targetClassName" as a class on the body element
    htmlStrings.forEach(function(htmlString) { // for each html string above
      var $rootElement = $(htmlString); // turn the string into a jQuery object (DOM node)
      $('body').append($rootElement); // add the new DOM node to the body of the html (i.e., dom)

      var result = getElementsByClassName('targetClassName'); // calling your function, for 'targetClassName'
      var expectedNodeList = document.getElementsByClassName('targetClassName'); // Getting the expected result from calling the function you're emulating
      var expectedArray = Array.prototype.slice.apply(expectedNodeList); // converts expectedNodeList to an array
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here? 
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
