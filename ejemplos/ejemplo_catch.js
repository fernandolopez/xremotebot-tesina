var server = new Server('ws://190.16.204.135:8000/api', '8d4ae089-443b-4bda-bd04-6601d664dd96');
server.onConnect(function(){
    server.get_robots().then(function(robots){
        println(robots);
    });


    server.fetch_robot().then(function(robot_obj){
        println(robot_obj);
        var robot = new Robot(server, robot_obj);
        var inter = setInterval(function(){
            robot.getLine().then(function(line){
                $('h1').text(line);
            }).catch(function(error){
                clearInterval(inter);
                alert(error);
            });
        }, 5000);
    });
});

