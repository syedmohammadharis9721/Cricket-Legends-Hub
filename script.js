var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


window.submitVote = function () {
  const select = document.getElementById("vote-select");
  const message = document.getElementById("vote-message");
  const selected = select.value;

  const formattedName = selected
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  message.innerText = `Your vote for ${formattedName} has been submitted!`;
  message.style.display = "block";
};




//   style
