// @name         Better GUI
// @version      1.02
// @description  Zmienia czerwone kolorki w GUI Margonem na ciemniejsze, bardziej pasujące do DarknessNI z paczki dodatków Maddonz
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/margonem-addons/addons/better-gui.js
// @updateURL    https://vumocode.github.io/margonem-addons/addons/better-gui.js
// @require      https://vumocode.github.io/margonem-addons/addons/better-gui.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
$(`<style>

.border-window.transparent .border-image {
    box-shadow: 0 0 0 1px #5c5c5c8c, 0 0 0 2px #5c5c5c8c, 0 0 0 3px #0c0d0d, 2px 2px 3px 3px #0c0d0d66;
}

.new-chat-window .chat-message-wrapper {
    border: 1px solid #7e7474;
    box-shadow: inset 0 0 3px 3px #000;
}

.button.green, .widget-button.green, .pressed {
    box-shadow: inset 0 0 1px 1px #80808061, inset 0 0 0 3px #0c0d0d;
}

.chat-channel-card-wrapper {
    border: 1px solid #7e7474;
    box-shadow: inset 0 0 3px 3px #000;

}

.chat-input-wrapper .magic-input-wrapper {
    border: 1px solid #7e7474;
}

.new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {
    border: 1px solid #7e7474;
}

.party .exp-percent {
    display: none;
}

</style>`).appendTo('html');


})();
