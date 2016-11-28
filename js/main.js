
//get all thumbs
var thumbs =  document.getElementsByClassName('thumb');

//changes background color on hover
for (i=0; i<thumbs.length; i++) {
  thumbs[i].addEventListener('mouseover', function (evt) {
    document.body.style.backgroundColor = evt.currentTarget.dataset.color
  });

  //changes size on click
  thumbs[i].addEventListener('click', function(){
    //remove class selected
    //clicked on selected thumb
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
      document.body.classList.remove('thumbSelected');
      document.querySelector('.row').classList.remove('rowSelected');

    } else {
        var selected = document.querySelector('.selected')
        if (selected !== null) {
          selected.classList.remove('selected');
        }
        this.classList.add('selected');
        document.querySelector('.row').classList.add('rowSelected');
        document.body.classList.add('thumbSelected');
    }
  })
}

    document.querySelector('#close').addEventListener('click', function() {
        this.classList.contains('thumbSelected');
        this.classList.remove('thumbSelected');
        document.body.classList.remove('thumbSelected');
        document.querySelector('.thumb').classList.remove('selected');
    })

   document.querySelector('#right').addEventListener('click', function(){
      for (i=0; i<thumbs.length; i++) {
        if (thumbs[i].classList.contains('selected')) {
          thumbs[i].classList.remove('selected');
          if (i+1 >= thumbs.length) {
            var next = 0
          } else {
            var next = i+1
          }
          thumbs[next].classList.add('selected');
          break;
        }
      }
   })

   document.querySelector('#left').addEventListener('click', function (){
     for (i = thumbs.length - 1; i >= 0; i--) {
       if (thumbs[i].classList.contains('selected')) {
         thumbs[i].classList.remove('selected');
         if (i-1 <= 0) {
           var previous = thumbs.length -1
         } else {
           var previous = i-1
         }
         thumbs[previous].classList.add('selected');
         break;
       }
     }
   })
