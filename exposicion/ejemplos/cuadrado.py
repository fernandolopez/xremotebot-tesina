#!/usr/bin/env python
import xremotebot

key = '8628cd03-3d4e-4465-aa3d-7b6352f26279'

server = xremotebot.Server('ws://163.10.10.85:8000/api', key)

robot = xremotebot.Robot(server, server.reserve('n6', 3))

for i in range(3):
    robot.forward(50, 1)
    robot.turnLeft(20, 1.25)
