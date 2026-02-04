@echo off
REM Video Speed Controller - Setup Script

echo.
echo ============================================
echo   Video Speed Controller - Setup Helper
echo ============================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo [1] Initializing Git repository...
git init
git config user.name "Your Name"
git config user.email "your@email.com"

echo.
echo [2] Files ready for GitHub:
echo    - manifest.json (update with your Extension ID)
echo    - update.xml (update with your Extension ID and GitHub username)
echo    - All source files

echo.
echo [3] Next Steps:
echo    1. Go to https://github.com/new
echo    2. Create new repository named: video-speed-controller
echo    3. Run: git add .
echo    4. Run: git commit -m "Initial commit"
echo    5. Run: git remote add origin https://github.com/YOUR_USERNAME/video-speed-controller.git
echo    6. Run: git branch -M main
echo    7. Run: git push -u origin main

echo.
echo [4] Get your Extension ID:
echo    1. Open Chrome and go to chrome://extensions/
echo    2. Enable Developer Mode
echo    3. Load unpacked folder
echo    4. Copy the Extension ID

echo.
echo [5] Update these files with your Extension ID:
echo    - manifest.json (update_url field)
echo    - update.xml (appid and codebase fields)

echo.
echo Setup complete! Read UPDATE_GUIDE.md for more details.
echo.
pause
