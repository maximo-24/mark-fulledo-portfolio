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
  var iSpeed = 25;
  var iIndex = 0;
  var iArrLength = aText[0].length;
  var iScrollAt = 20; 
  
  var iTextPos = 0; 
  var sContents = '';
  var iRow; 

  // Show buttons and social icons immediately
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

  document.getElementById('downloadButton').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'http://localhost:5173/asssets/resources/my_cv.pdf';
    link.download = 'mark_fulledo_cv.pdf'; 
    

    fetch(link.href)
      .then((response) => {
        if (response.ok) {
          link.click();
        } else {
          console.error('Failed to fetch the file:', response.status, response.statusText);
          alert('Failed to download the file. Please check the file path or try again later.');
        }
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
        alert('An error occurred while trying to download the file.');
      });
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
        // Check if the element is in view
        if (entry.isIntersecting) {
          // Add the correct animation class depending on the type
          if (entry.target.classList.contains("fade")) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
          }
          if (entry.target.classList.contains("pop-up")) {
            entry.target.classList.add("pop-up-animation");
            entry.target.classList.remove("pop-out");
          }
          if (entry.target.classList.contains("slide-in")) {
            entry.target.classList.add("slide-in-animation");
            entry.target.classList.remove("slide-out");
          }
          if (entry.target.classList.contains("zoom-in")) {
            entry.target.classList.add("zoom-in-animation");
            entry.target.classList.remove("zoom-out");
          }
          if (entry.target.classList.contains("bounce")) {
            entry.target.classList.add("bounce-animation");
            entry.target.classList.remove("bounce-out");
          }
          if (entry.target.classList.contains("rotate")) {
            entry.target.classList.add("rotate-in");
            entry.target.classList.remove("rotate-out");
          }
          if (entry.target.classList.contains("flip")) {
            entry.target.classList.add("flip-in");
            entry.target.classList.remove("flip-out");
          }
          if (entry.target.classList.contains("shake")) {
            entry.target.classList.add("shake-animation");
            entry.target.classList.remove("shake-out");
          }
          if (entry.target.classList.contains("wobble")) {
            entry.target.classList.add("wobble-animation");
            entry.target.classList.remove("wobble-out");
          }
          if (entry.target.classList.contains("flash")) {
            entry.target.classList.add("flash-animation");
            entry.target.classList.remove("flash-out");
          }
        } else {
          // Remove the animation classes when the element is out of view
          if (entry.target.classList.contains("fade")) {
            entry.target.classList.add("fade-out");
            entry.target.classList.remove("fade-in");
          }
          if (entry.target.classList.contains("pop-up")) {
            entry.target.classList.add("pop-out");
            entry.target.classList.remove("pop-up-animation");
          }
          if (entry.target.classList.contains("slide-in")) {
            entry.target.classList.add("slide-out");
            entry.target.classList.remove("slide-in-animation");
          }
          if (entry.target.classList.contains("zoom-in")) {
            entry.target.classList.add("zoom-out");
            entry.target.classList.remove("zoom-in-animation");
          }
          if (entry.target.classList.contains("bounce")) {
            entry.target.classList.add("bounce-out");
            entry.target.classList.remove("bounce-animation");
          }
          if (entry.target.classList.contains("rotate")) {
            entry.target.classList.add("rotate-out");
            entry.target.classList.remove("rotate-in");
          }
          if (entry.target.classList.contains("flip")) {
            entry.target.classList.add("flip-out");
            entry.target.classList.remove("flip-in");
          }
          if (entry.target.classList.contains("shake")) {
            entry.target.classList.add("shake-out");
            entry.target.classList.remove("shake-animation");
          }
          if (entry.target.classList.contains("wobble")) {
            entry.target.classList.add("wobble-out");
            entry.target.classList.remove("wobble-animation");
          }
          if (entry.target.classList.contains("flash")) {
            entry.target.classList.add("flash-out");
            entry.target.classList.remove("flash-animation");
          }
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Add all animated elements to the observer
  animatedElements.forEach((element) => {
    element.classList.add("out-of-view"); // Ensure animations start in the "out of view" state
    observer.observe(element);
  });
});
