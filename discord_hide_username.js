// ==UserScript==
// @name         Reddit Hide My Flair
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Remove your own username flair from Reddit post pages
// @author       You
// @match        https://www.reddit.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const yourUsername = "enter_username";

    function checkAndRemoveFlair() {
        const flairElements = document.querySelectorAll('community-author-flair');
        if (flairElements.length === 0) return;

        flairElements.forEach(el => {
            const uname = el.getAttribute('username');
            if (uname === yourUsername) {
                console.log(`Removing flair for user: ${uname}`);
                el.remove();
            }
        });
    }

    // MutationObserver to monitor for dynamically loaded content
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.addedNodes.length > 0) {
                checkAndRemoveFlair();
            }
        }
    });

    // Start observing the body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also try once on load
    window.addEventListener('load', () => {
        setTimeout(checkAndRemoveFlair, 1500);
    });

})();
