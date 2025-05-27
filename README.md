# BlockSite-Hack

Cross-Device Possibility
Wozu habe ich mir dieses Skript gebaut?
Ich nutze die Erweiterung [Block Site](https://chromewebstore.google.com/detail/block-site/nkedbnokglppcmiencngilkkhhnpcfjb). Aber da ich tonnenweise von Webseiten damit blockiere, kann es sehr erschwinglich werden, wenn ich versuchen würde, alle Webseiten auf einem anderen Gerät einzugeben, nur damit ich sie von einem Gerät in ein anderes übertragen kann.

Genau deswegen habe ich mir diese beiden Skripte gebaut, damit ich zumal alle URLs von der Webseiten die ich mir zuvor auf der Webseite eingegeben habe holen kann und sie dann quasi auf einem anderen Gerät, im Browser, also auf der Seite der Erweiterung die ich nur sehen kann, wenn ich sie auch dort heruntergeladen hätte damit ich dort alle Webseiten übertragen habe.

Die Anzahl an URLs Berechnen:

Wie man die Anzahl an URLs die herausgeholt wurden sind, um zu überprüfen, dass es wirklich alle sind? Einfach das Array mit <strong>const urlArrays</strong> oben haben mit allen darin enthaltenen URL's und dann etwas weiter unten diesen Code eingeben und ausführen und schauen, ob die Anzahl die dabei ausgegeben wird, mit der übereinstimmt, die bei Block Site zu unterst unten angezeigt wird.
```javascript
const totalUrls = urlArrays.reduce((sum, subArray) => sum + subArray.length, 0);
console.log("Gesamtzahl der URLs:", totalUrls);
```

Zum Überprüfen ob sich eine URL bereits in unserer Liste sich befindet kann folgendes gemacht werden:

```javascript

const urls = [
    ["01net.com", "1.ivesoccer.sx", "1001spiele.de", "11freunde.de", "1flix.to", "1v1.lol", "2048game.com", "20min.ch", "20minutes.fr", "3dvf.com"],
    ["3fach.ch", "4-4-2.com", "6abc.com", "90min.com", "90min.de", "9news.com.au", "9to5mac.com", "a16z.com", "aa.com.tr", "aarauer-nachrichten.ch"],
];

function urlExists(urlToCheck) {
    for (let i = 0; i < urls.length; i++) {
        if (urls[i].includes(urlToCheck)) {
            return true; // URL gefunden
        }
    }
    return false; // URL nicht gefunden
}

// Beispielaufruf
const urlToCheck = "srf.de";
if (urlExists(urlToCheck)) {
    console.log(`${urlToCheck} ist im Array vorhanden.`);
} else {
    console.log(`${urlToCheck} ist im Array nicht vorhanden.`);
}

```
