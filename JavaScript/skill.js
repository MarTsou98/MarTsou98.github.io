  const skillInfo = {
    html: {
      title: "HTML5",
      description: "Experienced in structuring web pages with semantic HTML5 elements."
    },
    css: {
      title: "CSS3",
      description: "Skilled in styling, responsive design, and animations using CSS3."
    },
    js: {
      title: "JavaScript",
      description: "Proficient in JavaScript programming, including ES6+ features."
    },
    react: {
      title: "React",
      description: "Experienced in building interactive UIs with React."
    },
    node: {
      title: "Node",
      description: "Knowledgeable in backend development using Node.js."
    },
    bootstrap: {
      title: "Bootstrap",
      description: "Use Bootstrap for responsive and mobile-first web design."
    },
    java: {
      title: "Java",
      description: "Basic to intermediate Java programming skills."
    },
    python: {
      title: "Python",
      description: "Experienced in Python scripting and automation."
    },
    vba: {
      title: "VBA",
      description: "Ability to automate tasks in Excel using VBA macros."
    }
  };

  const modal = document.getElementById('skillModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.skills-tags span').forEach(tag => {
    tag.addEventListener('click', () => {
      const skill = tag.getAttribute('data-skill');
      if(skillInfo[skill]) {
        modalTitle.textContent = skillInfo[skill].title;
        modalDescription.textContent = skillInfo[skill].description;
        modal.style.display = 'block';
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });