function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            if (headerinsert = document.getElementById('headerinsert')) {
                headerinsert.outerHTML = data;
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(data => {
            if (footerinsert = document.getElementById('footerinsert')) {
                footerinsert.outerHTML = data;
            }
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
});

document.addEventListener('DOMContentLoaded', function () {

    const backgroundVideo = document.querySelector('.scrollblur');

    if (backgroundVideo) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                backgroundVideo.classList.add('blur');
            } else {
                backgroundVideo.classList.remove('blur');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const textContainer = document.getElementById('job-title');
    const innerText = document.getElementById('job-title-text');
    const texts = [
        "Product Owner",
        "Senior Game Designer",
        "Senior Technical Designer",
        "Senior Gameplay Programmer"
    ];
    let currentIndex = 0;

    if (textContainer && innerText) {
        innerText.textContent = texts[0];

        setInterval(() => {
            textContainer.classList.add('hidden');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                innerText.textContent = texts[currentIndex];
                textContainer.classList.remove('hidden');
            }, 1000);
        }, 4000);

        
        setInterval(() => {
            if(innerText.textContent.endsWith("."))
            {
                innerText.textContent = innerText.textContent.slice(0, -1);
            }
            else
            {
                innerText.textContent = innerText.textContent + ".";
            }
        }, 500);
    }
});