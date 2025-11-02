// 149FM Underground Radio - Main Script

// Hide/Show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Audio player elements
const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const volumeSlider = document.getElementById('volumeSlider');
const currentTrack = document.getElementById('currentTrack');
const currentArtist = document.getElementById('currentArtist');
const listenersCount = document.getElementById('listeners');

let isPlaying = false;

// Playlist data - CUSTOMIZE THIS WITH YOUR TRACKS
const playlist = [
  { title: "Midnight Echoes", artist: "DJ Shadow", time: "3:45" },
  { title: "Neon Dreams", artist: "Synthwave Collective", time: "4:12" },
  { title: "Urban Pulse", artist: "Underground Beatz", time: "3:28" },
  { title: "Dark Matter", artist: "Bass Frequency", time: "5:01" },
  { title: "Electric Nights", artist: "Voltage FM", time: "3:55" },
  { title: "Concrete Jungle", artist: "City Sounds", time: "4:33" },
  { title: "After Hours", artist: "Late Night Vibes", time: "3:17" },
  { title: "Frequency Shift", artist: "Wavelength", time: "4:44" },
  { title: "Underground Movement", artist: "Subcultural", time: "3:52" },
  { title: "Digital Horizons", artist: "Future Bass", time: "4:08" }
];

// Schedule data - CUSTOMIZE THIS WITH YOUR SCHEDULE
const schedule = [
  { time: "00:00–02:00", show: "Nocturne Alternative" },
  { time: "02:00–04:00", show: "Synthwave Vibes" },
  { time: "04:00–06:00", show: "Chill & Ambient" },
  { time: "06:00–09:00", show: "Morning Beats" },
  { time: "09:00–12:00", show: "Underground Talks" },
  { time: "12:00–15:00", show: "Indie & Pop-Rock" },
  { time: "15:00–18:00", show: "Hip-Hop & Soul" },
  { time: "18:00–20:00", show: "Urban Spotlight" },
  { time: "20:00–22:00", show: "Electronic Journey" },
  { time: "22:00–00:00", show: "Late Night Chill" }
];

// Play/Pause functionality
playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = '▶';
    stopWaveform();
  } else {
    audio.play().catch(err => {
      console.error('Playback failed:', err);
      alert('Nu s-a putut începe redarea. Verifică conexiunea sau stream-ul.');
    });
    playButton.textContent = '⏸';
    animateWaveform();
  }
  isPlaying = !isPlaying;
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value / 100;
});

// Set initial volume
audio.volume = 0.7;

// Audio events
audio.addEventListener('error', (e) => {
  console.error('Audio error:', e);
  playButton.textContent = '▶';
  isPlaying = false;
  stopWaveform();
  currentTrack.textContent = 'Eroare la încărcare';
});

audio.addEventListener('waiting', () => {
  currentTrack.textContent = 'Se încarcă...';
});

audio.addEventListener('playing', () => {
  isPlaying = true;
  playButton.textContent = '⏸';
  animateWaveform();
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playButton.textContent = '▶';
  stopWaveform();
});

// Waveform animation
const waveform = document.getElementById('waveform');
let waveformBars = [];
let waveformInterval;

// Create waveform bars
for (let i = 0; i < 40; i++) {
  const bar = document.createElement('div');
  bar.className = 'waveform-bar';
  bar.style.height = '20px';
  waveform.appendChild(bar);
  waveformBars.push(bar);
}

function animateWaveform() {
  waveformInterval = setInterval(() => {
    waveformBars.forEach(bar => {
      const height = Math.random() * 60 + 20;
      bar.style.height = height + 'px';
    });
  }, 100);
}

function stopWaveform() {
  clearInterval(waveformInterval);
  waveformBars.forEach(bar => {
    bar.style.height = '20px';
  });
}

// Populate playlist
const playlistGrid = document.getElementById('playlistGrid');
playlist.forEach((track, index) => {
  const item = document.createElement('div');
  item.className = 'playlist-item';
  if (index === 0) item.classList.add('playing');
  item.innerHTML = `
    <div class="track-number">#${String(index + 1).padStart(2, '0')}</div>
    <div class="track-title">${track.title}</div>
    <div class="track-artist-small">${track.artist}</div>
    <div class="track-time">${track.time}</div>
  `;
  playlistGrid.appendChild(item);
});

// Populate schedule
const scheduleGrid = document.getElementById('scheduleGrid');
schedule.forEach(item => {
  const scheduleItem = document.createElement('div');
  scheduleItem.className = 'schedule-item';
  scheduleItem.innerHTML = `
    <div class="schedule-time">${item.time}</div>
    <div class="schedule-show">${item.show}</div>
  `;
  scheduleGrid.appendChild(scheduleItem);
});

// Simulate track changes (every 30 seconds for demo)
let currentTrackIndex = 0;
function updateCurrentTrack() {
  currentTrack.textContent = playlist[currentTrackIndex].title;
  currentArtist.textContent = playlist[currentTrackIndex].artist;
  
  // Update playing indicator in playlist
  document.querySelectorAll('.playlist-item').forEach((item, index) => {
    item.classList.toggle('playing', index === currentTrackIndex);
  });
  
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
}

// Initialize with first track
updateCurrentTrack();

// Change track periodically (simulate)
setInterval(updateCurrentTrack, 30000); // 30 seconds

// Simulate listener count changes
setInterval(() => {
  const change = Math.floor(Math.random() * 20) - 10;
  let count = parseInt(listenersCount.textContent) + change;
  count = Math.max(100, Math.min(500, count));
  listenersCount.textContent = count;
}, 5000);

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Fetch real metadata from stream (if your stream provides it)
// This is a placeholder - you'll need to implement based on your streaming service
/*
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

// Update metadata every 10 seconds
setInterval(fetchStreamMetadata, 10000);
*/
