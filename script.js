document.addEventListener("DOMContentLoaded", () => {
 const form = document.querySelector(".contact-form");
 if (form) {
   form.addEventListener("submit", (e) => {
     e.preventDefault();
     alert("Takk for meldingen! Jeg tar kontakt snart 😊");
     form.reset();
   });
 }
});


<script>
const form = document.querySelector('.contact-form');
const notification = document.getElementById('notification');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // страница не перезагружается

    // Показываем уведомление
    notification.style.display = 'block';

    // Скрываем через 3 секунды
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Очищаем форму
    form.reset();
});
</script>