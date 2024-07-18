document.addEventListener('DOMContentLoaded', () => {
  // Particle.js configuration
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
    },
    retina_detect: true
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  const animateSkillBars = () => {
      skillBars.forEach(bar => {
          const percent = bar.getAttribute('data-percent');
          bar.style.width = '0%';
          setTimeout(() => {
              bar.style.width = percent + '%';
          }, 100);
      });
  };

  // Intersection Observer for skill bars animation
  const skillsSection = document.querySelector('#skills');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateSkillBars();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);

  // Project cards animation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, 100 * index);
  });

  // Form validation and submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (validateForm()) {
          const formData = new FormData(contactForm);
          const formObject = Object.fromEntries(formData.entries());

          try {
              const response = await fetch('/contact', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formObject),
              });

              if (response.ok) {
                  showNotification('Thank you for your message! I will get back to you soon.', 'success');
                  contactForm.reset();
              } else {
                  showNotification('There was an error sending your message. Please try again later.', 'error');
              }
          } catch (error) {
              console.error('Error:', error);
              showNotification('There was an error sending your message. Please try again later.', 'error');
          }
      }
  });

  function validateForm() {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const subject = document.getElementById('subject');
      let isValid = true;

      if (name.value.trim() === '') {
          showError(name, 'Name is required');
          isValid = false;
      } else {
          removeError(name);
      }

      if (email.value.trim() === '') {
          showError(email, 'Email is required');
          isValid = false;
      } else if (!isValidEmail(email.value)) {
          showError(email, 'Please enter a valid email');
          isValid = false;
      } else {
          removeError(email);
      }

      if (subject.value.trim() === '') {
        showError(subject, 'subject is required');
        isValid = false;
    } else {
        removeError(subject);
    }

      if (message.value.trim() === '') {
          showError(message, 'Message is required');
          isValid = false;
      } else {
          removeError(message);
      }

      return isValid;
  }

  function showError(input, message) {
      const formControl = input.parentElement;
      const errorElement = formControl.querySelector('.error-message');
      if (errorElement) {
          errorElement.innerText = message;
      } else {
          const error = document.createElement('div');
          error.className = 'error-message';
          error.innerText = message;
          formControl.appendChild(error);
      }
      input.classList.add('error');
  }

  function removeError(input) {
      const formControl = input.parentElement;
      const errorElement = formControl.querySelector('.error-message');
      if (errorElement) {
          formControl.removeChild(errorElement);
      }
      input.classList.remove('error');
  }

  function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.innerText = message;
      document.body.appendChild(notification);
      setTimeout(() => {
          notification.style.opacity = '0';
          setTimeout(() => {
              document.body.removeChild(notification);
          }, 500);
      }, 3000);
  }

  // Footer animation
  const footer = document.querySelector('footer');
  const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              footerObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  footer.style.opacity = '0';
  footer.style.transform = 'translateY(20px)';
  footer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  footerObserver.observe(footer);
});