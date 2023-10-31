const duck = document.querySelector('.duck');

duck.addEventListener('click', () => {
    const audio = new Audio('\Documents\whiteboard\quack_5.mp3'); // Add the path to your quack sound here
    audio.play();
});
