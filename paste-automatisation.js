const input = document.getElementById("block-domain");
const button = document.getElementById("add-domain");

// Array mit URLs
const urls = [
    "example.com",
    "test.com",
    "sample.org",
    "demo.net"
];

// Funktion zum Eingeben und Klicken
function processUrls(index = 0) {
    if (index >= urls.length) {
        console.log("Alle URLs wurden verarbeitet");
        return;
    }

    // Input-Feld leeren und neuen Wert setzen
    input.value = urls[index];
    
    // Button klicken
    button.click();
    
    // Nächste URL sofort verarbeiten
    processUrls(index + 1);
}

// Skript starten
processUrls();
