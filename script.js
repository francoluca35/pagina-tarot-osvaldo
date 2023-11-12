document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});

//desplazamiento navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hide");
  } else {
    document.getElementById("navbar").classList.add("hide");
  }

  prevScrollPos = currentScrollPos;
};

//Grid Imagenes
function openImage(imageUrl) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');

  modal.style.display = 'block';
  modalImg.src = imageUrl;
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
}

//foters subscriber
function subscribe() {
  // Puedes personalizar esta función para realizar acciones específicas al suscribirse
  alert('¡Gracias por suscribirte!');
  location.reload();
}