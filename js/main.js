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
});
