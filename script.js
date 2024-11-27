// Menampilkan popup Shark Lovers
function myfunction() {
  // Menampilkan popup
  var popup = document.getElementById('popup');
  var sharkImage = document.getElementById('sharkImage');
  var popupText = document.getElementById('popupText');

  // Mengatur teks dan gambar yang akan ditampilkan
  popupText.textContent = "Helloo Shark Lovers!";  // Teks untuk popup
  sharkImage.src = '/Latihan/logohiu.jpeg';  // Path gambar lokal
  sharkImage.alt = 'Shark Image';

  // Menampilkan popup
  popup.style.display = 'flex';
}

// Menutup popup
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Toggle dropdown (dropdown menu)
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  // Jika klik di luar tombol dropdown, tutup menu dropdown
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Update jam setiap detik
function updateClock() {
  var now = new Date();
  var timeString = now.toLocaleTimeString(); // Format waktu
  document.getElementById('time').textContent = timeString;
}

// Jalankan updateClock setiap detik
setInterval(updateClock, 1000);
updateClock(); // Panggilan awal

// Fungsi untuk membuat kalender
function generateCalendar() {
  const calendarBody = document.getElementById("calendar-body");
  const monthYear = document.getElementById("calendar-month-year");
  const now = new Date();

  // Nama bulan
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Set bulan dan tahun
  const month = now.getMonth();
  const year = now.getFullYear();
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Hapus isi tabel sebelumnya
  calendarBody.innerHTML = "";

  // Hari pertama bulan
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.textContent = ""; // Kosong sebelum tanggal 1
      } else if (date > daysInMonth) {
        cell.textContent = ""; // Kosong setelah akhir bulan
      } else {
        cell.textContent = date;
        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

// Panggil fungsi untuk menghasilkan kalender
generateCalendar();

// Menangani submit form Join (untuk form Join)
document.getElementById('joinBtn').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'flex';
});

document.getElementById('closeJoinPopup').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'none';
});

document.getElementById('joinForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  alert('Name: ' + name + '\nAddress: ' + address);
  document.getElementById('joinPopup').style.display = 'none';
});

// Open the popup when the "Submit" button in the question form is clicked
document.getElementById("questionForm").onsubmit = function(e) {
    e.preventDefault();  // Prevent form submission (no page refresh)

    // Show the popup asking for email
    document.getElementById("popup").style.display = "flex";
}

// Close the popup when the close button is clicked
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Handle form submission for email
document.getElementById("emailForm").onsubmit = function(e) {
    e.preventDefault();  // Prevent form submission (no page refresh)
    var email = document.getElementById("email").value;

    // You can handle AJAX submission to send the email or process the data as needed
    alert("Thank you! We will send your answer to: " + email);

    // Close the popup after submission
    closePopup();
}
