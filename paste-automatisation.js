// Funktion zum Verarbeiten der URLs
async function processBlockedUrls() {
  const input = document.getElementById("block-domain");
  const button = document.getElementById("add-domain");

  // Prüfen, ob die Elemente existieren
  if (!input || !button) {
    console.error("Fehler: Input-Feld oder Button nicht gefunden!");
    console.log("Gesuchte IDs: block-domain (Input), add-domain (Button)");
    return;
  }

  let addedCount = 0; // Zähler für neu hinzugefügte URLs
  let existedCount = 0; // Zähler für bereits existierende URLs
  let totalProcessed = 0; // Zähler für verarbeitete URLs insgesamt
  const totalUrls = urlArrays.reduce((sum, arr) => sum + arr.length, 0); // Gesamtzahl der URLs
  let iterationCount = 0; // Fortlaufende Nummerierung für jede Iteration

  // Hilfsfunktion, die eine einzelne URL verarbeitet und eine Promise zurückgibt
  const processUrl = (url) => {
    return new Promise((resolve) => {
      try {
        input.value = url; // URL ins Input-Feld setzen
        button.click(); // Button klicken, um die Aktion auszulösen
        iterationCount++; // Nummerierung hochzählen

        // Kleine Verzögerung, um der Speicherlogik Zeit zu geben
        setTimeout(() => {
          // Prüfen, ob das Input-Feld leer ist
          if (input.value === "") {
            addedCount++; // Neu hinzugefügt
            console.log(`${iterationCount}. URL wurde hinzugefügt: ${url}`);
          } else {
            existedCount++; // Bereits existiert
            console.log(`${iterationCount}. URL hat bereits existiert: ${url}`);
            input.value = ""; // Input zurücksetzen
          }
          totalProcessed++;
          resolve(); // Promise auflösen, um zur nächsten URL zu gehen
        }, 50); // 50ms Verzögerung für die Prüfung
      } catch (error) {
        console.error(`Fehler beim Hinzufügen von ${url}: ${error}`);
        totalProcessed++;
        iterationCount++;
        setTimeout(() => resolve(), 50); // Auch bei Fehler fortfahren
      }
    });
  };

  // Sequenzielle Verarbeitung der URLs
  for (const urlArray of urlArrays) {
    for (const url of urlArray) {
      await processUrl(url); // Warten, bis die aktuelle URL verarbeitet ist
    }
  }

  // Zusammenfassung ausgeben, nachdem alle URLs verarbeitet wurden
  console.log(`\nZusammenfassung:`);
  console.log(`Neu hinzugefügte URLs: ${addedCount}`);
  console.log(`Bereits existierende URLs: ${existedCount}`);
  console.log(`Gesamt verarbeitete URLs: ${totalProcessed}`);
}

// Prozess starten
processBlockedUrls();
