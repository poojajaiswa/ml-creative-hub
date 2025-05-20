
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Toggle icons
    if (mobileMenu.classList.contains('active')) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
  
  // Close mobile menu when clicking on a nav link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  
  // Close mobile menu when scrolling
  window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
  
  // Add data side elements dynamically
  createDataSideElements();
  
  // Create matrix rain effect in background
  createMatrixRainEffect();
  
  // Add animation to project data flow
  animateProjectDataFlow();
});

// Create data side elements
function createDataSideElements() {
  const rightSide = document.querySelector('.data-side-right');
  const leftSide = document.querySelector('.data-side-left');
  
  if (rightSide && leftSide) {
    // Create 8 data bars on right side
    for (let i = 0; i < 8; i++) {
      const dataBar = document.createElement('div');
      dataBar.className = 'data-bar';
      dataBar.style.height = '1.5rem';
      dataBar.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
      dataBar.style.borderRadius = '0.5rem 0 0 0.5rem';
      dataBar.style.marginBottom = '1.5rem';
      dataBar.style.width = '0';
      dataBar.style.animation = `dataWidth ${2 + Math.random() * 2}s ease-in-out infinite alternate`;
      dataBar.style.animationDelay = `${i * 0.2}s`;
      rightSide.appendChild(dataBar);
    }
    
    // Create 7 data bars on left side
    for (let i = 0; i < 7; i++) {
      const dataBar = document.createElement('div');
      dataBar.className = 'data-bar';
      dataBar.style.height = '1.5rem';
      dataBar.style.backgroundColor = 'rgba(56, 189, 248, 0.3)';
      dataBar.style.borderRadius = '0 0.5rem 0.5rem 0';
      dataBar.style.marginBottom = '1.5rem';
      dataBar.style.width = '0';
      dataBar.style.marginLeft = 'auto';
      dataBar.style.animation = `dataWidth ${2 + Math.random() * 3}s ease-in-out infinite alternate`;
      dataBar.style.animationDelay = `${i * 0.3}s`;
      leftSide.appendChild(dataBar);
    }
  }
}

// Create matrix rain effect in background
function createMatrixRainEffect() {
  const background = document.querySelector('.background');
  
  if (!background) return;
  
  // Create binary code overlay
  const binaryOverlay = document.createElement('div');
  binaryOverlay.className = 'binary-overlay';
  binaryOverlay.style.position = 'absolute';
  binaryOverlay.style.inset = '0';
  binaryOverlay.style.opacity = '0.03';
  binaryOverlay.style.pointerEvents = 'none';
  binaryOverlay.style.overflow = 'hidden';
  
  const innerContainer = document.createElement('div');
  innerContainer.style.position = 'absolute';
  innerContainer.style.inset = '-25%';
  innerContainer.style.fontSize = '10px';
  innerContainer.style.color = 'var(--blue-secondary)';
  innerContainer.style.fontFamily = 'monospace';
  innerContainer.style.lineHeight = '1';
  
  // Create binary rows
  for (let i = 0; i < 200; i++) {
    const row = document.createElement('div');
    row.style.width = '100%';
    row.style.whiteSpace = 'nowrap';
    row.style.opacity = '0.3';
    row.style.marginTop = `${Math.random() * 3}rem`;
    
    let rowContent = '';
    for (let j = 0; j < 150; j++) {
      rowContent += Math.round(Math.random());
    }
    
    row.textContent = rowContent;
    innerContainer.appendChild(row);
  }
  
  binaryOverlay.appendChild(innerContainer);
  background.appendChild(binaryOverlay);
  
  // Create animated nodes
  for (let i = 0; i < 15; i++) {
    const node = document.createElement('div');
    node.className = 'data-node';
    node.style.position = 'absolute';
    node.style.borderRadius = '50%';
    node.style.backgroundColor = 'var(--blue-primary)';
    node.style.opacity = '0.3';
    
    const size = Math.random() * 5 + 5;
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.left = `${Math.random() * 100}%`;
    node.style.top = `${Math.random() * 100}%`;
    
    // Animate nodes
    const duration = Math.random() * 20 + 15;
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    
    node.animate([
      { transform: 'translate(0, 0)', opacity: 0.3 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0.8 },
      { transform: 'translate(0, 0)', opacity: 0.3 }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      direction: 'alternate'
    });
    
    background.appendChild(node);
  }
  
  // Create neural network connections
  const network = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  network.setAttribute('width', '100%');
  network.setAttribute('height', '100%');
  network.style.position = 'absolute';
  network.style.inset = '0';
  network.style.opacity = '0.1';
  
  const netGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  netGroup.setAttribute('stroke', 'var(--blue-secondary)');
  netGroup.setAttribute('stroke-width', '0.5');
  
  // Create connections
  for (let i = 0; i < 20; i++) {
    const x1 = Math.random() * 100;
    const y1 = Math.random() * 100;
    
    for (let j = 0; j < 3; j++) {
      const x2 = Math.random() * 100;
      const y2 = Math.random() * 100;
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', `${x1}%`);
      line.setAttribute('y1', `${y1}%`);
      line.setAttribute('x2', `${x2}%`);
      line.setAttribute('y2', `${y2}%`);
      
      netGroup.appendChild(line);
    }
  }
  
  network.appendChild(netGroup);
  background.appendChild(network);
  
  // Create glowing particles
  const glowParticle1 = document.createElement('div');
  glowParticle1.style.position = 'absolute';
  glowParticle1.style.bottom = '0';
  glowParticle1.style.right = '0';
  glowParticle1.style.width = '40rem';
  glowParticle1.style.height = '40rem';
  glowParticle1.style.borderRadius = '50%';
  glowParticle1.style.background = 'var(--blue-secondary)';
  glowParticle1.style.filter = 'blur(150px)';
  glowParticle1.style.opacity = '0.1';
  glowParticle1.style.pointerEvents = 'none';
  
  glowParticle1.animate([
    { transform: 'scale(1) translate(0, 0)' },
    { transform: 'scale(1.2) translate(-50px, -30px)' },
    { transform: 'scale(1) translate(0, 0)' }
  ], {
    duration: 20000,
    iterations: Infinity,
    direction: 'alternate'
  });
  
  const glowParticle2 = document.createElement('div');
  glowParticle2.style.position = 'absolute';
  glowParticle2.style.top = '0';
  glowParticle2.style.left = '0';
  glowParticle2.style.width = '30rem';
  glowParticle2.style.height = '30rem';
  glowParticle2.style.borderRadius = '50%';
  glowParticle2.style.background = 'var(--blue-primary)';
  glowParticle2.style.filter = 'blur(150px)';
  glowParticle2.style.opacity = '0.1';
  glowParticle2.style.pointerEvents = 'none';
  
  glowParticle2.animate([
    { transform: 'scale(1) translate(0, 0)' },
    { transform: 'scale(1.1) translate(30px, 40px)' },
    { transform: 'scale(1) translate(0, 0)' }
  ], {
    duration: 15000,
    iterations: Infinity,
    direction: 'alternate',
    delay: 5000
  });
  
  background.appendChild(glowParticle1);
  background.appendChild(glowParticle2);
}

// Animate project data flow
function animateProjectDataFlow() {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach((project, index) => {
    const dataFlow = project.querySelector('.project-data-flow');
    if (!dataFlow) return;
    
    const dataLine = document.createElement('div');
    dataLine.style.position = 'absolute';
    dataLine.style.height = '100%';
    dataLine.style.background = 'linear-gradient(to right, var(--blue-primary), var(--blue-secondary))';
    dataLine.style.width = '30%';
    dataLine.style.animation = `dataFlow 3s ease-in-out infinite`;
    dataLine.style.animationDelay = `${index * 0.3}s`;
    
    dataFlow.appendChild(dataLine);
  });
}
