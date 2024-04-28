$(document).ready(function(){
$('.slider').slick({
     arrows: false,
     dots: true,
     appendDots:'.slider-dots',
     dotsClass:'dots'
     
});

});
function sendEmail(){
     Email.send({
          Host : "smtp.gmail.com",
          Username : "",
          Password : "",
          To : 'sahnitushar079@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Enquiry",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}