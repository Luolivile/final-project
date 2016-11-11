var photo = document.querySelector('#thumb');

photo.addEventListener("mouseover", function() {
    photo.style.width = '400px';
    photo.style.height = '400px';
    photo.style.borderRadius = '200px';
  });

photo.addEventListener('mouseout', function() {
  photo.style.width = '200px';
  photo.style.height = '400px';
  photo.style.borderRadius = '200px';
});
  // reset the color after a short delay
