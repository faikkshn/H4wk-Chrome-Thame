# Logo Entegrasyonu - H4WK Theme

## 📦 Logo Dosyası: `logo.png`

Profesyonel H4WK logosu proje kök dizininde bulunuyor.

### Logo Özellikleri:
- ✅ Gerçekçi şahin/hawk görünümü
- ✅ Neon yeşil ve cyan renkler
- ✅ Açık kanatlar
- ✅ Uzay arka planı
- ✅ HUD köşe braketleri
- ✅ "H4WK" yazısı üstte
- ✅ Yüksek kalite (1135x1135 px)

---

## 🔧 Chrome Extension İconları Oluşturma

Chrome extension için 3 farklı boyutta PNG icon gerekiyor:
- `icons/icon16.png` (16x16 px)
- `icons/icon48.png` (48x48 px)
- `icons/icon128.png` (128x128 px)

### Yöntem 1: Web Aracı (Önerilen) 🎯

```bash
# Tarayıcıda açın
open tools/logo-resizer.html
```

1. Sayfa açıldığında otomatik olarak `logo.png` yüklenecek
2. 3 farklı boyutta önizleme göreceksiniz
3. "Tümünü İndir" butonuna tıklayın
4. İndirilen dosyaları `icons/` klasörüne koyun

### Yöntem 2: Online Araçlar

**Önerilen Siteler:**
- [iloveimg.com](https://www.iloveimg.com/resize-image)
- [resizeimage.net](https://resizeimage.net/)
- [bulkresizephotos.com](https://bulkresizephotos.com/tr)

**Adımlar:**
1. `logo.png` dosyasını yükleyin
2. Sırayla 16x16, 48x48, 128x128 boyutlarında resize edin
3. İndirip `icons/` klasörüne `icon16.png`, `icon48.png`, `icon128.png` olarak kaydedin

### Yöntem 3: Komut Satırı (Linux/Mac)

**ImageMagick ile:**
```bash
convert logo.png -resize 16x16 icons/icon16.png
convert logo.png -resize 48x48 icons/icon48.png
convert logo.png -resize 128x128 icons/icon128.png
```

**sips ile (Mac):**
```bash
sips -z 16 16 logo.png --out icons/icon16.png
sips -z 48 48 logo.png --out icons/icon48.png
sips -z 128 128 logo.png --out icons/icon128.png
```

---

## 🎨 Background ve Promotional Görsellere Logo Ekleme

### Background (New Tab Page)

**Dosya:** `images/background-with-logo.svg`

Logo eklemek için:

1. **SVG düzenleyicide açın** (Inkscape, Adobe Illustrator, vs.)
2. **Logo.png'yi içe aktarın** (File > Import)
3. **Merkeze yerleştirin** (X: 960, Y: 540)
4. **Boyutlandırın:** ~400x400 px
5. **Opacity ayarlayın:** %15-20
6. **Blur ekleyin:** 5-10px
7. **PNG'ye export edin:** 1920x1080 px
8. **Kaydedin:** `images/background-with-logo.png`

### Badge Logo

**Dosya:** `images/badge-h4wk.svg`

Sol taraftaki placeholder'a logo ekleyin:

1. SVG'yi açın
2. "LOGO Insert logo.png here" placeholder'ını silin
3. `logo.png`'yi içe aktarın
4. Circle içine yerleştirin (çap: 176px)
5. PNG'ye export: `images/badge-h4wk.png` (440x280 px)

### Promo Tile

**Dosya:** `images/promo-h4wk.svg`

Sol taraftaki büyük circle'a logo ekleyin:

1. SVG'yi açın
2. Placeholder'ı silin
3. `logo.png`'yi içe aktarın
4. Circle içine fit edin (çap: 280px)
5. PNG'ye export: `images/promo-h4wk.png` (1280x800 px)

---

## 🖼️ Logo Kullanım Örnekleri

### HTML/CSS'de Logo Kullanımı

```html
<!-- Basit görüntüleme -->
<img src="logo.png" alt="H4WK Logo" width="128" height="128">

<!-- Circular border ile -->
<div style="
  width: 150px;
  height: 150px;
  border: 3px solid #00ffaa;
  border-radius: 50%;
  padding: 10px;
  background: #0a0a19;
">
  <img src="logo.png" style="width: 100%; height: 100%; border-radius: 50%;">
</div>
```

### Markdown'da Logo

```markdown
![H4WK Logo](logo.png)

<!-- Boyutlandırılmış -->
<img src="logo.png" alt="H4WK Logo" width="200"/>
```

---

## 📁 Dosya Yapısı

```
H4wk-Chrome-Thame/
├── logo.png                              # ANA LOGO (1135x1135)
│
├── icons/                                # Chrome Extension İconları
│   ├── icon16.png                        # 16x16 (logo.png'den resize)
│   ├── icon48.png                        # 48x48 (logo.png'den resize)
│   ├── icon128.png                       # 128x128 (logo.png'den resize)
│   ├── icon16.svg                        # SVG backup
│   ├── icon48.svg                        # SVG backup
│   ├── icon128.svg                       # SVG backup
│   └── icon.svg                          # Master SVG
│
├── images/                               # Arka Plan ve Promo Görseller
│   ├── background-with-logo.svg          # Logo ile background (SVG template)
│   ├── background-with-logo.png          # PNG export (oluşturulacak)
│   ├── badge-h4wk.svg                    # Badge template
│   ├── badge-h4wk.png                    # PNG export (oluşturulacak)
│   ├── promo-h4wk.svg                    # Promo tile template
│   └── promo-h4wk.png                    # PNG export (oluşturulacak)
│
└── tools/                                # Yardımcı Araçlar
    └── logo-resizer.html                 # Logo resize aracı
```

---

## ✅ Kontrol Listesi

Chrome temasını yüklemeden önce:

- [ ] `logo.png` proje kök dizininde
- [ ] `icons/icon16.png` oluşturuldu
- [ ] `icons/icon48.png` oluşturuldu
- [ ] `icons/icon128.png` oluşturuldu
- [ ] Tüm PNG dosyaları doğru boyutlarda
- [ ] Chrome'da test edildi

Opsiyonel (Ekstra görselleştirme):
- [ ] Background'a logo eklendi
- [ ] Badge PNG oluşturuldu
- [ ] Promo tile PNG oluşturuldu

---

## 🚀 Chrome'a Yükleme

PNG iconları oluşturduktan sonra:

1. Chrome'u açın: `chrome://extensions/`
2. "Geliştirici modu"nu aktifleştirin
3. "Paketlenmemiş öğe yükle" tıklayın
4. `H4wk-Chrome-Thame` klasörünü seçin
5. ✅ Tema yüklendi!

---

## 🎯 İpuçları

**Logo Kalitesi:**
- PNG dosyaları transparent (şeffaf) olmalı
- Yüksek çözünürlük tercih edilir
- Küçük boyutlarda da net görünmeli

**SVG'den PNG Export:**
- Yüksek kalite ayarı seçin (300 DPI)
- Anti-aliasing aktif olsun
- Transparent background kullanın

**Chrome Icon Gereksinimleri:**
- 16x16: Toolbar ve uzantı listesi
- 48x48: Uzantı yönetimi sayfası
- 128x128: Chrome Web Store ve kurulum

---

**🦅 H4WK - Professional Chrome Theme**

*Tüm görseller logo.png'den türetilmiştir.*
