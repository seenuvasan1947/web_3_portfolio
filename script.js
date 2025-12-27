// ========================================
// Smooth Scroll & Navigation
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Animated Counter Function
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target >= 100 ? `#${target}` : target;
                clearInterval(timer);
            } else {
                element.textContent = target >= 100 ? `#${Math.floor(current)}` : Math.floor(current);
            }
        }, 16);
    };

    // Intersection Observer for Counter Animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all stat values
    document.querySelectorAll('.stat-value').forEach(stat => {
        counterObserver.observe(stat);
    });

    // Observe severity counts
    document.querySelectorAll('.severity-count').forEach(count => {
        counterObserver.observe(count);
    });

    // ========================================
    // Severity Bar Animation
    // ========================================
    const severityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const count = parseInt(card.querySelector('.severity-count').getAttribute('data-target'));
                const fill = card.querySelector('.severity-fill');
                const maxCount = 6; // Highest severity count
                const percentage = (count / maxCount) * 100;
                
                setTimeout(() => {
                    fill.style.width = `${percentage}%`;
                }, 300);
                
                severityObserver.unobserve(card);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.severity-card').forEach(card => {
        severityObserver.observe(card);
    });

    // ========================================
    // Scroll Animations
    // ========================================
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Add scroll animation to cards
    document.querySelectorAll('.stat-card, .severity-card, .skill-card, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(element);
    });

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Parallax Effect for Hero Section
    // ========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 800);
        }
    });

    // ========================================
    // Dynamic Gradient Orbs Movement
    // ========================================
    const orbs = document.querySelectorAll('.gradient-orb');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
    });

    function animateOrbs() {
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = Math.sin(Date.now() / 3000 + index) * 100 + (mouseX * 50);
            const y = Math.cos(Date.now() / 3000 + index) * 100 + (mouseY * 50);
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        requestAnimationFrame(animateOrbs);
    }

    animateOrbs();

    // ========================================
    // Achievement Card Tilt Effect
    // ========================================
    const achievementCard = document.querySelector('.achievement-card-preview');
    
    if (achievementCard) {
        achievementCard.addEventListener('mousemove', (e) => {
            const rect = achievementCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            achievementCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        achievementCard.addEventListener('mouseleave', () => {
            achievementCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    }

    // ========================================
    // Skill Card Hover Effect
    // ========================================
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ========================================
    // Timeline Item Sequential Animation
    // ========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });

    // ========================================
    // Button Ripple Effect
    // ========================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Console Easter Egg
    // ========================================
    console.log('%c🔐 Web3 Security Portfolio', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cInterested in security? Let\'s connect!', 'font-size: 14px; color: #764ba2;');
    console.log('%cRank: #236 | EXP: 930 | Submissions: 15', 'font-size: 12px; color: #4facfe;');

    // ========================================
    // Performance Optimization
    // ========================================
    // Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Accessibility Enhancements
    // ========================================
    // Add keyboard navigation support
    document.querySelectorAll('.nav-link, .btn').forEach(element => {
        element.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                element.click();
            }
        });
    });

    // Announce page sections to screen readers
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        section.setAttribute('role', 'region');
        section.setAttribute('aria-label', section.id.replace('-', ' '));
    });

    console.log('✅ Portfolio initialized successfully!');
});

// ========================================
// Utility Functions
// ========================================

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatNumber, debounce };
}
