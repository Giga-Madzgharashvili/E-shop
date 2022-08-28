$(".sl").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
  
});

// scrol section
$(".js-anchor-link").click(function (e) {
  e.preventDefault();
  var target = $($(this).attr("href"));
  if (target.length) {
    var scrollTo = target.offset().top;
    $("body, html").animate({ scrollTop: scrollTo + "px" }, 1500);
  }
});
// burger menu
let toggleButton = document.getElementById('burger');
let navigation = document.getElementById('nav');
toggleButton.addEventListener('click', function() {
  navigation.classList.toggle('nav-active');
  toggleButton.classList.toggle('list-active');
});

//form action
document.getElementById('username').addEventListener('focus', function() {
  username.style.border = '2px solid #4D4D4D';
});
document.getElementById('usermail').addEventListener('focus', function() {
  usermail.style.border = '2px solid #4D4D4D';
});
document.getElementById('message').addEventListener('focus', function() {
  message.style.border = '2px solid #4D4D4D';
});

document.getElementById('btn').addEventListener('click', function(){
  alert("შეტყობინება წარმატებით გაიგზავნა");
})