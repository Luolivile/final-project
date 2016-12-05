
//get all thumbs
var thumbs =  document.getElementsByClassName('thumb');

function deselect () {
  document.body.querySelector('.selected').classList.remove('selected');
  document.body.classList.remove('thumbSelected');
  document.querySelector('.rowSelected').classList.remove('rowSelected');
}

function goToThumb (direction) {
  for (var i = 0; i < thumbs.length; i++) {
    if (thumbs[i].classList.contains('selected')) {
      thumbs[i].classList.remove('selected');
      document.querySelector('.rowSelected').classList.remove('rowSelected');

      var next = i + direction;
      next = (next >= thumbs.length ? 0 : next); // too high?
      next = (next < 0 ? thumbs.length - 1 : next); // too low?

      thumbs[next].classList.add('selected');
      thumbs[next].parentNode.classList.add('rowSelected');

      break;
    }
  }
}

//changes background color on hover
for (i=0; i<thumbs.length; i++) {
  thumbs[i].addEventListener('mouseover', function () {
    document.body.style.backgroundColor =  this.dataset.color
  });

  //changes size on click
  thumbs[i].addEventListener('click', function () {
    //remove class selected
    //clicked on selected thumb
    if (this.classList.contains('selected')) {
      deselect();

    } else {
      var selected = document.querySelector('.selected')
      if (selected !== null) {
        selected.classList.remove('selected');
      }

      this.classList.add('selected');
      this.parentNode.classList.add('rowSelected');
      document.body.classList.add('thumbSelected');
    }
  })
}

document.querySelector('#close').addEventListener('click', deselect);

document.querySelector('#right').addEventListener('click', function() {
  goToThumb(1)
});

document.querySelector('#left').addEventListener('click', function() {
  goToThumb(-1)
});
