#!/usr/bin/env python
import xremotebot
from random import random
key = '8628cd03-3d4e-4465-aa3d-7b6352f26279'

server = xremotebot.Server('ws://163.10.10.85:8000/api', key)

robot = xremotebot.Robot(server, server.reserve('n6', 3))

robot.forward(40)
while True:
    if robot.ping() < 15:
        robot.backward(30, 1)
        if random() < 0.5:
            robot.turnLeft(30, 1)
        else:
            robot.turnRight(30, 1)
        robot.forward(40)

