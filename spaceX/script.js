


const btn = document.querySelector('#menu-btn');
const overLay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;



document.addEventListener('scroll', scrollPage);


btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    overLay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu')
});

function scrollPage() {
    const scrollPos = window.scrollY;
    console.log(scrollPos);

    if(scrollPos > 100 && !scrollStarted) {
        countUp(); 
        scrollStarted = true;      
    }else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}




function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;

            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 75);
            }else {
                counter.innerText = target
            }
        }

        updateCounter();
    });
}


function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}

