// Hole das tbody-Element mit der ID "blocklist-domains"
const tbody = document.getElementById("blocklist-domains");

// Array zum Speichern der URLs
const blockedUrls = [];
const chunkedArrays = [];
const URLS_PER_ARRAY = 10; // Anpassbare Anzahl von URLs pro Array

// Überprüfe, ob das tbody-Element existiert
if (tbody) {
  // Hole alle tr-Elemente innerhalb des tbody
  const rows = tbody.getElementsByTagName("tr");

  // Iteriere über jede Zeile (tr)
  for (let i = 0; i < rows.length; i++) {
    // Hole alle td-Elemente innerhalb der aktuellen Zeile
    const cells = rows[i].getElementsByTagName("td");

    // Iteriere über jede Zelle (td)
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];

      // Überprüfe, ob das td-Element die gewünschten Attribute hat
      if (
        cell.getAttribute("type") === "close" &&
        cell.getAttribute("key") === "blocklist"
      ) {
        // Hole die URL aus dem blocked Attribut
        const url = cell.getAttribute("blocked");

        // Füge die URL zum Array hinzu
        blockedUrls.push(url);
      }
    }
  }

  // Teile die URLs in Arrays mit jeweils URLS_PER_ARRAY Einträgen
  for (let i = 0; i < blockedUrls.length; i += URLS_PER_ARRAY) {
    chunkedArrays.push(blockedUrls.slice(i, i + URLS_PER_ARRAY));
  }

  console.log("Blockierte URLs:", blockedUrls);
  console.log("Chunked Arrays:", chunkedArrays);

  // Funktion zum Erstellen und Herunterladen der Textdatei
  function downloadBlockedUrls(arrays) {
    // Erstelle den Inhalt der Datei mit Arrays und Funktionalität
    let content = "const urlArrays = [\n";

    // Erstelle die Arrays im richtigen Format
    arrays.forEach((arr, index) => {
      content += `    ["${arr.join('","')}"]${
        index < arrays.length - 1 ? "," : ""
      }\n`;
    });

    content += "];\n\n";

    // Füge die Funktionalität zum Einfügen der URLs hinzu
    content += `
function processBlockedUrls() {
    urlArrays.forEach((urlArray, arrayIndex) => {
        urlArray.forEach((url, index) => {
            const input = document.getElementById("block-domain");
            const button = document.getElementById("add-comain");
            
            if (input && button) {
                input.value = url;
                button.click();
                console.log(\`Added URL \${index + 1} from array \${arrayIndex + 1}: \${url}\`);
            }
        });
    });
}

// Starte den Prozess
processBlockedUrls();
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Erstelle einen Link und simuliere einen Klick darauf
    const a = document.createElement("a");
    a.href = url;
    a.download = "blocked_urls.js";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Rufe die Funktion auf
  downloadBlockedUrls(chunkedArrays);
} else {
  console.log(
    "Das tbody-Element mit der ID 'blocklist-domains' wurde nicht gefunden."
  );
}
