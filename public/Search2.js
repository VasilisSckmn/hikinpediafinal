document.addEventListener('DOMContentLoaded', () => {
    // Function to trigger search on Enter key press
    async function handleEnter(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default actions, such as form submission
            await search2(); // Calls the search2 function
        }
    }

    // Add event listener for the Enter key after DOM is loaded
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', handleEnter);
    }
});

// Main search function
async function search2() {
    const searchTerm = convertToGreekLatin(removeDiacritics(document.getElementById('searchInput').value.trim().toLowerCase()));
    const searchResults = document.getElementById('searchResults');
    const backToHomePage = document.getElementById('backToHomePage');
    
    searchResults.innerHTML = ''; // Clear previous results

    console.log('Search Term:', searchTerm);  // Debugging

    if (searchTerm) {
        const table = document.createElement('table');
        table.classList.add('searchResultsTable'); // Add a class for styling purposes
        table.style.margin = 'auto'; // Center the table horizontally

        data.forEach(rowData => {
            const normalizedSecondColumnData = convertToGreekLatin(removeDiacritics(rowData[1].toLowerCase()));
            const normalizedThirdColumnData = convertToGreekLatin(removeDiacritics(rowData[2].toLowerCase()));
            const normalizedFourthColumnData = convertToGreekLatin(removeDiacritics(rowData[3].toString().toLowerCase())); // Convert to string and normalize

            console.log('Normalized Data:', normalizedSecondColumnData, normalizedThirdColumnData, normalizedFourthColumnData);  // Debugging

            if (normalizedSecondColumnData.includes(searchTerm) || 
                normalizedThirdColumnData.includes(searchTerm) || 
                normalizedFourthColumnData.includes(searchTerm)) {
                
                const tr = document.createElement('tr');
                tr.classList.add('searchResultRow'); // Add a class for styling purposes

                // Adjust loop to start from index 1 to include 2nd, 3rd, and 4th cells
                for (let index = 1; index <= 3; index++) {
                    const td = document.createElement('td');
                    td.classList.add('searchResultCell'); // Add a class for styling purposes

                    // Add link only to the first cell (index 1)
                    if (index === 1) {
                        const link = document.createElement('a');
                        link.textContent = rowData[index];
                        
                        
                        // Adjust href based on cellData content
                       
                        if (rowData[1] === "Όλυμπος - Λάρισα, Πιερία") {
                            link.href = "Ολυμπος.html";
                        } else if (rowData[1] === "Σμόλικας - Ιωάννινα") {
                            link.href = "Σμολικας.html";
                        } else if (rowData[1] === "Γράμμος - Ιωάννινα, Καστοριά") {
                            link.href = "Γραμμος.html";
                        } else if (rowData[1] === "Ψηλορείτης (Ίδη) - Ηράκλειο, Ρέθυμνο") {
                            link.href = "Ψηλορειτης.html";
                        } else if (rowData[1] === "Λευκά Όρη (Μαδάρες) - Χανιά") {
                            link.href = "Λευκα Ορη.html";
                        } else if (rowData[1] === "Κακαρδίτσα - Ιωάννινα, Τρίκαλα, Άρτα") {
                            link.href = "Κακαρδιτσα.html";
                        } else if (rowData[1] === "Ταΰγετος - Λακωνία, Μεσσηνία") {
                            link.href = "Ταυγετος.html";
                        } else if (rowData[1] === "Ζήρεια (Κυλλήνη) - Κορινθία") {
                            link.href = "Ζηρεια.html";
                        } else if (rowData[1] === "Χελμός (Αροάνια) - Αχαΐα") {
                            link.href = "Χελμος.html";
                        } else if (rowData[1] === "Βασιλίτσα - Γρεβενά, Ιωάννινα") {
                            link.href = "Βασιλιτσα.html";
                        } else if (rowData[1] === "Περιστέρι (Λάκμος) - Ιωάννινα, Τρίκαλα") {
                            link.href = "Λακμος.html";
                        } else if (rowData[1] === "Φαλακρό (Μποζ Νταγ) - Δράμα") {
                            link.href = "Φαλακρο.html";
                        } else if (rowData[1] === "Δοκίμι (Δοκίμι Χαλικίου) - Ιωάννινα, Τρίκαλα") {
                            link.href = "Δοκιμι.html";
                        } else if (rowData[1] === "Τίταρος (Μικρό Φλάμπουρο) - Κοζάνη, Λάρισα") {
                            link.href = "Τιταρος.html";
                        } else if (rowData[1] === "Βουνά Κάρδαμου - Ροδόπη") {
                            link.href = "ΒουναΚαρδαμου.html";
                        } else if (rowData[1] === "Βουνά Κύμης - Ροδόπη") {
                            link.href = "ΒουναΚυμης.html";
                        } else if (rowData[1] === "Ιερό (Μπουκατέ Νταγ) - Έβρος, Ροδόπη") {
                            link.href = "Ιερο.html";
                        } else if (rowData[1] === "Ορφέας - Έβρος, Ροδόπη") {
                            link.href = "Ορφεας.html";
                        } else if (rowData[1] === "Βουνά Καλότυχου - Ξάνθη") {
                            link.href = "ΒουναΚαλοτυχου.html";
                        } else if (rowData[1] === "Βουνά Οργάνης - Ροδόπη") {
                            link.href = "ΒουναΟργανης.html";
                        } else if (rowData[1] === "Βουνά Μύτικα - Ροδόπη") {
                            link.href = "ΒουναΜυτικα.html";
                        } else if (rowData[1] === "Σάπκα - Ροδόπη, Έβρος") {
                            link.href = "Σαπκα.html";
                        } else if (rowData[1] === "Χαράκωμα (Σίλο) - Έβρος, Ροδόπη") {
                            link.href = "Χαρακωμα.html";
                        } else if (rowData[1] === "Αχλάτ Τσαλ (Αχλαδόβουνο) - Ξάνθη") {
                            link.href = "ΑχλαΤσαλ.html";
                        } else if (rowData[1] === "Καμερτζή (Μαυροπαίδι, Καρά Ογλάν) - Ξάνθη") {
                            link.href = "Καμερτζη.html";
                        } else if (rowData[1] === "Όρη Μελίβοιας - Ξάνθη") {
                            link.href = "ΟρηΜελιβοιας.html";
                        } else if (rowData[1] === "Όρη Θερμών - Ξάνθη") {
                            link.href = "ΟρηΘερμων.html";
                        } else if (rowData[1] === "Φινέας - Ξάνθη") {
                            link.href = "Φινεας.html";
                        } else if (rowData[1] === "Θρακικά Μετέωρα - Ροδόπη") {
                            link.href = "ΘρακικαΜετεωρα.html";
                        } else if (rowData[1] === "Μέλτη - Ξάνθη") {
                            link.href = "Μελτη.html";
                        } else if (rowData[1] === "Παπίκιο (Καρλίκ Νταγ) - Ροδόπη") {
                            link.href = "Παπικιο.html";
                        } else if (rowData[1] === "Μαύρο Ίσιωμα - Ξάνθη") {
                            link.href = "ΜαυροΙσιωμα.html";
                        } else if (rowData[1] === "Γεράνεια - Ξάνθη") {
                            link.href = "ΓερανειαΚορυφη.html";
                        } else if (rowData[1] === "Αυγό (Σταύρος Τσακίρης) - Ξάνθη") {
                            link.href = "ΣταυροςΤσακιρης.html";
                        } else if (rowData[1] === "Στάμνα (Τζούρα, Κουσλάρι, Κιτρινοβούνι, Ψήλωμα) - Δράμα") {
                            link.href = "ΣταμναΡοδοπη.html";
                        } else if (rowData[1] === "Ερμάριο - Ξάνθη") {
                            link.href = "Ερμαριο.html";
                        } else if (rowData[1] === "Χαϊντού (Ερύμανθος, Γυφτόκαστρο) - Δράμα, Ξάνθη") {
                            link.href = "Χαιντου.html";
                        } else if (rowData[1] === "Μπρινιάς (Δρυζές, Πρινιάς) - Λασίθι") {
                            link.href = "Μπρινιας.html";
                        } else if (rowData[1] === "Ασφεντιλιάς (Ανατολικά Αστερούσια) - Ηράκλειο") {
                            link.href = "Ασφεντιλιας.html";
                        } else if (rowData[1] === "Πλαγιές (Βουνά Ζίρου) - Λασίθι") {
                            link.href = "Πλαγιες.html";
                        } else if (rowData[1] === "Αστερούσια Όρη - Ηράκλειο") {
                            link.href = "Αστερουσια.html";
                        } else if (rowData[1] === "Κουλούκωνας (Ταλλαία Όρη) - Ρέθυμνο") {
                            link.href = "Κουλουκωνας.html";
                        } else if (rowData[1] === "Οξύ Κεφάλι - Ηράκλειο") {
                            link.href = "ΟξυΚεφαλι.html";
                        } else if (rowData[1] === "Γιούχτας - Ηράκλειο") {
                            link.href = "Γιουχτας.html";
                        } else if (rowData[1] === "Στρούμπουλας - Ηράκλειο") {
                            link.href = "Στρουμπουλας.html";
                        } else if (rowData[1] === "Βρύσινας - Ρέθυμνο") {
                            link.href = "Βρυσινας.html";
                        } else if (rowData[1] === "Βουβάλα - Ρέθυμνο") {
                            link.href = "Βουβαλα.html";
                        } else if (rowData[1] === "Κουρούπα - Ρέθυμνο") {
                            link.href = "Κουρουπα.html";
                        } else if (rowData[1] === "Καψάς - Λασίθι") {
                            link.href = "Καψας.html";
                        } else if (rowData[1] === "Δίκτη (Λασιθιώτικα Βουνά) - Ηράκλειο, Λασίθι") {
                            link.href = "Δικτη.html";
                        } else if (rowData[1] === "Κέδρος (Ανάληψη) - Ρέθυμνο") {
                            link.href = "Κεδρος.html";
                        } else if (rowData[1] === "Ψηλορείτης (Ίδη) - Ηράκλειο, Ρέθυμνο") {
                            link.href = "Ψηλορειτης.html";
                        } else if (rowData[1] === "Λευκά Όρη (Μαδάρες) - Χανιά") {
                            link.href = "ΛευκαΟρη.html";
                        } else if (rowData[1] === "Σελένα - Ηράκλειο, Λασίθι") {
                            link.href = "Σελενα.html";
                        } else if (rowData[1] === "Μονοδένδρι - Ηράκλειο") {
                            link.href = "Μονοδενδρι.html";
                        } else if (rowData[1] === "Καταλύματα - Λασίθι") {
                            link.href = "Καταλυματα.html";
                        } else if (rowData[1] === "Πλακάκια - Χανιά") {
                            link.href = "Πλακακια.html";
                        } else if (rowData[1] === "Ξηρό - Ρέθυμνο") {
                            link.href = "Ξηρο.html";
                        } else if (rowData[1] === "Ρωμανάτη - Λασίθι") {
                            link.href = "Ρωμανατη.html";
                        } else if (rowData[1] === "Κουτρούλης - Χανιά") {
                            link.href = "Κουτρουλης.html";
                        }  else if (rowData[1] === "Μεγάλη Κορυφή - Λασίθι") {
                            link.href = "ΜεγαληΚορυφη.html";
                        }  else if (rowData[1] === "Κουτρούλης - Χανιά") {
                            link.href = "Κουτρουλης.html";
                        } else if (rowData[1] === "Τουρλί (Τρουλλί) - Χανιά") {
                            link.href = "Τουρλι.html";
                        } else if (rowData[1] === "Κρανιά - Αχαΐα") {
                            link.href = "Κρανια.html";
                        } else if (rowData[1] === "Σάμιτος - Ρέθυμνο") {
                            link.href = "Σαμιτος.html";
                        } else if (rowData[1] === "Κατσονύχι - Ρέθυμνο") {
                            link.href = "Κατσονυχι.html";
                        } else if (rowData[1] === "Λουλουδάκης - Ηράκλειο, Λασίθι") {
                            link.href = "Λουλουδακης.html";
                        } else if (rowData[1] === "Σιδέρωτας (Ασιδέρωτο, Ανάληψη) - Ρέθυμνο") {
                            link.href = "Σιδερωτας.html";
                        } else if (rowData[1] === "Άγιος Δίκαιος - Χανιά") {
                            link.href = "ΑγιοςΔικαιος.html";
                        } else if (rowData[1] === "Αποπηγάδι - Χανιά") {
                            link.href = "Αποπηγαδι.html";
                        } else if (rowData[1] === "Θρυπτή (Αφέντης Σταυρωμένος) - Λασίθι") {
                            link.href = "ΟρηΘρυπτης.html";
                        } else if (rowData[1] === "Πλατιά Κορφή (Ανεφαλάκος) - Λασίθι") {
                            link.href = "ΠλατιαΚορφη.html";
                        } else if (rowData[1] === "Αγκαθές (Χορεύτρες) - Χανιά") {
                            link.href = "Αγκαθες.html";
                        } else if (rowData[1] === "Σαρακηνός - Ηράκλειο, Λασίθι") {
                            link.href = "Σαρακηνος.html";
                        } else if (rowData[1] === "Βολακιάς - Χανιά") {
                            link.href = "Βολακιας.html";
                        } else if (rowData[1] === "Ορνό - Λασίθι") {
                            link.href = "Ορνο.html";
                        } else if (rowData[1] === "Σητειακά Όρη- Λασίθι") {
                            link.href = "ΣητειακαΟρη.html";
                        } else if (rowData[1] === "Κορυφή Ξενογιώργη - Λασίθι") {
                            link.href = "Ξενογιωργη.html";
                        } else if (rowData[1] === "Καλόν Ορος - Κεφαλληνία") {
                            link.href = "ΚαλονΟρος.html";
                        } else if (rowData[1] === "Καστρί - Κεφαλληνία") {
                            link.href = "Καστρι.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας - Ρόδος") {
                            link.href = "ΠροφητηςΗλιαςΡοδου.html";
                        } else if (rowData[1] === "Νήριτο Όρος - Ιθάκη") {
                            link.href = "ΝηριτοΟρος.html";
                        } else if (rowData[1] === "Αμανή - Χίος") {
                            link.href = "Αμανη.html";
                        } else if (rowData[1] === "Σπηλακιά (Αίπος, Κοχλιός) - Χίος") {
                            link.href = "Σπηλακια.html";
                        } else if (rowData[1] === "Αυγό - Κεφαλληνία") {
                            link.href = "ΑυγοΚεφαλλονιας.html";
                        } else if (rowData[1] === "Όλυμπος - Λέσβος") {
                            link.href = "ΟλυμποςΛεσβου.html";
                        } else if (rowData[1] === "Λεπέτυμνος Αγιολιάς - Λέσβος") {
                            link.href = "Λεπετυμνος.html";
                        } else if (rowData[1] === "Λάστος - Κάρπαθος") {
                            link.href = "Λαστος.html";
                        } else if (rowData[1] === "Υψάριο (Ψαριό) - Θάσος") {
                            link.href = "Υψαριο.html";
                        } else if (rowData[1] === "Άγιος Ηλίας - Λευκάδα") {
                            link.href = "ΑγιοςΗλιας.html";
                        } else if (rowData[1] === "Αγία Δυνατή - Κεφαλληνία") {
                            link.href = "ΑγιαΔυνατη.html";
                        } else if (rowData[1] === "Καρβούνης - Σάμος") {
                            link.href = "Καρβουνης.html";
                        } else if (rowData[1] === "Ζας (Ζευς) - Νάξος") {
                            link.href = "Ζας.html";
                        } else if (rowData[1] === "Κορωνός - Νάξος") {
                            link.href = "Κορωνος.html";
                        } else if (rowData[1] === "Κουβάρα - Ανδρος") {
                            link.href = "Κουβαρα.html";
                        } else if (rowData[1] === "Ακραμύτης - Ρόδος") {
                            link.href = "Ακραμυτης.html";
                        } else if (rowData[1] === "Κρούκελλος - Αμοργός") {
                            link.href = "Κρουκελλος.html";
                        } else if (rowData[1] === "Δίκαιος - Κως") {
                            link.href = "Δικαιος.html";
                        } else if (rowData[1] === "Φανάρι - Νάξος") {
                            link.href = "Φαναρι.html";
                        } else if (rowData[1] === "Άτρος - Κεφαλληνία") {
                            link.href = "Ατρος.html";
                        } else if (rowData[1] === "Παντοκράτωρ - Κέρκυρα") {
                            link.href = "Παντοκρατωρ.html";
                        } else if (rowData[1] === "Ημεροβίγλι (Μεροβίγλι) - Κεφαλληνία") {
                            link.href = "Ημεροβιγλι.html";
                        } else if (rowData[1] === "Αθέρας - Ικαρία") {
                            link.href = "Αθερας.html";
                        } else if (rowData[1] === "Μέλισσα - Ικαρία") {
                            link.href = "Μελισσα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας - Λέσβος") {
                            link.href = "ΠροφητηςΗλιαςΛεσβου.html";
                        } else if (rowData[1] === "Σάος - Σαμοθράκη") {
                            link.href = "Σαος.html";
                        } else if (rowData[1] === "Αίνος - Κεφαλληνία") {
                            link.href = "Αινος.html";
                        } else if (rowData[1] === "Αττάβυρος - Ρόδος") {
                            link.href = "Ατταβυρος.html";
                        } else if (rowData[1] === "Πελινναίον - Χίος") {
                            link.href = "Πελινναιον.html";
                        } else if (rowData[1] === "Κερκετεύς (Κέρκης) - Σάμος") {
                            link.href = "Κερκετευς.html";
                        } else if (rowData[1] === "Κρυονερίτης - Ρέθυμνο") {
                            link.href = "Κρυονεριτης.html";
                        } else if (rowData[1] === "Ξηχόρτι - Ηλεία") {
                            link.href = "Ξηχορτι.html";
                        } else if (rowData[1] === "Σουρμπάς - Αχαΐα") {
                            link.href = "Σουρμπας.html";
                        } else if (rowData[1] === "Άγιος Κωνσταντίνος - Λακωνία") {
                            link.href = "ΑγιοςΚωνσταντινοςΛακ.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B - Μεσσηνία") {
                            link.href = "ΠροφητηςΗλιαςMess.html";
                        } else if (rowData[1] === "Ράχη - Αργολίδα") {
                            link.href = "Ραχη.html";
                        } else if (rowData[1] === "Μπούρα - Μεσσηνία") {
                            link.href = "Μπουρα.html";
                        } else if (rowData[1] === "Βουνό Ρούσσου (Ρούσο Βουνό) - Λακωνία") {
                            link.href = "ΒουνοΡουσσου.html";
                        } else if (rowData[1] === "Νεραϊδοβούνι - Αχαΐα") {
                            link.href = "Νεραιδοβουνι.html";
                        } else if (rowData[1] === "Εκκλησάκι - Κορινθία") {
                            link.href = "Εκκλησακι.html";
                        } else if (rowData[1] === "Ευαγγελίστρια - Κορινθία") {
                            link.href = "Ευαγγελιστρια.html";
                        } else if (rowData[1] === "Λάκκα Κοκκίνη (Κερνίκελο, Μάλια Λένι) - Αργολίδα, Κορινθία") {
                            link.href = "ΛακκαΚοκκινη.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αρκαδία") {
                            link.href = "ΠροφητηςΗλιας1117.html";
                        } else if (rowData[1] === "Όρη Τροπαίων - Αρκαδία") {
                            link.href = "ΟρηΤροπαιων.html";
                        } else if (rowData[1] === "Δρακοβούνι - Αρκαδία") {
                            link.href = "Δρακοβουνι.html";
                        } else if (rowData[1] === "Καλογεροβούνι - Λακωνία") {
                            link.href = "Καλογεροβουνι.html";
                        } else if (rowData[1] === "Τριαντάφυλλα - Αρκαδία") {
                            link.href = "Τριανταφυλλα.html";
                        } else if (rowData[1] === "Άγιος Κωνσταντίνος - Αρκαδία") {
                            link.href = "ΑγιοςΚωνσταντινοςΑρκαδιας.html";
                        } else if (rowData[1] === "Αλογομάνδρα - Αρκαδία, Λακωνία") {
                            link.href = "Αλογομανδρα.html";
                        } else if (rowData[1] === "Μακρυλάκκωμα - Λακωνία") {
                            link.href = "Μακρυλακκωμα.html";
                        } else if (rowData[1] === "Σγουριάς - Αρκαδία") {
                            link.href = "Σγουριας.html";
                        } else if (rowData[1] === "Κακοβούνια - Λακωνία") {
                            link.href = "Κακοβουνια.html";
                        } else if (rowData[1] === "Βερντάτση - Μεσσηνία") {
                            link.href = "Βερντατση.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αρκαδία") {
                            link.href = "ΠροφητηςΗλιας850.html";
                        } else if (rowData[1] === "Άγιοι Ασώματοι - Αχαΐα") {
                            link.href = "ΑγιοιΑσωματοι.html";
                        } else if (rowData[1] === "Κεραύσιον Όρος (Ματεσαίικο Βουνό) - Ηλεία") {
                            link.href = "ΚεραυσιονΟρος.html";
                        } else if (rowData[1] === "Μαυροβούνι - Αργολίδα") {
                            link.href = "Μαυροβουνι.html";
                        } else if (rowData[1] === "Δροσοβούνι - Αρκαδία") {
                            link.href = "Δροσοβουνι.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B - Αχαΐα") {
                            link.href = "ΠροφητηςΗλιας1142.html";
                        } else if (rowData[1] === "Καστέλλια - Αχαΐα") {
                            link.href = "Καστελλια.html";
                        } else if (rowData[1] === "Κράβαρης (Γκράβαρης, Βόρειον) - Αρκαδία") {
                            link.href = "Κραβαρης.html";
                        } else if (rowData[1] === "Άγιος Χριστόφορος - Αρκαδία") {
                            link.href = "ΑγιοςΧριστοφοροςΑρκαδιας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αρκαδία") {
                            link.href = "ΠροφητηςΗλιας1119.html";
                        } else if (rowData[1] === "Κουλοχέρα - Λακωνία") {
                            link.href = "Κουλοχερα.html";
                        } else if (rowData[1] === "Κούκουρας - Αρκαδία") {
                            link.href = "Κουκουρας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας - Αχαΐα") {
                            link.href = "ΠροφητηςΗλιας808.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αχαΐα") {
                            link.href = "ΠροφητηςΗλιαςΑχαια754.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Μεσσηνία") {
                            link.href = "ΠροφητηςΗλιας1006.html";
                        } else if (rowData[1] === "Τουρτούλα - Αρκαδία") {
                            link.href = "Τουρτουλα.html";
                        } else if (rowData[1] === "Στρογγυλοβούνι (Καστανοβούνι) - Κορινθία") {
                            link.href = "Στρογγυλοβουνι.html";
                        } else if (rowData[1] === "Παραβουνάκι - Αργολίδα") {
                            link.href = "Παραβουνακι.html";
                        } else if (rowData[1] === "Δραγουνέρα (Πιτσαδέικο Βουνό, Σωτήρα) - Κορινθία") {
                            link.href = "Δραγουνερα.html";
                        } else if (rowData[1] === "Κουτρούφι - Αρκαδία") {
                            link.href = "Κουτρουφι.html";
                        } else if (rowData[1] === "Πικερνιώτικο - Αρκαδία") {
                            link.href = "Πικερνιωτικο.html";
                        } else if (rowData[1] === "Βουνά Χαλανδρίτσας - Αχαΐα") {
                            link.href = "ΒουναΧαλανδριτσας.html";
                        } else if (rowData[1] === "Γαϊδουροβούνι - Λακωνία") {
                            link.href = "Γαιδουροβουνι.html";
                        } else if (rowData[1] === "Βέσιζα - Κορινθία") {
                            link.href = "Βεσιζα.html";
                        } else if (rowData[1] === "Καστανιά - Αρκαδία") {
                            link.href = "Καστανια.html";
                        } else if (rowData[1] === "Τσεμπερού - Αρκαδία") {
                            link.href = "Τσεμπερου.html";
                        } else if (rowData[1] === "Ρεζενίκος - Αρκαδία") {
                            link.href = "Ρεζενικος.html";
                        } else if (rowData[1] === "Βρωμοβρυσέικα Βουνά - Μεσσηνία") {
                            link.href = "ΒρωμοβρυσεικαΒουνα.html";
                        } else if (rowData[1] === "Άγιος Γεώργιος - Αρκαδία") {
                            link.href = "ΑγιοςΓεωργιοςΑρκαδιας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B - Αχαΐα") {
                            link.href = "ΠροφητηςΗλιας1338.html";
                        } else if (rowData[1] === "Βύθουλας (Βίτουλα) - Αρκαδία") {
                            link.href = "Βυθουλας.html";
                        } else if (rowData[1] === "Ζέμπη - Αχαΐα") {
                            link.href = "Ζεμπη.html";
                        } else if (rowData[1] === "Σκιαδοβούνι - Αχαΐα, Ηλεία") {
                            link.href = "Σκιαδοβουνι.html";
                        } else if (rowData[1] === "Ψηλό Βουνό - Αρκαδία") {
                            link.href = "ΨηλοΒουνοΑρκαδιας.html";
                        } else if (rowData[1] === "Άγιος Αθανάσιος (Βουνό Μαμαλούκας) - Αχαΐα") {
                            link.href = "ΒουνοΜαμαλουκας.html";
                        } else if (rowData[1] === "Σκεπαστό (Όρος Κερύνεια) - Αχαΐα") {
                            link.href = "Σκεπαστο.html";
                        } else if (rowData[1] === "Μπαρμπάς - Αχαΐα") {
                            link.href = "Μπαρμπας.html";
                        } else if (rowData[1] === "Τρεις Γυναίκες - Αχαΐα") {
                            link.href = "ΤρειςΓυναικες.html";
                        } else if (rowData[1] === "Ρούσκιο - Αχαΐα") {
                            link.href = "Ρουσκιο.html";
                        } else if (rowData[1] === "Τάρταρης - Αχαΐα") {
                            link.href = "Ταρταρης.html";
                        } else if (rowData[1] === "Λύκαιον Όρος - Αρκαδία, Μεσσηνία") {
                            link.href = "ΛυκαιονΟρος.html";
                        } else if (rowData[1] === "Τετράζι (Νόμια Όρη) - Αρκαδία, Μεσσηνία") {
                            link.href = "Τετραζι.html";
                        } else if (rowData[1] === "Αργυρόκαστρο - Αρκαδία") {
                            link.href = "Αργυροκαστρο.html";
                        } else if (rowData[1] === "Γορτυνιακά Όρη - Αρκαδία") {
                            link.href = "ΓορτυνιακαΟρη.html";
                        } else if (rowData[1] === "Αραχναίο - Αργολίδα") {
                            link.href = "Αραχναιο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Βελανιδιά, Κυνόρτιον) - Αργολίδα") {
                            link.href = "Κυνορτιον.html";
                        } else if (rowData[1] === "Πετραλώνι - Μεσσηνία") {
                            link.href = "Πετραλωνι.html";
                        } else if (rowData[1] === "Ιθώμη - Μεσσηνία") {
                            link.href = "Ιθωμη.html";
                        } else if (rowData[1] === "Φολόη - Ηλεία") {
                            link.href = "Φολοη.html";
                        } else if (rowData[1] === "Χαρβάτι - Αργολίδα, Κορινθία") {
                            link.href = "Χαρβατι.html";
                        } else if (rowData[1] === "Παρθένι - Αργολίδα, Αρκαδία") {
                            link.href = "Παρθενι.html";
                        } else if (rowData[1] === "Τρίκορφο (Βουνά Δερβενακίων) - Αργολίδα") {
                            link.href = "Τρικορφο.html";
                        } else if (rowData[1] === "Ντουρντουβάνα (Πεντέλεια) - Αχαΐα, Κορινθία") {
                            link.href = "Ντουρντουβανα.html";
                        } else if (rowData[1] === "Μαρμάτι (Νεραϊδόρραχη) - Αχαΐα") {
                            link.href = "Μαρματι.html";
                        } else if (rowData[1] === "Παναχαϊκό Όρος (Βοϊδιάς) - Αχαΐα") {
                            link.href = "Παναχαικο.html";
                        } else if (rowData[1] === "Φαρμακάς (Αβυζές) - Αργολίδα") {
                            link.href = "Φαρμακας.html";
                        } else if (rowData[1] === "Μεγαλοβούνι - Αργολίδα, Κορινθία") {
                            link.href = "Μεγαλοβουνι.html";
                        } else if (rowData[1] === "Σανταμέρι (Σκόλλις, Πορτέικο, Πορτοβούνι) - Αχαΐα") {
                            link.href = "Σανταμερι.html";
                        } else if (rowData[1] === "Σαγγιάς - Λακωνία") {
                            link.href = "Σαγγιας.html";
                        } else if (rowData[1] === "Αιγάλεω (Όρη Κυπαρισσίας) - Μεσσηνία") {
                            link.href = "ΑιγαλεωΚυπαρισσιας.html";
                        } else if (rowData[1] === "Χιονοβούνι - Λακωνία") {
                            link.href = "Χιονοβουνι.html";
                        } else if (rowData[1] === "Τούρλα (Λιβαδάκι) - Αχαΐα, Κορινθία") {
                            link.href = "Τουρλα.html";
                        } else if (rowData[1] === "Φουκάς - Κορινθία") {
                            link.href = "Φουκας.html";
                        } else if (rowData[1] === "Ομπλός - Αχαΐα") {
                            link.href = "Ομπλος.html";
                        } else if (rowData[1] === "Κουρκούλα (Στρογγύλο) - Λακωνία") {
                            link.href = "Κουρκουλα.html";
                        } else if (rowData[1] === "Μακροβούνι (Μαυροβούνι) - Γρεβενά") {
                            link.href = "Μακροβουνι.html";
                        } else if (rowData[1] === "Λυκόδημο Όρος - Μεσσηνία") {
                            link.href = "Λυκοδημο.html";
                        } else if (rowData[1] === "Τούρλα - Αργολίδα, Αρκαδία") {
                            link.href = "ΤουρλαΑργολιδας.html";
                        } else if (rowData[1] === "Αφροδίσιο - Αρκαδία, Αχαΐα") {
                            link.href = "Αφροδισιο.html";
                        } else if (rowData[1] === "Μελιδόνι (Αη-Λιάς) - Αργολίδα") {
                            link.href = "Μελιδονι.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Αηλιάς, Μελίσσι) - Αχαΐα") {
                            link.href = "Αηλιας.html";
                        } else if (rowData[1] === "Μπουχουμέρα (Μπουκουμέρα) - Αχαΐα") {
                            link.href = "Μπουχουμερα.html";
                        } else if (rowData[1] === "Καλάθιο - Μεσσηνία") {
                            link.href = "Καλαθιο.html";
                        } else if (rowData[1] === "Όρη Λαγκαδιών - Αρκαδία") {
                            link.href = "ΟρηΛαγκαδιων.html";
                        } else if (rowData[1] === "Μίνθη (Άλβαινα, Άλβενα) - Ηλεία") {
                            link.href = "Μινθη.html";
                        } else if (rowData[1] === "Σερβόβουνο - Αρκαδία") {
                            link.href = "Σερβοβουνο.html";
                        } else if (rowData[1] === "Όνεια Όρη - Κορινθία") {
                            link.href = "ΟνειαΟρη.html";
                        } else if (rowData[1] === "Μαδερό - Αχαΐα, Κορινθία") {
                            link.href = "Μαδερο.html";
                        } else if (rowData[1] === "Χτενιάς (Κτενιάς, Κρύον Όρος) - Αργολίδα, Αρκαδία") {
                            link.href = "Χτενιας.html";
                        } else if (rowData[1] === "Άγιος Ηλίας - Αρκαδία") {
                            link.href = "ΑγιοςΗλιαςΑρκαδιας.html";
                        } else if (rowData[1] === "Ζάβιτσα (Τιμένιον Όρος) - Αργολίδα, Αρκαδία") {
                            link.href = "Ζαβιτσα.html";
                        } else if (rowData[1] === "Νυφίτσα - Κορινθία") {
                            link.href = "Νυφιτσα.html";
                        } else if (rowData[1] === "Ορθολίθι - Αργολίδα") {
                            link.href = "Ορθολιθι.html";
                        } else if (rowData[1] === "Σταυραετός - Κορινθία") {
                            link.href = "Σταυραετος.html";
                        } else if (rowData[1] === "Δίδυμο (Δίδυμα, Κονί) - Αργολίδα") {
                            link.href = "Διδυμο.html";
                        } else if (rowData[1] === "Τραπεζώνα - Αργολίδα, Κορινθία") {
                            link.href = "Τραπεζωνα.html";
                        } else if (rowData[1] === "Μαγκλάβι - Μεσσηνία") {
                            link.href = "Μαγκλάβι.html";
                        } else if (rowData[1] === "Γαβριάς - Κορινθία") {
                            link.href = "Γαβριας.html";
                        } else if (rowData[1] === "Μαδάρα - Αρκαδία, Λακωνία") {
                            link.href = "Μαδαρα.html";
                        } else if (rowData[1] === "Λάμπεια - Ηλεία") {
                            link.href = "Λαμπεια.html";
                        } else if (rowData[1] === "Λύρκειο (Φραγκοκούκουρα) - Αργολίδα, Αρκαδία") {
                            link.href = "Λυρκειο.html";
                        } else if (rowData[1] === "Αρτεμίσιο - Αργολίδα, Αρκαδία") {
                            link.href = "Αρτεμισιο.html";
                        } else if (rowData[1] === "Μαύρο Όρος (Μαυρονόρος, Προφήτης Ηλίας) - Κορινθία") {
                            link.href = "ΜαυροΟρος.html";
                        } else if (rowData[1] === "Κλωκός (Φτέρη, Παναγία) - Αχαΐα") {
                            link.href = "Κλωκος.html";
                        } else if (rowData[1] === "Σκίαθις (Καταφύγιο, Ζάρα) - Αργολίδα, Αρκαδία") {
                            link.href = "Σκιαθις.html";
                        } else if (rowData[1] === "Σαϊτάς (Όρυξις) - Κορινθία, Αρκαδία, Αχαΐα") {
                            link.href = "Σαιτας.html";
                        } else if (rowData[1] === "Δυτικό Μαίναλο - Αρκαδία") {
                            link.href = "ΔυτικοΜαιναλο.html";
                        } else if (rowData[1] === "Χελμός (Αροάνια) - Αχαΐα") {
                            link.href = "Χελμος.html";
                        } else if (rowData[1] === "Ερύμανθος - Αχαΐα") {
                            link.href = "Ερυμανθος.html";
                        } else if (rowData[1] === "Γερόντιο Όρος - Κορινθία") {
                            link.href = "Γεροντιο.html";
                        } else if (rowData[1] === "Ζήρεια (Κυλλήνη) - Κορινθία") {
                            link.href = "Ζηρεια.html";
                        } else if (rowData[1] === "Τραχύ (Καρούμπαλο) - Αργολίδα, Αρκαδία") {
                            link.href = "Τραχυ.html";
                        } else if (rowData[1] === "Ολίγυρτος - Αργολίδα, Αρκαδία, Κορινθία") {
                            link.href = "Ολιγυρτος.html";
                        } else if (rowData[1] === "Πάρνωνας (Μαλεβός) - Αρκαδία, Λακωνία") {
                            link.href = "Παρνωνας.html";
                        } else if (rowData[1] === "Ταΰγετος - Λακωνία, Μεσσηνία") {
                            link.href = "Ταυγετος.html";
                        } else if (rowData[1] === "Μαίναλο - Αρκαδία") {
                            link.href = "Μαιναλο.html";
                        } else if (rowData[1] === "Μάρτσα - Ευρυτανία, Καρδίτσα") {
                            link.href = "Μαρτσα.html";
                        } else if (rowData[1] === "Βουλγάρα (Άγραφα) - Ευρυτανία, Καρδίτσα") {
                            link.href = "ΒουλγαραΕυρυτανιας.html";
                        } else if (rowData[1] === "Ντεληδήμι (Αυγό, Τσουρνάτα) (Άγραφα) - Καρδίτσα, Ευρυτανία") {
                            link.href = "Ντεληδημι.html";
                        } else if (rowData[1] === "Μπορλέρο (Μπουρλέρος) (Άγραφα) - Ευρυτανία, Καρδίτσα") {
                            link.href = "Μπορλερο.html";
                        } else if (rowData[1] === "Πύργος - Ευρυτανία, Καρδίτσα") {
                            link.href = "ΠυργοςΕυρυτανιας1804.html";
                        } else if (rowData[1] === "Φλυτζάνι (Καλύβια, Νιάλα) - Ευρυτανία, Καρδίτσα") {
                            link.href = "Φλυτζανι.html";
                        } else if (rowData[1] === "Βουλγάρα - Λάρισα, Πιερία") {
                            link.href = "ΒουλγαραΛαρισας.html";
                        } else if (rowData[1] === "Αρχοντική (Αμάρμπεης) - Κοζάνη, Λάρισα") {
                            link.href = "Αρχοντικη.html";
                        } else if (rowData[1] === "Χλωμό - Μαγνησία") {
                            link.href = "Χλωμο.html";
                        } else if (rowData[1] === "Κατάχλωμο (Κατάχλωρο, Ταμάσιον Όρος) - Καρδίτσα") {
                            link.href = "Καταχλωμο.html";
                        } else if (rowData[1] === "Τρόχαλος - Λάρισα") {
                            link.href = "Τροχαλος.html";
                        } else if (rowData[1] === "Παπαλίβαδο - Λάρισα") {
                            link.href = "Παπαλιβαδο.html";
                        } else if (rowData[1] === "Σουλιώτης - Κοζάνη, Λάρισα") {
                            link.href = "Σουλιωτης.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Παλιοαηλιάς, Άτυνο Μύλο) - Λάρισα") {
                            link.href = "ΠροφητηςΗλιαςΛαρισας.html";
                        } else if (rowData[1] === "Κουκουργιάκος (Κοκκοριάκος) - Καρδίτσα") {
                            link.href = "Κουκουργιακος.html";
                        } else if (rowData[1] === "Μαυροβούνι (Σκούτλη) - Λάρισα") {
                            link.href = "ΜαυροβουνιΛαρισας.html";
                        } else if (rowData[1] === "Ψηλή Ράχη - Καρδίτσα") {
                            link.href = "ΨηληΡαχηΚαρδιτσας.html";
                        } else if (rowData[1] === "Αμάραντος - Καρδίτσα") {
                            link.href = "Αμαραντος.html";
                        } else if (rowData[1] === "Ίταμος (Τσιούκα) (Άγραφα) - Καρδίτσα") {
                            link.href = "ΙταμοςΤσιουκα.html";
                        } else if (rowData[1] === "Ράχη Κούτρα - Λάρισα") {
                            link.href = "ΡαχηΚουτρα.html";
                        } else if (rowData[1] === "Κονισκός (Παγκάκαινα) - Τρίκαλα") {
                            link.href = "Κονισκος.html";
                        } else if (rowData[1] === "Αντιχάσια (Ράχη Τσέτσιλα, Μαμαλή) - Λάρισα, Τρίκαλα") {
                            link.href = "Αντιχασια.html";
                        } else if (rowData[1] === "Καπροβούνι (Άγραφα) - Καρδίτσα") {
                            link.href = "Καπροβουνι.html";
                        } else if (rowData[1] === "Αμμουτσέλος (Αμοντζέλος) - Τρίκαλα") {
                            link.href = "Αμμουτσελος.html";
                        } else if (rowData[1] === "Ίταμος - Καρδίτσα, Τρίκαλα") {
                            link.href = "ΙταμοςΤρικαλων.html";
                        } else if (rowData[1] === "Μυρμιτζάλα (Μυρμηγκιά) - Καρδίτσα") {
                            link.href = "Μυρμιτζαλα.html";
                        } else if (rowData[1] === "Χάσια - Τρίκαλα") {
                            link.href = "Χασια.html";
                        } else if (rowData[1] === "Κορυφή - Τρίκαλα") {
                            link.href = "ΚορυφηΤρικαλων.html";
                        } else if (rowData[1] === "Λυκοζόρι (Τσέβροχο) - Τρίκαλα") {
                            link.href = "Λυκοζορι.html";
                        } else if (rowData[1] === "Πυργούλι - Καρδίτσα") {
                            link.href = "Πυργουλι.html";
                        } else if (rowData[1] === "Λεωνίδας - Τρίκαλα") {
                            link.href = "Λεωνιδας.html";
                        } else if (rowData[1] === "Αγούρος - Τρίκαλα") {
                            link.href = "Αγουρος.html";
                        } else if (rowData[1] === "Πυραμίδα (Μετερίζια) - Λάρισα, Τρίκαλα") {
                            link.href = "Πυραμιδα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Άγιος Ηλίας) - Τρίκαλα") {
                            link.href = "ΠροφητηςΗλιαςΑγιοςΗλιαςΤρικαλων.html";
                        } else if (rowData[1] === "Βουτσικάκι (Γκαβέλ) (Άγραφα) - Καρδίτσα") {
                            link.href = "Βουτσικακι.html";
                        } else if (rowData[1] === "Χατζή - Τρίκαλα") {
                            link.href = "ΧατζηΤρικαλων.html";
                        } else if (rowData[1] === "Δοκίμι Παχτουρίου (Τσιγκάρι, Τσουγκότι) - Τρίκαλα") {
                            link.href = "ΔοκιμιΠαχτουριου.html";
                        } else if (rowData[1] === "Παπαδημήτρης (Άγραφα) - Καρδίτσα") {
                            link.href = "Παπαδημητρης.html";
                        } else if (rowData[1] === "Καραβούλα (Άγραφα) - Καρδίτσα, Τρίκαλα") {
                            link.href = "Καραβουλα.html";
                        } else if (rowData[1] === "Γαλάτσι (Ασήμι) (Άγραφα) - Καρδίτσα") {
                            link.href = "Γαλατσι.html";
                        } else if (rowData[1] === "Μοράβα (Κυνηγός) - Τρίκαλα") {
                            link.href = "Μοραβα.html";
                        } else if (rowData[1] === "Σουφλί (Μπούτσος) - Καρδίτσα") {
                            link.href = "Σουφλι.html";
                        } else if (rowData[1] === "Κέδρος (Τρία Σύνορα) - Τρίκαλα") {
                            link.href = "ΚεδροςΤρικαλων.html";
                        } else if (rowData[1] === "Κατούνα (Καυκιά, Τούρλα) - Καρδίτσα, Τρίκαλα") {
                            link.href = "Κατουνα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Βερούσια) - Καρδίτσα") {
                            link.href = "Βερουσια.html";
                        } else if (rowData[1] === "Μαυροπούλι - Τρίκαλα") {
                            link.href = "Μαυροπουλι.html";
                        } else if (rowData[1] === "Χαλικόβουνο (Νεράιδα, Μπούτζα) - Τρίκαλα") {
                            link.href = "Χαλικοβουνο.html";
                        } else if (rowData[1] === "Κίσσαβος (Όσσα) - Λάρισα") {
                            link.href = "Κισσαβος.html";
                        } else if (rowData[1] === "Κόζιακας (Κερκέτιον Όρος) - Τρίκαλα") {
                            link.href = "Κοζιακας.html";
                        } else if (rowData[1] === "Καράβα (Σχιζοκάραβο) (Άγραφα) - Καρδίτσα") {
                            link.href = "Καραβα.html";
                        } else if (rowData[1] === "Αυγό - Τρίκαλα") {
                            link.href = "ΑυγοΤρικαλων.html";
                        } else if (rowData[1] === "Τριγγία (Τριγία) - Τρίκαλα") {
                            link.href = "Τριγγια.html";
                        } else if (rowData[1] === "Αρκούδα - Τρίκαλα") {
                            link.href = "Αρκουδα.html";
                        } else if (rowData[1] === "Ναρθάκι (Κασιδιάρης) - Λάρισα, Φθιώτιδα") {
                            link.href = "Ναρθακι.html";
                        } else if (rowData[1] === "Όθρυς - Μαγνησία, Φθιώτιδα") {
                            link.href = "Οθρυς.html"; 
                        } else if (rowData[1] === "Κάτω Όλυμπος (Μεταμόρφωση) - Λάρισα, Πιερία") {
                            link.href = "ΚατωΟλυμπος.html";
                        } else if (rowData[1] === "Πήλιο - Μαγνησία") {
                            link.href = "Πηλιο.html";
                        } else if (rowData[1] === "Λουνάκι - Τρίκαλα") {
                            link.href = "Λουνακι.html";
                        } else if (rowData[1] === "Ψηλή Ράχη - Καρδίτσα, Φθιώτιδα") {
                            link.href = "ΨηληΡαχηΦθιωτιδας.html";
                        } else if (rowData[1] === "Μαυρόραχη (Καρά Ράχη) - Καρδίτσα, Φθιώτιδα") {
                            link.href = "Μαυροραχη.html";
                        } else if (rowData[1] === "Τσεκούρι (Τσεκουράτ) - Πρέβεζα") {
                            link.href = "ΤσεκουριΤσεκουρατ.html";
                        } else if (rowData[1] === "Τσούκα - Άρτα") {
                            link.href = "Τσουκα.html";
                        } else if (rowData[1] === "Πενταλώνι - Ιωάννινα") {
                            link.href = "Πενταλωνι.html";
                        } else if (rowData[1] === "Γορίλας (Γκορίλα, Κουρύλας) - Ιωάννινα") {
                            link.href = "Γοριλας.html";
                        } else if (rowData[1] === "Μέγα Πλάι - Ιωάννινα") {
                            link.href = "ΜεγαΠλαι.html";
                        } else if (rowData[1] === "Κιντζιρέλου - Ιωάννινα") {
                            link.href = "Κιντζιρελου.html";
                        } else if (rowData[1] === "Ακρορράχη - Ιωάννινα") {
                            link.href = "Ακρορραχη.html";
                        } else if (rowData[1] === "Όρη Πάργας (Κρανιά) - Πρέβεζα") {
                            link.href = "ΟρηΠαργας.html";
                        } else if (rowData[1] === "Μέγα Ίσωμα - Φθιώτιδα") {
                            link.href = "ΜεγαΙσωμα.html";
                        } else if (rowData[1] === "Μαυρότοπος - Φθιώτιδα") {
                            link.href = "Μαυροτοπος.html";
                        } else if (rowData[1] === "Μεγάλη Τσούκα - Πρέβεζα") {
                            link.href = "ΜεγαληΤσουκαΠρεβεζας.html";
                        } else if (rowData[1] === "Καμήλα - Θεσπρωτία") {
                            link.href = "Καμηλα.html";
                        } else if (rowData[1] === "Γράμματα - Άρτα") {
                            link.href = "Γραμματα.html";
                        } else if (rowData[1] === "Βροντερό (Τσουτσούλι) - Φλώρινα") {
                            link.href = "Βροντερο.html";
                        } else if (rowData[1] === "Ντέβας - Φλώρινα") {
                            link.href = "Ντεβας.html";
                        } else if (rowData[1] === "Κορησός (Αηδονάκος) - Καστοριά") {
                            link.href = "Κορησος.html";
                        } else if (rowData[1] === "Αγία Τριάδα (Απόσκεπος, Σαρακήνα) - Καστοριά") {
                            link.href = "ΑγιαΤριαδαΚαστοριας.html";
                        } else if (rowData[1] === "Τρίκορφο (Όρη Λιδωρικίου) - Φωκίδα") {
                            link.href = "ΤρικορφοΦωκιδας.html";
                        } else if (rowData[1] === "Κνημίδα - Φθιώτιδα") {
                            link.href = "Κνημιδα.html";
                        } else if (rowData[1] === "Αετόπετρα - Φωκίδα") {
                            link.href = "Αετοπετρα.html";
                        } else if (rowData[1] === "Κουτσουρός - Φωκίδα") {
                            link.href = "Κουτσουρος.html";
                        } else if (rowData[1] === "Κούτσουρας - Φωκίδα") {
                            link.href = "Κουτσουρας.html";
                        } else if (rowData[1] === "Δανιήλ - Φωκίδα") {
                            link.href = "Δανιηλ.html";
                        } else if (rowData[1] === "Τσιτομή - Φωκίδα") {
                            link.href = "Τσιτομη.html";
                        } else if (rowData[1] === "Κρυάκουρας (Κριάκουρας) - Άρτα") {
                            link.href = "Κρυακουρας.html";
                        } else if (rowData[1] === "Φούρκα (Σελιό, Μουρτζιά) - Άρτα") {
                            link.href = "Φουρκα.html";
                        } else if (rowData[1] === "Αετοί - Άρτα") {
                            link.href = "Αετοι.html";
                        } else if (rowData[1] === "Φρούσια Όρη (Κόκκινα Στεφάνια) - Άρτα") {
                            link.href = "ΦρουσιαΟρη.html";
                        } else if (rowData[1] === "Όρη Φιλιατών - Θεσπρωτία") {
                            link.href = "ΟρηΦιλιατων.html";
                        } else if (rowData[1] === "Χιονίστρα (Σπάτα) - Θεσπρωτία") {
                            link.href = "Χιονιστρα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Μαλούνι, Μαλόνι) - Θεσπρωτία") {
                            link.href = "ΠροφητηςΗλιαςΜαλουνι.html";
                        } else if (rowData[1] === "Όρη Βάλτου (Γάβροβο) - Αιτωλοακαρνανία, Άρτα") {
                            link.href = "ΟρηΒαλτου.html";
                        } else if (rowData[1] === "Καλογκέριτ (Λόκβατ) - Φλώρινα") {
                            link.href = "Καλογκεριτ.html";
                        } else if (rowData[1] === "Βροαστέργια (Βροατσέργια) - Φλώρινα") {
                            link.href = "Βροαστεργια.html";
                        } else if (rowData[1] === "Δοβράς (Φλάμπουρο) - Κοζάνη") {
                            link.href = "Δοβρας.html";
                        } else if (rowData[1] === "Κοκκινόλακκα (Κοκκινόλακκος) - Άρτα") {
                            link.href = "Κοκκινολακκα.html";
                        } else if (rowData[1] === "Τούρλα (Βουνό Μουζακαίικων) - Πρέβεζα") {
                            link.href = "ΒουνοΜουζακαιικων.html";
                        } else if (rowData[1] === "Τσουγκρί (Πύργος) - Άρτα") {
                            link.href = "Τσουγκρι.html";
                        } else if (rowData[1] === "Βουνό Βελαντίλας (Κρανίλα, Καμάρα) - Θεσπρωτία") {
                            link.href = "ΒουνοΒελαντιλας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Θεσπρωτία") {
                            link.href = "ΠροφητηςΗλιαςΘεσπρωτιας.html";
                        } else if (rowData[1] === "Ψηλό Βουνό - Θεσπρωτία") {
                            link.href = "ΨηλοΒουνοΘεσπρωτιας.html";
                        } else if (rowData[1] === "Σαρακίνα - Θεσπρωτία") {
                            link.href = "Σαρακινα.html";
                        } else if (rowData[1] === "Σουγλιάνι (Στρατονικό Όρος) - Θεσσαλονίκη, Χαλκιδική") {
                            link.href = "Σουγλιανι.html";
                        } else if (rowData[1] === "Ίταμος (Δραγουδέλης) - Χαλκιδική") {
                            link.href = "ΙταμοςΧαλκιδικης.html";
                        } else if (rowData[1] === "Όρη Παραμυθιάς (Γορίλλας, Γκορίλας, Κορύλλας) - Θεσπρωτία") {
                            link.href = "ΟρηΠαραμυθιας.html";
                        } else if (rowData[1] === "Βελούνα (Βουνό Χαραυγής) - Θεσπρωτία") {
                            link.href = "Βελουνα.html";
                        } else if (rowData[1] === "Λάγγαρη - Θεσπρωτία") {
                            link.href = "Λαγγαρη.html";
                        } else if (rowData[1] === "Δρίσκος - Ιωάννινα") {
                            link.href = "Δρισκος.html";
                        } else if (rowData[1] === "Φαρμακοβούνι - Θεσπρωτία") {
                            link.href = "Φαρμακοβουνι.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Άρτα") {
                            link.href = "ΠροφητηςΗλιαςΑρτας.html";
                        } else if (rowData[1] === "Τρύπιο Λιθάρι - Άρτα") {
                            link.href = "ΤρυπιοΛιθαρι.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Ιωάννινα") {
                            link.href = "ΠροφητηςΗλιαςΙωαννινων.html";
                        } else if (rowData[1] === "Χάρμα (Φλώρος, Τεροβίτικο) - Ιωάννινα") {
                            link.href = "Χαρμα.html";
                        } else if (rowData[1] === "Βουνά Μανολιάσας - Ιωάννινα") {
                            link.href = "ΒουναΜανωλιασας.html";
                        } else if (rowData[1] === "Αετοράχη - Ιωάννινα") {
                            link.href = "Αετοραχη.html";
                        } else if (rowData[1] === "Μεγάλη Τσούκα - Ιωάννινα") {
                            link.href = "ΜεγαληΤσουκαΙωαννινων.html";
                        } else if (rowData[1] === "Δεμάτι - Ιωάννινα") {
                            link.href = "Δεματι.html";
                        } else if (rowData[1] === "Όρη Κουρέντων (Όρη Λυκοστάνης) - Ιωάννινα") {
                            link.href = "ΟρηΚουρεντων.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B - Ιωάννινα") {
                            link.href = "ΠροφητηςΗλιαςΙωαννινων1217.html";
                        } else if (rowData[1] === "Ζαρκόραχη (Θεσπρωτικά Όρη) - Ιωάννινα, Πρέβεζα") {
                            link.href = "Ζαρκοραχη.html";
                        } else if (rowData[1] === "Κουτσόκρανο - Ιωάννινα") {
                            link.href = "Κουτσοκρανο.html";
                        } else if (rowData[1] === "Λάπατα - Ιωάννινα") {
                            link.href = "Λαπατα.html";
                        } else if (rowData[1] === "Βουνά Μετσόβου (Καλιγωμένο Αλώνι) - Ιωάννινα") {
                            link.href = "ΒουναΜετσοβου.html";
                        } else if (rowData[1] === "Βουνά Γρεβενιτίου (Κερά Άννα, Κεράνα) - Ιωάννινα") {
                            link.href = "ΒουναΓρεβενιτιου.html";
                        } else if (rowData[1] === "Κασιδιάρης (Σούτιστα) - Ιωάννινα") {
                            link.href = "ΚασιδιαρηςΣουτιστα.html";
                        } else if (rowData[1] === "Βαλανιδιά - Ιωάννινα") {
                            link.href = "Βαλανιδια.html";
                        } else if (rowData[1] === "Όρη Σουλίου (Βριτζάχα ή Αλισσός) - Θεσπρωτία, Ιωάννινα") {
                            link.href = "ΟρηΣουλιου.html";
                        } else if (rowData[1] === "Στούρος (Στούρου, Σμίντελα) - Ιωάννινα") {
                            link.href = "Στουρος.html";
                        } else if (rowData[1] === "Ξεροβούνι (Ξηροβούνι) - Ιωάννινα, Πρέβεζα, Άρτα") {
                            link.href = "ΞεροβουνιΞηροβουνι.html";
                        } else if (rowData[1] === "Μακρύκαμπος (Τσούκα, Μπόζοβο) - Ιωάννινα") {
                            link.href = "Μακρυκαμπος.html";
                        } else if (rowData[1] === "Μουργκάνα (Όρη Τσαμαντά, Μαυροβούνι) - Θεσπρωτία, Ιωάννινα") {
                            link.href = "Μουργκανα.html";
                        } else if (rowData[1] === "Δύσωρο (Κρούσια Όρη, Μαυροβούνι) - Κιλκίς, Σέρρες") {
                            link.href = "Δυσωρο.html";
                        } else if (rowData[1] === "Άγιος Χριστόφορος - Κοζάνη") {
                            link.href = "ΑγιοςΧριστοφοροςΚοζανης.html";
                        } else if (rowData[1] === "Φλατσάτα - Καστοριά") {
                            link.href = "Φλατσατα.html";
                        } else if (rowData[1] === "Κερδύλιο (Κερδύλια Όρη) - Θεσσαλονίκη, Σέρρες") {
                            link.href = "Κερδυλιο.html";
                        } else if (rowData[1] === "Στρατονικό (Μπιάβιτσα, Πιαβίτσα, Κοντάρι) - Χαλκιδική") {
                            link.href = "Στρατονικο.html";
                        } else if (rowData[1] === "Κουτσόρραχος - Γρεβενά") {
                            link.href = "Κουτσορραχος.html";
                        } else if (rowData[1] === "Περίβλεπτο - Δράμα") {
                            link.href = "Περιβλεπτο.html";
                        } else if (rowData[1] === "Μοναστήρι - Κιλκίς") {
                            link.href = "Μοναστηρι.html";
                        } else if (rowData[1] === "Μεγάλη Ράχη - Κοζάνη") {
                            link.href = "ΜεγαληΡαχη.html";
                        } else if (rowData[1] === "Λευκάδιο - Κοζάνη") {
                            link.href = "Λευκαδιο.html";
                        } else if (rowData[1] === "Βουνά Λευκογείων - Δράμα") {
                            link.href = "ΒουναΛευκογειων.html";
                        } else if (rowData[1] === "Βουρσάνα - Κοζάνη") {
                            link.href = "Βουρσανα.html";
                        } else if (rowData[1] === "Ριζό - Κοζάνη") {
                            link.href = "Ριζο.html";
                        } else if (rowData[1] === "Τρίλοφο (Αλεότζ) - Καστοριά, Φλώρινα") {
                            link.href = "ΤριλοφοΑλεοτζ.html";
                        } else if (rowData[1] === "Κίσσαβος - Γρεβενά") {
                            link.href = "ΚισσαβοςΓρεβενων.html";
                        } else if (rowData[1] === "Σκρα (Σκρα ντι Λέγκεν, Γκιζέτ) - Κιλκίς, Πέλλα") {
                            link.href = "Σκραντιλεγκεν.html";
                        } else if (rowData[1] === "Χάρακας - Δράμα") {
                            link.href = "Χαρακας.html";
                        } else if (rowData[1] === "Τρέτιμος (Τρέτιμ Τεπέ) - Γρεβενά") {
                            link.href = "Τρετιμος.html";
                        } else if (rowData[1] === "Βουνά Ξινού Νερού - Φλώρινα") {
                            link.href = "ΒουναΞινουΝερου.html";
                        } else if (rowData[1] === "Μαύρο Πουλί (Χιντιρλίκ) - Κοζάνη, Φλώρινα") {
                            link.href = "ΜαυροΠουλιΚοζανης.html";
                        } else if (rowData[1] === "Καστανιές (Κεστενές) - Καβάλα") {
                            link.href = "ΚαστανιεςΚεστενες.html";
                        } else if (rowData[1] === "Γερμανικό - Κιλκίς") {
                            link.href = "Γερμανικο.html";
                        } else if (rowData[1] === "Καμήλα (Καμηλοβούνι) - Χαλκιδική") {
                            link.href = "ΚαμηλαΚαμηλοβουνι.html";
                        } else if (rowData[1] === "Κοζάκος - Ιωάννινα") {
                            link.href = "Κοζακος.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Χαλκιδική") {
                            link.href = "ΠροφητηςΗλιαςΧαλκιδικης.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Κοζάνη") {
                            link.href = "ΠροφητηςΗλιαςΚοζανης.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αργολίδα") {
                            link.href = "ΠροφητηςΗλιαςΑργολιδα856.html";
                        } else if (rowData[1] === "Βουνά Γρεβενών - Γρεβενά") {
                            link.href = "ΒουναΓρεβενων.html";
                        } else if (rowData[1] === "Μεγαλοβούνι (Νοτζά Νταγ) - Δράμα") {
                            link.href = "ΜεγαλοβουνιΝοτζαΝταγ.html";
                        } else if (rowData[1] === "Βουνά Κοζάνης - Κοζάνη") {
                            link.href = "ΒουναΚοζανης.html";
                        } else if (rowData[1] === "Αλωνοράχη - Κοζάνη") {
                            link.href = "Αλωνοραχη.html";
                        } else if (rowData[1] === "Βερτίσκος - Θεσσαλονίκη") {
                            link.href = "Βερτισκος.html";
                        } else if (rowData[1] === "Χολομώντας - Χαλκιδική") {
                            link.href = "Χολομωντας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Τσιότινα) - Γρεβενά") {
                            link.href = "ΠροφητηςΗλιαςΤσιοτινα.html";
                        } else if (rowData[1] === "Αράκυνθος - Αιτωλοακαρνανία") {
                            link.href = "Αρακυνθος.html";
                        } else if (rowData[1] === "Άγιος Αρσένιος - Φωκίδα") {
                            link.href = "ΑγιοςΑρσενιος.html";
                        } else if (rowData[1] === "Ξερακιώνα - Βοιωτία") {
                            link.href = "Ξερακιωνα.html";
                        } else if (rowData[1] === "Λυκότρυπα - Γρεβενά") {
                            link.href = "Λυκοτρυπα.html";
                        } else if (rowData[1] === "Αετοράχη - Γρεβενά, Κοζάνη") {
                            link.href = "ΑετοραχηΓρεβενων.html";
                        } else if (rowData[1] === "Τσούκα Καραλή - Γρεβενά") {
                            link.href = "ΤσουκαΚαραλη.html";
                        } else if (rowData[1] === "Σκοπός - Κοζάνη") {
                            link.href = "Σκοπος.html";
                        } else if (rowData[1] === "Αετοβούνι - Κοζάνη") {
                            link.href = "Αετοβουνι.html";
                        } else if (rowData[1] === "Όρη Λεκάνης - Δράμα, Καβάλα") {
                            link.href = "ΟρηΛεκανης.html";
                        } else if (rowData[1] === "Κρούσσια Όρη (Μαυροβούνι, Καρά Νταγ) - Κιλκίς, Σέρρες") {
                            link.href = "ΚρουσσιαΟρηΜαυροβουνι.html";
                        } else if (rowData[1] === "Αμπέλια - Βοιωτία") {
                            link.href = "Αμπελια.html";
                        } else if (rowData[1] === "Αφρόσι - Εύβοια") {
                            link.href = "Αφροσι.html";
                        } else if (rowData[1] === "Βλαχοβούνι - Εύβοια") {
                            link.href = "Βλαχοβουνι.html";
                        } else if (rowData[1] === "Αμάλια - Βοιωτία") {
                            link.href = "Αμαλια.html";
                        } else if (rowData[1] === "Σταυρός - Αιτωλοακαρνανία") {
                            link.href = "Σταυρος.html";
                        } else if (rowData[1] === "Ζωιτός - Βοιωτία") {
                            link.href = "Ζωιτος.html";
                        } else if (rowData[1] === "Μπιρμπιλιώ - Φθιώτιδα") {
                            link.href = "Μπιρμπιλιω.html";
                        } else if (rowData[1] === "Άγιοι Θεόδωροι - Φθιώτιδα") {
                            link.href = "ΑγιοιΘεοδωροι.html";
                        } else if (rowData[1] === "Βουδόχη - Εύβοια") {
                            link.href = "Βουδοχη.html";
                        } else if (rowData[1] === "Αρκουδότρυπα - Εύβοια") {
                            link.href = "Αρκουδοτρυπα.html";
                        } else if (rowData[1] === "Κορομπίλι - Βοιωτία") {
                            link.href = "Κορομπιλι.html";
                        } else if (rowData[1] === "Σκοτεινή - Εύβοια") {
                            link.href = "Σκοτεινη.html";
                        } else if (rowData[1] === "Ορτάρι - Εύβοια") {
                            link.href = "Ορταρι.html";
                        } else if (rowData[1] === "Τελέθριο - Εύβοια") {
                            link.href = "Τελεθριο.html";
                        } else if (rowData[1] === "Ευβοϊκός Όλυμπος - Εύβοια") {
                            link.href = "ΕυβοικοςΟλυμπος.html";
                        } else if (rowData[1] === "Καλπακόβραχος - Εύβοια") {
                            link.href = "Καλπακοβραχος.html";
                        } else if (rowData[1] === "Πυξαριάς - Εύβοια") {
                            link.href = "Πυξαριας.html";
                        } else if (rowData[1] === "Όρη Λιδωρικίου - Φωκίδα") {
                            link.href = "ΟρηΛιδωρικιου.html";
                        } else if (rowData[1] === "Ταναΐδα - Εύβοια") {
                            link.href = "Ταναιδα.html";
                        } else if (rowData[1] === "Μεγάλα Όντρια (Όδρυα) - Καστοριά, Κοζάνη") {
                            link.href = "ΜεγαλαΟντρια.html";
                        } else if (rowData[1] === "Αλεβίτσα - Καστοριά") {
                            link.href = "Αλεβιτσα.html";
                        } else if (rowData[1] === "Τάλιαρος (Θανασούλας) - Γρεβενά, Καστοριά") {
                            link.href = "Ταλιαρος.html";
                        } else if (rowData[1] === "Λιάγκουνα (Κοπάνες) - Γρεβενά") {
                            link.href = "Λιαγκουνα.html";
                        } else if (rowData[1] === "Όρλιακας (Σπίλος) - Γρεβενά") {
                            link.href = "Ορλιακας.html";
                        } else if (rowData[1] === "Άγκιστρο (Τσιγγέλι) - Σέρρες") {
                            link.href = "Αγκιστρο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B - Καστοριά") {
                            link.href = "ΠροφητηςΗλιαςΚαστοριας.html";
                        } else if (rowData[1] === "Τρίκορφο - Ευρυτανία") {
                            link.href = "ΤρικορφοΕυρυτανιας.html";
                        } else if (rowData[1] === "Λασποχώματα (Μπλος) - Ευρυτανία") {
                            link.href = "Λασποχωματα.html";
                        } else if (rowData[1] === "Ανάληψη - Αιτωλοακαρνανία") {
                            link.href = "Αναληψη.html";
                        } else if (rowData[1] === "Πάστρα - Αττική, Βοιωτία") {
                            link.href = "Παστρα.html";
                        } else if (rowData[1] === "Μεσσάπιον Όρος - Βοιωτία") {
                            link.href = "ΜεσσαπιονΟρος.html";
                        } else if (rowData[1] === "Πύργος - Εύβοια") {
                            link.href = "ΠυργοςΕυβοιας.html";
                        } else if (rowData[1] === "Σκαφίδα - Καρδίτσα") {
                            link.href = "Σκαφιδα.html";
                        } else if (rowData[1] === "Ελατιά (Καράντερε) - Δράμα") {
                            link.href = "ΕλατιαΚαραντερε.html";
                        } else if (rowData[1] === "Καζάνι Αποσκέπου - Καστοριά") {
                            link.href = "ΚαζανιΑποσκεπου.html";
                        } else if (rowData[1] === "Τζένα (Ζιώνα) - Πέλλα") {
                            link.href = "Τζενα.html";
                        } else if (rowData[1] === "Καμβούνια Όρη (Βουνάσα) - Γρεβενά, Κοζάνη") {
                            link.href = "ΚαμβουνιαΟρη.html";
                        } else if (rowData[1] === "Τσούκα Ρόσσα (Κοκκινόραχη) - Ιωάννινα") {
                            link.href = "ΤσουκαΡοσσα.html";
                        } else if (rowData[1] === "Φλάμπουρο (Καραβούνι, Καρβούνι) - Ιωάννινα") {
                            link.href = "ΦλαμπουροΚαραβουνι.html";
                        } else if (rowData[1] === "Ταμπούρι (Οχυρό) - Ιωάννινα") {
                            link.href = "ΤαμπουριΟχυρο.html";
                        } else if (rowData[1] === "Μιτσικέλι - Ιωάννινα") {
                            link.href = "Μιτσικελι.html";
                        } else if (rowData[1] === "Κουκουρούντζος - Ιωάννινα") {
                            link.href = "ΚουκουρουντζοςΙωαννινα.html";
                        } else if (rowData[1] === "Τόμαρος (Ολύτσικας) - Ιωάννινα") {
                            link.href = "Τομαρος.html";
                        } else if (rowData[1] === "Τραπεζίτσα - Ιωάννινα") {
                            link.href = "Τραπεζιτσα.html";
                        } else if (rowData[1] === "Τρικλάριο (Βάρμπα, Σφήκα, Βάρμπα) - Φλώρινα") {
                            link.href = "Τρικλαριο.html";
                        } else if (rowData[1] === "Βέλια (Μέλλια) - Κοζάνη") {
                            link.href = "ΒελιαΜελλια.html";
                        } else if (rowData[1] === "Λαϊλιάς (Όρη Βροντούς, Ανάληψη, Προφήτης Ηλίας) - Σέρρες") {
                            link.href = "ΛαιλιαςΟρηΒροντους.html";
                        } else if (rowData[1] === "Μπαλντενήσι - Ευρυτανία") {
                            link.href = "Μπαλντενησι.html";
                        } else if (rowData[1] === "Καμενίκ - Ιωάννινα") {
                            link.href = "Καμενικ.html";
                        } else if (rowData[1] === "Ζυγός (Άσπρα Λιθάρια, Ταμπούρια Θανασάκη, Βούλγαρης) - Ιωάννινα, Τρίκαλα") {
                            link.href = "ΖυγοςΑσπραΛιθαρια.html";
                        } else if (rowData[1] === "Φλέγγα (Μαυροβούνι) - Γρεβενά, Ιωάννινα") {
                            link.href = "ΦλεγγαΜαυροβουνι.html";
                        } else if (rowData[1] === "Κακοπλεύρι (Μηλιά) - Γρεβενά, Ιωάννινα") {
                            link.href = "ΚακοπλευριΜηλια.html";
                        } else if (rowData[1] === "Αυγό (Λύγκος) - Γρεβενά, Ιωάννινα") {
                            link.href = "ΑυγοΛυγκος.html";
                        } else if (rowData[1] === "Δούσκο (Ντεμέρτσκα, Μερόπη) - Ιωάννινα") {
                            link.href = "ΔουσκοΝεμερτσκα.html";
                        } else if (rowData[1] === "Βασιλίτσα - Γρεβενά, Ιωάννινα") {
                            link.href = "Βασιλιτσα.html";
                        } else if (rowData[1] === "Τζουμέρκα (Αθαμανικά Όρη) - Άρτα") {
                            link.href = "ΤζουμερκαΑθαμανικαΟρη.html";
                        } else if (rowData[1] === "Τύμφη - Ιωάννινα") {
                            link.href = "Τυμφη.html";
                        } else if (rowData[1] === "Γράμμος - Ιωάννινα, Καστοριά") {
                            link.href = "Γραμμος.html";
                        } else if (rowData[1] === "Σμόλικας - Ιωάννινα") {
                            link.href = "Σμολικας.html";
                        } else if (rowData[1] === "Βόρας (Καϊμακτσαλάν) - Πέλλα") {
                            link.href = "Βορας.html";
                        } else if (rowData[1] === "Βέρμιο - Ημαθία, Κοζάνη") {
                            link.href = "Βερμιο.html";
                        } else if (rowData[1] === "Σινιάτσικο (Άσκιο) - Κοζάνη") {
                            link.href = "Σινιατσικο.html";
                        } else if (rowData[1] === "Όρβηλος (Αλή Μπουτούς) - Σέρρες, Δράμα") {
                            link.href = "Ορβηλος.html";
                        } else if (rowData[1] === "Μουρίκι - Κοζάνη") {
                            link.href = "Μουρικι.html";
                        } else if (rowData[1] === "Βίτσι (Βέρνο) - Καστοριά, Φλώρινα") {
                            link.href = "ΒιτσιΒερνο.html";
                        } else if (rowData[1] === "Άθως (Άγιον Όρος) - Χαλκιδική") {
                            link.href = "Αθως.html";
                        } else if (rowData[1] === "Μπέλες (Μπέλλες, Κερκίνη) - Σέρρες") {
                            link.href = "Μπελες.html";
                        } else if (rowData[1] === "Πυροστιά (Μπάλνες) - Γρεβενά") {
                            link.href = "Πυροστια.html";
                        } else if (rowData[1] === "Βαρνούντας (Περιστέρι, Βαρνούς) - Φλώρινα") {
                            link.href = "Βαρνουντας.html";
                        } else if (rowData[1] === "Πίνοβο - Πέλλα") {
                            link.href = "Πινοβο.html";
                        } else if (rowData[1] === "Πιέρια Όρη - Κοζάνη, Πιερία") {
                            link.href = "ΠιεριαΟρη.html";
                        } else if (rowData[1] === "Φρακτό (Νταλιμπόσκα) - Δράμα") {
                            link.href = "Φρακτο.html";
                        } else if (rowData[1] === "Παγγαίο - Καβάλα, Σέρρες") {
                            link.href = "Παγγαιο.html";
                        } else if (rowData[1] === "Μενοίκιο (Σμιγίνιτσα) - Δράμα, Σέρρες") {
                            link.href = "Μενοικιο.html";
                        } else if (rowData[1] === "Βόιο - Καστοριά, Κοζάνη") {
                            link.href = "Βοιο.html";
                        } else if (rowData[1] === "Πέρδικα (Σκούρτζα) - Γρεβενά") {
                            link.href = "Περδικα.html";
                        } else if (rowData[1] === "Μπούτσι (Μάλι Μάδι) - Καστοριά, Φλώρινα") {
                            link.href = "Μπουτσι.html";
                        } else if (rowData[1] === "Άγιος Παύλος (Σιβρί Τεπέ, Γρανίτης) - Δράμα") {
                            link.href = "ΑγιοςΠαυλος.html";
                        } else if (rowData[1] === "Κίρκουρη - Γρεβενά, Καστοριά") {
                            link.href = "Κιρκουρη.html";
                        } else if (rowData[1] === "Βούρινος (Μπούρινος, Ντρισινίκος) - Γρεβενά, Κοζάνη") {
                            link.href = "Βουρινος.html";
                        } else if (rowData[1] === "Άγιο Πνεύμα - Δράμα") {
                            link.href = "ΑγιοΠνευμα.html";
                        } else if (rowData[1] === "Κολώνα (Γκόλνα) - Ημαθία") {
                            link.href = "Κολωνα.html";
                        } else if (rowData[1] === "Χορτιάτης - Θεσσαλονίκη, Χαλκιδική") {
                            link.href = "Χορτιατης.html";
                        } else if (rowData[1] === "Πάικο (Φιδωτά) - Κιλκίς, Πέλλα") {
                            link.href = "Παικο.html";
                        } else if (rowData[1] === "Πύργος - Αιτωλοακαρνανία") {
                            link.href = "ΠυργοςΑιτωλοακαρνανιας.html";
                        } else if (rowData[1] === "Βίτσι - Αιτωλοακαρνανία") {
                            link.href = "ΒιτσιΑιτωλοακαρνανιας.html";
                        } else if (rowData[1] === "Παναιτωλικό - Αιτωλοακαρνανία, Ευρυτανία") {
                            link.href = "Παναιτωλικο.html";
                        } else if (rowData[1] === "Οξυά - Ευρυτανία, Φθιώτιδα, Φωκίδα") {
                            link.href = "Οξυα.html";
                        } else if (rowData[1] === "Κοκκινάρι (Άγιος Ηλίας) - Φωκίδα") {
                            link.href = "Κοκκιναρι.html";
                        } else if (rowData[1] === "Προσηλιακό (Προσηλιάκι) - Ευρυτανία") {
                            link.href = "Προσηλιακο.html";
                        } else if (rowData[1] === "Κόψι (Άγραφα) - Ευρυτανία") {
                            link.href = "Κοψι.html";
                        } else if (rowData[1] === "Χελιδόνα (Χελιδώνα) - Ευρυτανία") {
                            link.href = "Χελιδονα.html";
                        } else if (rowData[1] === "Όρη Ναυπακτίας (Κοκκινιάς) - Αιτωλοακαρνανία") {
                            link.href = "ΟρηΝαυπακτιας.html";
                        } else if (rowData[1] === "Τριανταφυλλιά - Αιτωλοακαρνανία, Ευρυτανία") {
                            link.href = "Τριανταφυλλια.html";
                        } else if (rowData[1] === "Πλατανάκι (Πλατάνι, Ζάρα) - Αιτωλοακαρνανία, Ευρυτανία") {
                            link.href = "Πλατανακι.html";
                        } else if (rowData[1] === "Τσεκούρα - Αιτωλοακαρνανία") {
                            link.href = "Τσεκουρα.html";
                        } else if (rowData[1] === "Τσακαλάκι - Αιτωλοακαρνανία") {
                            link.href = "Τσακαλακι.html";
                        } else if (rowData[1] === "Κοκκάλια - Ευρυτανία, Φθιώτιδα") {
                            link.href = "Κοκκαλια.html";
                        } else if (rowData[1] === "Άννινος - Αιτωλοακαρνανία, Ευρυτανία") {
                            link.href = "Αννινος.html";
                        } else if (rowData[1] === "Αρδίνης - Αιτωλοακαρνανία") {
                            link.href = "Αρδινης.html";
                        } else if (rowData[1] === "Κερασοβούνι - Αιτωλοακαρνανία, Φωκίδα") {
                            link.href = "Κερασοβουνι.html";
                        } else if (rowData[1] === "Αλογοβούνι - Ευρυτανία, Φθιώτιδα") {
                            link.href = "Αλογοβουνι.html";
                        } else if (rowData[1] === "Δίρφυς (Δίρφη) - Εύβοια") {
                            link.href = "Διρφυς.html";
                        } else if (rowData[1] === "Καυκί (Άγραφα) - Ευρυτανία") {
                            link.href = "Καυκι.html";
                        } else if (rowData[1] === "Ελικώνας - Βοιωτία") {
                            link.href = "Ελικωνας.html";
                        } else if (rowData[1] === "Ξεροβούνι (Βλαχοβούνι) - Αιτωλοακαρνανία, Φωκίδα") {
                            link.href = "ΞεροβουνιΒλαχοβουνι.html";
                        } else if (rowData[1] === "Πυργούλια (Φονιάς) - Αιτωλοακαρνανία, Ευρυτανία") {
                            link.href = "Πυργουλια.html";
                        } else if (rowData[1] === "Ακαρνανικά Όρη (Όρη Ξηρόμερου) - Αιτωλοακαρνανία") {
                            link.href = "ΑκαρνανικαΟρη.html";
                        } else if (rowData[1] === "Τσούμα - Ευρυτανία") {
                            link.href = "Τσουμα.html";
                        } else if (rowData[1] === "Γεράνεια Όρη - Αττική, Κορινθία") {
                            link.href = "ΓερανειαΟρη.html";
                        } else if (rowData[1] === "Μπούμιστος (Ταμπούρια) - Αιτωλοακαρνανία") {
                            link.href = "Μπουμιστος.html";
                        } else if (rowData[1] === "Ξεροβούνι - Αιτωλοακαρνανία, Φωκίδα") {
                            link.href = "ΞεροβουνιΑιτωλοακαρνανιας1502.html";
                        } else if (rowData[1] === "Καρφοπεταλιάς - Αιτωλοακαρνανία") {
                            link.href = "Καρφοπεταλιας.html";
                        } else if (rowData[1] === "Μεγάλη Λούτσα (Καψάλα) - Βοιωτία") {
                            link.href = "ΜεγαληΛουτσαΒοιωτοιας.html";
                        } else if (rowData[1] === "Κουμπί - Ευρυτανία") {
                            link.href = "Κουμπι.html";
                        } else if (rowData[1] === "Ζαγαράς (Μοτσάρα, Ζάστανι) - Βοιωτία") {
                            link.href = "Ζαγαρας.html";
                        } else if (rowData[1] === "Λυκομνήματα - Ευρυτανία, Φθιώτιδα") {
                            link.href = "Λυκομνηματα.html";
                        } else if (rowData[1] === "Ξεροβούνι - Αιτωλοακαρνανία") {
                            link.href = "ΞεροβουνιΑιτωλοακαρνανιας1571.html";
                        } else if (rowData[1] === "Νεραϊδοβούνι - Ευρυτανία") {
                            link.href = "ΝεραιδοβουνιΕυρυτανιας.html";
                        } else if (rowData[1] === "Ριγάνι (Ορίγανον) - Αιτωλοακαρνανία") {
                            link.href = "Ριγανι.html";
                        } else if (rowData[1] === "Ανάληψη (Τσούκα) - Ευρυτανία") {
                            link.href = "ΑναληψηΤσουκα.html";
                        } else if (rowData[1] === "Γουλινάς - Φθιώτιδα") {
                            link.href = "Γουλινας.html";
                        } else if (rowData[1] === "Κολλιέδες (Ντρέβιζα) - Βοιωτία") {
                            link.href = "Κολλιεδες.html";
                        } else if (rowData[1] === "Αλωνάκι - Αιτωλοακαρνανία") {
                            link.href = "Αλωνακι.html";
                        } else if (rowData[1] === "Πάρνηθα (Καραβόλα) - Αττική") {
                            link.href = "Παρνηθα.html";
                        } else if (rowData[1] === "Κωνίσκος (Κόνισκος) - Ευρυτανία") {
                            link.href = "Κωνισκος.html";
                        } else if (rowData[1] === "Κιθαιρώνας - Αττική, Βοιωτία") {
                            link.href = "Κιθαιρωνας.html";
                        } else if (rowData[1] === "Κόμπολος (Κόμπιλο) - Ευρυτανία") {
                            link.href = "Κομπολος.html";
                        } else if (rowData[1] === "Καρδαράς - Αιτωλοακαρνανία") {
                            link.href = "Καρδαρας.html";
                        } else if (rowData[1] === "Καμαράκι - Ευρυτανία") {
                            link.href = "Καμαρακι.html";
                        } else if (rowData[1] === "Καντήλι - Εύβοια") {
                            link.href = "Καντηλι.html";
                        } else if (rowData[1] === "Κοτύλαια Όρη - Εύβοια") {
                            link.href = "ΚοτυλαιαΟρη.html";
                        } else if (rowData[1] === "Ξεροβούνι (Λαφύστιον Όρος) - Βοιωτία") {
                            link.href = "ΞεροβουνιΒοιωτιας.html";
                        } else if (rowData[1] === "Λημέρι - Αιτωλοακαρνανία") {
                            link.href = "Λημερι.html";
                        } else if (rowData[1] === "Υμηττός - Αττική") {
                            link.href = "Υμηττος.html";
                        } else if (rowData[1] === "Κλόκοβα - Αιτωλοακαρνανία") {
                            link.href = "Κλοκοβα.html";
                        } else if (rowData[1] === "Πέντε Κορυφές - Ευρυτανία") {
                            link.href = "ΠεντεΚορυφες.html";
                        } else if (rowData[1] === "Μακρυνόρος - Αιτωλοακαρνανία") {
                            link.href = "ΜακρυνοροςΑιτωλοακαρνανιας.html";
                        } else if (rowData[1] === "Ξεροβούνι - Φθιώτιδα") {
                            link.href = "ΞεροβουνιΦθιωτιδας.html";
                        } else if (rowData[1] === "Ξηρόν Ορος - Εύβοια") {
                            link.href = "ΞηρονΟρος.html";
                        } else if (rowData[1] === "Δίκορφο (Βελούτσα) - Αιτωλοακαρνανία") {
                            link.href = "ΔικορφοΒελουτσα.html";
                        } else if (rowData[1] === "Βαράσοβα (Σφυρί) - Αιτωλοακαρνανία") {
                            link.href = "Βαρασοβα.html";
                        } else if (rowData[1] === "Καλαβούνι (Κολοβούνι) - Αιτωλοακαρνανία") {
                            link.href = "ΚαλαβουνιΚολοβουνι.html";
                        } else if (rowData[1] === "Ξηροβούνι - Αιτωλοακαρνανία") {
                            link.href = "ΞηροβουνιΑιτωλοακαρνανιας.html";
                        } else if (rowData[1] === "Πεταλάς (Θύαμον όρος) - Αιτωλοακαρνανία") {
                            link.href = "Πεταλας.html";
                        } else if (rowData[1] === "Τραγόσταλος - Αιτωλοακαρνανία") {
                            link.href = "Τραγοσταλος.html";
                        } else if (rowData[1] === "Φροξυλιά - Αιτωλοακαρνανία") {
                            link.href = "Φροξυλια.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Γρανίτσας) - Βοιωτία") {
                            link.href = "ΠροφητηςΗλιαςΓρανιτσας.html";
                        } else if (rowData[1] === "Όρος Κίρφις (Επάνω Καρβούνι) - Βοιωτία") {
                            link.href = "ΟροςΚιρφις.html";
                        } else if (rowData[1] === "Νεραϊδολάκκωμα - Βοιωτία, Φωκίδα") {
                            link.href = "Νεραιδολακκωμα.html";
                        } else if (rowData[1] === "Γκιώνα (Ασέληνον Όρος) - Φωκίδα") {
                            link.href = "Γκιωνα.html";
                        } else if (rowData[1] === "Βαρδούσια (Κόραξ) - Βοιωτία, Φθιώτιδα") {
                            link.href = "Βαρδουσια.html";
                        } else if (rowData[1] === "Τυμφρηστός (Βελούχι) - Ευρυτανία, Φθιώτιδα") {
                            link.href = "Τυμφρηστος.html";
                        } else if (rowData[1] === "Οίτη (Καταβόθρα) - Φθιώτιδα, Φωκίδα") {
                            link.href = "Οιτη.html";
                        } else if (rowData[1] === "Καλλίδρομο (Σαρώματα) - Φθιώτιδα") {
                            link.href = "Καλλιδρομο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Φθιώτιδα") {
                            link.href = "ΠροφητηςΗλιαςΦθιωτιδας.html";
                        } else if (rowData[1] === "Παρνασσός - Φωκίδα") {
                            link.href = "Παρνασσος.html";
                        } else if (rowData[1] === "Πατέρας - Αττική") {
                            link.href = "Πατερας.html";
                        } else if (rowData[1] === "Πεντέλη (Πεντελικό) - Αττική") {
                            link.href = "Πεντελη.html";
                        } else if (rowData[1] === "Πύργος - Ευρυτανία") {
                            link.href = "ΠυργοςΕυρυτανιας1604.html";
                        } else if (rowData[1] === "Τρία Σύνορα - Ευρυτανία") {
                            link.href = "ΤριαΣυνορα.html";
                        } else if (rowData[1] === "Φτέρη (Πτέρη) (Άγραφα) - Ευρυτανία") {
                            link.href = "Φτερη.html";
                        } else if (rowData[1] === "Καλιακούδα - Ευρυτανία") {
                            link.href = "Καλιακουδα.html";
                        } else if (rowData[1] === "Σβόνι (Μαράθια) (Άγραφα) - Ευρυτανία") {
                            link.href = "Σβονι.html";
                        } else if (rowData[1] === "Φουρκούλα (Κουκουρούντζος) (Άγραφα) - Ευρυτανία") {
                            link.href = "Φουρκουλα.html";
                        } else if (rowData[1] === "Όχη - Εύβοια") {
                            link.href = "Οχη.html";
                        } else if (rowData[1] === "Ξεροβούνι - Εύβοια") {
                            link.href = "ΞεροβουνιΕυβοιας.html";
                        } else if (rowData[1] === "Χλωμό - Φθιώτιδα") {
                            link.href = "ΧλωμοΦθιωτιδας.html";
                        } else if (rowData[1] === "Βλαχοβούνι - Φωκίδα") {
                            link.href = "ΒλαχοβουνιΦωκιδας.html";
                        } else if (rowData[1] === "Ακροκόρινθος - Κορινθία") {
                            link.href = "Ακροκορινθος.html";
                        } else if (rowData[1] === "Τσούμα Ανιάδας - Ευρυτανία") {
                            link.href = "ΤσουμαΑνιαδας.html";
                        } else if (rowData[1] === "Ποτίστρες (Κανάλα, Καλάνα) - Αιτωλοακαρνανία") {
                            link.href = "Ποτιστρες.html";
                        } else if (rowData[1] === "Λιάκουρα (Άγραφα) - Ευρυτανία") {
                            link.href = "Λιακουρα.html";
                        } else if (rowData[1] === "Μακρυνόρος - Αιτωλοακαρνανία (Ναυπακτία)") {
                            link.href = "ΜακρυνοροςΑιτωλοακαρνανιας1561.html";
                        } else if (rowData[1] === "Πέντε Πύργοι (Άγραφα) - Καρδίτσα") {
                            link.href = "ΠεντεΠυργοι.html";
                        } else if (rowData[1] === "Καταραχιάς - Ιωάννινα") {
                            link.href = "Καταρραχιας.html";
                        } else if (rowData[1] === "Βελιάς (Βελά) - Αχαΐα") {
                            link.href = "Βελια.html";
                        } else if (rowData[1] === "Μεγαλοβούνι - Αργολίδα") {
                            link.href = "ΜεγαλοβουνιΑργολιδα.html";
                        } else if (rowData[1] === "Καταραχιάς (Άγραφα) - Καρδίτσα") {
                            link.href = "ΚαταραχιαςΑγραφα.html";
                        } 
                    
                        else if (rowData[1] === "Δόβρος - Αιτωλοακαρνανία") {
                            link.href = "Δοβρος.html";
                        } else if (rowData[1] === "Κριθίνα - Λακωνία") {
                            link.href = "Κριθινα.html";
                        } else if (rowData[1] === "Τίμιος Σταυρός - Λασίθι") {
                            link.href = "ΤιμιοςΣταυρος.html";
                        } else if (rowData[1] === "Μαυροκορφή - Μαγνησία") {
                            link.href = "Μαυροκορφη.html";
                        } else if (rowData[1] === "Ψηλοκορφή - Κορινθία") {
                            link.href = "Ψηλοκορφη.html";
                        } else if (rowData[1] === "Κόχυλας - Σκύρος") {
                            link.href = "Κοχυλας.html";
                        } else if (rowData[1] === "Πυργίσκος - Λέσβος") {
                            link.href = "Πυργισκος.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Ευρυτανία") {
                            link.href = "ΠροφητηςΗλιαςΕυρυτανια786.html";
                        } else if (rowData[1] === "Αδέρες - Αργολίδα") {
                            link.href = "Αδερες.html";
                        } else if (rowData[1] === "Σερβούνι - Εύβοια") {
                            link.href = "Σερβουνι.html";
                        } else if (rowData[1] === "Πτώο - Βοιωτία") {
                            link.href = "Πτωο.html";
                        } else if (rowData[1] === "Μπουρνιάς - Σάμος") {
                            link.href = "Μπουρνιας.html";
                        } else if (rowData[1] === "Λαπίθας - Ηλεία") {
                            link.href = "Λαπιθας.html";
                        } else if (rowData[1] === "Μεγάλη Κορυφή - Ηράκλειο") {
                            link.href = "ΜεγαληΚορυφηΗρακλειοΚρητη.html";
                        } else if (rowData[1] === "Ζαλόγγου Βουνά - Πρέβεζα") {
                            link.href = "ΖαλογγουΒουνα.html";
                        } else if (rowData[1] === "Παλιαγραπιδιά - Ευρυτανία") {
                            link.href = "Παλιαγραπιδια.html";
                        } else if (rowData[1] === "Κουκουρουφλιά - Τρίκαλα") {
                            link.href = "Κουκουρουφλια.html";
                        } else if (rowData[1] === "Χελμός - Αρκαδία, Λακωνία") {
                            link.href = "ΧελμοςΑρκαδιαΛακωνια.html";
                        } else if (rowData[1] === "Κοκκινίτσα - Θεσπρωτία") {
                            link.href = "Κοκκινιτσα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Ευρυτανία") {
                            link.href = "ΠροφητηςΗλιαςΕυρυτανια764.html";
                        } else if (rowData[1] === "Πετράλωνα - Αιτωλοακαρνανία") {
                            link.href = "Πετραλωνα.html";
                        } else if (rowData[1] === "Πορί - Λακωνία") {
                            link.href = "Πορι.html";
                        } else if (rowData[1] === "Άγιοι Πάντες - Πάρος") {
                            link.href = "ΑγιοιΠαντεςΠαρος.html";
                        } else if (rowData[1] === "Γραμβούσα - Χανιά") {
                            link.href = "Γραμβουσα.html";
                        } else if (rowData[1] === "Στειρομάνδρα - Λασίθι") {
                            link.href = "Στειρομανδρα.html";
                        } else if (rowData[1] === "Βουνί (Οχθονιά) - Εύβοια") {
                            link.href = "ΒουνιΕυβοια.html";
                        } else if (rowData[1] === "Κρυοκεφάλα (Κρίμιανη) - Λασίθι") {
                            link.href = "Κρυοκεφαλα.html";
                        } else if (rowData[1] === "Κομποβούνι - Αχαΐα") {
                            link.href = "Κομποβουνι.html";
                        } else if (rowData[1] === "Παλιοπρέβεζα - Ευρυτανία") {
                            link.href = "Παλιοπρεβεζα.html";
                        } else if (rowData[1] === "Βραχιώνας - Ζάκυνθος") {
                            link.href = "Βραχιωνας.html";
                        } else if (rowData[1] === "Ντουσκάρας Βουνά - Ιωάννινα") {
                            link.href = "Ντουσκαρας.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B - Αχαΐα") {
                            link.href = "ΠροφητηςΗλιαςΑχαια.html";
                        } else if (rowData[1] === "Μέγας Λάκκος - Λευκάδα") {
                            link.href = "ΜεγαςΛακκοςΛευκαδα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Μήλος") {
                            link.href = "ΠροφητηςΗλιαςΜηλος.html";
                        } else if (rowData[1] === "Όνυχας - Χανιά") {
                            link.href = "Ονυχας.html";
                        } else if (rowData[1] === "Χρυσοβίτσας Βουνό - Αιτωλοακαρνανία") {
                            link.href = "Χρυσοβιτσας.html";
                        } else if (rowData[1] === "Φλιάμπουρι - Θεσπρωτία") {
                            link.href = "Φλιαμπουρι.html";
                        } else if (rowData[1] === "Σαγματάς - Βοιωτία") {
                            link.href = "Σαγματας.html";
                        } else if (rowData[1] === "Βουνί - Κάλαμος") {
                            link.href = "ΒουνιΚαλαμος.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Λακωνία") {
                            link.href = "ΠροφητηςΗλιαςΛακωνια744.html";
                        } else if (rowData[1] === "Χελώνα (Χελώνη) - Αργολίδα") {
                            link.href = "ΧελωναΧελωνη.html";
                        } else if (rowData[1] === "Πυργάκι - Εύβοια") {
                            link.href = "Πυργακι.html";
                        } else if (rowData[1] === "Βενή Κορυφή (Βένι) - Ρέθυμνο") {
                            link.href = "Βενη.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Αριά) - Άρτα") {
                            link.href = "ΠροφητηςΗλιαςΑριαΑρτα.html";
                        } else if (rowData[1] === "Ξεροσουβάλα - Εύβοια") {
                            link.href = "Ξεροσουβαλα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Άγιος Ηλίας, Κουρί) - Θεσσαλονίκη") {
                            link.href = "ΠροφητηςΗλιαςΘεσσαλονικηΚουρι.html";
                        } else if (rowData[1] === "Γερακώνας (Γερακώνες) - Άνδρος") {
                            link.href = "Γερακονας.html";
                        } else if (rowData[1] === "Ξεροβούνι - Καρδίτσα") {
                            link.href = "ΞεροβουνιΚαρδιτσα734.html";
                        } else if (rowData[1] === "Βασιλικό - Ηράκλειο") {
                            link.href = "ΒασιλικοΗρακλειο.html";
                        } else if (rowData[1] === "Χασιού Κορυφή - Χανιά") {
                            link.href = "ΧασιουΚορυφη.html";
                        } else if (rowData[1] === "Κορυφή - Κορινθία") {
                            link.href = "ΚορυφηΚορινθια731.html";
                        } else if (rowData[1] === "Όρη Ζάρκου - Λάρισα, Τρίκαλα") {
                            link.href = "ΖαρκουΟρηΘεσσαλια.html";
                        } else if (rowData[1] === "Τσικνιάς - Τήνος") {
                            link.href = "Τσικνιας.html";
                        } else if (rowData[1] === "Μαυροβούνι (Χαλκοδόνιον, Καραντάου) - Λάρισα") {
                            link.href = "ΜαυροβουνιΛαρισα725.html";
                        } else if (rowData[1] === "Στρογγυλό - Κορινθία") {
                            link.href = "Στρογγυλο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Άγιος Ηλίας) - Φθιώτιδα") {
                            link.href = "ΠροφητηςΗλιαςΦθιωτιδα724.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Κορινθία") {
                            link.href = "ΠροφητηςΗλιαςΚορινθια724.html";
                        } else if (rowData[1] === "Τύμπανο (Κορακοβούνι) - Κορινθία") {
                            link.href = "Τυμπανο.html";
                        } else if (rowData[1] === "Περιστέρι (Γκαλόσι, Χήμι) - Εύβοια") {
                            link.href = "ΠεριστεριΕυβοια.html";
                        } else if (rowData[1] === "Μόβρη - Αχαΐα, Ηλεία") {
                            link.href = "Μοβρη.html";
                        } else if (rowData[1] === "Λούτσι - Λασίθι") {
                            link.href = "ΛουτσιΛασιθι.html";
                        } else if (rowData[1] === "Απιδιανά Βουνά - Λασίθι") {
                            link.href = "Απιδιανα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Κάρπαθος") {
                            link.href = "ΠροφητηςΗλιαςΚαρπαθος.html";
                        } else if (rowData[1] === "Άγιοι Σαράντα - Άνδρος") {
                            link.href = "ΑγιοιΣαρανταΑνδρος.html";
                        } else if (rowData[1] === "Μαγκλαβάς - Μεσσηνία") {
                            link.href = "Μαγκλαβας.html";
                        } else if (rowData[1] === "Ετιανή Κεφάλα - Λασίθι") {
                            link.href = "ΕτιανηΚεφαλα.html";
                        } else if (rowData[1] === "Παλαιόκαστρο - Βοιωτία") {
                            link.href = "Παλαιοκαστρο.html";
                        } else if (rowData[1] === "Πύργος - Ίος") {
                            link.href = "ΠυργοςΙος.html";
                        } else if (rowData[1] === "Ορκίλλι - Κάρπαθος") {
                            link.href = "Ορκιλλι.html";
                        } else if (rowData[1] === "Πλακοκεφάλα - Λασίθι") {
                            link.href = "Πλακοκεφαλα.html";
                        } else if (rowData[1] === "Παλιοσαμαρίνα - Τρίκαλα") {
                            link.href = "Παλιοσαμαρινα.html";
                        } else if (rowData[1] === "Βαβύλα - Λακωνία") {
                            link.href = "Βαβιλα.html";
                        } else if (rowData[1] === "Κουλούρα - Κάρπαθος") {
                            link.href = "ΚουλουραΚαρπαθος.html";
                        } else if (rowData[1] === "Χρουσαίικο Βουνό - Αρκαδία") {
                            link.href = "Χρουσαιικο.html";
                        } else if (rowData[1] === "Βερσενίκος - Βοιωτία") {
                            link.href = "Βερσενικος.html";
                        } else if (rowData[1] === "Ψήλωμα (Βατόνια, Νέϊφτος) - Χαλκιδική") {
                            link.href = "ΨηλωμαΧαλκιδικη.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αργολίδα") {
                            link.href = "ΠροφητηςΗλιαςΑργολιδα702.html";
                        } else if (rowData[1] === "Κάδιστο - Λασίθι") {
                            link.href = "Καδιστο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Κορινθία") {
                            link.href = "ΠροφητηςΗλιαςΚορινθια701.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Άρτα") {
                            link.href = "ΠροφητηςΗλιαςΑρτα701.html";
                        } else if (rowData[1] === "Μεγαβούνι (Πυργιώσα) - Αργολίδα") {
                            link.href = "ΜεγαβουνιΑργολιδα.html";
                        } else if (rowData[1] === "Μικρό - Ηράκλειο") {
                            link.href = "ΜικροΗρακλειο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Αμοργός") {
                            link.href = "ΠροφητηςΗλιαςΑμοργος.html";
                        } else if (rowData[1] === "Χορεύτρα - Λέσβος") {
                            link.href = "Χορευτρα.html";
                        } else if (rowData[1] === "Γούπατα - Αιτωλοακαρνανία") {
                            link.href = "Γουπατα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Νίσυρος") {
                            link.href = "ΠροφητηςΗλιαςΝισυρος.html";
                        } else if (rowData[1] === "Πασχαλιές - Βοιωτία") {
                            link.href = "Πασχαλιες.html";
                        } else if (rowData[1] === "Μέγα Όρος - Αιτωλοακαρνανία") {
                            link.href = "ΜεγαΟροςΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Φθιώτιδα") {
                            link.href = "ΠροφητηςΗλιαςΦθιωτιδα.html";
                        } else if (rowData[1] === "Πυραμίδα - Κιλκίς") {
                            link.href = "ΠυραμιδαΚιλκις.html";
                        } else if (rowData[1] === "Βράχος - Δράμα") {
                            link.href = "ΒραχοςΔραμα.html";
                        } else if (rowData[1] === "Σύμβολο - Καβάλα") {
                            link.href = "Συμβολο.html";
                        } else if (rowData[1] === "Τίτανος (Δοβρούτσι) - Καρδίτσα, Λάρισα, Τρίκαλα") {
                            link.href = "Τιτανος.html";
                        } else if (rowData[1] === "Βλοχός - Αιτωλοακαρνανία") {
                            link.href = "Βλοχος.html";
                        } else if (rowData[1] === "Λαχανά Βουνά (Λαχανάς) - Θεσσαλονίκη") {
                            link.href = "Λαχανας.html";
                        } else if (rowData[1] === "Χόμαλης - Κάρπαθος") {
                            link.href = "Χομαλης.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Άνδρος") {
                            link.href = "ΠροφητηςΗλιαςΑνδρος684.html";
                        } else if (rowData[1] === "Πυραμίς - Αιτωλοακαρνανία") {
                            link.href = "ΠυραμιςΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Βίγλα - Ηράκλειο") {
                            link.href = "ΒιγλαΗρακλειο.html";
                        } else if (rowData[1] === "Στύρων Βουνά - Εύβοια") {
                            link.href = "ΣτυρωνΒουνα.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Σίφνος") {
                            link.href = "ΠροφητηςΗλιαςΣιφνος.html";
                        } else if (rowData[1] === "Πεζούλισες - Αχαΐα") {
                            link.href = "Πεζουλισες.html";
                        } else if (rowData[1] === "Ίσμαρος - Ροδόπη") {
                            link.href = "ΙσμαροςΡοδοπη.html";
                        } else if (rowData[1] === "Δέλφι - Σκόπελος") {
                            link.href = "ΔελφιΣκοπελος.html";
                        } else if (rowData[1] === "Μακρυά Λενιά - Εύβοια") {
                            link.href = "ΜακρυαΛενια.html";
                        } else if (rowData[1] === "Λυκοχωρίου Βουνό - Αρκαδία") {
                            link.href = "ΛυκοχωριουΒουνο.html";
                        } else if (rowData[1] === "Κουλές - Ρέθυμνο") {
                            link.href = "ΚουλεςΡεθυμνο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Κάλυμνος") {
                            link.href = "ΠροφητηςΗλιαςΚαλυμνος.html";
                        } else if (rowData[1] === "Πριονόσκαλα - Αιτωλοακαρνανία") {
                            link.href = "Πριονοσκαλα.html";
                        } else if (rowData[1] === "Σκάρος - Λευκάδα") {
                            link.href = "ΣκαροςΛευκαδα.html";
                        } else if (rowData[1] === "Αητοράχη - Λέσβος") {
                            link.href = "ΑητοραχηΛεσβος.html";
                        } else if (rowData[1] === "Αντίμηλος - Αντίμηλος") {
                            link.href = "Αντιμηλος.html";
                        } else if (rowData[1] === "Ξυλόκαστρο - Αχαΐα") {
                            link.href = "ΞυλοκαστροΑχαια.html";
                        } else if (rowData[1] === "Νερόβουλο - Ιθάκη") {
                            link.href = "ΝεροβουλοΙθακη.html";
                        } else if (rowData[1] === "Κάστρο (Σιδηρόκαστρο) - Μεσσηνία") {
                            link.href = "ΚαστροΜεσσηνια.html";
                        } else if (rowData[1] === "Βόλβης Όρη - Θεσσαλονίκη") {
                            link.href = "ΒολβηςΟρη.html";
                        } else if (rowData[1] === "Ψηλή Ράχη - Αιτωλοακαρνανία") {
                            link.href = "ΨηληΡαχη.html";
                        } else if (rowData[1] === "Βάραθρο - Θεσπρωτία") {
                            link.href = "Βαραθρο.html";
                        } else if (rowData[1] === "Γριά Βίγλα - Ηράκλειο") {
                            link.href = "ΓριαΒιγλαΗρακλειο.html";
                        } else if (rowData[1] === "Φορτέτζα - Ρέθυμνο") {
                            link.href = "ΦορτετζαΡεθυμνο.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Φθιώτιδα") {
                            link.href = "ΠροφητηςΗλιαςΦθιωτιδα655.html";
                        } else if (rowData[1] === "Κορυφή - Έβρος") {
                            link.href = "ΚορυφηΕβρος654.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Τήλος") {
                            link.href = "ΠροφητηςΗλιαςΤηλος.html";
                        } else if (rowData[1] === "Γέρο Γιώργης - Αιτωλοακαρνανία") {
                            link.href = "ΓεροΓιωργης.html";
                        } else if (rowData[1] === "Διονυσοβούνι - Αττική") {
                            link.href = "Διονυσοβουνι.html";
                        } else if (rowData[1] === "Μεσοβούνι - Τήνος") {
                            link.href = "ΜεσοβουνιΤηνος.html";
                        } else if (rowData[1] === "Πάνειο - Αττική") {
                            link.href = "ΠανειοΑττικη.html";
                        } else if (rowData[1] === "Λίμη (Λουκίσσα) - Κεφαλληνία") {
                            link.href = "ΛιμηΚεφαλληνια.html";
                        } else if (rowData[1] === "Μύτη - Εύβοια") {
                            link.href = "ΜυτηΕυβοια.html";
                        } else if (rowData[1] === "Βαρνάβας (Μαυροβούνι) - Αττική") {
                            link.href = "ΒαρναβαςΑττικη.html";
                        } else if (rowData[1] === "Μαυρηνόρα (Μαυρονόρος) - Αττική") {
                            link.href = "ΜαυρηνοραΑττικη.html";
                        } else if (rowData[1] === "Πόρτες - Μαγνησία") {
                            link.href = "ΠορτεςΜαγνησια.html";
                        } else if (rowData[1] === "Τισαίο - Μαγνησία") {
                            link.href = "ΤισαιοΜαγνησια.html";
                        } else if (rowData[1] === "Κατσίκα - Χαλκιδική") {
                            link.href = "ΚατσικαΧαλκιδικη.html";
                        } else if (rowData[1] === "Παλαρράχη - Αιτωλοακαρνανία") {
                            link.href = "Παλαρραχη.html";
                        } else if (rowData[1] === "Τραγοβούνι - Μαγνησία, Φθιώτιδα") {
                            link.href = "Τραγοβουνι.html";
                        } else if (rowData[1] === "Ριζανών Βουνό - Κιλκίς, Σέρρες") {
                            link.href = "ΡιζανωνΒουνο.html";
                        } else if (rowData[1] === "Τρίκορφο - Εύβοια") {
                            link.href = "ΤρικορφοΕυβοια.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B - Βοιωτία, Φθιώτιδα") {
                            link.href = "ΠροφητηςΗλιαςΒοιωτιαΦθιωτιδα637.html";
                        } else if (rowData[1] === "Πέρδικας Βουνό - Θεσπρωτία") {
                            link.href = "ΠερδικαςΒουνο.html";
                        } else if (rowData[1] === "Κεφάλα - Ηράκλειο") {
                            link.href = "ΚεφαλαΗρακλειο.html";
                        } else if (rowData[1] === "Αχριανοβούνι - Αρκαδία") {
                            link.href = "Αχριανοβουνι.html";
                        } else if (rowData[1] === "Γυμνούλα - Θεσπρωτία") {
                            link.href = "Γυμνουλα.html";
                        } else if (rowData[1] === "Παχύ Βουνό - Σαρία") {
                            link.href = "ΠαχυΒουνο.html";
                        } else if (rowData[1] === "Παναγία (Πολύφεγγος) - Κορινθία") {
                            link.href = "ΠαναγιαΚορινθια.html";
                        } else if (rowData[1] === "Μετέωρα - Τρίκαλα") {
                            link.href = "ΜετεωραΤρικαλα.html";
                        } else if (rowData[1] === "Ορφανός - Τρίκαλα") {
                            link.href = "ΟρφανοςΤρικαλα.html";
                        } else if (rowData[1] === "Λόφος - Καβάλα") {
                            link.href = "ΛοφοςΚαβαλα.html";
                        } else if (rowData[1] === "Ύψωμα Αδελφών Ζαχαροπούλου (Κορύλοβο) - Δράμα") {
                            link.href = "ΥψωμαΑδελφωνΖαχαροπουλου.html";
                        } else if (rowData[1] === "Χούσακας - Ηράκλειο") {
                            link.href = "ΧουσακαςΗρακλειο.html";
                        } else if (rowData[1] === "Κεφάλι - Έβρος") {
                            link.href = "ΚεφαλιΕβρος.html";
                        } else if (rowData[1] === "Αγκαθερή - Λέσβος") {
                            link.href = "ΑγκαθερηΛεσβος.html";
                        } else if (rowData[1] === "Μεγαλοβούνι - Θεσπρωτία") {
                            link.href = "ΜεγαλοβουνιΘεσπρωτια.html";
                        } else if (rowData[1] === "Ανάβλοχας - Λασίθι") {
                            link.href = "Αναβλοχας.html";
                        } else if (rowData[1] === "Τσούκα - Κέρκυρα") {
                            link.href = "ΤσουκαΚερκυρα.html";
                        } else if (rowData[1] === "Κάψαλο - Έβρος") {
                            link.href = "ΚαψαλοΕβρος.html";
                        } else if (rowData[1] === "Θέρμου Βουνό - Αιτωλοακαρνανία") {
                            link.href = "ΘερμουΒουνο.html";
                        } else if (rowData[1] === "Βίγλα - Σύμη") {
                            link.href = "ΒιγλαΣυμη.html";
                        } else if (rowData[1] === "Μερέντα - Αττική") {
                            link.href = "ΜερενταΑττικη.html";
                        } else if (rowData[1] === "Νεραϊδίτης - Λάρισα, Μαγνησία") {
                            link.href = "Νεραιδιτης.html";
                        } else if (rowData[1] === "Παλιοβούνι - Έβρος") {
                            link.href = "ΠαλιοβουνοΕβρος.html";
                        } else if (rowData[1] === "Ψήλωμα - Βοιωτία") {
                            link.href = "ΨηλωμαΒοιωτια.html";
                        } else if (rowData[1] === "Ζούρβα (Βουνό Μαλάξας) - Χανιά") {
                            link.href = "ΖουρβαΧανια.html";
                        } else if (rowData[1] === "Κουκούλα - Κάλυμνος") {
                            link.href = "ΚουκουλαΚαλυμνος.html";
                        } else if (rowData[1] === "Αλογοβούνι - Αιτωλοακαρνανία") {
                            link.href = "ΑλογοβουναΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Μεγάλο Βουνό - Ζάκυνθος") {
                            link.href = "ΜεγαλοΒουνοΖακυνθος.html";
                        } else if (rowData[1] === "Μεροβίγλι - Αιτωλοακαρνανία") {
                            link.href = "ΜεροβιγλιΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Κεχροβούνι - Τήνος") {
                            link.href = "ΚεχρουβουνιΤηνος.html";
                        } else if (rowData[1] === "Ασφεντιλές - Χανιά") {
                            link.href = "ΑσφεντιλεςΧανια.html";
                        } else if (rowData[1] === "Λούτσα - Φθιώτιδα") {
                            link.href = "ΛουτσαΦθιωτιδα.html";
                        } else if (rowData[1] === "Τσίγγανη - Θεσπρωτία") {
                            link.href = "ΤσιγγανηΘεσπρωτια.html";
                        } else if (rowData[1] === "Παλιάμπελα - Θεσπρωτία") {
                            link.href = "ΠαλιαμπελαΘεσπρωτια.html";
                        } else if (rowData[1] === "Μεγάλος Πρίωνας - Κάσος") {
                            link.href = "ΜεγαλοςΠριωναςΚασος.html";
                        } else if (rowData[1] === "Μεροβίγλι - Χάλκη") {
                            link.href = "ΜεροβιγλιΧαλκη.html";
                        } else if (rowData[1] === "Ψηλή Παναγιά - Αιτωλοακαρνανία") {
                            link.href = "ΨηληΠαναγιαΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Σουμάνι - Λακωνία") {
                            link.href = "ΣουμανιΛακωνια.html";
                        } else if (rowData[1] === "Πλαταριάς Βουνά - Θεσπρωτία") {
                            link.href = "ΠλαταριαςΒουναΘεσπρωτια.html";
                        } else if (rowData[1] === "Βουνοκορφή (Ψηλή Βίγλα) - Αργολίδα") {
                            link.href = "ΒουνοκορφηΑργολιδα.html";
                        } else if (rowData[1] === "Ανεμόμυλος - Ηράκλειο") {
                            link.href = "ΑνεμομυλοςΗρακλειο.html";
                        } else if (rowData[1] === "Μεγάλη Ράχη - Λακωνία") {
                            link.href = "ΜεγαληΡαχηΛακωνια.html";
                        } else if (rowData[1] === "Κορύφι - Κάρπαθος") {
                            link.href = "ΚορυφιΚαρπαθος.html";
                        } else if (rowData[1] === "Όψιον (Κορακόπετρα) - Λάρισα") {
                            link.href = "ΟψιονΚορακοπετρα.html";
                        } else if (rowData[1] === "Παλιόπυργος - Μαγνησία, Φθιώτιδα") {
                            link.href = "ΠαλιοπυργοςΜαγνησιαΦθιωτιδα.html";
                        } else if (rowData[1] === "Γαλατιανή - Κάλυμνος") {
                            link.href = "ΓαλατιανηΚαλυμνος.html";
                        } else if (rowData[1] === "Άντισσας Βουνά - Λέσβος") {
                            link.href = "ΑντισσαςΒουναΛεσβος.html";
                        } else if (rowData[1] === "Άγιος Ιωάννης Θεολόγος - Νίσυρος") {
                            link.href = "ΑγιοςΙωαννηςΘεολογοςΝισυρος.html";
                        } else if (rowData[1] === "Άκρος - Αργολίδα") {
                            link.href = "ΑκροςΑργολιδα.html";
                        } else if (rowData[1] === "Έρως - Ύδρα") {
                            link.href = "ΕρωςΥδρα.html";
                        } else if (rowData[1] === "Αστέρι - Ζάκυνθος") {
                            link.href = "ΑστεριΖακυνθος.html";
                        } else if (rowData[1] === "Κάψαλος (Σύσφι) - Σέριφος") {
                            link.href = "ΚαψαλοςΣυσφιΣεριφος.html";
                        } else if (rowData[1] === "Τρούλλος - Σέριφος") {
                            link.href = "ΤρουλλοςΣεριφος.html";
                        } else if (rowData[1] === "Βίγλα - Ανάφη") {
                            link.href = "ΒιγλαΑναφη.html";
                        } else if (rowData[1] === "Πηγαδούλα - Αιτωλοακαρνανία") {
                            link.href = "ΠηγαδουλαΑιτωλοακαρνανια.html";
                        } else if (rowData[1] === "Προφήτης Ηλίας (Πρινοβούνι) - Λέσβος") {
                            link.href = "ΠροφητηςΗλιαςΠρινοβουνιΛεσβος.html";
                        } else if (rowData[1] === "Φλαμουριά - Θεσπρωτία") {
                            link.href = "ΦλαμουριαΘεσπρωτια.html";
                        } else if (rowData[1] === "Μηλιανός - Κάλυμνος") {
                            link.href = "ΜηλιανοςΚαλυμνος.html";
                        } else if (rowData[1] === "Πυργιά - Ηράκλειο") {
                            link.href = "ΠυργιαΗρακλειο.html";
                        } else if (rowData[1] === "Παράριο - Βοιωτία, Φθιώτιδα") {
                            link.href = "ΠαραριοΒοιωτια.html";
                        } else if (rowData[1] === "Αϊλιάς - Λακωνία") {
                            link.href = "ΑιλιαςΛακωνια.html";
                        } else if (rowData[1] === "Δαμιανού Σωρός - Ηράκλειο") {
                            link.href = "ΔαμιανουΣωροςΗρακλειο.html";
                        } else if (rowData[1] === "Καλλιφώνιο - Αχαΐα") {
                            link.href = "Καλλιφωνιο.html";
                        } else if (rowData[1] === "Περδικούλα - Κορινθία") {
                            link.href = "Περδικουλα.html";
                        } else if (rowData[1] === "Σωρός - Ρέθυμνο") {
                            link.href = "ΣωροςΡεθυμνο.html";
                        } else if (rowData[1] === "Πετρόκαμπος - Ιωάννινα, Τρίκαλα") {
                            link.href = "Πετροκαμπος.html";
                        } else if (rowData[1] === "Βυρσίνη - Ροδόπη") {
                            link.href = "Βυρσινη.html";
                        } else if (rowData[1] === "Καθαρό (Τσίβι, Αλόιδα) - Λασίθι") {
                            link.href = "Καθαρο.html";
                        } else if (rowData[1] === "Πινακάκια - Ευρυτανία") {
                            link.href = "Πινακακια.html";
                        } else if (rowData[1] === "Κουβελαίικο Βουνό (Άγιος Ηλίας) - Μεσσηνία") {
                            link.href = "ΚουβελαιικοΒουνο.html";
                        } else if (rowData[1] === "Όρδυμνος - Λέσβος") {
                            link.href = "Ορδυμνος.html";
                        } else if (rowData[1] === "Αιγάλεω - Αττική") {
                            link.href = "ΑιγαλεωοροςΑττικη.html";
                        } else if (rowData[1] === "Ποικίλο - Αττική") {
                            link.href = "ΠοικιλοΑττικη.html";
                        }
                    
                    
                               
                        

                        link.classList.add('searchResultLink');
                        td.appendChild(link);
                    } else {
                        td.textContent = rowData[index];
                    }

                    tr.appendChild(td);
                }

                // Add YouTube icon to the last cell
             // Add a row to the table
const youtubeTd = document.createElement('td');
youtubeTd.classList.add('searchResultCell'); // Add a class for styling purposes

// Create and configure the YouTube icon
const youtubeIcon = document.createElement('img');
youtubeIcon.src = 'youtube_icon.png'; // Ensure you have a YouTube icon image
youtubeIcon.alt = 'YouTube';
youtubeIcon.classList.add('youtubeIcon');
youtubeIcon.onclick = function() {
    // Construct the YouTube search query
    const searchQuery = rowData[1] + ' ανάβαση'; // Row data from the second cell
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
};


// Append both icons to the table cell
youtubeTd.appendChild(youtubeIcon);

// Append the cell to the row
tr.appendChild(youtubeTd);

// Append the row to the table
table.appendChild(tr);

            }
        });

        if (table.children.length > 0) {
            searchResults.appendChild(table);
        } else {
            searchResults.textContent = "Δεν βρέθηκαν αποτελέσματα.";
        }
    } else {
        searchResults.textContent = "Δεν βρέθηκαν αποτελέσματα.";
    }
    
    backToHomePage.style.display = 'block';
}

async function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents default actions, such as form submission
        await search2(); // Calls the search function
    }
}
