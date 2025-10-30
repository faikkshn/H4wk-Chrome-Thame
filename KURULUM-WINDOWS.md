# H4WK Theme - Kurulum Rehberi (Windows)

## 🚀 HIZLI KURULUM (3 ADIM)

### ADIM 1: Background Oluştur

```cmd
setup-1-background.bat
```

**Ne yapar:**
1. `tools\background-creator.html` dosyasını açar
2. Tarayıcıda background oluşturulur
3. "Background İndir" butonuna tıklayın
4. Script otomatik olarak `images\` klasörüne kopyalar

### ADIM 2: Icon'ları Kopyala

**Downloads klasöründen şu 3 dosyayı bulun:**
- `icon16.png`
- `icon48.png`
- `icon128.png`

**Bu dosyaları `icons\` klasörüne kopyalayın**

### ADIM 3: Git'e Yükle

```cmd
setup-2-upload.bat
```

**Ne yapar:**
1. Tüm dosyaların varlığını kontrol eder
2. Git'e ekler
3. Commit yapar
4. GitHub'a push eder

---

## 📋 MANUEL YÖNTEM

Eğer bat dosyaları çalışmazsa manuel yapın:

### 1. Background Oluştur

```cmd
# Background creator'ı aç
start tools\background-creator.html

# İndir butonu → background.png
# Dosyayı images\ klasörüne taşı
move "%USERPROFILE%\Downloads\background.png" images\
```

### 2. Icon'ları Kopyala

```cmd
# Downloads'dan icons klasörüne
copy "%USERPROFILE%\Downloads\icon16.png" icons\
copy "%USERPROFILE%\Downloads\icon48.png" icons\
copy "%USERPROFILE%\Downloads\icon128.png" icons\
```

### 3. Git'e Yükle

```cmd
git pull
git add icons\*.png images\background.png logo.png
git commit -m "feat: Add H4WK theme images"
git push
```

---

## 🎯 CHROME'DA TEST

```cmd
# Extensions sayfasını aç
start chrome://extensions/

# Veya manuel:
# 1. Chrome aç
# 2. chrome://extensions/ git
# 3. H4WK temasında "↻ Yenile" butonuna tıkla
# 4. Yeni sekme aç - BACKGROUND GÖRÜNECEK! 🎉
```

---

## ✅ KONTROL LİSTESİ

Kurulumdan önce:
- [ ] Git kurulu
- [ ] Proje klasöründesiniz
- [ ] Logo resizer ile icon'lar oluşturuldu

Kurulum sırasında:
- [ ] `setup-1-background.bat` çalıştırıldı
- [ ] Background indirildi ve `images\` klasöründe
- [ ] Icon'lar `icons\` klasöründe
- [ ] `setup-2-upload.bat` çalıştırıldı
- [ ] Git push başarılı

Kurulumdan sonra:
- [ ] Chrome extensions sayfasında tema yenilendi
- [ ] Yeni sekmede background görünüyor
- [ ] Toolbar H4WK icon'ları görünüyor
- [ ] Renkler doğru (neon yeşil/cyan)

---

## 🆘 SORUN GİDERME

### "Git komutu bulunamadı"
```cmd
# Git'i yükleyin: https://git-scm.com/download/win
# Sonra yeni CMD penceresi açın
```

### "Icon dosyaları bulunamadı"
```cmd
# Logo resizer'ı tekrar çalıştırın
start tools\logo-resizer.html

# Logo.png'yi seçin
# Tümünü İndir
# Downloads'dan icons\ klasörüne kopyalayın
```

### "Background görünmüyor"
```cmd
# Dosyanın varlığını kontrol edin
dir images\background.png

# Chrome'da temayı kaldırıp tekrar yükleyin
# chrome://extensions/ → Remove → Load unpacked
```

### "Git push başarısız"
```cmd
# Önce pull yapın
git pull

# Sonra tekrar push
git push
```

---

## 📞 İLETİŞİM

Sorun devam ederse:
- GitHub Issues: https://github.com/faikkshn/H4wk-Chrome-Thame/issues
- README.md dosyasına bakın

---

**🦅 H4WK - ŞAHİN Space Hacker Theme**

*Professional Chrome theme for developers*
