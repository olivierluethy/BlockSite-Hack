const tbody = document.getElementById("blocklist-domains");
const blockedUrls = [];
const chunkedArrays = [];
const URLS_PER_ARRAY = 10;

if (tbody) {
  const rows = tbody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (
        cell.getAttribute("type") === "close" &&
        cell.getAttribute("key") === "blocklist"
      ) {
        const url = cell.getAttribute("blocked");
        blockedUrls.push(url);
      }
    }
  }

  for (let i = 0; i < blockedUrls.length; i += URLS_PER_ARRAY) {
    chunkedArrays.push(blockedUrls.slice(i, i + URLS_PER_ARRAY));
  }

  console.log("Blockierte URLs:", blockedUrls);
  console.log("Chunked Arrays:", chunkedArrays);

  function downloadBlockedUrls(arrays) {
    let content = "const urlArrays = [\n";
    arrays.forEach((arr, index) => {
      content += `    ["${arr.join('","')}"]${index < arrays.length - 1 ? "," : ""}\n`;
    });
    content += "];\n\n";

    content += `
function processBlockedUrls(arrayIndex = 0, urlIndex = 0) {
    // Prüfen, ob alle Arrays und URLs verarbeitet wurden
    if (arrayIndex >= urlArrays.length) {
        console.log("Alle URLs wurden verarbeitet");
        return;
    }

    // Prüfen, ob das aktuelle Unterarray URLs enthält
    if (urlIndex >= urlArrays[arrayIndex].length) {
        // Zum nächsten Unterarray wechseln
        processBlockedUrls(arrayIndex + 1, 0);
        return;
    }

    // Input-Feld und Button holen
    const input = document.getElementById("block-domain");
    const button = document.getElementById("add-domain");
    
    if (input && button) {
        input.value = urlArrays[arrayIndex][urlIndex];
        button.click();
        console.log(\`Added URL \${urlIndex + 1} from array \${arrayIndex + 1}: \${urlArrays[arrayIndex][urlIndex]}\`);
        
        // Nächste URL im aktuellen Unterarray oder nächstes Unterarray verarbeiten
        processBlockedUrls(arrayIndex, urlIndex + 1);
    } else {
        console.error("Input-Feld oder Button nicht gefunden. Stellen Sie sicher, dass die IDs 'block-domain' und 'add-domain' korrekt sind.");
    }
}

// Starte den Prozess
processBlockedUrls();
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blocked_urls.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  downloadBlockedUrls(chunkedArrays);
} else {
  console.log(
    "Das tbody-Element mit der ID 'blocklist-domains' wurde nicht gefunden."
  );
}
