function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var butto = document.getElementById("button");
  if (checkBox.checked == true){
    butto.style.display = "block";
  } else {
     butto.style.display = "none";
  }
}