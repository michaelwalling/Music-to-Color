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

document.getElementById("colorPresets").onchange = function() {
    var preset = document.getElementById("colorPresets").value;
    switch (preset) {
        case "0":
            break;
        case "1":
            colorC ="#fa0b0c"; document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            colorDb="#ffffff"; document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#ffffff"; document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#139032"; document.getElementById('buttonColorF').jscolor.fromString('139032');
            colorGb="#ffffff"; document.getElementById('buttonColorGb').jscolor.fromString('ffffff');
            colorG ="#1b0d82"; document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            colorAb="#ffffff"; document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            colorA ="#7f087c"; document.getElementById('buttonColorA').jscolor.fromString('7f087c');
            colorBb="#ffffff"; document.getElementById('buttonColorBb').jscolor.fromString('ffffff');
            colorB ="#d71386"; document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
        case "2":
            colorC ="#1c0d82"; document.getElementById('buttonColorC').jscolor.fromString('1c0d82');
            colorDb="#1b9081"; document.getElementById('buttonColorDb').jscolor.fromString('1b9081');
            colorD ="#149033"; document.getElementById('buttonColorD').jscolor.fromString('149033');
            colorEb="#709225"; document.getElementById('buttonColorEb').jscolor.fromString('709225');
            colorE ="#f5f43c"; document.getElementById('buttonColorE').jscolor.fromString('f5f43c');
            colorF ="#f5d23b"; document.getElementById('buttonColorF').jscolor.fromString('f5d23b');
            colorGb="#f88010"; document.getElementById('buttonColorGb').jscolor.fromString('f88010');
            colorG ="#f90b0c"; document.getElementById('buttonColorG').jscolor.fromString('f90b0c');
            colorAb="#a00b09"; document.getElementById('buttonColorAb').jscolor.fromString('a00b09');
            colorA ="#d71385"; document.getElementById('buttonColorA').jscolor.fromString('d71385');
            colorBb="#4b0e7d"; document.getElementById('buttonColorBb').jscolor.fromString('4b0e7d');
            colorB ="#7f087c"; document.getElementById('buttonColorB').jscolor.fromString('7f087c');
        break;
        case "3":
            colorC ="#1c0d82"; document.getElementById('buttonColorC').jscolor.fromString('1c0d82');
            colorDb="#ffffff"; document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            colorD ="#7e087b"; document.getElementById('buttonColorD').jscolor.fromString('7e087b');
            colorEb="#ffffff"; document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            colorE ="#fa0b0c"; document.getElementById('buttonColorE').jscolor.fromString('fa0b0c');
            colorF ="#f88010"; document.getElementById('buttonColorF').jscolor.fromString('f88010');
            colorGb="#ffffff"; document.getElementById('buttonColorGb').jscolor.fromString('ffffff');
            colorG ="#f5f33c"; document.getElementById('buttonColorG').jscolor.fromString('f5f33c');
            colorAb="#ffffff"; document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            colorA ="#709125"; document.getElementById('buttonColorA').jscolor.fromString('709125');
            colorBb="#ffffff"; document.getElementById('buttonColorBb').jscolor.fromString('ffffff');
            colorB ="#149033"; document.getElementById('buttonColorB').jscolor.fromString('149033');
            break;
        case "4":
            colorC ="#fa0b0c"; document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            colorDb="#f44712"; document.getElementById('buttonColorDb').jscolor.fromString('f44712');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#f5d23b"; document.getElementById('buttonColorEb').jscolor.fromString('f5d23b');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#139032"; document.getElementById('buttonColorF').jscolor.fromString('139032');
            colorGb="#1b9081"; document.getElementById('buttonColorGb').jscolor.fromString('1b9081');
            colorG ="#1b0d82"; document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            colorAb="#4b0e7d"; document.getElementById('buttonColorAb').jscolor.fromString('4b0e7d');
            colorA ="#7f087c"; document.getElementById('buttonColorA').jscolor.fromString('7f087c');
            colorBb="#a61586"; document.getElementById('buttonColorBb').jscolor.fromString('a61586');
            colorB ="#d71386"; document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
   }
};