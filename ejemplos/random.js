var server = new Server('ws://190.16.204.135:8000/api', '8d4ae089-443b-4bda-bd04-6601d664dd96');
server.onConnect(function(){
	server.get_robots().then(function(robots){
		println(robots);
	});


	server.fetch_robot().then(function(robot_obj){
		println(robot_obj);
		var robot = new Robot(server, robot_obj);
      	setInterval(function(){
          var rand = Math.random();
          if (rand < 0.25){
            robot.forward(50, 1);
          }
          else if (rand < 0.5){
            robot.backward(50, 1);
          }
          else if (rand < 0.75){
            robot.turnLeft(50, 1);
          }
          else{
            robot.turnRight(50, 1);
          }
        }, 10000);
	});
});

