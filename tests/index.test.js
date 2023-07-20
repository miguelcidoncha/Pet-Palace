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