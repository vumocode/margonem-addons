// ==UserScript==
// @name         Better Lootlog
// @version      1.0
// @description  Customowy styl css dla Lootloga.
// @author       You
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/margonem-addons/addons/betterll.js
// @updateURL    https://vumocode.github.io/margonem-addons/addons/betterll.js
// @require      https://vumocode.github.io/margonem-addons/addons/betterll.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 
 
$(`<style>
 
 
.cll-alert-content, .cll-alert {
  font-family: Arimo,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif;
  font-size: 12.8px;
  cursor: url('https://www.margonem.pl/_i/pl/cursor/1.png?v=6'), pointer;
}
 
.cll-alert-content{
   background:none !important;
   color:white !important;
}
 
.cll-alert {
   background:rgba(0,0,0,.6) !important;
   color: white !important;
   border: 1px solid red !important;
   border-radius: 5px !important;
   box-shadow: 0px 0px 20px red;
   backdrop-filter: blur(5px);

}
 
.cll-alert-header{
   color: beige;
   font-size: 11px;
}
 
#cll-notify, #cll-confirm, #cll-reply{
    background-image: linear-gradient(to top,#12210d,#396b29);
    box-shadow: inset 0 0 1px 1px #cecece,inset 0 0 0 2px #0c0d0d;
    border-image: url(../img/gui/btn-small-inset.png?v=1690873569667) 15 repeat;
    font-family: Arimo,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif;
    font-size: 13px;
    border-color: rgba(255,240,0,.5);
    cursor: url('https://www.margonem.pl/_i/pl/cursor/5.png?v=6'), pointer;
    color: #E6D6BF;
    border-radius: 6px;
}
 
#cll-ok, #cll-close-all{
    background-image: linear-gradient(to top, #310b0b, #831f1f);
    box-shadow: inset 0 0 1px 1px #cecece, inset 0 0 0 3px #0c0d0d;
    border-image: url(../img/gui/btn-small-inset.png?v=1690873569667) 15 repeat;
    font-family: Arimo,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif;
    font-size: 13px;
    border-color: rgba(255,240,0,.5);
    cursor: url('https://www.margonem.pl/_i/pl/cursor/5.png?v=6'), pointer;
    color: #E6D6BF;
    border-radius: 6px;
}
#cll-ok:hover, #cll-notify:hover, #cll-confirm:hover, #cll-reply:hover, #cll-close-all:hover{
    background: #2b2b2b;
}
 
</style>`).appendTo('html');
 
 
})();
