document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a, .subnavbtn');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'transform 0.3s';
      link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });

  var aText = new Array(
    "WELCOME TO MY PORTFOLIO", 
    "DEVELOPING THROUGH IMAGINATION",
    "DEPLOYING POWERFUL CREATION"
  );
  var iSpeed = 16;
  var iIndex = 0;
  var iArrLength = aText[0].length;
  var iScrollAt = 20; 
  
  var iTextPos = 0; 
  var sContents = '';
  var iRow; 

  const downloadButton = document.getElementById('downloadButton');
  const projectsButton = document.getElementById('goToProjectsButton');
  const socialIcons = document.getElementById('socialIcons');

  downloadButton.style.display = 'inline-block';
  projectsButton.style.display = 'inline-block';
  socialIcons.style.display = 'inline-block';

  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
  
  typewriter();
});

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
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
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  var words = [
    'HELLO THERE!', 
    'I AM MARK ANGELO FOLLEDO' ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  }
  else {
    if (offset == 0) {
      forwards = true;
      i++;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    }
    else {
      offset--;
    }
  }
  $('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setTimeout(() => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade")) {
              entry.target.classList.remove("fade-out");
              entry.target.classList.add("fade-in");
            }
            if (entry.target.classList.contains("pop-up")) {
              entry.target.classList.remove("pop-out");
              entry.target.classList.add("pop-up-animation");
            }
            if (entry.target.classList.contains("slide-in")) {
              entry.target.classList.remove("slide-out");
              entry.target.classList.add("slide-in-animation");
            }
            if (entry.target.classList.contains("zoom-in")) {
              entry.target.classList.remove("zoom-out");
              entry.target.classList.add("zoom-in-animation");
            }
            if (entry.target.classList.contains("bounce")) {
              entry.target.classList.remove("bounce-out");
              entry.target.classList.add("bounce-animation");
            }
            if (entry.target.classList.contains("rotate")) {
              entry.target.classList.remove("rotate-out");
              entry.target.classList.add("rotate-in");
            }
            if (entry.target.classList.contains("flip")) {
              entry.target.classList.remove("flip-out");
              entry.target.classList.add("flip-in");
            }
            if (entry.target.classList.contains("shake")) {
              entry.target.classList.remove("shake-out");
              entry.target.classList.add("shake-animation");
            }
            if (entry.target.classList.contains("wobble")) {
              entry.target.classList.remove("wobble-out");
              entry.target.classList.add("wobble-animation");
            }
            if (entry.target.classList.contains("flash")) {
              entry.target.classList.remove("flash-out");
              entry.target.classList.add("flash-animation");
            }
          } else {
            if (entry.target.classList.contains("fade")) {
              entry.target.classList.remove("fade-in");
              entry.target.classList.add("fade-out");
            }
            if (entry.target.classList.contains("pop-up")) {
              entry.target.classList.remove("pop-up-animation");
              entry.target.classList.add("pop-out");
            }
            if (entry.target.classList.contains("slide-in")) {
              entry.target.classList.remove("slide-in-animation");
              entry.target.classList.add("slide-out");
            }
            if (entry.target.classList.contains("zoom-in")) {
              entry.target.classList.remove("zoom-in-animation");
              entry.target.classList.add("zoom-out");
            }
            if (entry.target.classList.contains("bounce")) {
              entry.target.classList.remove("bounce-animation");
              entry.target.classList.add("bounce-out");
            }
            if (entry.target.classList.contains("rotate")) {
              entry.target.classList.remove("rotate-in");
              entry.target.classList.add("rotate-out");
            }
            if (entry.target.classList.contains("flip")) {
              entry.target.classList.remove("flip-in");
              entry.target.classList.add("flip-out");
            }
            if (entry.target.classList.contains("shake")) {
              entry.target.classList.remove("shake-animation");
              entry.target.classList.add("shake-out");
            }
            if (entry.target.classList.contains("wobble")) {
              entry.target.classList.remove("wobble-animation");
              entry.target.classList.add("wobble-out");
            }
            if (entry.target.classList.contains("flash")) {
              entry.target.classList.remove("flash-animation");
              entry.target.classList.add("flash-out");
            }
          }
        }, 50);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "40px", 
    }
  );

  animatedElements.forEach((element) => {
    if (element.classList.contains("fade")) {
      element.classList.add("fade-out");
    }
    if (element.classList.contains("pop-up")) {
      element.classList.add("pop-out");
    }
    if (element.classList.contains("slide-in")) {
      element.classList.add("slide-out");
    }
    if (element.classList.contains("zoom-in")) {
      element.classList.add("zoom-out");
    }
    if (element.classList.contains("bounce")) {
      element.classList.add("bounce-out");
    }
    if (element.classList.contains("rotate")) {
      element.classList.add("rotate-out");
    }
    if (element.classList.contains("flip")) {
      element.classList.add("flip-out");
    }
    if (element.classList.contains("shake")) {
      element.classList.add("shake-out");
    }
    if (element.classList.contains("wobble")) {
      element.classList.add("wobble-out");
    }
    if (element.classList.contains("flash")) {
      element.classList.add("flash-out");
    }
    
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const confirmationDialog = document.getElementById('confirmationDialog');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const submitButton = document.getElementById('submitButton');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    contactForm.classList.add('form-loading');
    submitButton.classList.add('btn-loading');
    loadingSpinner.style.display = 'block';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        
        loadingSpinner.style.display = 'none';
        submitButton.classList.remove('btn-loading');
        contactForm.classList.remove('form-loading');
        
        confirmationDialog.classList.add('active');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
      
      loadingSpinner.style.display = 'none';
      submitButton.classList.remove('btn-loading');
      contactForm.classList.remove('form-loading');
    }
  });
});

function closeDialog() {
  const confirmationDialog = document.getElementById('confirmationDialog');
  const contactForm = document.getElementById('contactForm');
  
  confirmationDialog.classList.remove('active');
  contactForm.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
