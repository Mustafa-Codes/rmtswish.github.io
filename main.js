onload = () =>{
        document.body.classList.remove("container");
        window.addEventListener('DOMContentLoaded', function () {
                let audio = document.getElementById('background-audio');
                
                // Check if audio is already playing in localStorage
                if (localStorage.getItem('isAudioPlaying') === 'true') {
                    audio.play();
                }
            
                // Store audio playing state
                audio.onplay = function () {
                    localStorage.setItem('isAudioPlaying', 'true');
                };
            
                audio.onpause = function () {
                    localStorage.setItem('isAudioPlaying', 'false');
                };
            });
            document.addEventListener('DOMContentLoaded', function () {
                const audio = document.getElementById('background-audio');
    
                // Try to play the audio
                audio.play().then(() => {
                    // If the audio plays, unmute after a brief delay
                    setTimeout(() => {
                        audio.muted = false;
                    }, 1000); // Unmute after 1 second
                }).catch(() => {
                    // If autoplay fails, wait for user interaction
                    const playButton = document.createElement('button');
                    playButton.innerText = "Play Audio";
                    document.body.appendChild(playButton);
    
                    playButton.addEventListener('click', () => {
                        audio.play();
                        audio.muted = false;
                        playButton.remove(); // Remove the button after it is clicked
                    });
                });
            });

};
