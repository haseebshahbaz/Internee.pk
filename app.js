document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  

  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('visible');
      
      // Close all open contents
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('visible');
        item.classList.add('hidden');
      });
      
      // Toggle the clicked content
      if (!isOpen) {
        content.classList.remove('hidden');
        content.classList.add('visible');
      }
      
      // Toggle the icon
      document.querySelectorAll('.accordion-icon').forEach(icon => {
        icon.innerHTML = icon.innerHTML === '&#43;' ? '&#8722;' : '&#43;';
      });
    });
  });
  