 function myfunction() {

  var popup = document.getElementById('popup');
  var sharkImage = document.getElementById('sharkImage');
  var popupText = document.getElementById('popupText');

  popupText.textContent = "Helloo Shark Lovers!";  
  sharkImage.src = '/Latihan/logohiu.jpeg';  
  sharkImage.alt = 'Shark Image';

    popup.style.display = 'flex';
  }

  function closePopup() {
   
   var popup = document.getElementById('popup');
   popup.style.display = 'none';
  }

document.getElementById('threatBtn').addEventListener('click', function() {
  const infoDiv = document.getElementById('threatInfo');
  if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerText = timeString;
}

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
  
  seeMoreButton.addEventListener('click', function() {
    // Tampilkan kartu tambahan
    moreCards.style.display = 'flex';

    seeMoreButton.style.display = 'none';
  });
});

document.getElementById('joinBtn').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'flex';
});

document.getElementById('closeJoinPopup').addEventListener('click', function() {
  var joinPopup = document.getElementById('joinPopup');
  joinPopup.style.display = 'none';
});

document.getElementById('closeJoinFormBtn').addEventListener('click', function() {
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

const SharkMitigation = (() => {
 
  const initializeThreatInfo = () => {
    const threatButton = document.getElementById('threatBtn');
    const threatInfo = document.getElementById('threatInfo');

    if (threatButton && threatInfo) {
      threatButton.addEventListener('click', () => {
        // Toggle visibility of threatInfo
        if (threatInfo.style.display === 'none' || threatInfo.style.display === '') {
          threatInfo.style.display = 'block';
        } else {
          threatInfo.style.display = 'none';
        }
      });
    }
  };

  const addAnimation = () => {
    const threatButton = document.getElementById('threatBtn');
    if (threatButton) {
      threatButton.addEventListener('mouseover', () => {
        threatButton.style.backgroundColor = '#d1e7e7';
      });
      threatButton.addEventListener('mouseout', () => {
        threatButton.style.backgroundColor = ''; 
      });
    }
  };

  const init = () => {
    initializeThreatInfo();
    addAnimation();
  };

  // Public API
  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  SharkMitigation.init();
});

document.addEventListener('DOMContentLoaded', function() {
  const threatButton = document.getElementById('threatBtn');
  const threatInfo = document.getElementById('threatInfo');

  if (threatButton && threatInfo) {
    threatButton.addEventListener('click', function() {
     
      if (threatInfo.style.display === 'none' || threatInfo.style.display === '') {
        threatInfo.style.display = 'block'; 
      } else {
        threatInfo.style.display = 'none';
      }
    });
  }
});
