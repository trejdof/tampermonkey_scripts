# TamperMonkey Scripts Collection

This is my personal collection of **TamperMonkey** scripts that I use to tweak certain websites to my liking. Just simple improvements to make my browsing experience better.

---

## Scripts  

### Discord Tab Title Cleaner  
**File:** `discord-tab-title-cleaner.user.js`  
**Site:** [Discord](https://discord.com/)  

#### What it does:
- Removes the `| @username` part from the tab title  
- Ensures the title always stays as **"Discord"**  
- Automatically updates if Discord tries to change it back  

#### Why I Use It:
I don’t need my tab cluttered with usernames—just **"Discord"** is enough.  

---

### Hide Specific Button on X  
**File:** `hide-button-x.user.js`  
**Site:** [X (Twitter)](https://x.com/)  

#### What it does:
- Hides a specific button on **X** that I find annoying  
- Works even when new buttons are dynamically loaded  
- Uses **MutationObserver** to ensure it stays hidden  

#### Why I Use It:
Some buttons on X/Twitter are useless (to me), so I’d rather not see them.  

---

### Reddit Username Remover  
**File:** `reddit_hide_username.js`  
**Site:** [Reddit](https://www.reddit.com/)  

#### What it does:
- Scans all visible content on Reddit pages  
- Removes **any mention** of my Reddit username from the page  
- Works on post pages, profiles, comments, and dynamically loaded content  
- Uses a **MutationObserver** to keep things clean even as new content appears  

#### Why I Use It:
Sometimes I just want to browse without constantly seeing my own username everywhere. This script helps me stay low-key by scrubbing it from flair, headers, and other random spots.

---

## Why This Repo?  
This is just a **personal backup** of my scripts so I don’t lose them if I switch browsers or reset my setup.  

That’s it. Just a small repo for my own use.
