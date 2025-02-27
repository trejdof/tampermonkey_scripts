// ==UserScript==
// @name         Hide Specific Button on X
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Hides a specific button on X (formerly Twitter)
// @author       You
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide the specific button
    function hideSpecificButton() {
        const targetButtons = document.querySelectorAll('button.css-175oi2r.r-1awozwy.r-sdzlij.r-6koalj.r-18u37iz.r-xyw6el.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l');
        targetButtons.forEach(button => {
            button.style.display = 'none';
        });
    }

    // Initial call to hide the button
    hideSpecificButton();

    // Observe page changes to hide newly loaded buttons
    const observer = new MutationObserver(hideSpecificButton);
    observer.observe(document.body, { childList: true, subtree: true });

})();
