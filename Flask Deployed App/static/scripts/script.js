window.onscroll = function() {myFunction()};

var navbar = document.getElementById('nav');

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('navbar-onscroll');
  } 
  else {
    navbar.classList.remove('navbar-onscroll');
  }
}

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const imageAddress = document.getElementById('imageAddress');

const MAX_IMAGE_WIDTH = 300;  
const MAX_IMAGE_HEIGHT = 300;

imageInput.addEventListener('change', function() {
    const selectedImage = imageInput.files[0];

    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageElement = document.createElement('img');
            imageElement.src = event.target.result;

            // Set max width and height for the displayed image
            const aspectRatio = imageElement.width / imageElement.height;
            if (aspectRatio > 1) {
                imageElement.style.maxWidth = `${MAX_IMAGE_WIDTH}px`;
                imageElement.style.maxHeight = 'none';
            } else {
                imageElement.style.maxWidth = 'none';
                imageElement.style.maxHeight = `${MAX_IMAGE_HEIGHT}px`;
            }

            imagePreview.innerHTML = '';
            imagePreview.appendChild(imageElement);

            imageAddress.textContent = `Image Address: ${event.target.result}`;
        }

        reader.readAsDataURL(selectedImage);
    } else {
        imagePreview.innerHTML = '';
        imageAddress.textContent = 'Image Address: No image selected';
    }
});


// POP Up  Code

function showPopup() {
  console.log("showPopup() called");
  const loginPopup = document.getElementById('loginPopup');
  loginPopup.style.display = 'flex';
}

function closePopup() {
  console.log("closePopup() called");
  const loginPopup = document.getElementById('loginPopup');
  loginPopup.style.display = 'none';
}

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'block';
}

// Function to close a specific popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none';
}

async function handleLogin(){
  let name = document.getElementById("username");
  let email = document.getElementById("useremail");
  let password = document.getElementById("userpass");

  const response = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({name, email, password})
  }).then(()=>console.log("Register Successfully")).catch((error)=>console.log(error.message))
  
}

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', handleLogin);