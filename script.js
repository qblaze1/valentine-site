const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

if (yesBtn && noBtn) {
    const phrases = [
        "Ты уверена??",
        "Клянись",
        "...",
        "Ты прям вот реально не хочешь?",
        "УЖЕ ДАЖЕ КОТ ЗЛИТСЯ НУ ТЫ ЧЕГО",
        "Ну всё ясно",
        "Ты дальше можешь не кликать!!",
        "Это идёт по кругу",
        "Может быть, все-таки да?"
    ];

    let phraseIndex = 0;
    let yesScale = 1;
    let noClickCount = 0;
    const mainGif = document.querySelector('.gif');

    noBtn.addEventListener('click', () => {

        noClickCount++;

       
        if (noClickCount === 5 && mainGif) {
            mainGif.src = 'angry.gif';
        }

        

        
        noBtn.textContent = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;

        
        yesScale += 0.3;
        yesBtn.style.transform = `scale(${yesScale})`;

        
        moveNoButton();
    });

    yesBtn.addEventListener('click', () => {
        window.location.href = 'yes_page.html';
    });

    function moveNoButton() {
        const padding = 20;

        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const maxX = window.innerWidth - btnWidth - padding;
        const maxY = window.innerHeight - btnHeight - padding;

        const randomX = Math.floor(padding + Math.random() * maxX);
        const randomY = Math.floor(padding + Math.random() * maxY);

        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }
}