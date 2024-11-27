
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

  function closePopup() {
  // Menyembunyikan popup
   var popup = document.getElementById('popup');
   popup.style.display = 'none';
  }

// Mengatur Tombol dan Menampilkan Info
document.getElementById('threatBtn').addEventListener('click', function() {
  const infoDiv = document.getElementById('threatInfo');
  if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
});

// Fungsi untuk update jam
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  // Menambahkan angka nol jika jam, menit, atau detik kurang dari 10
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerText = timeString;
}

// Update jam setiap detik
setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const calendarBody = document.getElementById('calendar-body');
  const monthYear = document.getElementById('calendar-month-year');

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function generateCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j < firstDay) {
          cell.textContent = "";
        } else if (date > daysInMonth) {
          break;
        } else {
          cell.textContent = date;
          if (date === currentDate && month === currentMonth && year === currentYear) {
            cell.classList.add('today');
          }
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  }

  generateCalendar(currentMonth, currentYear);
});

// Menambahkan fungsi untuk menampilkan lebih banyak kartu
document.getElementById('see-more-button').addEventListener('click', function() {
    var moreCards = document.getElementById('more-cards');
    if (moreCards.style.display === "none" || moreCards.style.display === "") {
        moreCards.style.display = "flex";
    } else {
        moreCards.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen tombol dan lebih banyak kartu
  const seeMoreButton = document.getElementById('see-more-button');
  const moreCards = document.getElementById('more-cards');
  
  // Ketika tombol "See More" diklik
  seeMoreButton.addEventListener('click', function() {
    // Tampilkan kartu tambahan
    moreCards.style.display = 'flex';

    // Sembunyikan tombol "See More"
    seeMoreButton.style.display = 'none';
  });
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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

// Fungsi untuk membuka popup form Join
document.getElementById('joinBtn').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'flex';
});

// Fungsi untuk menutup popup form Join
document.getElementById('closeJoinPopup').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'none';
});

// Menutup popup ketika tombol Close ditekan
document.getElementById('closeJoinFormBtn').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'none';
});

// Menangani submit form (bisa diganti dengan fungsi lain seperti menyimpan data)
document.getElementById('joinForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  alert('Name: ' + name + '\nAddress: ' + address);
  document.getElementById('joinPopup').style.display = 'none';
});

// Namespace untuk tambahan fungsi
const SharkMitigation = (() => {
  // Fungsi untuk mengatur tampilan teks "Mitigasi Ancaman terhadap Hiu"
  const initializeThreatInfo = () => {
    const threatButton = document.getElementById('threatBtn');
    const threatInfo = document.getElementById('threatInfo');

    if (threatButton && threatInfo) {
      threatButton.addEventListener('click', () => {
        if (threatInfo.style.display === 'none' || threatInfo.style.display === '') {
          threatInfo.style.display = 'block';
        } else {
          threatInfo.style.display = 'none';
        }
      });
    }
  };

  // Fungsi untuk membuat animasi atau efek tambahan jika diperlukan
  const addAnimation = () => {
    const threatButton = document.getElementById('threatBtn');
    if (threatButton) {
      threatButton.addEventListener('mouseover', () => {
        threatButton.style.backgroundColor = '#d1e7e7';
      });
      threatButton.addEventListener('mouseout', () => {
        threatButton.style.backgroundColor = ''; // Kembali ke default
      });
    }
  };

  // Fungsi inisialisasi untuk namespace ini
  const init = () => {
    initializeThreatInfo();
    addAnimation();
  };

  // Public API
  return {
    init,
  };
})();

// Panggil inisialisasi setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  SharkMitigation.init();
});


