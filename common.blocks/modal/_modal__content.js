 export const modalModule = document.addEventListener("DOMContentLoaded", () => {

    const modal = 
    document
    .querySelector("#modal");
    
    const videoButton = 
    document
    .querySelector(".section-three__video-button");
    
    const videoPlayer = document.querySelector("#video-player");

    const closeModal = 
    document
    .querySelector(".modal__button");
    
    //Open Modal
    videoButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Replace the src attribute with video URL
    videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw"


    // Close Modal
    closeModal.addEventListener("click",  () => {
        modal.style.display = "none";
    });

    // Close Modal With Outer Click

    window.addEventListener("click", () => {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.src = '';
          }
    });


});