# 📂 Playwright YouTube Search & Playback Test  

This Playwright script automates searching for a video on **YouTube**, playing it, and pausing it.  

## 📌 Description  
The script performs the following actions:  
1. **Opens YouTube**.  
2. **Searches for "Rasha Saki Rasha"** using the search bar.  
3. **Clicks on the first matching video**.  
4. **Pauses the video** after it starts playing.  

## 📂 Test File  
**Folder:** `youtube/`  
**File:** `youtube.spec.js`  

## 🚀 Running the Test  

To execute the test, run:  
```sh
npx playwright test tests/youtube/youtube.spec.js --project chromium --headed
