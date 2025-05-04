document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger button and the menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-navigation ul');
  
    // Check if elements are being selected correctly
    console.log(menuToggle, menu);
  
    // Add click event listener to toggle the menu visibility
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        console.log('Hamburger button clicked');
        // Toggle the 'show' class on the <ul> to display/hide the menu
        menu.classList.toggle('show');
      });
    } else {
      console.log('Menu toggle not found');
    }
  });
  
  

document.addEventListener("DOMContentLoaded", function () {
    const visitCountParagraph = document.getElementById("visitCount");
    if (visitCountParagraph) {
        visitCountParagraph.remove();
    }
});


window.onload = function() {
    // Select all <p> elements with the class "coordinates"
    const coordsElements = document.querySelectorAll('.coordinates');

    // Loop through each of the elements
    coordsElements.forEach(function(element) {
        // Get the text content of the element
        const text = element.textContent.trim();

        // Use a regular expression to extract the latitude and longitude
        const regex = /(\d+\.\d+),\s*(\d+\.\d+)/;
        const match = text.match(regex);

        if (match) {
            // Extract the latitude and longitude
            const latitude = match[1];
            const longitude = match[2];

            // Create the Google Maps URL using the coordinates
            const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Create a new <a> element for the link
            const link = document.createElement('a');
            link.href = googleMapsUrl;
            link.target = '_blank'; // Open link in a new tab
            link.textContent = text; // Set the text content to be the same as the paragraph

            // Replace the content of the <p> element with the <a> link
            element.innerHTML = ''; // Clear the current content
            element.appendChild(link); // Append the new link
        }
    });
};

window.addEventListener("DOMContentLoaded", () => {
    const metas = document.getElementsByTagName("meta");
    for (let meta of metas) {
      if (
        meta.getAttribute("name") &&
        meta.getAttribute("name").toLowerCase() !== "viewport"
      ) {
        const content = meta.getAttribute("content");
        if (
          content &&
          content.includes("width=device-width") &&
          content.includes("initial-scale")
        ) {
          meta.setAttribute("name", "viewport");
          break; // done
        }
      }
    }
  });
  
