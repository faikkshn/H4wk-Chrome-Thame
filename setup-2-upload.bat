@echo off
echo ============================================
echo H4WK THEME - GIT YUKLEME
echo ============================================
echo.

REM Icon'larin olup olmadigini kontrol et
echo Kontrol ediliyor...
set ICON_OK=1

if not exist "icons\icon16.png" (
    echo [HATA] icons\icon16.png bulunamadi!
    set ICON_OK=0
)
if not exist "icons\icon48.png" (
    echo [HATA] icons\icon48.png bulunamadi!
    set ICON_OK=0
)
if not exist "icons\icon128.png" (
    echo [HATA] icons\icon128.png bulunamadi!
    set ICON_OK=0
)

if not exist "images\background.png" (
    echo [HATA] images\background.png bulunamadi!
    echo Lutfen once setup-1-background.bat'i calistirin!
    set ICON_OK=0
)

if %ICON_OK%==0 (
    echo.
    echo ============================================
    echo EKSIK DOSYALAR VAR!
    echo ============================================
    echo.
    echo Lutfen once dosyalari kopyalayin:
    echo   1. setup-1-background.bat ile background olusturun
    echo   2. icon16.png, icon48.png, icon128.png dosyalarini
    echo      Downloads'dan icons\ klasorune kopyalayin
    echo.
    pause
    exit /b 1
)

echo [OK] Tum dosyalar mevcut!
echo.

REM Git'e ekle
echo Git'e ekleniyor...
git pull
git add icons\icon16.png icons\icon48.png icons\icon128.png
git add images\background.png
git add logo.png

echo.
echo Commit yapiliyor...
git commit -m "feat: Add H4WK theme images (icons and background)"

echo.
echo GitHub'a gonderiliyor...
git push

echo.
echo ============================================
echo BASARILI! Tum dosyalar yuklendi!
echo ============================================
echo.
echo Simdi Chrome'da test edin:
echo   1. chrome://extensions/ ac
echo   2. H4WK temasinda "Yenile" butonuna tikla
echo   3. Yeni sekme ac - background gorunecek!
echo.
pause
