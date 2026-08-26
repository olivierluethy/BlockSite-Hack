// Root-Liste: der eine Rechner, mit dem alle anderen verglichen werden.
const root = [];

// Alle anderen Listen (z. B. die zwei weiteren Rechner), die man loswerden
// möchte. Beliebig viele Listen möglich.
const otherLists = [
    [],
    [],
];

// Ermittelt alle URLs, die in mindestens einer der anderen Listen vorkommen,
// aber im root fehlen. Jede fehlende URL wird nur EINMAL zurückgegeben, auch
// wenn sie in mehreren der anderen Listen vorkommt (Deduplizierung via Set).
function findMissingFromRoot(root, otherLists) {
    const rootSet = new Set(root.flat());

    const missing = new Set();
    for (const list of otherLists) {
        for (const url of list.flat()) {
            if (!rootSet.has(url)) {
                missing.add(url);
            }
        }
    }

    return [...missing];
}

// Funktion aufrufen
const missingInRoot = findMissingFromRoot(root, otherLists);
console.log("URLs, die im root fehlen (nur einmal angezeigt):", missingInRoot);
console.log("Anzahl fehlender URLs:", missingInRoot.length);
