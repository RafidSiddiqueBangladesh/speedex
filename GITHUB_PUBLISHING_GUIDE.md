# 📚 Complete GitHub & Auto-Update Publishing Guide

## Overview
This guide walks you through:
1. ✅ Creating a GitHub repository
2. ✅ Pushing your extension code
3. ✅ Setting up automatic updates
4. ✅ Getting a permanent Chrome Extension ID

---

## PHASE 1: GitHub Setup (5 minutes)

### Step 1A: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `video-speed-controller`
3. Description: `Chrome extension to speed up YouTube and any video up to 4x`
4. Choose: **Public** (recommended for open-source)
5. Click "Create repository"

### Step 1B: Initialize Local Git

```bash
cd c:\Users\FIX\webdevelopment\speed
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
```

### Step 1C: First Commit

```bash
git add .
git commit -m "Initial commit: Video Speed Controller v1.0"
```

### Step 1D: Push to GitHub

**Copy these commands from GitHub (after creating repo):**

```bash
git remote add origin https://github.com/YOUR_USERNAME/video-speed-controller.git
git branch -M main
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## PHASE 2: Get Permanent Extension ID (10 minutes)

### Step 2A: Load Extension in Chrome

1. Open Chrome and go to **chrome://extensions/**
2. Enable **"Developer mode"** (toggle in top-right)
3. Click **"Load unpacked"**
4. Navigate to: `c:\Users\FIX\webdevelopment\speed`
5. Click **"Select Folder"**

### Step 2B: Find Your Extension ID

After loading, you'll see your extension with a 32-character ID. Example:
```
kflhdjghaskjdhgkajsdhgkasjdhgka
```

**⚠️ This is YOUR PERMANENT EXTENSION ID - Copy it!**

---

## PHASE 3: Configure Auto-Updates (5 minutes)

### Step 3A: Update manifest.json

Edit [manifest.json](manifest.json) and add your username:

```json
"update_url": "https://raw.githubusercontent.com/YOUR_USERNAME/video-speed-controller/main/update.xml",
```

Example:
```json
"update_url": "https://raw.githubusercontent.com/john123/video-speed-controller/main/update.xml",
```

### Step 3B: Update update.xml

Edit [update.xml](update.xml):

1. Replace `REPLACE_WITH_YOUR_EXTENSION_ID` with your actual ID
2. Replace `YOUR_USERNAME` with your GitHub username

**Before:**
```xml
<app appid='REPLACE_WITH_YOUR_EXTENSION_ID'>
  <updatecheck codebase='https://github.com/YOUR_USERNAME/video-speed-controller/releases/download/v1.0/video-speed-controller.crx' version='1.0' />
</app>
```

**After (example):**
```xml
<app appid='kflhdjghaskjdhgkajsdhgkasjdhgka'>
  <updatecheck codebase='https://github.com/john123/video-speed-controller/releases/download/v1.0/video-speed-controller.crx' version='1.0' />
</app>
```

### Step 3C: Commit Changes

```bash
git add manifest.json update.xml
git commit -m "Configure auto-updates with Extension ID"
git push origin main
```

✅ **Auto-updates configured!**

---

## PHASE 4: Create Release & CRX (10 minutes)

### Step 4A: Package as CRX File

1. Go to **chrome://extensions/**
2. Find your extension
3. Click the **⋮ (three dots)** button
4. Select **"Pack extension"**
5. Select your extension folder
6. Chrome will create `video-speed-controller.crx`

### Step 4B: Create GitHub Release

1. Go to your GitHub repo: https://github.com/YOUR_USERNAME/video-speed-controller
2. Click **"Releases"** (right side)
3. Click **"Create a new release"**
4. Tag: `v1.0`
5. Title: `Video Speed Controller v1.0`
6. Upload the `.crx` file
7. Click **"Publish release"**

### Step 4C: Users Can Now Install from GitHub

Share this link:
```
https://github.com/YOUR_USERNAME/video-speed-controller/releases
```

---

## PHASE 5: Enable Automatic Updates

Once released, Chrome will:
- Check `update.xml` every few hours
- Compare version numbers
- Automatically install updates

### Testing Auto-Updates

1. Increase version in `manifest.json` (e.g., 1.0 → 1.1)
2. Update `update.xml` version to match
3. Create new CRX file
4. Create new GitHub Release with new CRX
5. Wait 24 hours or manually check for updates

---

## File Structure

```
video-speed-controller/
├── manifest.json          ← Main config (ADD EXTENSION ID)
├── popup.html            ← Popup UI
├── popup.js              ← Popup logic
├── content.js            ← Video control script
├── update.xml            ← Auto-update config (ADD EXTENSION ID)
├── UPDATE_GUIDE.md       ← This detailed guide
├── README.md             ← User instructions
├── package.json          ← Node metadata
├── .gitignore           ← Git ignore rules
└── video-speed-controller.zip  ← Source zip
```

---

## Quick Reference Commands

```bash
# Initialize
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# First commit
git add .
git commit -m "Initial commit"

# Connect to GitHub (one-time)
git remote add origin https://github.com/YOUR_USERNAME/video-speed-controller.git
git branch -M main
git push -u origin main

# Future pushes
git add .
git commit -m "Update message"
git push origin main
```

---

## Troubleshooting

### Extension ID shows different after reload?
- ✅ Normal! It's based on folder contents
- Make sure to use the final ID after uploading to Chrome

### update.xml not working?
- ✅ Check the file is in main branch on GitHub
- ✅ Verify Extension ID matches exactly
- ✅ Chrome checks every few hours, not instantly

### Can't load unpacked?
- ✅ Make sure `manifest.json` is in the folder root
- ✅ Enable Developer mode first
- ✅ Check all required files exist

### GitHub push fails?
- ✅ Run: `git config --list` to verify credentials
- ✅ Use personal access token instead of password
- ✅ Generate token at: https://github.com/settings/tokens

---

## Summary of Your Files

| File | Purpose |
|------|---------|
| `manifest.json` | Extension configuration |
| `popup.html` | UI interface |
| `popup.js` | Popup button logic |
| `content.js` | Video speed control |
| `update.xml` | Auto-update manifest |
| `README.md` | User guide |
| `UPDATE_GUIDE.md` | Update setup instructions |
| `video-speed-controller.zip` | Source code archive |

---

## Final Checklist

- [ ] GitHub account created
- [ ] Repository created
- [ ] Code pushed to GitHub
- [ ] Extension loaded in Chrome
- [ ] Extension ID copied
- [ ] `manifest.json` updated with Extension ID
- [ ] `update.xml` updated with Extension ID & username
- [ ] Changes pushed to GitHub
- [ ] CRX file created and released
- [ ] Auto-updates working! 🎉

---

## Next Steps After Publishing

1. **Share your extension**: Link to GitHub Releases
2. **Get feedback**: Add GitHub Issues
3. **Update frequently**: Version bump → Update XML → New Release
4. **Submit to Chrome Web Store** (optional, but great for visibility!)

Enjoy! 🚀
