document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#sortableList'); // Select the ul element by ID
    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => {
        const textA = a.querySelector('a').textContent.trim(); // Get text content of <a> inside <li>
        const textB = b.querySelector('a').textContent.trim(); // Get text content of <a> inside <li>

        // Function to extract the base text (before any number in parentheses)
        const extractBaseText = (text) => text.replace(/\s\(\d+\)$/, '');

        // Function to extract the number inside parentheses (if any)
        const extractNumber = (text) => {
            const match = text.match(/\((\d+)\)$/);
            return match ? parseInt(match[1], 10) : -1; // If no number, return -1 to treat it as lowest
        };

        const baseTextA = extractBaseText(textA);
        const baseTextB = extractBaseText(textB);

        // First, compare alphabetically by base text
        const result = baseTextA.localeCompare(baseTextB, 'el', { sensitivity: 'base' });

        if (result !== 0) return result; // If base text is different, return that result

        // If base texts are the same, compare the numbers (if present)
        const numberA = extractNumber(textA);
        const numberB = extractNumber(textB);

        return numberA - numberB; // Compare numbers numerically
    });

    // Clear existing list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Append sorted items back to the list
    items.forEach(item => list.appendChild(item));
});

// Function to check if text contains Greek characters
function isGreek(text) {
    const greekPattern = /[\u0370-\u03FF\u1F00-\u1FFF]/;
    return greekPattern.test(text);
}

document.addEventListener("DOMContentLoaded", function() {
    // Set the homepage URL and relative path to the image
    const homepageURL = "index.html";
    const imageURL = "logo.png"; // Adjust this path based on your HTML file locations

    // Selecting the H1 element
    const targetElement = document.querySelector('h1');

    if (targetElement) {
        // Create anchor (link) element
        const link = document.createElement("a");
        link.href = homepageURL;

        // Create image element
        const image = document.createElement("img");
        image.src = imageURL;
        image.alt = "Homepage";
        image.width = 30; // Set your desired width (adjust as needed)
        image.height = 30; // Set your desired height (adjust as needed)

        // Apply CSS styles directly to the image
        image.style.display = "inline";          // Keep the image inline
        image.style.marginLeft = "5px";         // Add space between h1 text and image
        image.style.verticalAlign = "middle";    // Align image vertically with the text

        // Append the image link directly into the H1 element
        link.appendChild(image);
        targetElement.appendChild(link);
    } else {
        console.error("H1 element not found!");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the "return" class
    const returnLink = document.querySelector(".return a");

    // Check if the element exists
    if (returnLink) {
        returnLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.history.back(); // Go back one page
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const binUrl = "https://api.jsonbin.io/v3/b/673fcee1e41b4d34e4584f59";

    console.log("Script loaded and running...");

    fetch(binUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch JSONBin: " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Fetched data from JSONBin:", data);

            // Verify the data structure
            if (!data || !data.record || typeof data.record.count !== "number") {
                console.error("Invalid data structure:", data);
                return;
            }

            let count = data.record.count;
            console.log("Current count fetched:", count);

            // Increment the count
            count++;

            // Update the bin with the new count
            return fetch(binUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ record: { count: count } }),
            })
                .then((putResponse) => {
                    if (!putResponse.ok) {
                        throw new Error("Failed to update JSONBin: " + putResponse.statusText);
                    }
                    console.log("PUT response status:", putResponse.status);

                    // Update the webpage
                    const visitCountElement = document.getElementById("visitCount");
                    if (visitCountElement) {
                        visitCountElement.textContent =
                            count +
                            (count === 1
                                ? " επισκέπτης έχει ψάξει για αυτό το βουνό!"
                                : " επισκέπτες έχουν ψάξει για αυτό το βουνό!");
                        console.log("DOM updated successfully:", visitCountElement.textContent);
                    } else {
                        console.error("Could not find element with id 'visitCount'");
                    }
                });
        })
        .catch((error) => {
            console.error("Error during fetch or update:", error);
        });
});


// Select the <ul> inside the .mountains <div>
const mountainList = document.querySelector('.mountains ul');

// Get all <li> elements and convert them to an array
const itemsArray = Array.from(mountainList.children);

// Sort the array of <li> elements alphabetically based on their text content
itemsArray.sort((a, b) => {
    return a.textContent.trim().localeCompare(b.textContent.trim(), 'el'); // 'el' for Greek alphabet sorting
});

// Clear the existing list
mountainList.innerHTML = '';

// Append the sorted items back to the <ul>
itemsArray.forEach(item => mountainList.appendChild(item));


