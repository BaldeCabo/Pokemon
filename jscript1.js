let previewContainer = document.querySelector('.pokemon-preview');
let previewBox = previewContainer.querySelectorAll('.preview');


    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

   function playAudio() {
        var audio = document.getElementById('myAudio');
        var see = document.querySelector('.baton');
        audio.play();
        see.classList.add('hidden');
        }

    function stopAudio() {
        var audio = document.getElementById('myAudio');
        var stop = document.querySelector('.stopped');
        audio.muted = !audio.muted;
        if (audio.muted) {
            stop.style.display = 'flex';
        } else {
            stop.style.display = 'none';
        }
    }

    var stopImage = document.querySelector('.stop img');
    var audio = document.getElementById('myAudio');
    
    function startBounceAnimation() {
        if (!audio.muted) {
            stopImage.classList.add('bounce');
            setTimeout(function () {
                stopImage.classList.remove('bounce');
            }, 500);
        }
    }
    
    setInterval(startBounceAnimation, 5000);



// of the pokemons in the pokemon container
document.querySelectorAll('.pokemon-container .pokemon').forEach(pokemon =>{
    pokemon.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = pokemon.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target')
            if(name == target) {
                preview.classList.add('active');
                previewContainer.setAttribute('open',"")
            }
        });
    };
});

let nextPreviewsContainer = document.querySelector('.pokemon-preview');
let nextPreviewBoxes = nextPreviewsContainer.querySelectorAll('.preview');


//For the X button on the top right of the preview-pokemon
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.setAttribute('close', "");
        previewContainer.setAttribute('close', "");
        close.addEventListener('animationend', () => {
            close.classList.remove('active');
            close.removeAttribute('close');
            previewContainer.removeAttribute('close');
            previewContainer.style.display = 'none';
        }, {once: true})
    };
});


//For the seperate animations when clicking next and previous
        document.querySelectorAll('.pokemon-preview .preview .next').forEach(nextButton => {
            nextButton.onclick = () => {
                let name = nextButton.getAttribute('next-data');
                applyAnimation(name, 'prev');
            };
        });
        
        document.querySelectorAll('.pokemon-preview .preview .prev').forEach(prevButton => {
            prevButton.onclick = () => {
                let name = prevButton.getAttribute('prev-data');
                applyAnimation(name, 'next');
            };
        });
        
        function applyAnimation(name, direction) {
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name === target) {
                    preview.classList.remove('prev', 'next');
                    preview.classList.add('active', `${direction}`);
                } else {
                    preview.classList.remove('active');
                }
            });
        }

    

// document.querySelectorAll('.pokemon-preview .preview .next').forEach(nextButton => {
//     nextButton.onclick = () => {
//         let name = nextButton.getAttribute('next-data');
//         previewBox.forEach(preview => {
//             let target = preview.getAttribute('data-target');
//             if (name === target) {
//                 preview.classList.add('active');
//             } else {
//                 preview.classList.remove('active'); // Remove 'active' class from other previews
//             }
//         });
//     };
// });

// document.querySelectorAll('.pokemon-preview .preview .prev').forEach(prevButton => {
//     prevButton.onclick = () => {
//         let name = prevButton.getAttribute('prev-data');
//         previewBox.forEach(preview1 => {
//             let target = preview1.getAttribute('data-target');
//             if (name === target) {
//                 preview1.classList.add('active');

//             } else {
//                 preview1.classList.remove('active'); // Remove 'active' class from other previews
//             }
//         });
//     };
// });