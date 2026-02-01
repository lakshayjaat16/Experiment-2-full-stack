document.addEventListener('DOMContentLoaded', function() {
    const experimentCards = document.querySelectorAll('.experiment-card');
    
    experimentCards.forEach(card => {
        card.addEventListener('click', function() {
            const experiment = this.dataset.experiment;

            if (experiment) {
                window.location.href = `${experiment}/index.html`;
            }
        });

        card.style.cursor = 'pointer';
    });
});