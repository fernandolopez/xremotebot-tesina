var server = new Server('ws://190.16.204.135:8000/api', '8d4ae089-443b-4bda-bd04-6601d664dd96');
server.onConnect(function(){
    server.get_robots().then(function(robots){
        println(robots);
    });

    server.fetch_robot().then(function(robot_obj){
        println(robot_obj);
        var robot = new Robot(server, robot_obj);
        var esquivar = function(){
            robot.getObstacle().then(function(obstacle){
                if (obstacle){
                    robot.backward(40, 1);
                    if (Math.random() < 0.5){
                        robot.turnLeft(40, 1);
                    }
                    else{
                        robot.turnRight(40, 1);
                    }
                    robot.forward(40);
                }
                setTimeout(esquivar, 500);
            });
        };

        robot.forward(40);
        setTimeout(esquivar, 500);
    });
});
