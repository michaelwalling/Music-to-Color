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

var colorC ="#ff0000",
    colorDb="#cf9bff",
    colorD ="#ffff00",
    colorEb="#65659a",
    colorE ="#e4fbff",
    colorF ="#ad1500",
    colorGb="#00cdff",
    colorG ="#ff6500",
    colorAb="#ff00ff",
    colorA ="#2fcd30",
    colorBb="#8d8b8d",
    colorB ="#0000fe";

function randomizeColors() {
    var randColorC  = Math.floor(Math.random()*16777215).toString(16);
    var randColorDb = Math.floor(Math.random()*16777215).toString(16);
    var randColorD  = Math.floor(Math.random()*16777215).toString(16);
    var randColorEb = Math.floor(Math.random()*16777215).toString(16);
    var randColorE  = Math.floor(Math.random()*16777215).toString(16);
    var randColorF  = Math.floor(Math.random()*16777215).toString(16);
    var randColorGb = Math.floor(Math.random()*16777215).toString(16);
    var randColorG  = Math.floor(Math.random()*16777215).toString(16);
    var randColorAb = Math.floor(Math.random()*16777215).toString(16);
    var randColorA  = Math.floor(Math.random()*16777215).toString(16);
    var randColorBb = Math.floor(Math.random()*16777215).toString(16);
    var randColorB  = Math.floor(Math.random()*16777215).toString(16);
    colorC ="#"+randColorC;  document.getElementById('buttonColorC').jscolor.fromString(randColorC);
    colorDb="#"+randColorDb; document.getElementById('buttonColorDb').jscolor.fromString(randColorDb);
    colorD ="#"+randColorD;  document.getElementById('buttonColorD').jscolor.fromString(randColorD);
    colorEb="#"+randColorEb; document.getElementById('buttonColorEb').jscolor.fromString(randColorEb);
    colorE ="#"+randColorE;  document.getElementById('buttonColorE').jscolor.fromString(randColorE);
    colorF ="#"+randColorF;  document.getElementById('buttonColorF').jscolor.fromString(randColorF);
    colorGb="#"+randColorGb; document.getElementById('buttonColorGb').jscolor.fromString(randColorGb);
    colorG ="#"+randColorG;  document.getElementById('buttonColorG').jscolor.fromString(randColorG);
    colorAb="#"+randColorAb; document.getElementById('buttonColorAb').jscolor.fromString(randColorAb);
    colorA ="#"+randColorA;  document.getElementById('buttonColorA').jscolor.fromString(randColorA);
    colorBb="#"+randColorBb; document.getElementById('buttonColorBb').jscolor.fromString(randColorBb);
    colorB ="#"+randColorB;  document.getElementById('buttonColorB').jscolor.fromString(randColorB);
}

function applyColors() {
    colorC  = '#'+document.getElementById("selectColorC").value;
    colorDb = '#'+document.getElementById("selectColorDb").value;
    colorD  = '#'+document.getElementById("selectColorD").value;
    colorEb = '#'+document.getElementById("selectColorEb").value;
    colorE  = '#'+document.getElementById("selectColorE").value;
    colorF  = '#'+document.getElementById("selectColorF").value;
    colorGb = '#'+document.getElementById("selectColorGb").value;
    colorG  = '#'+document.getElementById("selectColorG").value;
    colorAb = '#'+document.getElementById("selectColorAb").value;
    colorA  = '#'+document.getElementById("selectColorA").value;
    colorBb = '#'+document.getElementById("selectColorBb").value;
    colorB  = '#'+document.getElementById("selectColorB").value;
}

document.getElementById("colorPresets").onchange = function() {
    var preset = document.getElementById("colorPresets").value;
    switch (preset) {
        case "default":
            colorC ="#ff0000"; document.getElementById('buttonColorC').jscolor.fromString('ff0000');
            colorDb="#cf9bff"; document.getElementById('buttonColorDb').jscolor.fromString('cf9bff');
            colorD ="#ffff00"; document.getElementById('buttonColorD').jscolor.fromString('ffff00');
            colorEb="#65659a"; document.getElementById('buttonColorEb').jscolor.fromString('65659a');
            colorE ="#e4fbff"; document.getElementById('buttonColorE').jscolor.fromString('e4fbff');
            colorF ="#ad1500"; document.getElementById('buttonColorF').jscolor.fromString('ad1500');
            colorGb="#00cdff"; document.getElementById('buttonColorGb').jscolor.fromString('00cdff');
            colorG ="#ff6500"; document.getElementById('buttonColorG').jscolor.fromString('ff6500');
            colorAb="#ff00ff"; document.getElementById('buttonColorAb').jscolor.fromString('ff00ff');
            colorA ="#2fcd30"; document.getElementById('buttonColorA').jscolor.fromString('2fcd30');
            colorBb="#8d8b8d"; document.getElementById('buttonColorBb').jscolor.fromString('8d8b8d');
            colorB ="#0000fe"; document.getElementById('buttonColorB').jscolor.fromString('0000fe');
            break;
        case "newton":
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
        case "castel":
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
        case "field":
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
        case "jameson":
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
        case "seemann":
            colorC ="#6a1c1c"; document.getElementById('buttonColorC').jscolor.fromString('6a1c1c');
            colorDb="#fa0b0c"; document.getElementById('buttonColorDb').jscolor.fromString('fa0b0c');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#f5d23b"; document.getElementById('buttonColorEb').jscolor.fromString('f5d23b');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#139032"; document.getElementById('buttonColorF').jscolor.fromString('139032');
            colorGb="#1b9081"; document.getElementById('buttonColorGb').jscolor.fromString('1b9081');
            colorG ="#1b0d82"; document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            colorAb="#7f087c"; document.getElementById('buttonColorAb').jscolor.fromString('7f087c');
            colorA ="#d71386"; document.getElementById('buttonColorA').jscolor.fromString('d71386');
            colorBb="#6a1c1c"; document.getElementById('buttonColorBb').jscolor.fromString('6a1c1c');
            colorB ="#070707"; document.getElementById('buttonColorB').jscolor.fromString('070707');
            break;
        case "rimington":
            colorC ="#f90a0c"; document.getElementById('buttonColorC').jscolor.fromString('f90a0c');
            colorDb="#9f0c09"; document.getElementById('buttonColorDb').jscolor.fromString('9f0c09');
            colorD ="#f44712"; document.getElementById('buttonColorD').jscolor.fromString('f44712');
            colorEb="#f78010"; document.getElementById('buttonColorEb').jscolor.fromString('f78010');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#709226"; document.getElementById('buttonColorF').jscolor.fromString('709226');
            colorGb="#139032"; document.getElementById('buttonColorGb').jscolor.fromString('139032');
            colorG ="#26a481"; document.getElementById('buttonColorG').jscolor.fromString('26a481');
            colorAb="#1b9081"; document.getElementById('buttonColorAb').jscolor.fromString('1b9081');
            colorA ="#7e087c"; document.getElementById('buttonColorA').jscolor.fromString('7e087c');
            colorBb="#1c0d82"; document.getElementById('buttonColorBb').jscolor.fromString('1c0d82');
            colorB ="#d71386"; document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
        case "bishop":
            colorC ="#f90a0c"; document.getElementById('buttonColorC').jscolor.fromString('f90a0c');
            colorDb="#9f0c09"; document.getElementById('buttonColorDb').jscolor.fromString('9f0c09');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#f5d110"; document.getElementById('buttonColorEb').jscolor.fromString('f5d110');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#bce039"; document.getElementById('buttonColorF').jscolor.fromString('bce039');
            colorGb="#139032"; document.getElementById('buttonColorGb').jscolor.fromString('139032');
            colorG ="#26a481"; document.getElementById('buttonColorG').jscolor.fromString('26a481');
            colorAb="#7e087c"; document.getElementById('buttonColorAb').jscolor.fromString('7e087c');
            colorA ="#d71386"; document.getElementById('buttonColorA').jscolor.fromString('d71386');
            colorBb="#d91951"; document.getElementById('buttonColorBb').jscolor.fromString('d91951');
            colorB ="#f90a0c"; document.getElementById('buttonColorB').jscolor.fromString('f90a0c');
            break;
        case "helmholtz":
            colorC ="#f5f43c"; document.getElementById('buttonColorC').jscolor.fromString('f5f43c');
            colorDb="#149033"; document.getElementById('buttonColorDb').jscolor.fromString('149033');
            colorD ="#1a9081"; document.getElementById('buttonColorD').jscolor.fromString('1a9081');
            colorEb="#1b5ba0"; document.getElementById('buttonColorEb').jscolor.fromString('1b5ba0');
            colorE ="#7f087c"; document.getElementById('buttonColorE').jscolor.fromString('7f087c');
            colorF ="#d71386"; document.getElementById('buttonColorF').jscolor.fromString('d71386');
            colorGb="#9d0e55"; document.getElementById('buttonColorGb').jscolor.fromString('9d0e55');
            colorG ="#fa0a0c"; document.getElementById('buttonColorG').jscolor.fromString('fa0a0c');
            colorAb="#d32c0a"; document.getElementById('buttonColorAb').jscolor.fromString('d32c0a');
            colorA ="#d32b09"; document.getElementById('buttonColorA').jscolor.fromString('d32b09');
            colorBb="#f62d0d"; document.getElementById('buttonColorBb').jscolor.fromString('f62d0d');
            colorB ="#f07a0f"; document.getElementById('buttonColorB').jscolor.fromString('f07a0f');
            break;
        case "scriabin":
            colorC ="#fa0b0c"; document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            colorDb="#d71386"; document.getElementById('buttonColorDb').jscolor.fromString('d71386');
            colorD ="#f4f43c"; document.getElementById('buttonColorD').jscolor.fromString('f4f43c');
            colorEb="#5a5685"; document.getElementById('buttonColorEb').jscolor.fromString('5a5685');
            colorE ="#1b5ba0"; document.getElementById('buttonColorE').jscolor.fromString('1b5ba0');
            colorF ="#9f0b09"; document.getElementById('buttonColorF').jscolor.fromString('9f0b09');
            colorGb="#1c0d82"; document.getElementById('buttonColorGb').jscolor.fromString('1c0d82');
            colorG ="#f88010"; document.getElementById('buttonColorG').jscolor.fromString('f88010');
            colorAb="#7f087c"; document.getElementById('buttonColorAb').jscolor.fromString('7f087c');
            colorA ="#149032"; document.getElementById('buttonColorA').jscolor.fromString('149032');
            colorBb="#5a5685"; document.getElementById('buttonColorBb').jscolor.fromString('5a5685');
            colorB ="#1c5ba0"; document.getElementById('buttonColorB').jscolor.fromString('1c5ba0');
            break;
        case "klein":
            colorC ="#c40a09"; document.getElementById('buttonColorC').jscolor.fromString('c40a09');
            colorDb="#fa0b0c"; document.getElementById('buttonColorDb').jscolor.fromString('fa0b0c');
            colorD ="#f44712"; document.getElementById('buttonColorD').jscolor.fromString('f44712');
            colorEb="#f88010"; document.getElementById('buttonColorEb').jscolor.fromString('f88010');
            colorE ="#f5f43c"; document.getElementById('buttonColorE').jscolor.fromString('f5f43c');
            colorF ="#bbe038"; document.getElementById('buttonColorF').jscolor.fromString('bbe038');
            colorGb="#149033"; document.getElementById('buttonColorGb').jscolor.fromString('149033');
            colorG ="#1b9081"; document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            colorAb="#1c0d82"; document.getElementById('buttonColorAb').jscolor.fromString('1c0d82');
            colorA ="#781887"; document.getElementById('buttonColorA').jscolor.fromString('781887');
            colorBb="#d71386"; document.getElementById('buttonColorBb').jscolor.fromString('d71386');
            colorB ="#9d0e55"; document.getElementById('buttonColorB').jscolor.fromString('9d0e55');
            break;
        case "aeppli":
            colorC ="#fa0b0c"; document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            colorDb="#ffffff"; document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#ffffff"; document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#ffffff"; document.getElementById('buttonColorF').jscolor.fromString('ffffff');
            colorGb="#139032"; document.getElementById('buttonColorGb').jscolor.fromString('139032');
            colorG ="#1b9081"; document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            colorAb="#ffffff"; document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            colorA ="#1c5ba0"; document.getElementById('buttonColorA').jscolor.fromString('1c5ba0');
            colorBb="#4a0d7d"; document.getElementById('buttonColorBb').jscolor.fromString('4a0d7d');
            colorB ="#7e087b"; document.getElementById('buttonColorB').jscolor.fromString('7e087b');
            break;
        case "belmont":
            colorC ="#fa0b0c"; document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            colorDb="#f44611"; document.getElementById('buttonColorDb').jscolor.fromString('f44611');
            colorD ="#f88010"; document.getElementById('buttonColorD').jscolor.fromString('f88010');
            colorEb="#f6d011"; document.getElementById('buttonColorEb').jscolor.fromString('f6d011');
            colorE ="#f4f33b"; document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            colorF ="#bce039"; document.getElementById('buttonColorF').jscolor.fromString('bce039');
            colorGb="#139032"; document.getElementById('buttonColorGb').jscolor.fromString('139032');
            colorG ="#1b9081"; document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            colorAb="#1c0d82"; document.getElementById('buttonColorAb').jscolor.fromString('1c0d82');
            colorA ="#a61586"; document.getElementById('buttonColorA').jscolor.fromString('a61586');
            colorBb="#d71386"; document.getElementById('buttonColorBb').jscolor.fromString('d71386');
            colorB ="#ad0e48"; document.getElementById('buttonColorB').jscolor.fromString('ad0e48');
            break;
        case "zieverink":
            colorC ="#bce039"; document.getElementById('buttonColorC').jscolor.fromString('bce039');
            colorDb="#149033"; document.getElementById('buttonColorDb').jscolor.fromString('149033');
            colorD ="#1b9081"; document.getElementById('buttonColorD').jscolor.fromString('1b9081');
            colorEb="#1c0d82"; document.getElementById('buttonColorEb').jscolor.fromString('1c0d82');
            colorE ="#7f087c"; document.getElementById('buttonColorE').jscolor.fromString('7f087c');
            colorF ="#d71286"; document.getElementById('buttonColorF').jscolor.fromString('d71286');
            colorGb="#6e0d45"; document.getElementById('buttonColorGb').jscolor.fromString('6e0d45');
            colorG ="#a00c09"; document.getElementById('buttonColorG').jscolor.fromString('a00c09');
            colorAb="#fa0b0c"; document.getElementById('buttonColorAb').jscolor.fromString('fa0b0c');
            colorA ="#f78010"; document.getElementById('buttonColorA').jscolor.fromString('f78010');
            colorBb="#ecf087"; document.getElementById('buttonColorBb').jscolor.fromString('ecf087');
            colorB ="#f5f43c"; document.getElementById('buttonColorB').jscolor.fromString('f5f43c');
            break;
            break;
   }
};