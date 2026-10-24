function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleFaq(button) {
  var answer = button.nextElementSibling;
  var isOpen = answer.classList.contains('open');
  var allAnswers = document.querySelectorAll('.faq-answer');
  var allQuestions = document.querySelectorAll('.faq-question');
  for (var i = 0; i < allAnswers.length; i++) {
    allAnswers[i].classList.remove('open');
    allQuestions[i].classList.remove('active');
  }
  if (!isOpen) {
    answer.classList.add('open');
    button.classList.add('active');
  }
}

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  var current = '';
  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = sections[i].getAttribute('id');
    }
  }
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].style.color = '';
    if (navLinks[j].getAttribute('href') === '#' + current) {
      navLinks[j].style.color = '#6c63ff';
    }
  }
});