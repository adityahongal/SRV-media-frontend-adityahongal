 (function () { 
    const sticky = document.querySelector('.sticky-header');
    const heroHeader = document.querySelector('.hero-header');
  
    if (!sticky || !heroHeader) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero header is OUT of view → show sticky.
        sticky.dataset.state = entry.isIntersecting ? 'hidden' : 'visible';
      },
      { threshold: 0 }
    );
  
    observer.observe(heroHeader);
  })();