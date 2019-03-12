// Request MIDI access
if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
    console.log('WebMIDI is not supported in this browser.');
}

// Function to run when requestMIDIAccess is successful
function onMIDISuccess(midiAccess) {
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    
    // Attach MIDI event "listeners" to each input
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}

// Function to run when requestMIDIAccess fails
function onMIDIFailure() {
    console.log('Error: Could not access MIDI devices.');
}

// Function to parse the MIDI messages we receive
// For this app, we're only concerned with the actual note value,
// but we can parse for other information, as well
function getMIDIMessage(msg) {
    var command = msg.data[0];
    var note = msg.data[1];
    var velocity = (msg.data.length > 2) ? msg.data[2] : 0; // a velocity value might not be included with a noteOff command

    switch (command) {
        case 144: // note on
            if (velocity > 0) {
                noteOn(note, velocity);
            } else {
                noteOff(note, velocity);
            }
            break;
        case 128: // note off
            noteOffCallback(note, velocity);
            break;
        // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
    }
}

//Create noteActive array and initialize all to false
var noteActive = new Array(108);
for (i=0; i<109; i++) {
    noteActive[i] = false;
}

var noteInfo = new Array(108);

// Function to handle noteOn messages (ie. key is pressed)
function noteOn(note, velocity) {
    noteActive[note] = true;
    setNoteInfo(note, velocity);
}

// Function to handle noteOff messages (ie. key is released)
function noteOff(note, velocity) {
}

function noteOffCallback(note, velocity) {
    noteInfo[note][8] = true;
    fadeOut(note);
}
