<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="HikinPedia Greece - Βουνά της Ελλάδας" content="width=device-width, initial-scale=1.0">
    <title>HikinPedia Greece</title>
    <style>
      body {
        background-image: url('IMG_20200823_095102_1.jpg');
        background-attachment: fixed;
        background-size: 100% 100%;
      }

      #datetime {
            position: fixed;
            top: 10px;
            left: 10px;
            font-family: Arial, sans-serif;
            font-size: 1em;
            color: #333;
            z-index: 1000;
            margin: 0;
            padding: 0;
        }

      

      </style>
      <link rel="stylesheet" href="MountainsWebsite.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

</head>
<body>
    <h1><a href="index.html">(COMING SOON...) HikinPedia Greece</a></h1>
    <h2>Μία μηχανή αναζήτησης για τις εμπειρίες πεζοπόρων στα ελληνικά βουνά!
    </h2>

    <div id="datetime"></div>

    <script>
      function updateDateTime() {
          const optionsTime = { 
              timeZone: 'Europe/Athens', 
              hour12: false, 
              hour: '2-digit', 
              minute: '2-digit' 
          };
          const optionsDate = { 
              timeZone: 'Europe/Athens', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
          };

          const now = new Date();
          const timeString = new Intl.DateTimeFormat('el-GR', optionsTime).format(now);
          const dateString = new Intl.DateTimeFormat('el-GR', optionsDate).format(now);

          const dateTimeString = `${timeString}, ${dateString}`;
          document.getElementById('datetime').textContent = dateTimeString;
      }

      updateDateTime(); // Initial call to display date immediately
      setInterval(updateDateTime, 60000); // Update every minute
  </script>

    <div class="belowH2" >
    <p>Διαβάστε εξορμήσεις, θαυμάστε τη φυσική ομορφιά και <br> βρείτε οδηγίες για τη δική σας πεζοπορία!</p>
    </div>
    
    <div class="searchbox">
      <div class="search">
        <p class="area"><strong>Πληκτρολογήστε το Βουνό, την Κορυφή ή τον Νομό</strong>
          <input type="text" id="searchInput" placeholder="" onkeydown="handleEnter(event)">
          <button onclick="search()">Αναζήτηση</button>
        </p>
      </div>
      <div id="searchResults">
        <ul id="resultsList"></ul> <!-- This will contain the search results -->
      </div>
      <div id="backToHomePage" style="display: none;">
        <a href="index.html">Νέα Αναζήτηση</a>
      </div>
    </div>
    
    
    

  <br>
  <br>
 
  <div class="navigation section no-padding bg-dark">
    <nav id="site-navigation" class="navigation-inner section-inner clear" role="navigation">
      <div class="main-navigation">
        <!-- Mobile toggle button -->
        <button class="menu-toggle" aria-label="Toggle navigation">&#9776;</button>
  
        <!-- Menu List -->
        <ul id="primary-menu" class="menu">
          <li id="menu-item-194" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-194">
            <a href="Γεωγραφικά_Διαμερίσματα.html">Γεωγραφικά Διαμερίσματα</a>
          </li>
          <li id="menu-item-3668" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3668">
            <a href="Υψόμετρα.html">Υψόμετρα</a>
          </li>
          <li id="menu-item-3668" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3668">
            <a href="Φαράγγια.html">Φαράγγια</a>
          </li>
          <li id="menu-item-196" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-196">
            <a href="Originstory.html">Origin Story</a>
          </li>
          <li id="menu-item-196" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-196">
            <a href="Επικοινωνία.html">Επικοινωνία</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>


<footer>

  <div class="footer-form-container">
    <form action="submit2.php" method="post">
      <p>Στείλε μας το link από μία νέα πεζοπορία για να προστεθεί στη μηχανή αναζήτησης της HikiPedia!</p>
      <label for="link"></label>
      <input type="url" id="link" name="link" placeholder="" required>
      <button type="submit">Αποστολή</button>
    </form>
  </div>
  
</footer>

<div id="cookieConsent">
  <span>Αυτός ο ιστότοπος χρησιμοποιεί cookie από την Google για να παρέχει τις υπηρεσίες του και να αναλύει την επισκεψιμότητα. Η διεύθυνσή σας IP και ο παράγοντας χρήστη γνωστοποιούνται στην Google, μαζί με μετρήσεις απόδοσης και ασφαλείας, ώστε να διασφαλιστεί η ποιότητα της υπηρεσίας, για τη δημιουργία στατιστικών στοιχείων σχετικά με τη χρήση και για τον εντοπισμό και την αντιμετώπιση καταχρήσεων.</span>
  <button id="acceptCookies">Συμφωνώ</button>
  <button id="declineCookies">Decline</button>
</div>
<script src="AlphabeticalOrder.js"></script>
<script src="MountainsWebsite.js"></script>
<script src="visitcount.js"></script>

</body>
</html>
