/* globals photographs, photographsDiv, addInstagramImageToThePage */

// `photographs` is an array of photos pulled from the Instagram API.
// Your mission is to iterate over the array and add each item to the page.


photographs.forEach(function (photograph) {
  //console.log(addInstagramImageToThePage(photograph));
addInstagramImageToThePage(photograph)
});

// There is a function defined for you called `addInstagramImageToThePage`,
// which will take care of adding the image to the page. You just need to worry
// about iterating over all of the images for this exercise.
var image = photographs.forEach(function (photograph){
  photograph = createImageElementFromPhotograph;

});
