// ==UserScript==
// @name         Better Tooltips
// @version      1.0
// @description  Customowy styl css tooltipów.
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/margonem-addons/addons/better-tooltips.js
// @updateURL    https://vumocode.github.io/margonem-addons/addons/better-tooltips.js
// @require      https://vumocode.github.io/margonem-addons/addons/better-tooltips.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 
 
$(`<style>

/* NORMAL */

.tip-wrapper[data-item-type=normal], .tip-wrapper[data-item-type=t-norm] {
    box-shadow: none !important;
}

.tip-wrapper {
    box-shadow: none;
}

/* LEGENDARY */

.tip-wrapper[data-item-type=legendary], .tip-wrapper[data-item-type=t-leg] {
    box-shadow: 0px 0px 20px 8px #79002e;
    border: 2px solid #a5013f;
}

.tip-wrapper[data-type=t_item] .item-tip-section.s-5 {
    color: #fa41ff;
}

.tip-wrapper[data-type=t_item] .item-head .legendary, .tip-wrapper[data-type=t_item] .item-tip-section .legendary {
    color: #b00042;
}

/* UPGRADED */

.tip-wrapper[data-type=t_item] .item-head .upgraded, .tip-wrapper[data-type=t_item] .item-tip-section .upgraded {
    color: #ff9567;
}

.tip-wrapper[data-item-type=t-upgraded], .tip-wrapper[data-item-type=upgraded] {
    box-shadow: 0px 0px 20px 8px #af6140;
    border: 2px solid #ff9264;
}

/* HEROIC */

.tip-wrapper[data-item-type=heroic], .tip-wrapper[data-item-type=t-her] {
    box-shadow: 0px 0px 20px 8px #015780;
    border: 2px solid #037ab2;
}

/* ELITE */

.tip-wrapper[data-item-type=elite], .tip-wrapper[data-item-type=t-elite], .tip-wrapper[data-item-type=t-uniupg], .tip-wrapper[data-item-type=unique] {
    box-shadow: 0px 0px 20px 8px #b7ad00;
    border: 2px solid #fff100;
}
 
</style>`).appendTo('html');
 
 
})();
