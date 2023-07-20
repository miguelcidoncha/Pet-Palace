const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

const setupDOM = () => {
  document.body.innerHTML = html;
};

test('Verificar que el encabezado y el logo existen y tienen el contenido esperado', () => {
    setupDOM();
  
    const header = document.querySelector('.header');
    const logo = document.querySelector('.imgLogo'); 
  
    expect(header).toBeTruthy();
    expect(logo.getAttribute('alt')).toBe(''); 
  });
test('Verificar el contenido de los elementos de la lista del menú', () => {
    setupDOM();
  
    const navbarItems = document.querySelectorAll('.navbar-item');
  
    expect(navbarItems.length).toBe(5);
  
    const expectedMenuItems = ['PRINCIPAL', 'SERVICIOS', 'BLOG', 'SOBRE NOSOTROS' , 'CONTACTO'];
  
    navbarItems.forEach((item, index) => {
      const menuItem = item.querySelector('.navbar-link');
      expect(menuItem.textContent).toBe(expectedMenuItems[index]);
    });
  });
  test('Verificar que el botón de navegación tiene los íconos de "menu-outline" y "close-outline"', () => {
    setupDOM();
  
    const menuBtn = document.querySelector('.nav-toggle-btn');
    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
  
    expect(menuBtn).toBeTruthy();
    expect(menuIcon.getAttribute('name')).toBe('menu-outline');
    expect(closeIcon.getAttribute('name')).toBe('close-outline');
  });
  
  test('Verificar que los enlaces del menú de navegación existen y tienen el contenido esperado', () => {
    setupDOM();
  
    const navLinks = document.querySelectorAll('.navbar-link');
  
    expect(navLinks.length).toBe(5);
  
    expect(navLinks[0].textContent).toBe('PRINCIPAL');
    expect(navLinks[1].textContent).toBe('SERVICIOS');
    expect(navLinks[2].textContent).toBe('BLOG');
    expect(navLinks[3].textContent).toBe('SOBRE NOSOTROS');
    expect(navLinks[4].textContent).toBe('CONTACTO');
  });
  
  test('Verificar que el botón "Log In" del menú de navegación existe y tiene el texto "Log In"', () => {
    setupDOM();
  
    const loginBtn = document.querySelector('.navbar-action-btn');
  
    expect(loginBtn).toBeTruthy();
    expect(loginBtn.textContent).toBe('Log In');
  });

  test('Verificar el contenido del elemento <main>', () => {
    setupDOM();
  
    const mainElement = document.querySelector('main');
    const articles = mainElement.querySelectorAll('article');
    const heroSection = mainElement.querySelector('.section.hero');
  
    expect(mainElement).toBeTruthy();
    expect(articles.length).toBeGreaterThan(0);
    expect(heroSection).toBeTruthy();
    expect(heroSection.getAttribute('aria-label')).toBe('home');

  });

  test('El elemento <main> existe', () => {
    setupDOM();
    const mainElement = document.querySelector('main');
    expect(mainElement).toBeTruthy();
  });
  
  test('Existen elementos <article> dentro de <main>', () => {
    setupDOM();
    const articles = document.querySelectorAll('main article');
    expect(articles.length).toBeGreaterThan(0);
  });
  
  test('Sección "hero" existe y tiene el contenido esperado', () => {
    setupDOM();
    const heroSection = document.querySelector('main section.hero');
    const heroTitle = heroSection.querySelector('h1.hero-title span.span');
    
    expect(heroSection).toBeTruthy();
    expect(heroSection.getAttribute('aria-label')).toBe('home');
    expect(heroSection.style.backgroundImage).toContain('Screenshot 2023-07-19 at 18.15 1 (1).png');
    expect(heroTitle.textContent).toBe('Profesionales apasionados por el bienestar emocional');
  });
  
  test('Sección "category" existe y contiene elementos con títulos y enlaces esperados', () => {
    setupDOM();
    const categorySection = document.querySelector('main section.category');
    const categoryItems = categorySection.querySelectorAll('li.scrollbar-item');
  
    expect(categorySection).toBeTruthy();
    expect(categorySection.getAttribute('aria-label')).toBe('category');
    expect(categoryItems.length).toBeGreaterThan(0);
  
    categoryItems.forEach(item => {
      const cardTitle = item.querySelector('h3.card-title a.card-title');
      const imgCover = item.querySelector('img.img-cover');
  
      expect(cardTitle).toBeTruthy();
      expect(imgCover).toBeTruthy();
      expect(imgCover.getAttribute('alt')).toBeTruthy();
      expect(imgCover.getAttribute('loading')).toBe('lazy');
    });
  });
  
  test('Sección "offer" existe y contiene elementos con títulos y enlaces esperados', () => {
    setupDOM();
    const offerSection = document.querySelector('main section.offer');
    const offerItems = offerSection.querySelectorAll('li');
  
    expect(offerSection).toBeTruthy();
    expect(offerSection.getAttribute('aria-label')).toBe('offer');
    expect(offerItems.length).toBeGreaterThan(0);
  
    offerItems.forEach(item => {
      const cardTitle = item.querySelector('h3.card-title span.span');
      const imgHolder = item.querySelector('div.offer-card');
  
      expect(cardTitle).toBeTruthy();
      expect(imgHolder).toBeTruthy();
      expect(imgHolder.style.backgroundImage).toContain('.jpg');
    });
  });
  
  test('Sección "service" existe y contiene elementos con títulos y textos esperados', () => {
    setupDOM();
    const serviceSection = document.querySelector('main section.service');
    const serviceItems = serviceSection.querySelectorAll('li');
  
    expect(serviceSection).toBeTruthy();
    expect(serviceSection.getAttribute('aria-label')).toBe('service');
    expect(serviceItems.length).toBeGreaterThan(0);
  
    serviceItems.forEach(item => {
      const cardTitle = item.querySelector('h3.card-title');
      const cardText = item.querySelector('p.card-text');
      const cardIcon = item.querySelector('img[alt="service icon"]');
  
      expect(cardTitle).toBeTruthy();
      expect(cardText).toBeTruthy();
      expect(cardIcon).toBeTruthy();
    });
  });
  
  test('Sección "brand" existe y contiene imágenes de patrocinadores', () => {
    setupDOM();
    const brandSection = document.querySelector('main section.brand');
    const brandItems = brandSection.querySelectorAll('li.scrollbar-item');
  
    expect(brandSection).toBeTruthy();
    expect(brandSection.getAttribute('aria-label')).toBe('brand');
    expect(brandItems.length).toBeGreaterThan(0);
  
    brandItems.forEach(item => {
      const brandImage = item.querySelector('img.img-cover');
  
      expect(brandImage).toBeTruthy();
      expect(brandImage.getAttribute('alt')).toBeTruthy();
      expect(brandImage.getAttribute('loading')).toBe('lazy');
    });
  });
  
  
  

  