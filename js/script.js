(function () {
  document.querySelectorAll('.rating__stars').forEach(function (container) {
    container.style.userSelect = 'none';
    container.style.color = '#cc1';

    const stars = container.querySelectorAll('.rating__star');

    // Styling each star
    stars.forEach(function (star) {
      star.style.display = 'inline-block';
      star.style.height = star.style.width = star.style.lineHeight = star.style.fontSize = '24px';
    });

    container.addEventListener('click', function (e) {
      if (container.dataset.stars || !e.target.classList.contains('rating__star')) return;

      const clickedIndex = Array.from(stars).indexOf(e.target);
      container.dataset.stars = clickedIndex + 1;
      container.dataset.maxStars = stars.length;

      const label = container.previousElementSibling;
      container.dataset.name = label ? label.textContent.trim() : '';
    });

    container.addEventListener('mouseover', function (e) {
      if (container.dataset.stars) {
        container.style.cursor = 'auto';
        return;
      }

      if (!e.target.classList.contains('rating__star')) return;

      const hoveredIndex = Array.from(stars).indexOf(e.target);
      stars.forEach((star, index) => {
        star.textContent = index <= hoveredIndex ? '★' : '☆';
      });

      container.style.cursor = 'pointer';
    });

    container.addEventListener('mouseleave', function () {
      if (container.dataset.stars) return;

      stars.forEach((star) => {
        star.textContent = '☆';
      });
    });
  });
})();
