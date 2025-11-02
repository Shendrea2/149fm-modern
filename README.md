# 149FM Underground Radio 🎵

Un site de radio online cu design cyberpunk/underground și funcționalități moderne.

## ✨ Features

- 🎧 **Audio Player Modern**: Player HTML5 cu control volume și butoane intuitive
- 📊 **Waveform Visualizer**: Animație vizuală în timp real când radioul este pornit
- 📱 **Responsive Design**: Funcționează perfect pe desktop, tablet și mobile
- 🎨 **Design Neon/Cyberpunk**: Gradient-uri colorate, glassmorphism, animații smooth
- 📋 **Playlist Dinamic**: Afișare track-uri recente cu indicator pentru piesa curentă
- 📅 **Program Radio**: Grid cu programul complet al emisiunilor
- 🔝 **Smart Header**: Se ascunde automat când dai scroll în jos, apare când dai scroll în sus
- 📈 **Live Stats**: Afișare live a numărului de ascultători, bitrate, uptime

## 📁 Structura Fișierelor

```
149fm-radio/
├── index.html          # Pagina principală
├── style.css           # Toate stilurile (cu variabile CSS pentru personalizare)
├── script.js           # Toată funcționalitatea JavaScript
└── README.md          # Acest fișier
```

## 🚀 Instalare și Utilizare

### 1. Clone repository-ul
```bash
git clone https://github.com/username/149fm-radio.git
cd 149fm-radio
```

### 2. Deschide în browser
Simplu deschide `index.html` în browser sau folosește un local server:

```bash
# Cu Python 3
python -m http.server 8000

# Cu Node.js (http-server)
npx http-server

# Cu PHP
php -S localhost:8000
```

### 3. Accesează
Deschide `http://localhost:8000` în browser

## ⚙️ Configurare

### Schimbă URL-ul Stream-ului

În `index.html`, găsește:
```html
<audio id="audioPlayer" preload="none">
  <source src="https://stream.zeno.fm/6vc4ddpr3ehvv" type="audio/mpeg">
</audio>
```

Înlocuiește cu URL-ul tău de stream.

### Personalizează Playlist-ul

În `script.js`, modifică array-ul `playlist`:
```javascript
const playlist = [
  { title: "Titlu Piesa", artist: "Artist", time: "3:45" },
  // Adaugă mai multe piese...
];
```

### Personalizează Programul

În `script.js`, modifică array-ul `schedule`:
```javascript
const schedule = [
  { time: "00:00–02:00", show: "Numele Emisiunii" },
  // Adaugă mai multe emisiuni...
];
```

### Schimbă Culorile

În `style.css`, modifică variabilele din `:root`:
```css
:root {
  --neon-pink: #ff006e;
  --neon-cyan: #00f5ff;
  --neon-purple: #8b5cf6;
  --neon-green: #39ff14;
  --dark-bg: #0a0a0f;
  --darker-bg: #050508;
  --card-bg: rgba(20, 20, 30, 0.8);
}
```

### Actualizează Social Links

În `index.html`, găsește secțiunea footer și actualizează link-urile:
```html
<div class="social-links">
  <a href="https://facebook.com/yourpage" target="_blank">FB</a>
  <a href="https://instagram.com/yourpage" target="_blank">IG</a>
  <a href="https://twitter.com/yourpage" target="_blank">TW</a>
</div>
```

## 🎨 Personalizare Avansată

### Integrare Metadata Real-Time

Dacă stream-ul tău oferă metadata (Icecast/Shoutcast), poți integra fetch-ul automat în `script.js`:

```javascript
async function fetchStreamMetadata() {
  try {
    const response = await fetch('YOUR_METADATA_API_ENDPOINT');
    const data = await response.json();
    currentTrack.textContent = data.title;
    currentArtist.textContent = data.artist;
  } catch (error) {
    console.error('Error fetching metadata:', error);
  }
}

setInterval(fetchStreamMetadata, 10000); // Update every 10 seconds
```

### Adaugă Secțiuni Noi

Structura este modulară. Pentru a adăuga o secțiune nouă:

1. Adaugă HTML-ul în `index.html`:
```html
<section class="section" id="nueva-section">
  <div class="container">
    <h2 class="section-title">TITLU SECȚIUNE</h2>
    <div class="content">
      <!-- Conținutul tău -->
    </div>
  </div>
</section>
```

2. Adaugă link în nav:
```html
<nav>
  <a href="#nueva-section">SECȚIUNE NOUĂ</a>
</nav>
```

3. Stilizează în `style.css`

## 🌐 Deploy

### GitHub Pages
1. Push codul pe GitHub
2. Settings → Pages → Source: main branch
3. Site-ul va fi live la `https://username.github.io/149fm-radio`

### Netlify
1. Drag & drop folderul pe [netlify.com](https://netlify.com)
2. Gata!

### Vercel
```bash
npm i -g vercel
vercel
```

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### Stream-ul nu pornește
- Verifică URL-ul stream-ului
- Verifică dacă stream-ul acceptă CORS
- Verifică console-ul browser-ului (F12) pentru erori

### Waveform-ul nu se mișcă
- Asigură-te că stream-ul s-a încărcat corect
- Verifică dacă JavaScript-ul nu are erori în console

### Header-ul nu se ascunde
- Verifică dacă JavaScript-ul este încărcat corect
- Testează cu scroll mai mare (>100px)

## 📄 Licență

MIT License - Free to use and modify!

## 🤝 Contribuții

Pull requests sunt binevenite! Pentru schimbări majore, deschide un issue mai întâi.

## 📞 Contact

- Instagram: [@149fm.radio](https://www.instagram.com/149fm.radio/)
- Email: contact@149fm.ro (actualizează cu email-ul tău)

---

Made with ❤️ for the underground community
