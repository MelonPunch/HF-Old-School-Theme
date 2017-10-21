// ==UserScript==
// @name       HF Old School Theme - Rebooted
// @namespace  Github
// @version    1.6
// @downloadURL https://notcammy.github.io/HF-Old-School-Theme/theme_new.user.js
// @description  This script will remove the modern theme and instead add the old theme. Rebooted by uid=2219785
// @match       *://*.hackforums.net/*
// @grant none
// ==/UserScript==
//
var hideMultiQuotes = true;

//removejscssfile('global.css', 'css');
addStyleSheet('@import "https://notcammy.github.io/HF-Old-School-Theme/global_pl.css";');


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
