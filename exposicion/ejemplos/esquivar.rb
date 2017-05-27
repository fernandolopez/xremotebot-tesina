#!/usr/bin/env ruby
require 'xremotebot'
key = '8628cd03-3d4e-4465-aa3d-7b6352f26279'

server = XRemoteBot::Server.new('163.10.10.85', 8000, 'api', key)

robot = XRemoteBot::Robot.new(server, server.reserve('n6', 3))

robot.forward(40)
loop do
  if robot.ping < 15
    robot.backward(30, 1)
    if rand < 0.5
      robot.turnLeft(30, 1)
    else
      robot.turnRight(30, 1)
    end
    robot.forward(40)
  end
end

