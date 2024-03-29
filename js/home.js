// Define an array of image URLs
const images = [
    './images/slideshow-1.jpeg',
    './images/slideshow-2.jpeg',
    './images/slideshow-3.jpeg',
    './images/mount-fuji.jpeg'
  ];
  
  let currentImage = 0;
  const slideshowContainer = document.querySelector('.come-visit');

  
  // Function to show the current image
  function showImage() {
    slideshowContainer.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)), url(" + images[currentImage] + ")";
  }
  
  // Function to navigate to the next image
  function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0; // Wrap around to the first image
    }
    showImage();
  }
  
  // Function to start the slideshow
  function startSlideshow() {
    showImage(); // Show the initial image
    setInterval(nextImage, 3000); // Change image every 3 seconds
  }
  
  // Call the startSlideshow function to begin the slideshow
  startSlideshow();
  
  
  
  
  
  
  