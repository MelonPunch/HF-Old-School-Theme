// ==UserScript==
// @name       HF Purple Theme
// @namespace  Github
// @version    1.0
// @description  The HF Purple Theme
// @match       *://*.hackforums.net/*
// @grant none
// ==/UserScript==
//
var hideMultiQuotes = true;

//removejscssfile('global.css', 'css');
addStyleSheet('@import "https://raw.githubusercontent.com/MelonPunch/HF-Old-School-Theme/master/global_pl.css";');


function addStyleSheet(style) {
    var elementStyle = document.getElementsByTagName("HEAD")[0].appendChild(window.document.createElement('style'));
    elementStyle.innerHTML = style;
    return elementStyle;
}

function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
    var allsuspects = document.getElementsByTagName(targetelement);

    for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
}



var links = document.getElementsByClassName('links')[0];
var linksSrc = links.innerHTML;

links.style.display = 'none';

var panel = document.getElementById('panel');
panel.innerHTML = panel.innerHTML + ('<br>' + linksSrc);


var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; ++i) {
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/minion.gif', 'https://raw.githubusercontent.com/MelonPunch/HF-Old-School-Theme/master/minion.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starreg.png', 'https://raw.githubusercontent.com/MelonPunch/HF-Old-School-Theme/master/starreg.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/english/postbit_multiquote.gif', 'https://raw.githubusercontent.com/MelonPunch/HF-Old-School-Theme/master/postbit_multiquote.gif');
}
