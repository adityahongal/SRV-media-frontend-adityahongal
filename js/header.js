 (function () { 
    const sticky = document.querySelector('.sticky-header');
    const heroHeader = document.querySelector('.hero-header');
  
    if (!sticky || !heroHeader) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        const hidden = entry.isIntersecting;
        sticky.dataset.state = hidden ? 'hidden' : 'visible';
        sticky.inert = hidden;
        sticky.setAttribute('aria-hidden', hidden ? 'true' : 'false');
      },
      { threshold: 0 }
    );
  
    observer.observe(heroHeader);
  })();