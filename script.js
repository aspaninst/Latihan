alert("Script.js berhasil dimuat!");
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
