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
  

// Function to add Google Translate & Language Switcher Button
function addGoogleTranslate() {
    // Create the translation container
    let translateDiv = document.createElement("div");
    translateDiv.id = "google_translate_element";
    translateDiv.style.position = "absolute";
    translateDiv.style.top = "0px"; 
    translateDiv.style.right = "0px"; 
    translateDiv.style.opacity = "0"; // Hide but keep functional

    // Create a language switcher button
    let switcher = document.createElement("button");
    switcher.id = "languageSwitcher"; // Apply CSS styles
    switcher.innerHTML = "🌍 Switch Language";

    // Set styles directly in JS
    switcher.style.position = "fixed";
    switcher.style.top = "10px";
    switcher.style.right = "10px";
    switcher.style.background = "#007bff";
    switcher.style.color = "white";
    switcher.style.border = "none";
    switcher.style.padding = "8px 12px";
    switcher.style.cursor = "pointer";
    switcher.style.fontSize = "14px";
    switcher.style.borderRadius = "5px";
    switcher.style.zIndex = "1000";

    // Responsive styles for mobile
    function adjustForMobile() {
        if (window.innerWidth < 768) {
            switcher.style.padding = "6px 10px";
            switcher.style.fontSize = "12px";
            switcher.style.top = "5px";
            switcher.style.right = "5px";
        } else {
            switcher.style.padding = "8px 12px";
            switcher.style.fontSize = "14px";
            switcher.style.top = "10px";
            switcher.style.right = "10px";
        }
    }

    // Adjust on load & resize
    adjustForMobile();
    window.addEventListener("resize", adjustForMobile);

    // Click event to toggle language between Greek and English
    switcher.onclick = function () {
        let select = document.querySelector(".goog-te-combo");
        if (select) {
            // Check the current language in the select dropdown
            let currentLang = select.value;
            // If the current language is Greek ('el'), change it to English ('en'), and vice versa
            if (currentLang === 'el') {
                select.value = 'en'; // Change to English
            } else {
                select.value = 'el'; // Change to Greek
            }
            select.dispatchEvent(new Event('change')); // Trigger the change event to apply the language switch
        }
    };

    // Append elements to body
    document.body.appendChild(switcher);
    document.body.appendChild(translateDiv);

    // Load Google Translate script dynamically
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
}

// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ 
        pageLanguage: "el", 
        includedLanguages: "el,en", 
        autoDisplay: false
    }, "google_translate_element");
}

// Run the function on page load
window.addEventListener("load", addGoogleTranslate);


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
  
