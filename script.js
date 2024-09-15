const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', function() {
    
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        toggleBtn.textContent = 'Night';
        toggleBtn.style.color = 'white';
        toggleBtn.style.backgroundColor = '#444';
    } else {
        document.body.style.backgroundColor = 'black';
        toggleBtn.textContent = 'Day';
        toggleBtn.style.color = 'black';
        toggleBtn.style.backgroundColor = 'white';
    }
});