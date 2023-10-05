
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
      secondBtnText.innerHTML = "Read more";
      secondMoreText.style.display = "none";
    } else {
      secondDots.style.display = "none";
      secondBtnText.innerHTML = "Read less";
      secondMoreText.style.display = "inline";
    }
  }


  function fintechReadMore(){
    var finDots = document.getElementById("finDots");
    var finMoreText = document.getElementById("fin-more");
    var finBtnText = document.getElementById("fin-myBtn");
  
    if (finDots.style.display === "none") {
      finDots.style.display = "inline";
      finBtnText.innerHTML = "Read more";
      finMoreText.style.display = "none";
    } else {
      finDots.style.display = "none";
      finBtnText.innerHTML = "...Read less";
      finMoreText.style.display = "inline";
    }
  }


  // **************business

  function businessReadMore(){
    var busDots = document.getElementById("busDots");
    var busMoreText = document.getElementById("bus-more");
    var busBtnText = document.getElementById("bus-myBtn");
  
    if (busDots.style.display === "none") {
      busDots.style.display = "inline";
      busBtnText.innerHTML = "Read more";
      busMoreText.style.display = "none";
    } else {
      busDots.style.display = "none";
      busBtnText.innerHTML = "...Read less";
      busMoreText.style.display = "inline";
    }
  }


  // ******distribution

  function distributionReadMore(){
    var disDots = document.getElementById("disDots");
    var disMoreText = document.getElementById("dis-more");
    var disBtnText = document.getElementById("dis-myBtn");
  
    if (disDots.style.display === "none") {
      disDots.style.display = "inline";
      disBtnText.innerHTML = "Read more";
      disMoreText.style.display = "none";
    } else {
      disDots.style.display = "none";
      disBtnText.innerHTML = "...Read less";
      disMoreText.style.display = "inline";
    }
  }


  window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    loader.style.display = "none";



    document. getElementById("content").style.display = "block";
  })

  //handling forms

  const fileInput = document.getElementById("myFileInput");
  const previewImage = document.getElementById("previewImage");

  fileInput.addEventListener('change', event=>{
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload=(e)=>{
      previewImage.src=e.target.result;
      previewImage.style.display='block';
    };
    reader.readAsDataURL(file);
  });