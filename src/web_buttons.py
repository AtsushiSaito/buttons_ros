#!/usr/bin/env python
# -*- coding: utf-8 -*-

import rospy
import os
import SimpleHTTPServer


def kill():
    os.system("kill -KILL " + str(os.getpid()))


os.chdir(os.path.join(os.path.dirname(__file__), 'contents'))
rospy.init_node("web_base_buttons")
rospy.on_shutdown(kill)
SimpleHTTPServer.test()
