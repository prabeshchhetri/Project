

// List of images stored in an array
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
const imageSelector = document.getElementById('imageSelector');
const selectedImage = document.getElementById('selectedImage');
const colorInput = document.getElementById('colorInput');
const studentIdDisplay = document.getElementById('studentIdDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');
const randomColorBtn = document.getElementById('randomColorBtn');

// Function to change background color based on input value
function changeBackgroundColor(value) {
    let color = "";
    
    if (value < 0 || value > 100) {
        color = "red";
    } else if (value >= 0 && value <= 20) {
        color = "green";
    } else if (value > 20 && value <= 40) {
        color = "blue";
    } else if (value > 40 && value <= 60) {
        color = "orange";
    } else if (value > 60 && value <= 80) {
        color = "purple";
    } else if (value > 80 && value <= 100) {
        color = "yellow";
    }

    console.log("Changing background to:", color); 
    document.body.style.background = color; 
}

// Function to handle custom color change
changeColorBtn.addEventListener('click', function() {
    const value = parseInt(colorInput.value);
    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }

    studentIdDisplay.textContent = "Your student ID: 200603366"; 
    changeBackgroundColor(value);
});

// Function to generate a random number and change the background color
randomColorBtn.addEventListener('click', function() {
    const randomValue = Math.floor(Math.random() * 101);
    colorInput.value = randomValue;
    studentIdDisplay.textContent = "Your student ID: 200603366"; 
    changeBackgroundColor(randomValue);
});

// Function to populate image selector dynamically
function populateImageSelector() {
    images.forEach(image => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = image;
        imageSelector.appendChild(option);
    });
}

// Function to display selected image
imageSelector.addEventListener('change', function() {
    const imageName = imageSelector.value;
    if (imageName) {
        selectedImage.src = `img/${imageName}`;
        selectedImage.style.display = 'block';
    } else {
        selectedImage.style.display = 'none';
    }
});


function preloadImages() {
    images.forEach(image => {
        const img = new Image();
        img.src = `img/${image}`;
    });
}


populateImageSelector();
preloadImages();
