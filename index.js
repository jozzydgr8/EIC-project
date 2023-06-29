
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  

  function mySecondFunction() {
    var secondDots = document.getElementById("second-dots");
    var secondMoreText = document.getElementById("second-more");
    var secondBtnText = document.getElementById("second-myBtn");
  
    if (secondDots.style.display === "none") {
      secondDots.style.display = "inline";
      secondBtnText.innerHTML = "...Read more";
      secondMoreText.style.display = "none";
    } else {
      secondDots.style.display = "none";
      secondBtnText.innerHTML = "Read less";
      secondMoreText.style.display = "inline";
    }
  }