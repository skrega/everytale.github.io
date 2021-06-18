$(function () {
    const marquee = document.querySelector('.marquee');
    let marqueeRect = null;

    const marqueeTrack = marquee.querySelector('.marquee__track');

    const marqueeTexts = Array.from(
        marquee.querySelectorAll('.marquee__text'),
        (el) => ({
            el,
            rect: null
        })
    );

    function onMouseMove(event) {
        const x = event.clientX - marqueeRect.left;
        const y = event.clientY - marqueeRect.top;


        marqueeTexts.forEach(text => {
            if ($('body').hasClass('theme--ligth')) {
                const grad = `
      radial-gradient(circle at ${x}px ${y}px, #1ca6fe, #e03f8e 25%, transparent 50%),
      linear-gradient(to bottom right, #fff, #fff)`;
                text.el.style.backgroundImage = grad;
            } else {
                const grad = `
                radial-gradient(circle at ${x}px ${y}px, #1ca6fe, #e03f8e 25%, transparent 50%),
                linear-gradient(to bottom right, #2c2e31, #22252a)`;
                text.el.style.backgroundImage = grad;
            }

        });
    }

    marquee.addEventListener('mouseenter', () => {
        marqueeTrack.style.animationPlayState = 'paused';

        marqueeRect = marquee.getBoundingClientRect();
        marqueeTexts.forEach(text => {
            text.rect = text.el.getBoundingClientRect();
            text.el.style.backgroundSize = `
      ${marqueeRect.width}px ${marqueeRect.height}px, 
      100% 100%`;
            text.el.style.backgroundPosition = `
      ${marqueeRect.left - text.rect.left}px ${marqueeRect.top - text.rect.top}px,
      0 0`;
        });

        marquee.addEventListener('mousemove', onMouseMove);
    });

    marquee.addEventListener('mouseleave', () => {
        marqueeTrack.style.animationPlayState = 'running';

        marqueeTexts.forEach(text => {
            if ($('body').hasClass('theme--ligth')) {
                const grad = `linear-gradient(to bottom right, #fff, #fff)`;
                text.el.style.backgroundImage = grad;
                text.el.style.backgroundSize = `200% 100%`;
                text.el.style.backgroundPosition = `0 0`;
            } else {
                const grad = `linear-gradient(to bottom right, #2c2e31, #22252a)`;
                text.el.style.backgroundImage = grad;
                text.el.style.backgroundSize = `200% 100%`;
                text.el.style.backgroundPosition = `0 0`;
            }

        });

        marquee.removeEventListener('mousemove', onMouseMove);
    });
})