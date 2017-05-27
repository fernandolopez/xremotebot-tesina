var key = '8628cd03-3d4e-4465-aa3d-7b6352f26279';
var server = new Server('ws://163.10.10.85:8000/api', key);
server.onConnect(function(){
    server.reserve('n6', 3).then(function(robot_obj){
        var robot = new Robot(server, robot_obj);
        for (var i = 0; i < 4; i++){
            robot.forward(50, 1);
            robot.turnLeft(20, 1.25);
        }
    });
});
