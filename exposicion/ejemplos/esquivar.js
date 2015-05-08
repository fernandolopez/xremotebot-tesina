var key = '8628cd03-3d4e-4465-aa3d-7b6352f26279';
var server = new Server('ws://163.10.10.85:8000/api', key);
server.onConnect(function(){
    server.reserve('n6', 3).then(function(robot_obj){
        var robot = new Robot(server, robot_obj);

        function esquivar(){
            robot.ping().then(function(ping){
                if (ping < 15){
                    robot.backward(30, 1);
                    if (Math.random() < 0.5){
                        robot.turnLeft(30, 1);
                    }
                    else{
                        robot.turnRight(30, 1);
                    }
                    robot.forward(40).then(function(){
                        setTimeout(esquivar, 200);
                    });
                }
                else{
                    setTimeout(esquivar, 200);
                }
            });
        }
        robot.forward(40);
        setTimeout(esquivar, 200);
    });
});

