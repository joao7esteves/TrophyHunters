window.addEventListener('resize', function() {
  const referenceElement = document.querySelector('.headerImg');
  const targetElement = document.querySelector('.gradientOverlay');

  // Get the width of the reference element
  const referenceWidth = referenceElement.offsetWidth + 1;

  // Set the width of the target element to be equal to the reference element's width
  targetElement.style.width = referenceWidth + 'px';

  targetElement.offsetWidth = referenceElement.style.width
});

window.addEventListener('load', function() {
  const referenceElement = document.querySelector('.headerImg');
  const targetElement = document.querySelector('.gradientOverlay');

  // Get the width of the reference element
  const referenceWidth = referenceElement.offsetWidth + 1;

  // Set the width of the target element to be equal to the reference element's width
  targetElement.style.width = referenceWidth + 'px';

  targetElement.offsetWidth = referenceElement.style.width
});

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

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector(".searchBar");
  const trophyNames = document.querySelectorAll(".trophyName");
  const dropdown = document.querySelector(".dropdown");

  function populateDropdown() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredTrophyNames = Array.from(trophyNames).filter(trophyName =>
      trophyName.textContent.toLowerCase().includes(searchTerm)
    );

    dropdown.innerHTML = "";

    filteredTrophyNames.forEach(trophyName => {
      const dropdownItem = document.createElement("li");
      dropdownItem.textContent = trophyName.textContent;
      dropdownItem.classList.add("dropdownItem");
      dropdownItem.addEventListener("click", function () {
        const rect = trophyName.getBoundingClientRect();

        if ("scrollBehavior" in document.documentElement.style) {
          // Smooth scrolling supported
          window.scrollTo({
            top: rect.top - 300,
            behavior: "smooth"
          });
        } else {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, rect.top);
        }
      });
      dropdown.appendChild(dropdownItem);
    });
  }

  searchBar.addEventListener("focus", function () {
    // Show the dropdown when search bar receives focus
    dropdown.style.display = "block"; // or "grid" depending on your layout
    populateDropdown();
});

searchBar.addEventListener("input", populateDropdown);

  // Apply border-top styling when dropdown is focused
  dropdown.addEventListener("focus", function () {
    dropdown.style.borderTop = "2px solid blue";
  });

  // Clear border-top styling when dropdown loses focus
  dropdown.addEventListener("blur", function () {
    dropdown.style.borderTop = "none";
  });

  document.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the clicked element is not the search bar or the dropdown
    if (target !== searchBar && target !== dropdown) {
      dropdown.innerHTML = ""; // Clear the dropdown
      dropdown.style.display = "none"
    }
  });
});
