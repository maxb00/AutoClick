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
var main = function(){
    Game.Notify('AutoClicker activated.','Made by Maxb00',[11,5]);
    autoClick();
}
var pause = function(){
    setTimeout(main, 6000)
}
setTimeout(pause, 6000);
