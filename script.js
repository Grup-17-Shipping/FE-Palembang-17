const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
        menuItem.style.color = '#04448C';
        const arrow = menuItem.querySelector('.arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(180deg)';
        }
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'flex';
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        menuItem.style.color = '#000';
        const arrow = menuItem.querySelector('.arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
        }
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});

// Ambil elemen slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = currentIndex * -100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Atur interval untuk otomatis menggeser slide setiap beberapa detik
const interval = setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik

// Hentikan interval saat pengguna menghover slider
slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// Lanjutkan interval saat pengguna tidak menghover slider
slider.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 7000);
});


// Ambil elemen-elemen fitur
const traceTrackFeature = document.getElementById('trace-track');
const shippingRatesFeature = document.getElementById('shipping-rates');
const findDropPointFeature = document.getElementById('find-drop-point');

// Ambil elemen-elemen modal
const traceTrackModal = document.getElementById('trace-track-modal');
const shippingRatesModal = document.getElementById('shipping-rates-modal');
const findDropPointModal = document.getElementById('find-drop-point-modal');

// Ambil elemen-elemen tombol close modal
const traceTrackClose = document.getElementById('trace-track-close');
const shippingRatesClose = document.getElementById('shipping-rates-close');
const findDropPointClose = document.getElementById('find-drop-point-close');

function showModalAboveFeature(modal, feature) {
    const featureRect = feature.getBoundingClientRect();
    const modalHeight = modal.offsetHeight; // Tinggi modal
    modal.style.top = (featureRect.bottom - modalHeight) + 'px'; // Atur posisi top modal
    modal.style.left = featureRect.left + 'px';
    modal.style.display = 'block';
}


// Tampilkan modal ketika fitur Trace & Track diklik
traceTrackFeature.addEventListener('click', () => {
    closeAllModals(); // Tutup modal lain jika ada yang terbuka
    showModalAboveFeature(traceTrackModal, traceTrackFeature);
});

// Tampilkan modal ketika fitur Shipping Rates diklik
shippingRatesFeature.addEventListener('click', () => {
    closeAllModals(); // Tutup modal lain jika ada yang terbuka
    showModalAboveFeature(shippingRatesModal, shippingRatesFeature);
});

// Tampilkan modal ketika fitur Find Drop Point diklik
findDropPointFeature.addEventListener('click', () => {
    closeAllModals(); // Tutup modal lain jika ada yang terbuka
    showModalAboveFeature(findDropPointModal, findDropPointFeature);
});

// Sembunyikan modal ketika tombol close di-klik
traceTrackClose.addEventListener('click', () => {
    traceTrackModal.style.display = 'none';
});

shippingRatesClose.addEventListener('click', () => {
    shippingRatesModal.style.display = 'none';
});

findDropPointClose.addEventListener('click', () => {
    findDropPointModal.style.display = 'none';
});

// Fungsi untuk menutup semua modals
function closeAllModals() {
    traceTrackModal.style.display = 'none';
    shippingRatesModal.style.display = 'none';
    findDropPointModal.style.display = 'none';
}

// Sembunyikan modal ketika tombol close di-klik
traceTrackClose.addEventListener('click', () => {
    traceTrackModal.style.display = 'none';
});

shippingRatesClose.addEventListener('click', () => {
    shippingRatesModal.style.display = 'none';
});

findDropPointClose.addEventListener('click', () => {
    findDropPointModal.style.display = 'none';
});


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showFits() {
    const fits = document.querySelectorAll('.fit');

    fits.forEach((fit, index) => {
        if (isInViewport(fit)) {
            setTimeout(() => {
                fit.classList.add('animated');
            }, index * 100); // Menambahkan animasi dengan penundaan berurutan
        }
    });
}

window.addEventListener('scroll', showFits);
showFits();

//services
// Ambil elemen menu "Services"
const servicesMenu = document.getElementById("services");

// Ambil elemen konten halaman "Services"
const servicesContent = document.getElementById("services-content");


// JavaScript
const contactButton = document.getElementById("contact-button");
const contactModal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-modal1");

// Tampilkan modal saat tombol "Contact Us" diklik
contactButton.addEventListener("click", () => {
    contactModal.style.display = "block";
});

// Tutup modal saat ikon close diklik
closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
});

// Tutup modal saat area luar modal diklik
window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
});


// Fungsi untuk mengaktifkan animasi saat discroll
function playAnimation() {
    const videoContainer = document.querySelector('.video-container');
    const leftElement = document.querySelector('.animated-element');
    const rightElement = document.querySelector('.animated-element.right');
  
    // Tambahkan kelas CSS untuk memulai animasi
    leftElement.classList.add('animate-slide-left');
    rightElement.classList.add('animate-slide-right');
  
    // Matikan autoplay video saat animasi dimulai
    videoContainer.querySelector('video').removeAttribute('autoplay');
  }
  
  // Tambahkan listener untuk memulai animasi saat halaman discroll
  window.addEventListener('scroll', playAnimation);
  playAnimation()
  

// Fungsi untuk menampilkan modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Fungsi untuk menyembunyikan modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Event listener untuk menampilkan modal Login saat tombol "Login/Register" diklik
document.getElementById("login-register-button").addEventListener("click", function () {
    showModal("login-modal");
});

// Event listener untuk menampilkan modal Register saat tombol "Register Now" di modal Login diklik
document.getElementById("show-register").addEventListener("click", function () {
    hideModal("login-modal");
    showModal("register-modal");
});

// Event listener untuk menutup modal Login
document.getElementById("login-close").addEventListener("click", function () {
    hideModal("login-modal");
});

// Event listener untuk menutup modal Register
document.getElementById("register-close").addEventListener("click", function () {
    hideModal("register-modal");
});


