// Function to show the popup
function showPopup(event) {
    // Prevent the default context menu
    event.preventDefault();
      // Create a popup element
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.textContent = "Many websites have a .com domain name, but what domain do most US colleges use instead?";

      // Set the position of the popup
      popup.style.top = (event.clientY + 10) + "px";
      popup.style.left = (event.clientX + 10) + "px";

      // Append the popup to the body
      document.body.appendChild(popup);
      // Close the popup when clicking outside of it
      document.addEventListener("click", function closePopup() {
        document.body.removeChild(popup);
        document.removeEventListener("click", closePopup);
      });
    
  }

  // Attach the showPopup function to the contextmenu event of the paragraph
  document.getElementById("paragraph").addEventListener("contextmenu", showPopup);