// ==UserScript==
// @name         AutoClicker
// @namespace    http://orteil.dashnet.org/cookieclicker/
// @version      0.1
// @description  Cookie Clicker auto click bot.
// @author       Max Barlow
// @match        https://*/*
// @grant        none
// @include      http://orteil.dashnet.org/cookieclicker/
// ==/UserScript==

var autoClick = function(){
    Game.ClickCookie();
    setTimeout(autoClick, 1);
}

var pause = function(){
    setTimeout(main,5000)
}

var main = function(){
    autoClick();
}

setTimeout(pause, 5000);
