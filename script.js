document.addEventListener('DOMContentLoaded', () => {
    const frameImg = document.getElementById('animation-frame');
    const totalFrames = 40;
    let currentFrame = 1;
    const framePath = 'açai.jpeg/ezgif-frame-';

    function updateFrame() {
        currentFrame++;
        if (currentFrame > totalFrames) {
            currentFrame = 1;
        }

        const frameNum = String(currentFrame).padStart(3, '0');
        frameImg.src = `${framePath}${frameNum}.jpg`;
    }

    // Back to fast animation (100ms) as it was before
    setInterval(updateFrame, 100);
});
