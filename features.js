(function () {
  function initFeatureInteractions() {
    const lessonGrid = document.querySelector('.lesson-grid');
    const searchInput = document.getElementById('lessonSearch');
    const searchButton = document.getElementById('lessonSearchButton');
    const lessonCount = document.getElementById('lessonResultCount');
    const randomLessonButton = document.getElementById('randomLesson');
    const focusModeButton = document.getElementById('focusMode');
    const toast = document.getElementById('featureToast');

    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 2600);
    }

    function filterLessonsBySearch(term) {
      if (!lessonGrid) return;

      const cards = Array.from(lessonGrid.querySelectorAll('.lesson-card'));
      const cleaned = term.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const title = card.querySelector('.lesson-title')?.textContent.toLowerCase() ?? '';
        const summary = card.querySelector('.lesson-summary span:last-child')?.textContent.toLowerCase() ?? '';
        const tag = card.querySelector('.lesson-tag')?.textContent.toLowerCase() ?? '';
        const shouldShow = !cleaned || title.includes(cleaned) || summary.includes(cleaned) || tag.includes(cleaned);

        card.style.display = shouldShow ? '' : 'none';
        if (shouldShow) visibleCount += 1;
      });

      if (lessonCount) {
        lessonCount.textContent = `${visibleCount} bài học`;
      }
    }

    if (searchInput && searchButton) {
      searchButton.addEventListener('click', () => filterLessonsBySearch(searchInput.value));
      searchInput.addEventListener('input', () => filterLessonsBySearch(searchInput.value));
    }

    if (randomLessonButton && lessonGrid) {
      randomLessonButton.addEventListener('click', () => {
        const cards = Array.from(lessonGrid.querySelectorAll('.lesson-card'));
        const visibleCards = cards.filter((card) => card.style.display !== 'none');
        const candidates = visibleCards.length ? visibleCards : cards;
        if (!candidates.length) return;

        const choice = candidates[Math.floor(Math.random() * candidates.length)];
        const title = choice.querySelector('.lesson-title')?.textContent.trim() ?? 'bài học';
        showToast(`Gợi ý hôm nay: ${title}`);

        cards.forEach((card) => card.classList.remove('featured'));
        choice.classList.add('featured');
      });
    }

    if (focusModeButton && lessonGrid) {
      focusModeButton.addEventListener('click', () => {
        const active = focusModeButton.classList.toggle('active');
        lessonGrid.classList.toggle('focus-mode', active);
        showToast(active ? 'Chế độ tập trung đang bật' : 'Chế độ tập trung tắt');
      });
    }

    const gradeTabs = Array.from(document.querySelectorAll('.tab-link'));
    if (gradeTabs.length && lessonGrid) {
      gradeTabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
          event.preventDefault();
          const grade = tab.textContent.trim();
          gradeTabs.forEach((item) => item.classList.toggle('active', item === tab));

          const cards = Array.from(lessonGrid.querySelectorAll('.lesson-card'));
          cards.forEach((card) => {
            const cardTitle = card.querySelector('.lesson-card-top .lesson-title')?.textContent.trim();
            const match = cardTitle && cardTitle.includes(grade.replace('Lớp', ''));
            card.style.opacity = match || grade === 'Lớp 7' ? '1' : '0.75';
          });

          showToast(`Đang xem ${grade}`);
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeatureInteractions);
  } else {
    initFeatureInteractions();
  }
})();
