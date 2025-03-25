function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('headerinsert').outerHTML = data;
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
            document.getElementById('footerinsert').outerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

window.onload = function() {
    loadHeader();
    loadFooter();
  };