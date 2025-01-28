$("#myBtn").click(function(){
  $("#myModal").modal({backdrop: false});
});

$(document).ready(function(){
  $("#myBtn1").click(function(){
    $("#myModal1").modal();
  });
});

function myfun(){
    var x=document.getElementById("mypwd");
    if(x.type==='password'){
        x.type="text";
    }else{
        x.type='password';
    }
}

function myfun1(){
  var x=document.getElementById("mypwd1");
  if(x.type==='password'){
      x.type="text";
  }else{
      x.type='password';
  }
}
function myfun2(){
  var x=document.getElementById("mypwd2");
  if(x.type==='password'){
      x.type="text";
  }else{
      x.type='password';
  }
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// filterImages

function searchImages() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let images = document.querySelectorAll('.content');

  images.forEach(image => {
    let title = image.getAttribute('data-title').toLowerCase();
    if (title.includes(input)) {
        image.style.display = "block";
    } else {
        image.style.display = "none";
      }
  });
}
