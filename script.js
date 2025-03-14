document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    showCard(currentIndex);

    leftButton.addEventListener('click', function() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => {
                console.warn("Erreur de lecture audio : ", err);
            });
        } else {
            console.warn("L'élément audio #clickSound est introuvable.");
        }

        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    rightButton.addEventListener('click', function() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => {
                console.warn("Erreur de lecture audio : ", err);
            });
        } else {
            console.warn("L'élément audio #clickSound est introuvable.");
        }

        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });
});