document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
  });

  
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          navList.classList.remove('show');
      });
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

//visor pdf en la misma pagina
function openPDF() {
  document.getElementById('pdfViewer').src = './img/Folleto.pdf'; 
  document.getElementById('pdfModal').style.display = 'flex';
}

function closePDF() {
  document.getElementById('pdfModal').style.display = 'none';
}

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
  
  alert('¡Gracias por suscribirte a Osvaldo Angel Tarot!');
  location.reload();
}

function subscribe() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('custom-alert').style.display = 'block';
}

function closeAlert() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('custom-alert').style.display = 'none';
  location.reload();
}

