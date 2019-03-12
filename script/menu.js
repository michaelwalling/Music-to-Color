var modalCheck = false;

function openNav() {
  document.getElementById("myNav").style.width = "300px";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function readMouseX(e) {
    var result_x = document.getElementById('x_result');
    result_x.style.display = "none";
    result_x.innerHTML = e.clientX;
    
    // if mouse is near left side of screen
    if ((e.clientX < 50) && (!modalCheck)) {
        openNav();
    }
    
    // if mouse is outside of navBar
    if ((e.clientX > 350) || (modalCheck)) {
        closeNav();
    }
}

document.onmousemove = readMouseX;

// Get the modals
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');

/* Get the <span> element that closes the modal
var spanList = document.getElementsByClassName("close");
for (i=0; i<spanList.length, i++) {
    spanList[i].onclick = closeModal;
}
*/

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modalCheck = false;
}
// When the user clicks the button, open the modal 
function openModal1() {
    modal1.style.display = "block";
    modalCheck = true;
}
function openModal2() {
    modal2.style.display = "block";
    modalCheck = true;
}
function openModal3() {
    modal3.style.display = "block";
    modalCheck = true;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
         modalCheck = false;
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
         modalCheck = false;
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
         modalCheck = false;
    }
}