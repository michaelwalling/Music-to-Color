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

//MODAL SHORTCUTS
window.onkeydown = function(event) { openModal(event); }
function openModal(event) {
    var key = event.key;
    switch (key) {
        case "1":
            if (modal1.style.display == "block") {
                modalCheck = false;
                modal1.style.display = "none";
                modal2.style.display = "none";
                modal3.style.display = "none";
            }
            else {
                modalCheck = true;
                modal1.style.display = "block"
                modal2.style.display = "none";
                modal3.style.display = "none";
            }
            break;
        case "2":
            if (modal2.style.display == "block") {
                modalCheck = false;
                modal1.style.display = "none";
                modal2.style.display = "none";
                modal3.style.display = "none";
            }
            else {
                modalCheck = true;
                modal1.style.display = "none"
                modal2.style.display = "block";
                modal3.style.display = "none";
            }
            break;
        case "3":
            if (modal3.style.display == "block") {
                modalCheck = false;
                modal1.style.display = "none";
                modal2.style.display = "none";
                modal3.style.display = "none";
            }
            else {
                modalCheck = true;
                modal1.style.display = "none"
                modal2.style.display = "none";
                modal3.style.display = "block";
            }
            break;
        case "Escape":
            modalCheck = false;
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
            break;
        /*
        case "4":
            window.open("info.html","_self");
        */
    }
}









//COLORS

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
    tranNum = 0;
    tranValue.innerHTML = tranNum;
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
    document.getElementById('buttonColorC').jscolor.fromString(randColorC);
    document.getElementById('buttonColorDb').jscolor.fromString(randColorDb);
    document.getElementById('buttonColorD').jscolor.fromString(randColorD);
    document.getElementById('buttonColorEb').jscolor.fromString(randColorEb);
    document.getElementById('buttonColorE').jscolor.fromString(randColorE);
    document.getElementById('buttonColorF').jscolor.fromString(randColorF);
    document.getElementById('buttonColorGb').jscolor.fromString(randColorGb);
    document.getElementById('buttonColorG').jscolor.fromString(randColorG);
    document.getElementById('buttonColorAb').jscolor.fromString(randColorAb);
    document.getElementById('buttonColorA').jscolor.fromString(randColorA);
    document.getElementById('buttonColorBb').jscolor.fromString(randColorBb);
    document.getElementById('buttonColorB').jscolor.fromString(randColorB);
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

function saveColors() {
    applyColors();
    modal2.style.display = "none";
    modalCheck = false;
}

//Transpose Colors
var tranNum = 0;
var tranValue = document.getElementById('transposeValue');
function transposeColors(direction) {
    switch (direction) {
        case 'down':
            tranNum -= 1;
            var placeholder = document.getElementById("selectColorC").value;
            document.getElementById('buttonColorC').jscolor.fromString(document.getElementById("selectColorDb").value);
            document.getElementById('buttonColorDb').jscolor.fromString(document.getElementById("selectColorD").value);
            document.getElementById('buttonColorD').jscolor.fromString(document.getElementById("selectColorEb").value);
            document.getElementById('buttonColorEb').jscolor.fromString(document.getElementById("selectColorE").value);
            document.getElementById('buttonColorE').jscolor.fromString(document.getElementById("selectColorF").value);
            document.getElementById('buttonColorF').jscolor.fromString(document.getElementById("selectColorGb").value);
            document.getElementById('buttonColorGb').jscolor.fromString(document.getElementById("selectColorG").value);
            document.getElementById('buttonColorG').jscolor.fromString(document.getElementById("selectColorAb").value);
            document.getElementById('buttonColorAb').jscolor.fromString(document.getElementById("selectColorA").value);
            document.getElementById('buttonColorA').jscolor.fromString(document.getElementById("selectColorBb").value);
            document.getElementById('buttonColorBb').jscolor.fromString(document.getElementById("selectColorB").value);
            document.getElementById('buttonColorB').jscolor.fromString(placeholder);
            break;
        case 'up':
            tranNum += 1;
            var placeholder = document.getElementById("selectColorB").value;
            document.getElementById('buttonColorB').jscolor.fromString(document.getElementById("selectColorBb").value);
            document.getElementById('buttonColorBb').jscolor.fromString(document.getElementById("selectColorA").value);
            document.getElementById('buttonColorA').jscolor.fromString(document.getElementById("selectColorAb").value);
            document.getElementById('buttonColorAb').jscolor.fromString(document.getElementById("selectColorG").value);
            document.getElementById('buttonColorG').jscolor.fromString(document.getElementById("selectColorGb").value);
            document.getElementById('buttonColorGb').jscolor.fromString(document.getElementById("selectColorF").value);
            document.getElementById('buttonColorF').jscolor.fromString(document.getElementById("selectColorE").value);
            document.getElementById('buttonColorE').jscolor.fromString(document.getElementById("selectColorEb").value);
            document.getElementById('buttonColorEb').jscolor.fromString(document.getElementById("selectColorD").value);
            document.getElementById('buttonColorD').jscolor.fromString(document.getElementById("selectColorDb").value);
            document.getElementById('buttonColorDb').jscolor.fromString(document.getElementById("selectColorC").value);
            document.getElementById('buttonColorC').jscolor.fromString(placeholder);
            break;
    }
    
    if (tranNum >= 0) {
        tranValue.innerHTML = "+" + tranNum; }
    if (tranNum < 0) {
        tranValue.innerHTML = tranNum; }
    if (tranNum == 12) {
        tranNum = 0;
        tranValue.innerHTML = "+" + tranNum; }
    if (tranNum == -12) {
        tranNum = 0;
        tranValue.innerHTML = tranNum; }
}



document.getElementById("colorPresets").onchange = function() {
    tranNum = 0;
    tranValue.innerHTML = tranNum;
    var preset = document.getElementById("colorPresets").value;
    switch (preset) {
        case "default":
            document.getElementById('buttonColorC').jscolor.fromString('ff0000');
            document.getElementById('buttonColorDb').jscolor.fromString('cf9bff');
            document.getElementById('buttonColorD').jscolor.fromString('ffff00');
            document.getElementById('buttonColorEb').jscolor.fromString('65659a');
            document.getElementById('buttonColorE').jscolor.fromString('e4fbff');
            document.getElementById('buttonColorF').jscolor.fromString('ad1500');
            document.getElementById('buttonColorGb').jscolor.fromString('00cdff');
            document.getElementById('buttonColorG').jscolor.fromString('ff6500');
            document.getElementById('buttonColorAb').jscolor.fromString('ff00ff');
            document.getElementById('buttonColorA').jscolor.fromString('2fcd30');
            document.getElementById('buttonColorBb').jscolor.fromString('8d8b8d');
            document.getElementById('buttonColorB').jscolor.fromString('0000fe');
            break;
        case "newton":
            document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('139032');
            document.getElementById('buttonColorGb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorA').jscolor.fromString('7f087c');
            document.getElementById('buttonColorBb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
        case "castel":
            document.getElementById('buttonColorC').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorDb').jscolor.fromString('1b9081');
            document.getElementById('buttonColorD').jscolor.fromString('149033');
            document.getElementById('buttonColorEb').jscolor.fromString('709225');
            document.getElementById('buttonColorE').jscolor.fromString('f5f43c');
            document.getElementById('buttonColorF').jscolor.fromString('f5d23b');
            document.getElementById('buttonColorGb').jscolor.fromString('f88010');
            document.getElementById('buttonColorG').jscolor.fromString('f90b0c');
            document.getElementById('buttonColorAb').jscolor.fromString('a00b09');
            document.getElementById('buttonColorA').jscolor.fromString('d71385');
            document.getElementById('buttonColorBb').jscolor.fromString('4b0e7d');
            document.getElementById('buttonColorB').jscolor.fromString('7f087c');
        break;
        case "field":
            document.getElementById('buttonColorC').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorD').jscolor.fromString('7e087b');
            document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorE').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorF').jscolor.fromString('f88010');
            document.getElementById('buttonColorGb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorG').jscolor.fromString('f5f33c');
            document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorA').jscolor.fromString('709125');
            document.getElementById('buttonColorBb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorB').jscolor.fromString('149033');
            break;
        case "jameson":
            document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorDb').jscolor.fromString('f44712');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('f5d23b');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('139032');
            document.getElementById('buttonColorGb').jscolor.fromString('1b9081');
            document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            document.getElementById('buttonColorAb').jscolor.fromString('4b0e7d');
            document.getElementById('buttonColorA').jscolor.fromString('7f087c');
            document.getElementById('buttonColorBb').jscolor.fromString('a61586');
            document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
        case "seemann":
            document.getElementById('buttonColorC').jscolor.fromString('6a1c1c');
            document.getElementById('buttonColorDb').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('f5d23b');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('139032');
            document.getElementById('buttonColorGb').jscolor.fromString('1b9081');
            document.getElementById('buttonColorG').jscolor.fromString('1b0d82');
            document.getElementById('buttonColorAb').jscolor.fromString('7f087c');
            document.getElementById('buttonColorA').jscolor.fromString('d71386');
            document.getElementById('buttonColorBb').jscolor.fromString('6a1c1c');
            document.getElementById('buttonColorB').jscolor.fromString('070707');
            break;
        case "rimington":
            document.getElementById('buttonColorC').jscolor.fromString('f90a0c');
            document.getElementById('buttonColorDb').jscolor.fromString('9f0c09');
            document.getElementById('buttonColorD').jscolor.fromString('f44712');
            document.getElementById('buttonColorEb').jscolor.fromString('f78010');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('709226');
            document.getElementById('buttonColorGb').jscolor.fromString('139032');
            document.getElementById('buttonColorG').jscolor.fromString('26a481');
            document.getElementById('buttonColorAb').jscolor.fromString('1b9081');
            document.getElementById('buttonColorA').jscolor.fromString('7e087c');
            document.getElementById('buttonColorBb').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorB').jscolor.fromString('d71386');
            break;
        case "bishop":
            document.getElementById('buttonColorC').jscolor.fromString('f90a0c');
            document.getElementById('buttonColorDb').jscolor.fromString('9f0c09');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('f5d110');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('bce039');
            document.getElementById('buttonColorGb').jscolor.fromString('139032');
            document.getElementById('buttonColorG').jscolor.fromString('26a481');
            document.getElementById('buttonColorAb').jscolor.fromString('7e087c');
            document.getElementById('buttonColorA').jscolor.fromString('d71386');
            document.getElementById('buttonColorBb').jscolor.fromString('d91951');
            document.getElementById('buttonColorB').jscolor.fromString('f90a0c');
            break;
        case "helmholtz":
            document.getElementById('buttonColorC').jscolor.fromString('f5f43c');
            document.getElementById('buttonColorDb').jscolor.fromString('149033');
            document.getElementById('buttonColorD').jscolor.fromString('1a9081');
            document.getElementById('buttonColorEb').jscolor.fromString('1b5ba0');
            document.getElementById('buttonColorE').jscolor.fromString('7f087c');
            document.getElementById('buttonColorF').jscolor.fromString('d71386');
            document.getElementById('buttonColorGb').jscolor.fromString('9d0e55');
            document.getElementById('buttonColorG').jscolor.fromString('fa0a0c');
            document.getElementById('buttonColorAb').jscolor.fromString('d32c0a');
            document.getElementById('buttonColorA').jscolor.fromString('d32b09');
            document.getElementById('buttonColorBb').jscolor.fromString('f62d0d');
            document.getElementById('buttonColorB').jscolor.fromString('f07a0f');
            break;
        case "scriabin":
            document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorDb').jscolor.fromString('d71386');
            document.getElementById('buttonColorD').jscolor.fromString('f4f43c');
            document.getElementById('buttonColorEb').jscolor.fromString('5a5685');
            document.getElementById('buttonColorE').jscolor.fromString('1b5ba0');
            document.getElementById('buttonColorF').jscolor.fromString('9f0b09');
            document.getElementById('buttonColorGb').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorG').jscolor.fromString('f88010');
            document.getElementById('buttonColorAb').jscolor.fromString('7f087c');
            document.getElementById('buttonColorA').jscolor.fromString('149032');
            document.getElementById('buttonColorBb').jscolor.fromString('5a5685');
            document.getElementById('buttonColorB').jscolor.fromString('1c5ba0');
            break;
        case "klein":
            document.getElementById('buttonColorC').jscolor.fromString('c40a09');
            document.getElementById('buttonColorDb').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorD').jscolor.fromString('f44712');
            document.getElementById('buttonColorEb').jscolor.fromString('f88010');
            document.getElementById('buttonColorE').jscolor.fromString('f5f43c');
            document.getElementById('buttonColorF').jscolor.fromString('bbe038');
            document.getElementById('buttonColorGb').jscolor.fromString('149033');
            document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            document.getElementById('buttonColorAb').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorA').jscolor.fromString('781887');
            document.getElementById('buttonColorBb').jscolor.fromString('d71386');
            document.getElementById('buttonColorB').jscolor.fromString('9d0e55');
            break;
        case "aeppli":
            document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorDb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('ffffff');
            document.getElementById('buttonColorGb').jscolor.fromString('139032');
            document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            document.getElementById('buttonColorAb').jscolor.fromString('ffffff');
            document.getElementById('buttonColorA').jscolor.fromString('1c5ba0');
            document.getElementById('buttonColorBb').jscolor.fromString('4a0d7d');
            document.getElementById('buttonColorB').jscolor.fromString('7e087b');
            break;
        case "belmont":
            document.getElementById('buttonColorC').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorDb').jscolor.fromString('f44611');
            document.getElementById('buttonColorD').jscolor.fromString('f88010');
            document.getElementById('buttonColorEb').jscolor.fromString('f6d011');
            document.getElementById('buttonColorE').jscolor.fromString('f4f33b');
            document.getElementById('buttonColorF').jscolor.fromString('bce039');
            document.getElementById('buttonColorGb').jscolor.fromString('139032');
            document.getElementById('buttonColorG').jscolor.fromString('1b9081');
            document.getElementById('buttonColorAb').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorA').jscolor.fromString('a61586');
            document.getElementById('buttonColorBb').jscolor.fromString('d71386');
            document.getElementById('buttonColorB').jscolor.fromString('ad0e48');
            break;
        case "zieverink":
            document.getElementById('buttonColorC').jscolor.fromString('bce039');
            document.getElementById('buttonColorDb').jscolor.fromString('149033');
            document.getElementById('buttonColorD').jscolor.fromString('1b9081');
            document.getElementById('buttonColorEb').jscolor.fromString('1c0d82');
            document.getElementById('buttonColorE').jscolor.fromString('7f087c');
            document.getElementById('buttonColorF').jscolor.fromString('d71286');
            document.getElementById('buttonColorGb').jscolor.fromString('6e0d45');
            document.getElementById('buttonColorG').jscolor.fromString('a00c09');
            document.getElementById('buttonColorAb').jscolor.fromString('fa0b0c');
            document.getElementById('buttonColorA').jscolor.fromString('f78010');
            document.getElementById('buttonColorBb').jscolor.fromString('ecf087');
            document.getElementById('buttonColorB').jscolor.fromString('f5f43c');
            break;
   }
};










//SETTTINGS
//Set defaults so apply doesn't have to be pressed first
var inRadRadius = 0,
    outRadRadius = 250,
    initAlpha = 0.75,
    velRatio = 1.5,
    minRange = 36,
    maxRange = 84,
    fadeTime = 10,
    noteFade = true,
    pattern = 0;
    document.getElementById("patternHorizontal").checked = true;

//Inner Radius Slider
var inRadiusSlider = document.getElementById('inRadiusSlider');
var inRadiusSliderVal = document.getElementById('inRadiusSliderVal');
noUiSlider.create(inRadiusSlider, {
    start: inRadRadius,
    step: 1,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 999
    }
});
inRadiusSlider.noUiSlider.on('update', function (values, handle) {
    inRadiusSliderVal.innerHTML = parseInt(values[handle]);
});
inRadiusSlider.noUiSlider.on('set', function (values, handle) {
    var inVal = parseInt(values[handle]);
    var outVal = parseInt(outRadiusSlider.noUiSlider.get());
    if (inVal >= outVal) {
        inRadiusSlider.noUiSlider.set(outVal-1);
    }
});

//Outer Radius Slider
var outRadiusSlider = document.getElementById('outRadiusSlider');
var outRadiusSliderVal = document.getElementById('outRadiusSliderVal');
noUiSlider.create(outRadiusSlider, {
    start: outRadRadius,
    step: 1,
    connect: [true, false],
    range: {
        'min': 1,
        'max': 1000
    }
});
outRadiusSlider.noUiSlider.on('update', function (values, handle) {
    outRadiusSliderVal.innerHTML = parseInt(values[handle]);
});
outRadiusSlider.noUiSlider.on('set', function (values, handle) {
    var inVal = parseInt(inRadiusSlider.noUiSlider.get()); 
    var outVal = parseInt(values[handle]);
    if (outVal <= inVal) {
        outRadiusSlider.noUiSlider.set(inVal+1);
    }
});


//Alpha Slider
var alphaSlider = document.getElementById('alphaSlider');
var alphaSliderVal = document.getElementById('alphaSliderVal');
noUiSlider.create(alphaSlider, {
    start: initAlpha*100,
    step: 1,
    connect: [true, false],
    range: {
        'min': 10,
        'max': 100
    }
});
alphaSlider.noUiSlider.on('update', function (values, handle) {
    alphaSliderVal.innerHTML = parseInt(values[handle]) + "%";
});
//Change fade slider value
alphaSlider.noUiSlider.on('slide', function (values, handle) {
    var sec = (parseInt(fadeSlider.noUiSlider.get()) / 10) * (parseInt(values[handle]) / 100);
    fadeSliderVal.innerHTML = (Math.floor(sec * 100) / 100) + " sec";
});
alphaSlider.noUiSlider.on('set', function (values, handle) {
    var sec = (parseInt(fadeSlider.noUiSlider.get()) / 10) * (parseInt(values[handle]) / 100);
    fadeSliderVal.innerHTML = (Math.floor(sec * 100) / 100) + " sec";
});



//Velocity-Size Ratio Slider
var velRatioSlider = document.getElementById('velRatioSlider');
var velRatioSliderVal = document.getElementById('velRatioSliderVal');
noUiSlider.create(velRatioSlider, {
    start: velRatio,
    step: 0.5,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 4
    }
});
velRatioSlider.noUiSlider.on('update', function (values, handle) {
    velRatioSliderVal.innerHTML = "1:" + parseFloat(values[handle]);
});


//Range Slider
var rangeSlider = document.getElementById('rangeSlider');
var rangeSliderMin = document.getElementById('rangeSliderMin');
var rangeSliderMax = document.getElementById('rangeSliderMax');
noUiSlider.create(rangeSlider, {
    start: [minRange, maxRange],
    step: 1,
    margin: 12,
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 0,
        'max': 128
    }
});
rangeSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        var max = noteName(parseInt(values[handle]));
        rangeSliderMax.innerHTML = max;
    } else {
        var min = noteName(parseInt(values[handle]));
        rangeSliderMin.innerHTML = min;
    }
});


//Fade Slider
var fadeSlider = document.getElementById('fadeSlider');
var fadeSliderVal = document.getElementById('fadeSliderVal');
var fadeCheckbox = document.getElementById('fadeCheckbox');
noUiSlider.create(fadeSlider, {
    start: fadeTime,
    step: 1,
    connect: [true, false],
    range: {
        'min': 1,
        'max': 100
    }
});
fadeSlider.noUiSlider.on('update', function (values, handle) {
    var sec = (parseInt(values[handle]) / 10) * (parseInt(alphaSlider.noUiSlider.get()) / 100);
    fadeSliderVal.innerHTML = (Math.floor(sec * 100) / 100) + " sec";
});
fadeCheckbox.addEventListener('click', function () {
    toggle.call(this, fadeSlider);
});

function toggle(element) {

    // If the checkbox is checked, disabled the slider.
    // Otherwise, re-enable it.
    if (this.checked) {
        element.setAttribute('disabled', true);
    } else {
        element.removeAttribute('disabled');
    }
}


function applySettings() {
    inRadRadius = parseInt(inRadiusSlider.noUiSlider.get()); //Inner Radius 
    outRadRadius = parseInt(outRadiusSlider.noUiSlider.get()); //Outer Radius 
    initAlpha = parseInt(alphaSlider.noUiSlider.get()) / 100; //Initial Alpha
    velRatio = parseInt(velRatioSlider.noUiSlider.get()); //Velocity-Size Ratio
    
    var rangeArray = rangeSlider.noUiSlider.get(); //Range
        minRange = parseInt(rangeArray[0]);
        maxRange = parseInt(rangeArray[1]);
    
    (fadeCheckbox.checked) ? noteFade=false : noteFade=true; //Fade
    fadeTime = parseInt(fadeSlider.noUiSlider.get());
    
    if (patternHorizontal.checked) { pattern=0; } //Drawing Pattern
    else if (patternVertical.checked) { pattern=1; }
    else if (patternRandom.checked) { pattern=2; }
    
}

function restoreSettings() {
    inRadiusSlider.noUiSlider.reset();
    outRadiusSlider.noUiSlider.reset();
    alphaSlider.noUiSlider.reset();
    velRatioSlider.noUiSlider.reset();
    rangeSlider.noUiSlider.reset();
    fadeSlider.noUiSlider.reset();
    document.getElementById("fadeCheckbox").checked = false;
    fadeSlider.removeAttribute('disabled');
    document.getElementById("patternHorizontal").checked = true;
} 

function saveSettings() {
    applySettings();
    modal3.style.display = "none";
    modalCheck = false;
}