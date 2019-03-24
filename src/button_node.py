#!/usr/bin/env python
import rospy
import rosparam
from buttons_ros.msg import Buttons


class Node():
    def __init__(self):
        self.buttons_value = Buttons()
        self.n_buttons = rosparam.get_param("/n_buttons")
        self.pub_buttons = rospy.Publisher('/buttons', Buttons, queue_size=10)
        rospy.Subscriber('/buttons', Buttons,
                         self.button_callback, queue_size=1)

    def button_callback(self, msg):
        self.buttons_value = msg

    def main(self):
        rate = rospy.Rate(10)
        for i in range(self.n_buttons):
            self.buttons_value.buttons.append(False)
        while not rospy.is_shutdown():
            self.pub_buttons.publish(self.buttons_value)
            rate.sleep()


if __name__ == '__main__':
    rospy.init_node('local_button_node')
    Node().main()
