# Auto-Update Setup Guide

## How to Enable Auto-Updates

### Step 1: Get Your Extension ID
1. Go to `chrome://extensions/`
2. Enable "Developer mode" (top-right)
3. Load unpacked your extension
4. Copy the **Extension ID** (16-character alphanumeric)

### Step 2: Update Files

Replace `REPLACE_WITH_YOUR_EXTENSION_ID` with your actual Extension ID in:
- `manifest.json` - `"update_url"` field
- `update.xml` - `appid` attribute

Replace `YOUR_USERNAME` with your GitHub username in:
- `manifest.json` - `"update_url"` field
- `update.xml` - `codebase` field

### Step 3: Example

If your:
- **GitHub username**: `john123`
- **Extension ID**: `abcdefghijklmnop`

Then:

**manifest.json:**
```json
"update_url": "https://raw.githubusercontent.com/john123/video-speed-controller/main/update.xml"
```

**update.xml:**
```xml
<app appid='abcdefghijklmnop'>
  <updatecheck codebase='https://github.com/john123/video-speed-controller/releases/download/v1.0/video-speed-controller.crx' version='1.0' />
</app>
```

### Step 4: Push to GitHub

Commit and push all files including `update.xml`

### Step 5: Enable Raw GitHub URL

The extension will check for updates at:
```
https://raw.githubusercontent.com/YOUR_USERNAME/video-speed-controller/main/update.xml
```

Chrome checks this URL every few hours.

## Updating Your Extension

To release a new version:

1. Update `version` in `manifest.json` (e.g., "1.1")
2. Update `version` in `update.xml` to match
3. Package the extension as `.crx`
4. Upload `.crx` to GitHub Releases
5. Commit and push `manifest.json` and `update.xml`

Users will automatically get the update within 24 hours!

## Troubleshooting

**Updates not working?**
- Check that `update.xml` is publicly accessible on GitHub
- Verify the Extension ID matches exactly
- Chrome checks for updates every few hours (not immediate)
- Check Chrome logs: `chrome://extensions/` → Details → "View background page"
