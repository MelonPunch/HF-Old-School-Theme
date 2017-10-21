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
addStyleSheet('@import "https://notcammy.github.io/HF-Old-School-Theme/global_new.css";\n@import "https://notcammy.github.io/HF-Old-School-Theme/star_rating.css";');


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

if (hideMultiQuotes === true) {
    var multiQuotes = document.getElementsByTagName('img');
    for (i = 0; i < multiQuotes.length; i++) {
        if (multiQuotes[i].getAttribute('src') === 'https://hackforums.net/images/modern_bl/english/postbit_multiquote.gif')
        {
            multiQuotes[i].style.display = 'none';
        }
        if (multiQuotes[i].getAttribute('src') === 'https://hackforums.net/images/modern_pl/english/postbit_multiquote.gif')
        {
            multiQuotes[i].style.display = 'none';
        }
    }
}

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; ++i) {
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starreg.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/star.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starl33t.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/star.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/staradmin.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/star.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starstaff.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/staff_star1.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/logo-hf.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/logo.jpg');
        images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/ub3r.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/ub3r.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/ub3r.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/ub3r.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/3p1c.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/3p1c.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/admin-bar.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/admin.jpg');
        images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/staff.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/staff.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/staff.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/staff.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/writers2.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/Writers.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/mentor.jpg', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/mentor.jpg');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/mentor.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/mentor.jpg');
        images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/l33t.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/hf_l33t.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/l33t.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/hf_l33t.png');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starub3r2.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/ub3rstar.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/minion.gif', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/minion.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_offline.gif', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/buddy_offline.gif');
        images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_online.gif', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/buddy_online.gif');
}
