//TO-DOS
//HTML/CSS
//Make home page
//Make food page
//Make travel essentials page (Use tables)
//Make tours page

//Javascript
// Implement search function?
// Implement local database
// Do some animations maybe

// Define an array of image URLs
var images = [
    './images/slideshow-1.jpeg',
    './images/slideshow-2.jpeg',
    './images/slideshow-3.jpeg',
    './images/mount-fuji.jpeg'
    // Add more image URLs as needed
  ];
  
  var currentImage = 0;
  var slideshowContainer = document.querySelector('.come-visit');

  
  // Function to show the current image
  function showImage() {
    slideshowContainer.style.backgroundImage = "url('" + images[currentImage] + "')";
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
  
  
  
  
  
  
  