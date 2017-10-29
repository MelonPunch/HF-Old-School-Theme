// ==UserScript==
// @name       HF Old School Theme - Rebooted
// @namespace  Github
// @version    1.9
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

    var awards = $(this).find("div[style^='width']").eq(0);
    $(awards).hide();
    $(this).find(".author_statistics").eq(0).append('<br><div style="width:165px; float:right;">' + $(awards).html() + '</div>');
});

$("#panel").find(".clear").eq(0).hide();

$("span.welcome").each(function() {
    var logout_url = $(".logout").eq(0).attr("href");
    $(this).append('<span> (<a href="https://hackforums.net/usercp.php">User CP</a> – <a href="' + logout_url + '">Log Out</a>)</span>');
});

$("div.lower").each(function() {
    var new_posts = $(this).find("ul").eq(1).find("li").eq(2);
    $(new_posts).remove();
    $(this).find("ul").eq(1).prepend('<li>' + $(new_posts).html() + '</i>');
    $(this).find("ul").eq(1).find("li").each(function (index) {
        if ($(this).find("ul").eq(1).find("li").length != index){
            $(this).before("- ");
        }
    });
});


var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; ++i) {
    images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_offline.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/buddy_offline.gif');
    images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_online.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/buddy_online.gif');
    images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_away.png', 'https://notcammy.github.io/HF-Old-School-Theme/theme_images/buddy_away.gif');
}
