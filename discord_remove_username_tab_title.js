// ==UserScript==
// @name         Discord Tab Title Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes the username from Discord tab title, keeping only "Discord"
// @author       You
// @match        *://*.discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to update title
    function fixTitle() {
        if (document.title !== "Discord") {
            document.title = "Discord";
        }
    }

    // Run initially
    fixTitle();

    // Monitor title changes every 500ms
    setInterval(fixTitle, 500);
})();
