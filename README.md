# Halaman Isolir - Internet Service Provider

Halaman pemberitahuan isolir yang modern dan interaktif dengan berbagai animasi menarik.

## 🎨 Fitur

### Animasi & Efek Visual
- ✨ **Background Animation** - Gradient circles yang bergerak dengan efek blur
- 🌐 **Grid Overlay** - Grid pattern yang bergerak menciptakan efek depth
- 💫 **Particle Effects** - Partikel mengikuti gerakan mouse
- 🎯 **Tilt Effect** - Card yang bereaksi terhadap posisi mouse (3D tilt)
- 🌊 **Ripple Effect** - Efek ripple saat klik tombol
- ⚡ **Floating Animation** - Icon WiFi yang melayang naik-turun
- 🎭 **Gradient Shift** - Text gradient yang bergerak
- 📱 **Smooth Transitions** - Transisi halus pada semua interaksi

### Komponen
- 🚫 WiFi icon dengan animasi pulse dan slash effect
- 📋 Info cards dengan hover effects
- 📝 Step-by-step instructions dengan numbered badges
- 📞 Contact section dengan toggle animation
- ⏰ Real-time clock (waktu Indonesia)
- 🎨 Glassmorphism design dengan backdrop blur

### Responsive Design
- 📱 Mobile-friendly (480px+)
- 💻 Tablet-optimized (768px+)
- 🖥️ Desktop-enhanced (1024px+)

## 🚀 Cara Menggunakan

### Metode 1: Buka Langsung di Browser
1. Buka File Explorer
2. Navigate ke folder `d:\aplikasi-lagi\isolir`
3. Double-click file `index.html`
4. Halaman akan terbuka di browser default Anda

### Metode 2: Menggunakan Live Server (Recommended)
Jika Anda menggunakan VS Code:
1. Install extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Halaman akan terbuka di `http://localhost:5500`

### Metode 3: Menggunakan Python HTTP Server
```bash
cd d:\aplikasi-lagi\isolir
python -m http.server 8000
```
Kemudian buka browser dan akses: `http://localhost:8000`

## 📁 Struktur File

```
isolir/
├── index.html      # Struktur HTML utama
├── style.css       # Styling dan animasi CSS
├── script.js       # Interaktivitas JavaScript
└── README.md       # Dokumentasi ini
```

## 🎯 Interaksi yang Tersedia

1. **Hover pada Cards** - Card akan terangkat dengan efek 3D tilt
2. **Gerakkan Mouse** - Partikel warna-warni akan mengikuti kursor
3. **Klik "Hubungi Customer Service"** - Menampilkan info kontak dengan animasi
4. **Scroll** - Elemen akan muncul dengan fade-in animation
5. **Tekan ESC** - Menutup info kontak jika terbuka

## 🎨 Customisasi

### Mengubah Warna
Edit variabel CSS di `style.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --danger-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}
```

### Mengubah Kontak
Edit bagian contact di `index.html`:
```html
<div class="contact-item">
    <strong>WhatsApp:</strong>
    <a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a>
</div>
```

### Mengaktifkan Countdown Timer
Uncomment kode di `script.js` bagian `startCountdown()`:
```javascript
// Set target date (contoh: 2 jam dari sekarang)
const targetDate = new Date().getTime() + (2 * 60 * 60 * 1000);
startCountdown(targetDate);
```

## 🌟 Teknologi yang Digunakan

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations, gradients, glassmorphism
- **Vanilla JavaScript** - No dependencies, pure JS
- **Google Fonts** - Inter font family
- **SVG Icons** - Scalable vector graphics

## 📱 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE11 (limited support)

## 💡 Tips

1. **Performa Terbaik**: Gunakan browser modern (Chrome/Edge/Firefox)
2. **Efek Partikel**: Gerakkan mouse perlahan untuk melihat efek partikel
3. **3D Tilt**: Hover pada card dan gerakkan mouse untuk efek 3D
4. **Responsive**: Coba resize browser untuk melihat responsive design

## 📝 Lisensi

Free to use and modify for your internet service provider needs.

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**
