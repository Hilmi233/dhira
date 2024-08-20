// Akses tombol
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Akses elemen pop-up
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Fungsi ketika menekan tombol "Iya, Maafin"
yesButton.addEventListener('click', function () {
  window.location.href = 'maafkan.html'; // Pindah ke halaman maafkan
});

// Fungsi ketika menekan tombol "Tidak Maafin"
noButton.addEventListener('click', function (event) {
  event.preventDefault(); // Cegah aksi tombol
  popup.style.display = 'block'; // Tampilkan pop-up
});

// Fungsi untuk menutup pop-up
closePopup.addEventListener('click', function () {
  popup.style.display = 'none'; // Sembunyikan pop-up
});

// Agar pop-up tertutup ketika klik di luar area konten pop-up
window.addEventListener('click', function (event) {
  if (event.target == popup) {
    popup.style.display = 'none'; // Sembunyikan pop-up
  }
});

// Mengatur audio untuk mulai dari detik 0.43
document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('music');

  // Pastikan metadata audio telah dimuat sebelum mengatur currentTime
  audio.addEventListener('loadedmetadata', function () {
    audio.currentTime = 0.43; // Mulai dari 0.43 detik
  });

  // Tambahkan event listener untuk memulai audio jika autoplay tidak bekerja
  audio.addEventListener('play', function () {
    if (audio.currentTime < 0.43) {
      audio.currentTime = 0.43;
    }
  });
});
