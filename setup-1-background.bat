@echo off
echo ============================================
echo H4WK THEME - BACKGROUND OLUSTURUCU
echo ============================================
echo.

REM Background creator'i ac
echo 1. Background olusturucu aciliyor...
start "" tools\background-creator.html
timeout /t 3 >nul

echo.
echo 2. Tarayicida acilan sayfada:
echo    - "Background Indir" butonuna tiklayin
echo    - Dosya Downloads klasorune inecek
echo.
pause

REM Background'i images klasorune kopyala
echo.
echo 3. Background dosyasi kopyalaniyor...

if exist "%USERPROFILE%\Downloads\background.png" (
    copy "%USERPROFILE%\Downloads\background.png" images\background.png
    echo [OK] background.png kopyalandi!
) else (
    echo [HATA] background.png bulunamadi!
    echo Lutfen once background-creator.html'den indirin!
    pause
    exit /b 1
)

echo.
echo ============================================
echo BASARILI! Simdi icon'lari kopyalayin:
echo ============================================
echo.
echo Downloads klasorunden su dosyalari icons\ klasorune kopyalayin:
echo   - icon16.png
echo   - icon48.png
echo   - icon128.png
echo.
echo Sonra setup-2-upload.bat dosyasini calistirin!
echo.
pause
