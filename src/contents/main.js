const ros = new ROSLIB.Ros({ url: 'ws://' + location.hostname + ':9000' });

var nButtons = 0;
var buttons_value = [];

ros.on('connection', function () {
    console.log("WebSocket: connected");
    n_buttons_param.get(function (n) {
        nButtons = n;
        var buttons_div = document.getElementById("buttons_div");
        for (var i = 0; i < nButtons; i++) {
            buttons_div.innerHTML += '<a href="#" class="normal-button" id="buttons' + i.toString() + '" onclick="push_button('
                + i.toString() + ')">Button ' + (i + 1).toString() + '</a>\n';
        }
        for (var i = 0; i < nButtons; i++) {
            buttons_value[i] = "";
        }
    });
});

ros.on('error', function (error) { console.log("WebSocket error: ", error); });
ros.on('close', function () { console.log("WebSocket: closed"); });

const n_buttons_param = new ROSLIB.Param({
    ros: ros,
    name: 'n_buttons'
});

const buttons_node = new ROSLIB.Topic({
    ros: ros,
    name: "buttons",
    messageType: "buttons_ros/Buttons"
});

function push_button(n) {
    var buttons = document.getElementById("buttons" + n.toString());
    if (buttons_value[n] == "") {
        buttons_value[n] = " ";
        buttons.style.backgroundColor = '#3d3d3f';
    } else {
        buttons_value[n] = "";
        buttons.style.backgroundColor = '#e9dfe5';
    }
    buttonMsg = []
    for (var i = 0; i < nButtons; i++) {
        buttonMsg[i] = Boolean(buttons_value[i]);
    }
    const msg = new ROSLIB.Message({
        buttons: buttonMsg
    });
    buttons_node.publish(msg);
}