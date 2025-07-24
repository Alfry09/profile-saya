// Popup saat halaman dimuat
window.addEventListener('load', function () {
    alert('Welcome cuyy 😄');
});



    // Default: bio terlihat
    bio.style.display = 'block';

    // Efek klik pada ikon Instagram
    const igIcon = document.querySelector('.instagram');
    if (igIcon) {
        igIcon.addEventListener('click', function () {
            igIcon.classList.add('clicked');
            setTimeout(() => igIcon.classList.remove('clicked'), 300);
        });
    }

    