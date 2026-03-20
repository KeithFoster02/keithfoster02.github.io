const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Membuka & menutup navigasi
        nav.classList.toggle('nav-active');

        // Animasi teks menu yang muncul bergantian
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Mengubah ikon burger menjadi silang (X)
        burger.classList.toggle('toggle');
    });
}

// Menjalankan fungsi saat website dimuat
navSlide();