var server = new Server('ws://163.10.10.85:8000/api',
                        '8628cd03-3d4e-4465-aa3d-7b6352f26279');
server.onConnect(function(){
    server.reserve('n6', 3).then(function(robot_obj){
        var robot = new Robot(server, robot_obj);
        if ($('#izq').length == 0){
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
        }
    });
});

