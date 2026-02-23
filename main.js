// ============================================
// JK IMPERIP — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- MOBILE MENU ----------
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- HEADER SCROLL EFFECT ----------
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ---------- HERO SLIDER ----------
    const slider = document.getElementById('heroSlider');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (slider) {
        const slides = slider.querySelectorAll('.hero-slide');
        let current = 0;
        const total = slides.length;

        function goToSlide(index) {
            current = (index + total) % total;
            slider.style.transform = `translateX(-${current * 100}%)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === current);
            });
        }

        function nextSlide() { goToSlide(current + 1); }
        function prevSlideF() { goToSlide(current - 1); }

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlideF(); resetTimer(); });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { goToSlide(i); resetTimer(); });
        });

        // Auto-play
        let timer = setInterval(nextSlide, 5000);

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(nextSlide, 5000);
        }

        // Touch/Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlideF();
                }
                resetTimer();
            }
        }, { passive: true });
    }

});
