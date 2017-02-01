// ==UserScript==
// @name       Old School HF Theme - Rebooted
// @namespace  Github
// @version    2.7
// @description  This script will remove the modern theme and instead add the old theme. Rebooted by uid=2219785
// @match       *://*.hackforums.net/*
// @grant none
// ==/UserScript==
     
window.addEventListener('load', function() { 
var images = document.getElementsByTagName('img'); 
for (var i = 0; i < images.length; i++) { 
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starreg.png', 'https://715.wf/data/misc/theme_images/star.gif');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starl33t.png', 'https://715.wf/data/misc/theme_images/star.gif'); 
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/staradmin.png', 'https://715.wf/data/misc/theme_images/star.gif');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starstaff.png', 'https://715.wf/data/misc/theme_images/staff_star1.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/logo_bl.gif', 'https://715.wf/data/misc/theme_images/logo.jpg');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_pl/logo_pl.gif', 'https://715.wf/data/misc/theme_images/logo.jpg');
images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/ub3r.png', 'https://715.wf/data/misc/theme_images/ub3r.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/ub3r.png', 'https://715.wf/data/misc/theme_images/ub3r.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/3p1c.png', 'https://715.wf/data/misc/theme_images/3p1c.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/admin-bar.png', 'https://715.wf/data/misc/theme_images/admin.jpg');
images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/staff.png', 'https://715.wf/data/misc/theme_images/staff.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/staff.png', 'https://715.wf/data/misc/theme_images/staff.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/writers2.png', 'https://715.wf/data/misc/theme_images/Writers.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/mentor.jpg', 'https://715.wf/data/misc/theme_images/mentor.jpg');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/mentor.png', 'https://715.wf/data/misc/theme_images/mentor.jpg');
images[i].src = images[i].src.replace('https://hackforums.net/images/groupimages/english/l33t.png', 'https://715.wf/data/misc/theme_images/hf_l33t.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/groupimages/english/l33t.png', 'https://715.wf/data/misc/theme_images/hf_l33t.png');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/starub3r2.png', 'https://715.wf/data/misc/theme_images/ub3rstar.gif');
images[i].src = images[i].src.replace('https://hackforums.net/images/modern_bl/minion.gif', 'https://715.wf/data/misc/theme_images/minion.gif');
images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_offline.gif', 'https://715.wf/data/misc/theme_images/buddy_offline.gif');
images[i].src = images[i].src.replace('https://hackforums.net/images/blackreign/buddy_online.gif', 'https://715.wf/data/misc/theme_images/buddy_online.gif');

} 
}, false);

function addStyleSheet(style){
      var elementStyle= document.getElementsByTagName("HEAD")[0].appendChild(window.document.createElement('style'));
      elementStyle.innerHTML = style;
      return elementStyle;
    }
     
    function removejscssfile(filename, filetype){
     var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
     var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
     var allsuspects=document.getElementsByTagName(targetelement);
      
     for (var i=allsuspects.length; i>=0; i--){ 
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
       allsuspects[i].parentNode.removeChild(allsuspects[i]);
     }
    }
     
    removejscssfile('global.css', 'css');
    addStyleSheet('@import "https://715.wf/data/misc/global.css";\n@import "https://715.wf/data/misc/star_rating.css";');