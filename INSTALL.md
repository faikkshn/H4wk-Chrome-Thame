# H4WK Theme - Kurulum Rehberi

## 🚀 Hızlı Kurulum

### Gereksinimler
- Google Chrome veya Chromium tabanlı tarayıcı (Edge, Brave, Opera, vb.)
- SVG'den PNG'ye dönüştürme aracı (opsiyonel)

## 📋 Adım Adım Kurulum

### 1. Projeyi İndirin

#### Git ile:
```bash
git clone https://github.com/faikkshn/H4wk-Chrome-Thame.git
cd H4wk-Chrome-Thame
```

#### Veya ZIP olarak:
- GitHub sayfasından "Code" > "Download ZIP" seçeneğini kullanın
- ZIP dosyasını çıkartın

### 2. PNG İkonlarını Oluşturun

Chrome teması için PNG formatında ikonlar gereklidir. İşte 3 farklı yöntem:

#### 🎯 Yöntem A: Web Tabanlı Dönüştürücü (En Kolay)

1. `tools/svg-to-png-converter.html` dosyasını tarayıcınızda açın
2. `icons/icon.svg` dosyasını yükleyin
3. Her bir boyut için "İndir" butonuna tıklayın
4. İndirilen dosyaları `icons/` klasörüne kaydedin:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`

#### 🔧 Yöntem B: Online Araçlar

Aşağıdaki online araçlardan birini kullanabilirsiniz:

1. **CloudConvert** (https://cloudconvert.com/svg-to-png)
   - `icons/icon.svg` dosyasını yükleyin
   - Boyutları ayarlayın: 16x16, 48x48, 128x128
   - PNG olarak indirin

2. **Convertio** (https://convertio.co/tr/svg-png/)
   - SVG dosyanızı yükleyin
   - PNG formatına dönüştürün
   - Her boyut için tekrarlayın

3. **GIMP** veya **Inkscape**
   - SVG dosyasını açın
   - Export PNG olarak seçin
   - Her boyut için kaydedin

#### 💻 Yöntem C: Komut Satırı (Linux/Mac)

**ImageMagick ile:**
```bash
convert -background none icons/icon.svg -resize 16x16 icons/icon16.png
convert -background none icons/icon.svg -resize 48x48 icons/icon48.png
convert -background none icons/icon.svg -resize 128x128 icons/icon128.png
```

**Inkscape ile:**
```bash
inkscape icons/icon.svg --export-png=icons/icon16.png -w 16 -h 16
inkscape icons/icon.svg --export-png=icons/icon48.png -w 48 -h 48
inkscape icons/icon.svg --export-png=icons/icon128.png -w 128 -h 128
```

**rsvg-convert ile:**
```bash
rsvg-convert -w 16 -h 16 icons/icon.svg > icons/icon16.png
rsvg-convert -w 48 -h 48 icons/icon.svg > icons/icon48.png
rsvg-convert -w 128 -h 128 icons/icon.svg > icons/icon128.png
```

### 3. Temayı Chrome'a Yükleyin

1. **Chrome'u açın** ve adres çubuğuna şunu yazın:
   ```
   chrome://extensions/
   ```

2. **Geliştirici Modu'nu açın**
   - Sağ üst köşede "Geliştirici modu" (Developer mode) anahtarını aktif edin

3. **Temayı yükleyin**
   - "Paketlenmemiş öğe yükle" (Load unpacked) butonuna tıklayın
   - `H4wk-Chrome-Thame` klasörünü seçin
   - "Klasörü Seç" veya "Select Folder" butonuna tıklayın

4. **Tema otomatik olarak uygulanacaktır!** 🎉

### 4. Önizleme (Opsiyonel)

Temayı yüklemeden önce görünümünü görmek için:

```bash
# Proje dizinindeyken
open preview.html       # Mac
start preview.html      # Windows
xdg-open preview.html   # Linux
```

## 🔍 Sorun Giderme

### PNG dosyaları bulunamadı hatası
**Çözüm:** Adım 2'yi tamamladığınızdan ve PNG dosyalarının doğru yerde olduğundan emin olun:
```
icons/
  ├── icon16.png
  ├── icon48.png
  └── icon128.png
```

### Manifest dosyası geçersiz hatası
**Çözüm:**
- `manifest.json` dosyasının değiştirilmediğinden emin olun
- Dosya UTF-8 kodlamasında olmalıdır
- JSON syntax'ının doğru olduğundan emin olun

### Tema görünmüyor
**Çözüm:**
- Chrome'u yeniden başlatın
- Extensions sayfasında temayı yeniden yükleyin
- Developer Mode'un açık olduğundan emin olun

### İkonlar gösterilmiyor
**Çözüm:**
- PNG dosyalarının boyutlarının doğru olduğundan emin olun
- Dosya isimlerinin tam olarak `icon16.png`, `icon48.png`, `icon128.png` olduğundan emin olun

## 📦 Ek Kaynaklar

### Tema Özelleştirme
Renkleri ve görünümü özelleştirmek için `manifest.json` dosyasını düzenleyebilirsiniz. Detaylı bilgi için `README.md` dosyasına bakın.

### Arka Plan Görseli
Arka plan görseli eklemek için:
1. `images/background.svg` dosyasını PNG'ye dönüştürün
2. `manifest.json` dosyasına aşağıdaki kodu ekleyin:
```json
"theme": {
  "images": {
    "theme_ntp_background": "images/background.png"
  },
  "colors": { ... }
}
```

## 🆘 Yardım ve Destek

Sorun yaşıyorsanız:
- [GitHub Issues](https://github.com/faikkshn/H4wk-Chrome-Thame/issues) sayfasından bildirin
- README.md dosyasını kontrol edin
- Chrome uzantılar dokümantasyonunu inceleyin: https://developer.chrome.com/docs/extensions/

## 📱 Diğer Tarayıcılar

Bu tema Chromium tabanlı tüm tarayıcılarda çalışır:
- ✅ Microsoft Edge
- ✅ Brave Browser
- ✅ Opera
- ✅ Vivaldi
- ✅ Chromium

**Not:** Her tarayıcı için uzantı sayfasına gitmek için:
- Edge: `edge://extensions/`
- Brave: `brave://extensions/`
- Opera: `opera://extensions/`

---

**🦅 H4WK - ŞAHİN** ile geliştirme deneyiminizin tadını çıkarın!

*"Keskin bir bakışla kodun derinliklerine dalın"*
