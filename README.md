# BlockSite-Hack

Die Anzahl an URLs Berechnen:

Wie man die Anzahl an URLs die herausgeholt wurden sind, um zu überprüfen, dass es wirklich alle sind? Einfach das Array mit <strong>const urlArrays</strong> oben haben mit allen darin enthaltenen URL's und dann etwas weiter unten diesen Code eingeben und ausführen und schauen, ob die Anzahl die dabei ausgegeben wird, mit der übereinstimmt, die bei Block Site zu unterst unten angezeigt wird.
```javascript
const totalUrls = urlArrays.reduce((sum, subArray) => sum + subArray.length, 0);
console.log("Gesamtzahl der URLs:", totalUrls);
```
