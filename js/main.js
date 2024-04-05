document.addEventListener("DOMContentLoaded", function () {
  // Находим форму по ее идентификатору
  var form = document.getElementById("applicationForm");

  // Обрабатываем событие отправки формы
  form.addEventListener("submit", function (event) {
    // Отменяем стандартное действие по умолчанию (отправку формы)
    event.preventDefault();

    // Получаем данные из полей формы
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var rooms = document.getElementById("rooms").value;

    // Далее можно выполнить валидацию данных, отправить их на сервер или выполнить другие действия

    // Например, можно вывести данные в консоль для проверки
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("City:", city);
    console.log("Number of Rooms:", rooms);

    // Здесь можно добавить код для отправки данных на сервер или другие действия
  });

  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider .slide");
  const dots = document.querySelectorAll(".dots .dot");

  const slideWidth = 170; // Ширина одного слайда
  const slideMargin = 10; // Внешний отступ между слайдами
  const slidesPerRow = 4; // Количество слайдов в строке
  const totalSlides = slides.length; // Общее количество слайдов
  let currentIndex = slidesPerRow;

  // Добавляем виртуальные слайды в начало и конец
  function addVirtualSlides() {
    for (let i = 0; i < slidesPerRow; i++) {
      // Добавляем по 4 виртуальных слайда в начало
      const cloneFirst = slides[i].cloneNode(true);
      const cloneLast = slides[totalSlides - 1 - i].cloneNode(true);
      slider.appendChild(cloneFirst);
      slider.insertBefore(cloneLast, slider.firstChild);
    }
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${
      (slideWidth + slideMargin) * currentIndex
    }px)`;
  }

  addVirtualSlides();

  function scrollToSlide(index) {
    const offset = (slideWidth + slideMargin) * index;
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${offset}px)`;
    currentIndex = index;
    updateActiveDot();
  }

  function updateActiveDot() {
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === currentIndex - (slidesPerRow - 1)
      );
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToSlide(index + slidesPerRow);
    });
  });

  slider.addEventListener("transitionend", () => {
    if (currentIndex <= slidesPerRow - 1) {
      currentIndex = totalSlides + currentIndex;
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${
        (slideWidth + slideMargin) * currentIndex
      }px)`;
    } else if (currentIndex >= totalSlides + slidesPerRow) {
      currentIndex = currentIndex - totalSlides;
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${
        (slideWidth + slideMargin) * currentIndex
      }px)`;
    }
  });

  function nextSlide() {
    scrollToSlide(currentIndex + 1);
  }

  setInterval(nextSlide, 3000);
});
