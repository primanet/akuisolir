// Update current time
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
    };
    
    const formattedTime = now.toLocaleDateString('id-ID', options);
    timeElement.textContent = formattedTime;
}

// Toggle contact info
function toggleContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.classList.toggle('show');
    
    // Add ripple effect
    const btn = document.getElementById('contactBtn');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    btn.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Particle effect on mouse move
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 3 + 2;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    let opacity = 1;
    let posX = x;
    let posY = y;
    
    const animate = () => {
        opacity -= 0.02;
        posX += dx;
        posY += dy;
        
        particle.style.opacity = opacity;
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };
    
    requestAnimationFrame(animate);
}

// Add particle styles dynamically
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 10px currentColor;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Mouse move particle effect (throttled)
let lastParticleTime = 0;
const particleThrottle = 100; // milliseconds

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastParticleTime > particleThrottle) {
        createParticle(e.clientX, e.clientY);
        lastParticleTime = now;
    }
});

// Scroll reveal animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.info-item, .step');
    
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add tilt effect to cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.info-item, .step, .main-content');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Countdown timer (optional feature)
function startCountdown(targetDate) {
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownElement.innerHTML = `
        <div class="countdown-title">Estimasi Aktivasi Kembali</div>
        <div class="countdown-timer">
            <div class="countdown-item">
                <span class="countdown-value" id="hours">00</span>
                <span class="countdown-label">Jam</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value" id="minutes">00</span>
                <span class="countdown-label">Menit</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value" id="seconds">00</span>
                <span class="countdown-label">Detik</span>
            </div>
        </div>
    `;
    
    // Add countdown styles
    const countdownStyle = document.createElement('style');
    countdownStyle.textContent = `
        .countdown {
            margin: 2rem 0;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--card-border);
            border-radius: 16px;
            text-align: center;
        }
        
        .countdown-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }
        
        .countdown-timer {
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        
        .countdown-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .countdown-value {
            font-size: 3rem;
            font-weight: 800;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }
        
        .countdown-label {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
        }
        
        @media (max-width: 480px) {
            .countdown-timer {
                gap: 1rem;
            }
            
            .countdown-value {
                font-size: 2rem;
            }
        }
    `;
    document.head.appendChild(countdownStyle);
    
    // Update countdown every second
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            countdownElement.innerHTML = '<div class="countdown-title">Silakan refresh halaman atau hubungi CS</div>';
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    // Uncomment to enable countdown (set target date)
    // const actionSection = document.querySelector('.action-section');
    // actionSection.appendChild(countdownElement);
    // setInterval(updateCountdown, 1000);
    // updateCountdown();
}

// Floating animation for WiFi icon
function animateWifiIcon() {
    const wifiIcon = document.querySelector('.wifi-icon');
    let position = 0;
    let direction = 1;
    
    setInterval(() => {
        position += direction * 0.5;
        if (position > 10 || position < -10) {
            direction *= -1;
        }
        wifiIcon.style.transform = `translateY(${position}px)`;
    }, 50);
}

// Initialize all features
function init() {
    // Update time immediately and every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Add event listener to contact button
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', toggleContactInfo);
    
    // Add scroll reveal
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // Add tilt effect
    addTiltEffect();
    
    // Animate WiFi icon
    animateWifiIcon();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const contactInfo = document.getElementById('contactInfo');
            if (contactInfo.classList.contains('show')) {
                contactInfo.classList.remove('show');
            }
        }
    });
    
    // Log page load
    console.log('%c🚫 Halaman Isolir Loaded', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cHubungi customer service untuk mengaktifkan kembali layanan Anda', 'color: #f5576c; font-size: 14px;');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});
