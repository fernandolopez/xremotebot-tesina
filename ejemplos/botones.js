var server = new Server('ws://localhost:8000/api',
                        '97385401-3874-439c-b01b-df94349d888a');
server.onConnect(function(){
    server.fetch_robot().then(function(robot_obj){
        var robot = new Robot(server, robot_obj);
        $('#videoCanvas').after("<div>\
            <input id='izq' type='button' value='Izquierda'>\
            <input id='atr' type='button' value='Atr&aacute;s'>\
            <input id='ade' type='button' value='Adelante'>\
            <input id='der' type='button' value='Derecha'>\
            </div>");
        $('#izq').click(function(){ robot.turnLeft(50, 0.5); });
        $('#atr').click(function(){ robot.backward(100, 0.5); });
        $('#ade').click(function(){ robot.forward(100, 0.5); });
        $('#der').click(function(){ robot.turnRight(50, 0.5); });
    });
});

