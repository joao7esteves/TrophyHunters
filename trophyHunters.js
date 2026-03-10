// Get the search input element
const searchInput = document.getElementById('mySearch');
// Get all the card elements
const cards = document.querySelectorAll('.card');
// Get the no match message element
const noMatchMessage = document.getElementById('noMatchMessage');
// Add an input event listener to the search input
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  let matchFound = false;
  // Loop through each card and check if the game name matches the search term
  cards.forEach(function (card) {
    const gameName = card.querySelector('.gameName').textContent.toLowerCase();
    if (gameName.includes(searchTerm)) {
      card.style.display = 'block'; // Show the card if it matches the search term
      matchFound = true;
    } else {
      card.style.display = 'none'; // Hide the card if it doesn't match the search term
    }
  });
  // Show or hide the no match message
  if (matchFound) {
    noMatchFoundMessage.style.display = 'none';
  } else {
   noMatchFoundMessage.style.display = 'block';
  }
});

function showNotification(notificationId) {
  const notification = document.getElementById(notificationId);
  notification.style.display = "inline-block";
  
  // Remove notification after a certain duration
  setTimeout(function () {
    notification.style.display = "none";
  }, 1200);
}
  
function showNotification(notificationId) {
  const notification = document.getElementById(notificationId);
  notification.style.display = "inline-block";
  
  // Remove notification after a certain duration
  setTimeout(function () {
    notification.style.display = "none";
  }, 1200);
}
  
const copyLink = document.getElementById("copyDiscordLink1");
copyLink.addEventListener("click", function (event) {
  event.preventDefault();
  const linkToCopy = copyLink.getAttribute("href");
  // Code to copy the link to clipboard
  navigator.clipboard.writeText(linkToCopy).then(function () {
    showNotification("notf1");
  }).catch(function () {
    showNotification("notf1");
  });
});
  
const copyLink2 = document.getElementById("copyDiscordLink2");
copyLink2.addEventListener("click", function (event) {
  event.preventDefault();
  const linkToCopy = copyLink2.getAttribute("href");
  // Code to copy the link to clipboard
  navigator.clipboard.writeText(linkToCopy).then(function () {
    showNotification("notf1");
  }).catch(function () {
    showNotification("notf1");
  });
});

