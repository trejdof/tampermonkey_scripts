// ==UserScript==
// @name         Remove username on Reddit
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes all visible mentions of your Reddit username across all Reddit pages
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const username = "enter_username"; 

    function removeUsernameMentions() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (node.nodeValue.toLowerCase().includes(username.toLowerCase())) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
            },
            false
        );

        let node;
        while (node = walker.nextNode()) {
            const parent = node.parentElement;
            if (parent) {
                if (parent.textContent.toLowerCase().includes(username.toLowerCase())) {
                    parent.remove();
                } else {
                    node.nodeValue = "";
                }
            }
        }
    }

    const observer = new MutationObserver(() => {
        removeUsernameMentions();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("load", () => {
        setTimeout(removeUsernameMentions, 1000);
    });
})();
