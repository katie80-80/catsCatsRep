(function() {
  var images = document.querySelectorAll(".image-holder"),
 heading = document.querySelector(".heading"),
 subHead = document.querySelector(".main-copy h2"),
 text = document.querySelector(".main-copy p"),
 appliedClass;

 // function basic(){
 //   heading.classList.add("spring");
 //   subHead.classList.add("spring");
 //
 //   subHead.firstChild.nodeValue = dynamicContent["spring"].headline;
 //   text.firstChild.nodeValue = dynamicContent["spring"].text;
 // }


 function changeElements() {
   heading.classList.remove(appliedClass);
   subHead.classList.remove(appliedClass);

   appliedClass = this.id;

   heading.classList.add(this.id);
   subHead.classList.add(this.id);

   subHead.firstChild.nodeValue = dynamicContent[this.id].headline;
   text.firstChild.nodeValue = dynamicContent[this.id].text;
 }

[].forEach.call(images, function(image){
  image.addEventListener('click', changeElements, true);
});

// window.addEventListener("load", basic, false);

subHead.firstChild.nodeValue = dynamicContent["spring"].headline;
text.firstChild.nodeValue = dynamicContent["spring"].text;
heading.classList.add("spring");
})();
