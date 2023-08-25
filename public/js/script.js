// public/js/script.js
// const fetchButton = document.getElementById('uploadBtn');
// const apiResult = document.getElementById('apiResult');

// fetchButton.addEventListener('click', () => {
//     fetch('/dashboard')  // Assuming your API endpoint is '/api/greeting'
//         .then(response => response.json())
//         .then(data => {
//             apiResult.textContent = data.message;
//         })
//         .catch(error => {
//             console.error('An error occurred:', error);
//         });
// });

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popupBackground = document.getElementById("popupBackground");

openPopupButton.addEventListener("click", () => {
    popupBackground.style.display = "flex";
});

closePopupButton.addEventListener("click", () => {
    popupBackground.style.display = "none";
});

popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
        popupBackground.style.display = "none";
    }
});


// function fetchApiData() {
//     fetch('/fetch-media') // Replace with your API endpoint URL
//         .then(response => response.json())
//         .then(data => {
//             // Handle the API data here
//             const apiResult = document.getElementById('apiResult');
//             apiResult.textContent = JSON.stringify(data, null, 2);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// Call the fetchApiData function on page load



const uploadBtn = document.getElementById("uploadBtn");

document.getElementById('imageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload-media', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            console.log('Image uploaded:', data);
        })
        .catch(error => {
            console.error('Error uploading image:', error);
        });
    fetchApiData()
});



function fetchApiData() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    fetch('/fetch-media')
        .then(response => response.json())
        .then(images => {
            console.log(images.length);
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `data:${image.contentType};base64,${image.data}`;
                imgElement.classList.add('gallery-image');
                console.log(imgElement.src);
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}


window.onload = fetchApiData;

