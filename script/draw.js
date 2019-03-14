var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

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

function resetColors() {
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
}

function setColors() {
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


let request;
const draw = () => {
    request = requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    //if notes are active between min & max range, draw them
    for (i = 25; i < 85; i++) {
        if (noteActive[i]) {
            drawRadial(i);
        }
    }
}
requestAnimationFrame(draw);

function drawRadial(note) {
        
        //Radial
        var x0=noteInfo[note][0];
        var y0=noteInfo[note][1];
        var r0=noteInfo[note][2];
        var x1=noteInfo[note][3];
        var y1=noteInfo[note][4];
        var r1=noteInfo[note][5];
        var nc=noteInfo[note][6];
        var ga=noteInfo[note][7];

        var radial = c.createRadialGradient(x0,y0,r0,x1,y1,r1,nc);

        radial.addColorStop(0,nc);
        radial.addColorStop(1,'transparent');

        //Rect
        var x=x0-r1, y=canvas.height/2-r1, w=r1*2, h=r1*2;

        c.fillStyle = radial;
        c.globalAlpha = ga;
        c.fillRect(x,y,w,h);
    }

function fadeOut(note) {
    var inter = setInterval(frame, 50);
    function frame() {
        if (noteInfo[note][8] && noteInfo[note][7] > 0.01 && noteActive[note]) {
            noteInfo[note][7] -= 0.1;
        }
        else {
            clearInterval(inter);
        }
    }
    if (noteInfo[note][7] < 0.01) {
        noteActive[note] = false;
    }
}

function setNoteInfo(note, velocity) {
    
    //Color
    var noteNum = note % 12;
    switch (noteNum) {
        case 0:
            var noteColor = colorC;
            break;
        case 1:
            var noteColor = colorDb;
            break;
        case 2:
            var noteColor = colorD;
            break;
        case 3:
            var noteColor = colorEb;
            break;
        case 4:
            var noteColor = colorE;
            break;
        case 5:
            var noteColor = colorF;
            break;
        case 6:
            var noteColor = colorGb;
            break;
        case 7:
            var noteColor = colorG;
            break;
        case 8:
            var noteColor = colorAb;
            break;
        case 9:
            var noteColor = colorA;
            break;
        case 10:
            var noteColor = colorBb;
            break;
        case 11:
            var noteColor = colorB;
            break;        
    }
    //var randHeight = Math.floor(Math.random() * canvasHeight+1);
    //var randWidth = Math.floor(Math.random() * canvasWidth+1); 
    
    //xValue Mapping:
    //xValue = (note-lowestnote)/(highestnote-lowestnote) * canvasWidth
    var xValue = (note-36)/(84-36) * canvas.width;
    //Radial
    var x0=xValue, y0=canvas.height/2, r0=10, x1=xValue, y1=canvas.height/2, r1=300+(velocity*2);
    var ga = 0.7;   //initial global alpha
    var fade = false;
    
    noteInfo[note] = [x0,y0,r0,x1,y1,r1,noteColor,ga,fade];
    

}
