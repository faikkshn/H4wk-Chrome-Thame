# H4WK TOOLKIT - KULLANIM REHBERİ 🦅

## 🚀 KURULUM (İLK ADIM)

### 1. Chrome Extension'ı Yükle:

```
1. Chrome'u aç
2. Adres çubuğuna yaz: chrome://extensions/
3. SAĞ ÜST köşede "Geliştirici modu" (Developer mode) AÇIK yap
4. Sol üstte "Paketlenmemiş öğe yükle" (Load unpacked) butonuna tıkla
5. H4wk-Chrome-Thame klasörünü seç
6. TAMAM!
```

---

## 🎯 ÖZELLIKLERE NASIL ERIŞILIR?

### Yöntem 1: Toolbar İkonu (EN KOLAY)

Extension yüklendikten sonra:

```
1. Chrome'un SAĞ ÜST köşesinde toolbar'a bak
2. H4WK logosu (yeşil şahin ikonu) göreceksin
3. İkona TIKLA
4. Popup pencere açılır - İşte araçlar burada! 🎉
```

**Göremediysen:**
- Toolbar'da puzzle (🧩) ikonuna tıkla
- "H4WK Space Hacker Toolkit" bul
- Sağındaki pim (📌) ikonuna tıkla
- Artık her zaman görünür!

---

### Yöntem 2: Klavye Kısayolu (HIZLI)

```
Ctrl + Shift + H
```

Herhangi bir sayfada bas, popup açılır!

---

## 🛠️ ARAÇLARI KULLANMA

### POPUP AÇILDIĞINDA:

```
┌────────────────────────────────────┐
│  🦅 H4WK                           │  ← Header
│     SPACE HACKER TOOLKIT           │
├────────────────────────────────────┤
│ TOOLS | ENCODING | SECURITY | INFO│  ← 4 Sekme
├────────────────────────────────────┤
│                                    │
│  [Tools burda görünür]             │  ← İçerik
│                                    │
└────────────────────────────────────┘
```

---

## 📋 4 SEKME DETAYLI KULLANIM

### 1️⃣ TOOLS SEKMESİ

**JSON Format:**
1. JSON içeren bir sayfaya git (örn: api.github.com)
2. H4WK popup aç
3. "JSON Format" butonuna tıkla
4. Sayfa otomatik formatlanır!

**Color Picker:**
1. Herhangi bir sayfada H4WK aç
2. "Color Picker" tıkla
3. Mouse'u elementin üzerine götür
4. Renk kodunu görürsün!

**Regex Test:**
1. "Regex Test" tıkla
2. Pattern yaz (örn: `\b\w+@\w+\.\w+\b` email için)
3. Flags yaz (gi)
4. Sayfa içinde arar, sonuçları gösterir!

**Quick Notes:**
1. "Quick Notes" tıkla
2. Not yaz
3. Kaydet
4. Her zaman erişilebilir!

**Screenshot:**
1. "Screenshot" tıkla
2. Otomatik indirir!

**Console:**
1. "Console" tıkla
2. JavaScript kodu yaz
3. Çalıştırır!

**Quick Actions:**
- **Clear Cookies**: Sayfa cookie'lerini sil
- **Clear Storage**: LocalStorage temizle
- **Hard Reload**: Cache'siz yenile

---

### 2️⃣ ENCODING SEKMESİ

```
┌────────────────────────────────┐
│  Text Encoder/Decoder          │
│                                │
│  [Metin gir...]                │  ← Buraya yaz
│                                │
│  [Base64 Encode] [Decode]      │  ← Butonlar
│  [URL Encode]    [Decode]      │
│  [Hex Encode]    [Decode]      │
│                                │
│  Output:                       │
│  [Sonuç burda]          [Copy] │  ← Copy ile kopyala
└────────────────────────────────┘
```

**Kullanım:**
1. Üst kutuya metin yaz
2. İstediğin butona tıkla
3. Alt kutuda sonucu gör
4. Copy ile kopyala!

---

### 3️⃣ SECURITY SEKMESİ

**Hash Calculator:**
```
1. Kutuya metin yaz
2. MD5/SHA-1/SHA-256/SHA-512 seç
3. Hash görünür
4. Copy ile kopyala
```

**Security Tools:**
- **Check Headers**: Sayfanın HTTP güvenlik header'larını gösterir
- **View Cookies**: Tüm cookie'leri listeler
- **View Storage**: LocalStorage + SessionStorage
- **SSL Info**: HTTPS sertifika bilgisi

---

### 4️⃣ PAGE INFO SEKMESİ

Otomatik gösterir:
- URL
- Title
- Protocol (http/https)
- Host
- Path
- Cookie sayısı

**Page Actions:**
- **View Source**: Sayfa kaynağını göster
- **View Headers**: Response header'ları
- **Extract Links**: Tüm linkleri listele
- **Extract Images**: Tüm görselleri listele

---

## ⌨️ KLAVYE KISAYOLLARI

Popup açmadan hızlı erişim:

| Tuş | Ne Yapar |
|-----|----------|
| `Ctrl+Shift+H` | Popup'ı aç |
| `Alt+H` | Console'da H4WK banner göster |
| `Alt+J` | Sayfadaki JSON'u formatla |
| `Alt+C` | URL'i kopyala |

---

## 🖱️ SAĞ TIK MENÜSÜ

```
1. Herhangi bir metni SEÇ
2. SAĞ TIK
3. "H4WK Toolkit" menüsünü gör
4. Alt menüden seç:
   - Encode/Decode → Base64, URL
   - Hash → SHA-256, SHA-512
   - Save to Quick Notes
   - Search on GitHub
   - Search on StackOverflow
```

**Örnek:**
```
1. "hello world" yazısını seç
2. Sağ tık → H4WK Toolkit → Encode/Decode → Base64 Encode
3. Otomatik kopyalanır: aGVsbG8gd29ybGQ=
```

---

## 💻 CONSOLE'DA H4WK UTILITIES

```javascript
// F12 bas, Console sekmesine git
// window.H4WK kullan:

H4WK.showBanner()           // Banner göster
H4WK.inspect('img')         // Tüm img'leri bul
H4WK.extractLinks()         // Tüm linkleri table'da göster
H4WK.extractImages()        // Tüm görselleri göster
H4WK.getMetadata()          // Sayfa bilgileri
H4WK.monitorRequests()      // Network isteklerini izle
H4WK.darkMode()             // Dark mode aç/kapa
H4WK.highlightLinks()       // Tüm linkleri yeşil vurgula
H4WK.getCookies()           // Cookie'leri göster
```

**Örnek Kullanım:**
```javascript
// GitHub'da dene:
H4WK.extractLinks()
// Tüm GitHub linklerini table'da gösterir!
```

---

## 🎨 TEMA ÖZELLİKLERİ

Extension yüklü olduğunda:

✅ **Chrome renkleri** otomatik değişir:
- Toolbar → Koyu uzay mavisi
- Sekme metni → Neon yeşil
- Arka plan → Uzay temalı

✅ **Yeni sekme** açınca:
- Space background görünür
- Nebula efektleri
- Yıldızlar

✅ **Console'da** otomatik:
- H4WK banner görünür
- Utilities listesi
- Yeşil log mesajları

---

## 🔍 ÖRNEK KULLANIM SENARYOLARI

### Senaryo 1: API Response Görüntüle
```
1. api.github.com/users/faikkshn adresine git
2. Ctrl+Shift+H bas
3. "JSON Format" tıkla
4. JSON otomatik formatlanır!
```

### Senaryo 2: Şifre Hash'le
```
1. Ctrl+Shift+H
2. "Security" sekmesi
3. "mysecretpassword" yaz
4. "SHA-256" tıkla
5. Hash'i kopyala!
```

### Senaryo 3: Sayfa Analizi
```
1. Herhangi bir sayfada F12 bas
2. Console'a yaz: H4WK.getMetadata()
3. Tüm sayfa bilgilerini görürsün!
```

### Senaryo 4: Link Topla
```
1. Ctrl+Shift+H
2. "Page Info" sekmesi
3. "Extract Links" tıkla
4. Alert'te tüm linkler!
```

### Senaryo 5: Base64 Encode
```
Yöntem A - Popup:
1. Ctrl+Shift+H
2. "Encoding" sekmesi
3. "Hello World" yaz
4. "Base64 Encode" tıkla
5. Sonuç: SGVsbG8gV29ybGQ=

Yöntem B - Sağ tık:
1. "Hello World" yazısını seç
2. Sağ tık → H4WK → Encode → Base64 Encode
3. Otomatik kopyalanır!
```

---

## ❓ SIKÇA SORULAN SORULAR

**S: Extension yüklendi ama ikon göremiyorum?**
C: Toolbar'da puzzle (🧩) ikonuna tıkla → H4WK'ı bul → Pin (📌) tıkla

**S: Popup açılmıyor?**
C: chrome://extensions/ git → H4WK'ı bul → Enabled olduğunu kontrol et

**S: Klavye kısayolu çalışmıyor?**
C: chrome://extensions/shortcuts → H4WK'ı bul → Ctrl+Shift+H kontrol et

**S: Tema renkleri gözükmüyor?**
C: Yeni sekme aç → Arka planı göreceksin. Tab renkleri otomatik değişiyor.

**S: Console'da H4WK yok?**
C: Sayfayı yenile (F5) → Console'da "H4WK Toolkit Active" göreceksin

**S: Sağ tık menüsü yok?**
C: Metin seçmeden sağ tıkladıysan görünmez. Önce metin SEÇ, sonra sağ tık.

---

## 🎯 ÖZET - HIZLI ERİŞİM

```
🖱️  Toolbar'da H4WK ikonu → TIKLA
⌨️  Ctrl+Shift+H → Popup aç
🖱️  Metin seç + Sağ tık → H4WK menüsü
💻 F12 → Console → H4WK.* komutlar
```

---

**🦅 H4WK Toolkit - Sharp Vision for Deep Code**

Extension her zaman aktif! Sadece erişim yöntemini seç ve kullan! 🚀
