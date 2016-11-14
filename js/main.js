var thumbs =  document.getElementsByClassName('thumb');

for (i=0; i<thumbs.length; i++) {
  thumbs[i].addEventListener('mouseover', function (evt) {
    document.body.style.backgroundColor = evt.currentTarget.dataset.color
  });
}
