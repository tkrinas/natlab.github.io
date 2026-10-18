var fs = require("fs");
var path = require("path");
var vm = require("vm");

var root = path.join(__dirname, "..");
var html = fs.readFileSync(path.join(root, "index.html"), "utf8");
var keys = new Set();

for (var match of html.matchAll(/data-i18n="([^"]+)"/g)) keys.add(match[1]);
for (var attr of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
    attr[1].split(";").forEach(function (pair) {
        var key = pair.slice(pair.indexOf(":") + 1).trim();
        if (key) keys.add(key);
    });
}

var ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "i18n.js"), "utf8"), ctx);

var missing = [];
["en", "el"].forEach(function (lang) {
    keys.forEach(function (key) {
        if (ctx.STRINGS[lang][key] == null || ctx.STRINGS[lang][key] === "") missing.push(lang + " missing " + key);
    });
    Object.keys(ctx.STRINGS[lang]).forEach(function (key) {
        if (!keys.has(key)) missing.push(lang + " unused " + key);
    });
});

if (missing.length) {
    console.error(missing.join("\n"));
    process.exit(1);
}

console.log("ok " + keys.size + " keys");
