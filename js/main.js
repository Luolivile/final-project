//get all thumbs
var thumbs =  document.getElementsByClassName('thumb');

//changes backgorund color on hover
for (i=0; i<thumbs.length; i++) {
  thumbs[i].addEventListener('mouseover', function (evt) {
    document.body.style.backgroundColor = evt.currentTarget.dataset.color
  });


//changes size on click
  thumbs[i].addEventListener('click', function(){
    //remove class selected
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');

    } else {
        var selected = document.querySelector('.selected')
        if (selected !== null) {
          selected.classList.remove('selected');
        }
        this.classList.add('selected');
    }
  })
    }

  
