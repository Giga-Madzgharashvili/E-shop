$(".sl").slick({
  dots: false,
  infinite: true,
  // speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
  // dots: true
  // centerMode: true,
  //   variableWidth: true
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
  toggleButton.classList.toggle('list-active')
})