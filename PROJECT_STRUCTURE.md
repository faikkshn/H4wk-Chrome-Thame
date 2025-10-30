# 📁 Proje Yapısı

## Dizin Organizasyonu

```
H4wk-Chrome-Thame/
│
├── 📄 manifest.json              # Chrome tema yapılandırma dosyası
├── 📄 README.md                  # Proje açıklaması ve dokümantasyon
├── 📄 INSTALL.md                 # Detaylı kurulum rehberi
├── 📄 LICENSE                    # MIT lisans dosyası
├── 📄 .gitignore                 # Git ignore kuralları
├── 📄 preview.html               # Tema önizleme sayfası
├── 📄 PROJECT_STRUCTURE.md       # Bu dosya
│
├── 📁 icons/                     # Tema ikonları
│   ├── 🎨 icon.svg              # Ana logo (128x128 master)
│   ├── 🎨 icon16.svg            # 16x16 optimize edilmiş SVG
│   ├── 🎨 icon48.svg            # 48x48 optimize edilmiş SVG
│   ├── 🎨 icon128.svg           # 128x128 detaylı SVG
│   ├── 🖼️ icon16.png            # 16x16 px icon (SVG'den oluşturulacak)
│   ├── 🖼️ icon48.png            # 48x48 px icon (SVG'den oluşturulacak)
│   └── 🖼️ icon128.png           # 128x128 px icon (SVG'den oluşturulacak)
│
├── 📁 images/                    # Arka plan ve diğer görseller
│   ├── 🎨 background.svg        # Uzay temalı arka plan görseli (1920x1080)
│   ├── 🎨 badge-logo.svg        # Promotional badge (440x280)
│   └── 🎨 promo-tile-1280x800.svg  # Chrome Web Store promo tile
│
└── 📁 tools/                     # Yardımcı araçlar
    └── 📄 svg-to-png-converter.html  # SVG'den PNG'ye dönüştürücü

```

## 📄 Dosya Açıklamaları

### Kök Dizin Dosyaları

#### manifest.json
- **Amaç:** Chrome tema yapılandırma dosyası
- **İçerik:**
  - Tema adı, versiyonu, açıklama
  - Renk paleti tanımlamaları
  - İkon referansları
  - Tema özellikleri (tints, properties)
- **Format:** JSON
- **Kritiklik:** ⭐⭐⭐⭐⭐ (Temanın çalışması için gerekli)

#### README.md
- **Amaç:** Proje dokümantasyonu
- **İçerik:**
  - Tema tanıtımı ve özellikleri
  - Renk paleti referansı
  - Kurulum talimatları
  - Özelleştirme rehberi
  - Önerilen eklentiler
- **Format:** Markdown
- **Hedef Kitle:** Kullanıcılar, geliştiriciler

#### INSTALL.md
- **Amaç:** Detaylı kurulum rehberi
- **İçerik:**
  - Adım adım kurulum talimatları
  - PNG dönüştürme yöntemleri
  - Sorun giderme ipuçları
  - Platform-spesifik talimatlar
- **Format:** Markdown
- **Hedef Kitle:** Teknik olmayan kullanıcılar

#### LICENSE
- **Amaç:** Açık kaynak lisans dosyası
- **İçerik:** MIT License şartları
- **Format:** Plain text

#### preview.html
- **Amaç:** Tema önizleme ve demo sayfası
- **Özellikler:**
  - Interaktif tema demo
  - Animasyonlu arka plan
  - Renk paleti gösterimi
  - Kurulum talimatları
- **Teknolojiler:** HTML5, CSS3, JavaScript
- **Kullanım:** Tarayıcıda doğrudan açılabilir

### 📁 icons/ Dizini

Bu dizin tema ikonlarını içerir. Her boyut için özel olarak optimize edilmiş SVG dosyaları mevcuttur.

#### icon.svg (Master Logo)
- **Format:** SVG (Scalable Vector Graphics)
- **Boyut:** 128x128 viewBox
- **Detay Seviyesi:** Maksimum (icon128.svg ile aynı)
- **İçerik:**
  - Detaylı H4WK şahin logosu
  - Parlayan cyan göz efekti
  - Animasyonlu scan line
  - Geometrik kanatlar ve kuyruk
  - Circuit pattern detayları
  - HUD köşe braketleri
  - Neon glow filtreler
- **Kullanım:** Ana kaynak dosya, 128x128 PNG için

#### icon16.svg
- **Boyut:** 16x16 viewBox
- **Detay Seviyesi:** Minimal
- **Optimizasyon:** Küçük boyutta görünürlük için basitleştirilmiş
- **İçerik:**
  - Basit şahin silueti
  - Tek göz noktası
  - Temel kanat ve kuyruk
  - Minimal circuit line
- **Kullanım:** 16x16 PNG için (tarayıcı toolbar'da)

#### icon48.svg
- **Boyut:** 48x48 viewBox
- **Detay Seviyesi:** Orta
- **Optimizasyon:** Orta boyutta net görünüm
- **İçerik:**
  - Detaylı şahin baş ve gövde
  - Göz ve gaga detayı
  - Stilize kanatlar
  - Circuit öğeleri
  - HUD köşe işaretleri
- **Kullanım:** 48x48 PNG için (uzantı yönetimi)

#### icon128.svg
- **Boyut:** 128x128 viewBox
- **Detay Seviyesi:** Maksimum
- **Optimizasyon:** Tam detay ve animasyon
- **İçerik:**
  - Tam detaylı H4WK logosu
  - Animasyonlu twinkle yıldızlar
  - Parlayan göz efekti
  - Detaylı kanat yapısı
  - Circuit pattern ve node'lar
  - HUD braketleri
  - Scan line animasyonu
- **Kullanım:** 128x128 PNG için (Chrome Web Store)

#### icon16.png, icon48.png, icon128.png
- **Format:** PNG
- **Şeffaflık:** Tam (alpha channel)
- **Kullanım:** Chrome uzantı ikonları
- **Kaynak:** İlgili SVG dosyalarından dönüştürülür
- **Gereklilik:** ⭐⭐⭐⭐⭐ Chrome teması için zorunlu
- **Boyut Kullanımları:**
  - 16x16 px: Toolbar ve uzantı listesi
  - 48x48 px: Uzantı yönetimi sayfası
  - 128x128 px: Chrome Web Store ve yükleme ekranı

### 📁 images/ Dizini

Bu dizin arka plan ve diğer görsel varlıkları içerir.

#### background.svg
- **Format:** SVG
- **Boyut:** 1920x1080 px (Full HD)
- **Dosya Tipi:** Arka plan görseli
- **İçerik:**
  - Derin uzay gradyan arka planı
  - Mor ve cyan nebula efektleri
  - Animasyonlu yıldız alanları (50+ yıldız)
  - Matrix tarzı kod öğeleri
  - Circuit pattern overlay
  - H4WK logosu watermark (merkez)
  - ŞAHİN yazısı
  - HUD köşe braketleri
  - Scan line animasyonu
  - Durum çubuğu (alt)
- **Kullanım:** New Tab Page arka planı (opsiyonel, PNG'ye dönüştürülerek)
- **Optimizasyon:** Büyük ekranlar için optimize edilmiş

#### badge-logo.svg
- **Format:** SVG
- **Boyut:** 440x280 px
- **Dosya Tipi:** Promotional badge
- **İçerik:**
  - Sol taraf: Büyük H4WK logosu (180x180 circle)
  - Sağ taraf: H4WK ve ŞAHİN yazıları
  - Alt başlık: "SPACE HACKER THEME"
  - Versiyon bilgisi: "v1.0.0 - Chrome Edition"
  - Nebula efektleri arka planda
  - Yıldız alanı
  - Dekoratif çizgiler
  - HUD köşe braketleri
- **Kullanım:**
  - GitHub README banner
  - Sosyal medya paylaşımları
  - Proje sunumları
  - Marketing materyali
- **Oran:** 11:7 (landscape)

#### promo-tile-1280x800.svg
- **Format:** SVG
- **Boyut:** 1280x800 px (16:10)
- **Dosya Tipi:** Chrome Web Store promotional tile
- **İçerik:**
  - Sol taraf: Büyük detaylı H4WK logosu (300x300)
  - Sağ taraf: Başlık ve özellik listesi
  - "H4WK" ana başlık (120pt)
  - "ŞAHİN" alt başlık (56pt)
  - 4 maddelik özellik listesi
  - Version badge
  - Uzay temalı arka plan
  - Nebula efektleri
  - Animasyonlu yıldızlar
  - Matrix kod elementleri
  - Scan line animasyonu
  - Alt bilgi çubuğu
- **Kullanım:**
  - Chrome Web Store listing
  - Featured promotional image
  - Extension store banner
- **Standart:** Chrome Web Store promo tile boyutu
- **PNG Versiyon:** Yayın için PNG'ye dönüştürülmeli

### 📁 tools/ Dizini

Bu dizin geliştirme ve kurulum için yardımcı araçlar içerir.

#### svg-to-png-converter.html
- **Amaç:** SVG dosyalarını PNG'ye dönüştürme
- **Özellikler:**
  - Drag & drop desteği
  - Çoklu boyut dönüştürme
  - Canlı önizleme
  - Toplu indirme
- **Teknolojiler:** HTML5 Canvas API, JavaScript
- **Kullanım:** Tarayıcıda açılır, internet bağlantısı gerektirmez

## 🎨 Tasarım Varlıkları

### Renk Paleti
```
Derin Uzay:  #05050f (5, 5, 15)
Koyu Uzay:   #0f0f23 (15, 15, 35)
Neon Yeşil:  #00ffaa (0, 255, 170)
Cyan:        #00ffff (0, 255, 255)
Mor:         #6600ff (102, 0, 255)
```

### Tipografi
- **Birincil Font:** Courier New, Monospace
- **Kullanım:** Tüm metin elementleri
- **Stil:** Hacker/Developer temalı

### Efektler
- **Glow:** Neon parıltı efektleri
- **Blur:** Nebula yumuşatma
- **Gradient:** Uzay derinlik gradyanları
- **Animation:** Scan line, twinkle

## 🔧 Geliştirme Notları

### Dosya Gereksinimleri

**Zorunlu Dosyalar:**
- ✅ manifest.json
- ✅ icons/icon16.png
- ✅ icons/icon48.png
- ✅ icons/icon128.png

**Opsiyonel Dosyalar:**
- 🔲 images/background.png (NTP arka planı için)
- 🔲 Diğer özelleştirme dosyaları

### Önerilen İş Akışı

1. **SVG Düzenleme:** icons/icon.svg'yi düzenle
2. **PNG Dönüştürme:** tools/svg-to-png-converter.html kullan
3. **Test:** Chrome'da temayı yükle ve test et
4. **Önizleme:** preview.html'de görünümü kontrol et
5. **Deploy:** Değişiklikleri commit ve push et

### Chrome Manifest v3

Bu tema Chrome Manifest v3 spesifikasyonuna uygundur:
- ✅ manifest_version: 3
- ✅ Modern JSON yapısı
- ✅ Güncel theme API

## 📊 Dosya Boyutları (Tahmini)

```
manifest.json           ~2 KB
README.md              ~8 KB
INSTALL.md             ~6 KB
preview.html           ~15 KB
icons/icon.svg         ~8 KB
icons/icon16.png       ~1 KB
icons/icon48.png       ~3 KB
icons/icon128.png      ~10 KB
images/background.svg  ~12 KB
tools/converter.html   ~9 KB
─────────────────────────────
TOPLAM:                ~74 KB
```

## 🔄 Güncelleme ve Bakım

### Versiyon Yönetimi
Tema güncellenirken `manifest.json` içindeki version numarasını artırın:
```json
"version": "1.0.0"  →  "version": "1.1.0"
```

### Git Workflow
```bash
# Değişiklikleri stage et
git add .

# Commit oluştur
git commit -m "feat: Add new feature"

# Push et
git push origin main
```

## 📚 Ek Kaynaklar

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Theme API Reference](https://developer.chrome.com/docs/extensions/mv3/themes/)
- [Manifest File Format](https://developer.chrome.com/docs/extensions/mv3/manifest/)

---

**🦅 H4WK - ŞAHİN** | Space Age Hacker Theme

*Proje yapısı v1.0.0*
