/*
  Simple test that just prints all connected MIDI devices
*/


window.onload = function () {
    let div = document.getElementById('container');
    let midiAccess;

    if (navigator.requestMIDIAccess !== undefined) {
        navigator.requestMIDIAccess().then(
            (access) => {
                midiAccess = access;
                // create a list of all connected MIDI devices
                showMIDIPorts();
                // reload list as devices get connected or disconnected
                midiAccess.onstatechange = showMIDIPorts;
            },
            (e) => {
                // something went wrong while requesting the MIDI devices
                div.innerHTML = e.message;
            },
        );
    } else {
        // browsers without WebMIDI API and Jazz plugin
        div.innerHTML = 'No access to MIDI devices: browser does not support WebMIDI API, please use the WebMIDIAPIShim together with the Jazz plugin';
    }


    function showMIDIPorts() {
        let
            divInputs = document.getElementById('inputs'),
            divOutputs = document.getElementById('outputs'),
            inputs = midiAccess.inputs,
            outputs = midiAccess.outputs,
            html;
        
        html = '<h3>CONNECTED MIDI DEVICES:</h3>';
        inputs.forEach((port) => {
            html += '<span class="green"><b>' + port.name + '</b></span><br>';
            html += '<span class="green">Manufacturer: ' + port.manufacturer + '</span><br>';
            html += '<span class="green">Version: ' + port.version + '</span><br>';
            html += '<span class="green">ID: ' + port.id + '</span><br><br>';
        });
        if (html == '<h3>CONNECTED MIDI DEVICES:</h3>') {
            html += '<span class="red">No devices found.</span><br>';
            console.log('No MIDI devices found.')
        }
        else { console.log('Devices found.')}
        
        divInputs.innerHTML = html;
        
        /*
        html = '<h4>MIDI Outputs:</h4>';
        outputs.forEach((port) => {
            html += port.name + '<br>';
            html += '<span class="green">Manufacturer: ' + port.manufacturer + '</span><br>';
            html += '<span class="green">Version: ' + port.version + '</span><br>';
            html += '<span class="green">ID: ' + port.id + '</span><br><br>';
        });
        divOutputs.innerHTML = html; 
        
        */
        
        
        
    }
};