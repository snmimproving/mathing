function comingSoonAlert() {
    alert('Coming soon');
        }
        document.querySelectorAll('.app-section').forEach(section => {
        section.addEventListener('click', comingSoonAlert);
        section.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            comingSoonAlert();
            }
        });
    });