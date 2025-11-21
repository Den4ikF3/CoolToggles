document.addEventListener('DOMContentLoaded', () => {

    const basketballToggle = document.querySelector('#basketball');
    const basketballBall = document.querySelector('.basketball-ball');
    
    let basketballZIndexTimeout1;
    let basketballZIndexTimeout2;

    if (basketballToggle && basketballBall) {
        
        basketballToggle.addEventListener('change', () => {
            
            if (basketballToggle.checked) {
                clearTimeout(basketballZIndexTimeout1);
                clearTimeout(basketballZIndexTimeout2);

                basketballBall.classList.remove('behind-rim'); 
                basketballBall.classList.add('is-shooting');
                basketballBall.classList.remove('is-dropping');

                basketballZIndexTimeout1 = setTimeout(() => {
                    basketballBall.classList.add('behind-rim');
                }, 1050);

                basketballZIndexTimeout2 = setTimeout(() => {
                    basketballBall.classList.remove('behind-rim');
                }, 1300);

            } else {
                clearTimeout(basketballZIndexTimeout1);
                clearTimeout(basketballZIndexTimeout2);

                basketballBall.classList.remove('behind-rim');
                basketballBall.classList.remove('is-shooting');
                basketballBall.classList.remove('is-dropping');                
            }
        });

        basketballBall.addEventListener('animationend', (event) => {
            
            if (event.animationName === 'basketball-shot') {
                basketballBall.classList.remove('is-shooting');
                basketballBall.classList.add('is-dropping');
            }
        });
    }


    const golfToggle = document.querySelector('#golf');
    const golfCourse = document.querySelector('.golf-course');
    const golfClub = document.querySelector('.golf-club');
    const golfBall = document.querySelector('.golf-ball');
    const golfFlagCloth = document.querySelector('.flag-cloth');

    if (golfToggle && golfCourse && golfClub && golfBall && golfFlagCloth) {
        
        let isAnimatingGolf = false;

        golfToggle.addEventListener('change', () => {
            if (isAnimatingGolf) {
                golfToggle.checked = !golfToggle.checked;
                return;
            }
            isAnimatingGolf = true;

            if (golfToggle.checked) {
                setTimeout(() => {
                    golfCourse.classList.add('club-appears');

                    setTimeout(() => {
                        golfCourse.classList.remove('club-appears');
                        golfCourse.classList.add('club-hits');
                    }, 400);

                }, 200);

            } else {
                golfCourse.classList.remove('ball-flying');
                golfBall.style.animation = 'none';                
                golfFlagCloth.textContent = 'Off'; 
                
                setTimeout(() => isAnimatingGolf = false, 500);
            }
        });

        golfClub.addEventListener('animationend', (event) => {
            if (event.animationName === 'club-hit') {
                golfCourse.classList.remove('club-hits');                
                golfBall.style.animation = '';                
                golfCourse.classList.add('ball-flying');
            }
        });
        
        golfBall.addEventListener('animationend', (event) => {
            if (event.animationName === 'ball-fly') {
                isAnimatingGolf = false;
                golfFlagCloth.textContent = 'On'; 
            }
        });
    }

    
    const catPawToggleInput = document.querySelector('#cat-paw');
    const catPawToggle = document.querySelector('.cat-paw-toggle');
    const catPaw = document.querySelector('.cat-paw');

    if (catPawToggleInput && catPawToggle && catPaw) {
        
        let isPawAnimating = false;

        catPawToggleInput.addEventListener('change', () => {
            if (isPawAnimating) {
                catPawToggleInput.checked = !catPawToggleInput.checked;
                return;
            }
            isPawAnimating = true;

            if (catPawToggleInput.checked) {
                catPawToggle.classList.add('is-swiping-right');
                catPawToggle.classList.remove('is-swiping-left');
                
                setTimeout(() => {
                    catPawToggle.classList.add('is-on');
                }, 300);

            } else {
                catPawToggle.classList.add('is-swiping-left');
                catPawToggle.classList.remove('is-swiping-right');
                
                setTimeout(() => {
                    catPawToggle.classList.remove('is-on');
                }, 300);
            }
        });

        catPaw.addEventListener('animationend', (event) => {
            catPawToggle.classList.remove('is-swiping-right');
            catPawToggle.classList.remove('is-swiping-left');
            isPawAnimating = false;
        });
    }
});