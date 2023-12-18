//Counter
function animateCount(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function() {
      current += increment;
      element.textContent = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}


function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция для запуска анимации счетчика при доскролле до элемента
function startCounterOnScroll(element, start, end, duration) {
  let counterStarted = false;
  window.addEventListener('scroll', function() {
      if (!counterStarted && isElementInViewport(element)) {
          animateCount(element, start, end, duration);
          counterStarted = true;
      }
  });
}

// Анимация счетчиков при загрузке страницы
window.onload = function() {
  let employeesCount = document.getElementById('employeesCount');
  let experienceYears = document.getElementById('experienceYears');
  let childrenCount = document.getElementById('childrenCount');

  startCounterOnScroll(employeesCount, 0, 30 /* конечное значение */, 4000 /* время анимации в миллисекундах */);
  startCounterOnScroll(experienceYears, 0, 10 /* конечное значение */, 3000);
  startCounterOnScroll(childrenCount, 0, 100 /* конечное значение */, 6000);
};


//Slider
$(document).ready(function(){
  $('.carousel__slider').slick({
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.carousel__slider').on('click', '.slick-slide', function(){
    var imgSrc = $(this).find('img').attr('src');
    $('#popupCard img').attr('src', imgSrc);
    $('#popupCard').fadeIn();
});
});
function closePopup() {
  $('#popupCard').fadeOut();
}
$(document).ready(function(){
  $('.catalog__slider-card').slick({
    slidesToShow:3,
    // dots: true ,
    // autoplay:true,
    // autoplaySpeed: 2000,
    rows:2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




