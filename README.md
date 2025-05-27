# 🚫 BlockSite-Hack – Export and Transfer Blocked URLs Across Devices

## 📋 Project Description

The [Block Site](https://chromewebstore.google.com/detail/block-site/nkedbnokglppcmiencngilkkhhnpcfjb) Chrome extension is a helpful tool to block access to distracting or unwanted websites. However, when you’ve blocked hundreds of URLs, transferring them to another device becomes a tedious manual task — especially since the extension does not offer any export or sync functionality.

**Solution:** This project provides two JavaScript snippets that help you:

* Extract all blocked URLs from the Block Site extension on one device.
* Check and transfer these URLs to another device manually.

---

## ⚙️ Use Cases

### ✅ 1. Calculate the Total Number of Blocked URLs

Use this snippet to calculate how many URLs are in your list. This can help ensure that your exported data is complete and matches the number shown in the Block Site extension.

```javascript
const totalUrls = urlArrays.reduce((sum, subArray) => sum + subArray.length, 0);
console.log("Total number of URLs:", totalUrls);
```

📌 **Note:** `urlArrays` should be a nested array representing the structure of the blocked URLs as stored by the extension.

---

### 🔍 2. Check if a Specific URL is Already in the List

This script allows you to quickly check whether a specific URL already exists in your blocklist:

```javascript
const urls = [
    ["01net.com", "1.ivesoccer.sx", "1001spiele.de", "11freunde.de", "1flix.to", "1v1.lol", "2048game.com", "20min.ch", "20minutes.fr", "3dvf.com"],
    ["3fach.ch", "4-4-2.com", "6abc.com", "90min.com", "90min.de", "9news.com.au", "9to5mac.com", "a16z.com", "aa.com.tr", "aarauer-nachrichten.ch"],
];

function urlExists(urlToCheck) {
    for (let i = 0; i < urls.length; i++) {
        if (urls[i].includes(urlToCheck)) {
            return true;
        }
    }
    return false;
}

const urlToCheck = "srf.de";
if (urlExists(urlToCheck)) {
    console.log(`${urlToCheck} is already in the array.`);
} else {
    console.log(`${urlToCheck} is not in the array.`);
}
```

---

## 🧭 Motivation – Why This Project Exists

The Block Site extension does not offer any built-in way to export your list of blocked URLs. If you want to use the same blocklist on multiple devices, you would have to manually re-enter all URLs — a painful process if you have dozens or hundreds of entries.

This small hack enables you to:

* Extract all blocked URLs from one device.
* Save them (e.g., on a USB stick).
* Reapply them on another device manually using the same or similar script.

📦 **Disclaimer:** This tool is intended for personal use only, to help synchronize your own blocklists between devices. Please use responsibly and only on systems you own or have permission to modify.

---

## ✍️ License

This project is not licensed. You are free to use and adapt it for private purposes.

---
