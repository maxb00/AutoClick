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

var checkGodComplex = function(){
    if(Game.bakeryName != "Maxb00" || Game.bakeryName != "Orteil"){
        Game.Achievements["God complex"].won = false
    }else{
        Game.Achievements["God complex"].won = true;
    }
    setTimeout(checkGodComplex, 1);
}

var main = function(){
    autoClick();
    checkGodComplex();
}

setTimeout(pause, 5000);
