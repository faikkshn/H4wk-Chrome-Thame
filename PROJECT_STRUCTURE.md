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
│   ├── 🎨 icon.svg              # Ana logo (SVG formatında)
│   ├── 🖼️ icon16.png            # 16x16 px icon (oluşturulacak)
│   ├── 🖼️ icon48.png            # 48x48 px icon (oluşturulacak)
│   └── 🖼️ icon128.png           # 128x128 px icon (oluşturulacak)
│
├── 📁 images/                    # Arka plan ve diğer görseller
│   └── 🎨 background.svg        # Uzay temalı arka plan görseli
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

Bu dizin tema ikonlarını içerir.

#### icon.svg
- **Format:** SVG (Scalable Vector Graphics)
- **Boyut:** 128x128 viewBox
- **İçerik:**
  - H4WK logosu
  - Şahin silüeti
  - Devre şemaları
  - Neon efektler
  - Uzay elementleri
- **Kullanım:** PNG dönüştürme için kaynak dosya

#### icon16.png, icon48.png, icon128.png
- **Format:** PNG
- **Şeffaflık:** Evet
- **Kullanım:** Chrome uzantı ikonları
- **Not:** SVG'den dönüştürülmesi gerekir
- **Gerekli Boyutlar:**
  - 16x16 px: Uzantı listesinde küçük ikon
  - 48x48 px: Uzantı yönetimi sayfası
  - 128x128 px: Chrome Web Store ve yükleme

### 📁 images/ Dizini

Bu dizin arka plan ve diğer görsel varlıkları içerir.

#### background.svg
- **Format:** SVG
- **Boyut:** 1920x1080 px
- **İçerik:**
  - Derin uzay arka planı
  - Nebula efektleri
  - Yıldız alanları
  - Matrix tarzı kod
  - Devre desenleri
  - H4WK logosu (watermark)
  - HUD elementleri
  - Animasyon efektleri
- **Kullanım:** New Tab Page arka planı (opsiyonel)

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
