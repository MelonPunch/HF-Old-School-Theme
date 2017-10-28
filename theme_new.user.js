// ==UserScript==
// @name       HF Old School Theme - Rebooted
// @namespace  Github
// @version    1.7
// @downloadURL https://notcammy.github.io/HF-Old-School-Theme/theme_new.user.js
// @description  This script will remove the modern theme and instead add the old theme. Rebooted by uid=2219785
// @match       *://*.hackforums.net/*
// @grant none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==
//

//removejscssfile('global.css', 'css');
addStyleSheet('@import "https://notcammy.github.io/HF-Old-School-Theme/global_new.css";\n@import "https://notcammy.github.io/HF-Old-School-Theme/star_rating.css";');
this.$ = this.jQuery = jQuery.noConflict(true);

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

$(".post").each(function() {
    var post_head = $(this).find(".post_head").eq(0);
    var html = '<div class="post_head">' + $(post_head).html() + '</div>';
    $(post_head).hide();
    $(this).prepend(html);
});

$("#panel").find(".clear").eq(0).hide();
