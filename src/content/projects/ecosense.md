---
title: "ECOSense: Autonomous waste-collecting robot"
description: "An autonomous, energy-monitored robotics platform designed for centimeter-precise litter collection and environmental footprint auditing."
imageCover: "/assets/projects/ecosense/recto-final.svg"
imagesDir: "/assets/projects/ecosense"
skills: ["ROS2", "Behavior Trees", "MoveIt2", "Nav2", "Docker", "C++", "Python"]
tags: ["Robotics", "Computer Vision", "Control Systems"]
featured: true
githubUrl: "https://github.com/Cassian-5SIEC/geicar"
startedMonth: "Oct 2025"
duration: "4 months"
status: "Completed"
---

## Overview
**Ecosense** is my final Master's Degree project at INSA Toulouse. The project, aims to build an autonomouse agent for a smart city as a part of the green transition.

The system is designed to autonomously patrol indoor environments (such as train stations, airports, and commercial spaces), detect and locate litter (cans, plastic bottles, cups), position itself with centimeter-level accuracy, and retrieve the waste using a robotic arm. Simultaneously, the robot monitors and analyzes the real-time electrical energy consumption of its main components (Jetson Nano, Raspberry Pi 3, actuators, controllers) to evaluate its carbon footprint and build a complete environmental audit.

---

## Technical Stack

The architecture of ECOSense bridges high-level artificial intelligence and autonomous navigation with low-level embedded hardware and real-time execution.

### 1. Hardware
- **Nvidia Jetson Nano**: Handles real-time AI inference, object detection, navigation and Behavior Tree coordination.
- **Raspberry Pi 3**: Mainly use for communication between the main computing unit and the microcontrollers through CAN bus.
- **STM32 Nucleo**: Handles low-level motor control, power management, and ultrasonic proximity and IMU sensors.
- **SO101 5-Axis Robotic Arm**: Selected for its dexterity, offering 5 degrees of freedom to enable precise pick-and-place maneuvers.
- **2D LiDAR**: Provides 360° telemetry for mapping, localization, and obstacles avoidance.
- **Stereo Cameras**: Captures video feeds for real-time trash detection.
- **IMU & Wheel Encoders**: Internal sensors for dead reckoning.

### 2. Software Frameworks
*   **ROS2**: Serving as the communication layer.
*   **Nav2**: For navigation and SLAM using MPPI (Model Predictive Path Integral) controller for dynamic path tracking and obstacle avoidance, coupled with Robot Localization (Extended Kalman Filters).
*   **MoveIt2**: For inverse kinematics, trajectory planning, joint velocity constraints, and obstacle avoidance.
*   **BehaviorTree.CPP**: For real-time behavior coordination and recovery logic.
*   **Gazebo** and **Rviz2**: For physical simulation and real-time state visualization.
*   **Docker**: For containerized, reproducible software environments.

---

## Key Features
- **Centimeter-Precision Trash Localization**: Fuses camera-based object detection with 2D LiDAR scans to compute target coordinates with centimeter-level accuracy.
- **5-Axis Robotic Manipulation**: Integrates the SO101 arm using MoveIt2 for trajectory planning, collision-free joint limits, and automated pick-and-place routines.
- **LiDAR Odometry & SLAM**: BLeverage scan-matching algorithms for local odometry and mapping.
- **Behavior Tree Control**: Coordinates navigation goals, arm states, and recovery behaviors using `BehaviorTree.CPP` for robust autonomy.
- **Energy and Footprint Auditing**: Monitors power consumption in real-time across compute units and actuators to quantify operational carbon footprints.
- **Interactive HMI** : Users can monitor, teleoperate robot in real-time from a mobile application.