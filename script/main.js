(function() {
 //  var images = document.querySelectorAll(".image-holder"),
 // heading = document.querySelector(".heading"),
 // subHead = document.querySelector(".main-copy h2"),
 // text = document.querySelector(".main-copy p"),
 // appliedClass;

 var $theImages = $('.image-holder'),
 $theHeading = $(".heading"),
 $theSubhead = $(".main-copy h2"),
 $theSeasonText = $(".main-copy p"),
 appliedClass;



 function changeElements() {
   $theHeading.removeClass(appliedClass);
   $theSubhead.removeClass(appliedClass);

   appliedClass = this.id;

   $theHeading.addClass(this.id);
   $theSubhead.addClass(this.id);

   $theSubhead.text(dynamicContent[event.currentTarget.id].headline);
   $theSeasonText.text(dynamicContent[event.currentTarget.id].text);
 }


$theImages.click(function() {
  console.log("way to click playah");
  changeElements();
});



$theSubhead.text (dynamicContent["spring"].headline);
$theSeasonText.text (dynamicContent["spring"].text);
$theHeading.addClass("spring");
})();
