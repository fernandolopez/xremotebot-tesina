var key = '8628cd03-3d4e-4465-aa3d-7b6352f26279';
var server = new Server('ws://163.10.10.85:8000/api', key);

var video = $('#videoCanvas');
if ($('#s_ping').length == 0){
    video.after('<div id="senses"><p>Sensores:<ul><li id="s_ping"></li>'
        + '<li id="s_line"></li>'
        + '<li id="s_obstacle"></li></div>');
}

server.onConnect(function(){
    server.reserve('n6', 3).then(function(robot_obj){
        var robot = new Robot(server, robot_obj);
        function update(){
            Promise.all([
                robot.ping(),
                robot.getLine(),
                robot.getObstacle(),
            ]).then(function (senses){
                $('#s_ping').text('Ping: ' + senses[0]);
                $('#s_line').text('Get line: ' + senses[1]);
                $('#s_obstacle').text('Obstacle: ' + senses[2]);
            });
        }
        update();
        setInterval(update, 1000);
    });
});

