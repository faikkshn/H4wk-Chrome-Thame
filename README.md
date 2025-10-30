# H4WK - ŞAHİN Space Hacker Theme 🦅

![Version](https://img.shields.io/badge/version-1.0.0-00ffaa)
![Chrome](https://img.shields.io/badge/Chrome-Theme-00ffff)
![License](https://img.shields.io/badge/license-MIT-6600ff)

**Uzay Çağı ve Hacking Kültürünü Birleştiren Profesyonel Chrome Teması**

Yazılım geliştiriciler ve teknoloji meraklıları için özel olarak tasarlanmış, cyberpunk esintili, uzay temalı bir Chrome tarayıcı teması.

## 🎨 Tasarım Konsepti

Bu tema şu elementleri birleştirir:
- 🌌 **Uzay Çağı Estetiği**: Derin uzay, nebula efektleri, yıldız alanları
- 💻 **Hacking Kültürü**: Matrix tarzı kod yağmuru, devre şemaları, HUD elementleri
- 🦅 **H4WK İmzası**: Şahin sembolü ile güç ve keskin görüşü temsil eden logo
- ⚡ **Neon Renkler**: Elektrikli yeşil, cyan ve mor tonlarında cyberpunk palet

## 🎯 Özellikler

### Renk Paleti
- **Arka Plan**: Derin uzay siyahı (#05050f - #1a0a28)
- **Vurgu Renkleri**:
  - Neon Yeşil (#00ffaa) - Birincil
  - Cyan (#00ffff) - İkincil
  - Mor (#6600ff) - Aksan
- **Metin**: Parlak yeşil ve cyan tonları

### Görsel Elementler
- **Özel Tasarım H4WK Logosu**: Her boyut için optimize edilmiş şahin logosu
  - 128x128: Tam detaylı, animasyonlu versiyon
  - 48x48: Orta detay seviyesi
  - 16x16: Basitleştirilmiş ikon
- **Uzay Temalı Arka Plan**: 1920x1080 full HD arka plan görseli
- **Promotional Assets**: Badge logo ve Chrome Web Store için promo görselleri
- **Yıldız Alanları**: Animasyonlu twinkle efektli yıldızlar
- **Nebula Efektleri**: Mor ve cyan nebula ışıltıları
- **Matrix Kod Öğeleri**: Binary ve hacker tarzı kod parçacıkları
- **HUD/UI Detayları**: Köşe braketleri ve circuit node'ları
- **Tarama Çizgisi**: Sürekli hareket eden scan line animasyonu
- **Neon Glow Efektleri**: Tüm elementlerde parlama efektleri

## 📦 Kurulum

### Yöntem 1: Developer Mode (Önerilen)

1. **Depoyu İndirin**
   ```bash
   git clone https://github.com/faikkshn/H4wk-Chrome-Thame.git
   cd H4wk-Chrome-Thame
   ```

2. **PNG İkonları Oluşturun** (Gerekli)

   Her boyut için optimize edilmiş SVG dosyaları hazır! Aşağıdaki yöntemlerden birini kullanarak PNG'ye dönüştürün:

   **🎯 Yöntem A - Web Dönüştürücü (En Kolay):**
   ```bash
   # Tarayıcınızda açın
   open tools/svg-to-png-converter.html
   ```
   - İlgili SVG dosyasını yükleyin (`icon16.svg`, `icon48.svg`, `icon128.svg`)
   - Otomatik olarak dönüştürülecek ve indirebileceksiniz
   - Her dosyayı sırayla dönüştürün

   **🔧 Yöntem B - Online Araçlar:**
   - [CloudConvert](https://cloudconvert.com/svg-to-png) veya [Convertio](https://convertio.co/tr/svg-png/)
   - `icons/icon16.svg` → `icons/icon16.png` (16x16)
   - `icons/icon48.svg` → `icons/icon48.png` (48x48)
   - `icons/icon128.svg` → `icons/icon128.png` (128x128)

   **💻 Yöntem C - Komut Satırı (ImageMagick):**
   ```bash
   convert -background none icons/icon16.svg icons/icon16.png
   convert -background none icons/icon48.svg icons/icon48.png
   convert -background none icons/icon128.svg icons/icon128.png
   ```

   **🖌️ Yöntem D - Inkscape:**
   ```bash
   inkscape icons/icon16.svg --export-png=icons/icon16.png -w 16 -h 16
   inkscape icons/icon48.svg --export-png=icons/icon48.png -w 48 -h 48
   inkscape icons/icon128.svg --export-png=icons/icon128.png -w 128 -h 128
   ```

3. **Chrome'da Yükleyin**
   - Chrome'u açın ve `chrome://extensions/` adresine gidin
   - Sağ üst köşedeki **"Geliştirici modu"** (Developer mode) seçeneğini aktifleştirin
   - **"Paketlenmemiş öğe yükle"** (Load unpacked) butonuna tıklayın
   - İndirdiğiniz `H4wk-Chrome-Thame` klasörünü seçin
   - Tema otomatik olarak yüklenecektir!

### Yöntem 2: Chrome Web Store (Gelecekte)
*Bu tema henüz Chrome Web Store'da yayınlanmamıştır.*

## 🖼️ Ek Özelleştirme

### Arka Plan Görselini Değiştirme

1. `images/background.svg` dosyasını düzenleyin veya kendi görselinizi ekleyin
2. Eğer PNG kullanmak istiyorsanız, SVG'yi PNG'ye çevirin:
   ```bash
   convert images/background.svg images/background.png
   ```
3. `manifest.json` dosyasında şu satırı ekleyin:
   ```json
   "theme": {
     "images": {
       "theme_ntp_background": "images/background.png"
     }
   }
   ```

### Renkleri Özelleştirme

`manifest.json` dosyasındaki `theme.colors` bölümünü düzenleyerek renkleri değiştirebilirsiniz:

```json
"colors": {
  "frame": [10, 10, 25],           // Ana pencere rengi (RGB)
  "toolbar": [15, 15, 35],          // Araç çubuğu rengi
  "tab_text": [0, 255, 170],        // Aktif sekme metin rengi
  "bookmark_text": [0, 255, 170]    // Yer imi metin rengi
}
```

## 🛠️ Geliştirici Araçları

### Önerilen Eklentiler

Bu tema ile birlikte kullanılması önerilen Chrome eklentileri:

**Yazılım Geliştirme:**
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg)

**Güvenlik & Hacking:**
- [HackTools](https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi)
- [FoxyProxy](https://chrome.google.com/webstore/detail/foxyproxy-standard/gcknhkkoolaabfmlnjonogaaifnjlfnp)
- [Cookie Editor](https://chrome.google.com/webstore/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)
- [User-Agent Switcher](https://chrome.google.com/webstore/detail/user-agent-switcher/bhchdcejhohfmigjafbampogmaanbfkg)

## 📸 Ekran Görüntüleri

*(Kurulum sonrası kendi ekran görüntülerinizi buraya ekleyebilirsiniz)*

## 🎨 Renk Referansı

| Renk | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| Derin Uzay | `#05050f` | `5, 5, 15` | Ana arka plan |
| Koyu Uzay | `#0f0f23` | `15, 15, 35` | Araç çubuğu |
| Neon Yeşil | `#00ffaa` | `0, 255, 170` | Birincil vurgu |
| Cyan | `#00ffff` | `0, 255, 255` | İkincil vurgu |
| Mor | `#6600ff` | `102, 0, 255` | Aksan rengi |

## 🤝 Katkıda Bulunma

Bu projeyi geliştirmek isterseniz:

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Sürüm Geçmişi

### v1.0.0 (2025-10-30)
- ✨ İlk yayın
- 🎨 Uzay temalı tasarım
- 💻 Hacking kültürü elementleri
- 🦅 H4WK logosu ve branding
- 🌈 Neon renk paleti
- 📱 Tüm Chrome sürümleri ile uyumlu

## 👨‍💻 Geliştirici

**H4WK - ŞAHİN**

- GitHub: [@faikkshn](https://github.com/faikkshn)
- Tema Deposu: [H4wk-Chrome-Thame](https://github.com/faikkshn/H4wk-Chrome-Thame)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- Chrome DevTools ekibine
- Tüm açık kaynak katkıda bulunanlara
- Cyberpunk ve uzay temalı tasarım topluluğuna

---

**⚡ Made with passion by H4WK - ŞAHİN**

*"Keskin bir bakışla kodun derinliklerine dalın" - H4WK*

🌌 Space Age • 💻 Hacker Culture • 🦅 Hawk Power

