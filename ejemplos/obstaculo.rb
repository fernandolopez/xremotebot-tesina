require 'xremotebot'

server = XRemoteBot::Server.new '190.16.204.135', 8000, 'api', '8d4ae089-443b-4bda-bd04-6601d664dd96'

robot = XRemoteBot::Robot.new server, server.fetch_robot


robot.forward 30
loop do
  if robot.getObstacle
    robot.backward 30, 1
    if rand < 0.5
      robot.turnLeft 30, 0.5
    else
      robot.turnRight 30, 0.5
    end
    robot.forward 30
  end
end
