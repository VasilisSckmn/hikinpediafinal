const axios = require('axios');
const cheerio = require('cheerio');

// Base URL of your website (change this if your website is on a different port or domain)
const baseURL = 'http://localhost:3000';

// Function to extract all links from a given URL
async function getLinksFromPage(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const links = [];

    // Extract all links in the page
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      if (href) links.push(href);
    });

    return links;
  } catch (error) {
    console.error(`Error fetching page ${url}: ${error.message}`);
    return [];
  }
}

// Function to check if a link is external
function isExternal(link) {
  return link.startsWith('http://') || link.startsWith('https://');
}

// Function to check external links for broken links
async function checkExternalLinks() {
  const visited = new Set(); // To avoid checking the same link twice

  try {
    // Start with the base URL (home page)
    const pagesToCheck = [baseURL];
    const checkedLinks = [];

    // Loop through all the pages to gather external links
    while (pagesToCheck.length > 0) {
      const page = pagesToCheck.pop();
      const links = await getLinksFromPage(page);

      for (const link of links) {
        if (!visited.has(link)) {
          visited.add(link);

          // If the link is external, check its validity
          if (isExternal(link)) {
            console.log(`🔍 Checking: ${link}`);
            try {
              const response = await axios.get(link);
              console.log(`✅ OK: ${link} - Status Code: ${response.status}`);
            } catch (error) {
              console.error(`❌ Broken Link: ${link} - Reason: ${error.response ? error.response.status : error.message}`);
            }
          } else {
            // For internal links, add to the pages to check
            const absoluteLink = new URL(link, baseURL).href;
            if (!visited.has(absoluteLink)) {
              pagesToCheck.push(absoluteLink);
            }
          }
        }
      }
    }
    console.log('✅ Scan Complete!');
  } catch (error) {
    console.error(`Error checking external links: ${error.message}`);
  }
}

checkExternalLinks();
