document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // Обработка формы
  const form = document.getElementById('feedbackForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Простая валидация
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Пожалуйста, введите корректный email');
      return;
    }
    
    // Здесь можно добавить отправку формы
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
    form.reset();
  });
  
  // Заглушка для кнопки скачивания
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Функция скачивания резюме будет реализована позже');
  });
  
  // Плавный скролл для кнопки "Связаться со мной"
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});