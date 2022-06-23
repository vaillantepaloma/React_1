// Button to open up mega Dialog
const openMegaDialogBtn = document.querySelector('.avatar-button__add-new');




// Mega Dialog
openMegaDialogBtn.addEventListener('click', function onOpen() {
    megadialog.showModal();
})






// Adding selected avatar on the web page
const avatarFormElement = document.getElementById('get_avatar_image_form');


function formSubmitted(event) {
    const fileInput = avatarFormElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if(files.length == 0) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
    const imageURL = URL.createObjectURL(image);
    addImageToDOM(imageURL);
}


function addImageToDOM(imageURL) {
    const div = document.createElement("div");
    div.classList.add("avatar-img-div");
    
    const button = document.createElement("button");
    button.classList.add("close-avatar-btn");

    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");
    closeIcon.name = "close-outline";

    button.appendChild(closeIcon);


    // Event Listener for close button
    button.addEventListener('click', deleteAvatar);


    div.appendChild(button);

    

    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");


    div.appendChild(imageElt);


    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(div, addAvatarButton);

    
    getUser(imageElt);

    
    

}


avatarFormElement.addEventListener("submit", formSubmitted);



function deleteAvatar() {
    minidialog.showModal();
}




// Removing user
const alertConfirmBtn = document.getElementById('alertConfirmBtn');

const closeAvatarBtn = document.querySelector(".close-avatar-btn");

const avatar = document.querySelector(".avatar-img-div");

alertConfirmBtn.addEventListener('click', removeUser);


// function getImg(image) {
//     var im = image;
// }


function getUser(imgElt) {
    console.log(imgElt);
    return imgElt;
}

function removeUser() {
    const imgToRemove = getUser();
    console.log(imgToRemove);
    imgToRemove.remove();
}



// const testBtn = document.querySelector(".test-btn");

// testBtn.addEventListener('click', deleteTestBtn());

// function deleteTestBtn() {
//     document.body.removeChild(testBtn);
// }
