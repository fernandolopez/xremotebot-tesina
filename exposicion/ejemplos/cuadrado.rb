#!/usr/bin/env ruby
require 'xremotebot'
key = '8628cd03-3d4e-4465-aa3d-7b6352f26279'

server = XRemoteBot::Server.new('163.10.10.85', 8000, 'api', key)

robot = XRemoteBot::Robot.new(server, server.reserve('n6', 3))

4.times do
    robot.forward(50, 1)
    robot.turnLeft(20, 1.25)
end
