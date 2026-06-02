---
title: "Integrating the LeRobot SO101 on the ECOSense project"
description: "My journey of integrating, calibrating, and controlling the SO101 5-axis robotic arm for the ECOSense waste-collecting robot."
date: 2026-01-20
---

When we first sat down to plan the ECOSense project, the (fictional) client suggested a simple 2-axis robotic arm for trash collection. It sounded straightforward: drive up to a soda can, align the vehicle, and let a basic mechanical link grab it. But in real-world robotics, alignment is never simple. Relying on perfect vehicle positioning meant the navigation stack would need to perform slow, complex micro-maneuvers just to line up a pick. After researching for all the possible options in our budget I proposed a different path: integrating the SO101 5-axis robotic arm. In one hand (pun intended), the extra degrees of freedom would give us the dexterity to pick objects from varying angles, offloading precision demands from the vehicle's drive system to the arm. And in the other hand, it would be a massive opportunity for me to try the trending arm from Hugging Face and train a VLA model to control it!

Here is how I went from the idea to a fully coordinated pick-and-place system.

## Unboxing, Assembly, and Low-level control, all in one weekend

The servos arrived around 1 month after ordering. We printed the 3D parts of the arm ourselves and assembled it over a weekend. Once the arm was assembled, I needed a driver to communicate with the servos. Rather than writing one from scratch, I found an open-source driver package by Bruk G. (`brukg/SO-100-arm`). It looked promising, and after a few tweaks and calibrations, we were able to control the arm using positional control via ROS2 Control. Pretty neat!

<figure>
  <img src="/assets/blog/so101_on_ecosense/so101_firstlook.jpeg" alt="First look at the SO101 robotic arm" />
  <figcaption>Our first look at the arm.</figcaption>
</figure>

## Configuring MoveIt 2 and Asynchronous Services

With the driver ready, I moved up the stack to planning and control. Here is where thing get complicated.
There are

I chose **MoveIt 2**, the industry standard for robotic manipulation. It provides path planning, collision checking, and inverse kinematics out of the box, but it is notoriously complex to configure.

I spent days defining our joint limits, configuring planning groups, and teaching MoveIt 2 about the physical bounds of the GEICar chassis so the arm wouldn't accidentally punch the robot’s own LiDAR or camera. Once the kinematic model was calibrated, I defined named target postures:
*   `home`: a compact, folded state for transit.
*   `bin_drop`: the precise coordinates where the arm releases the trash into our onboard bin.

For Sprint 4, I wrapped these movements into a clean, service-based ROS 2 interface. Instead of forcing the robot's main state coordinator to micromanage joint angles, the arm exposed simple asynchronous service endpoints: `pick_and_place` (which accepted target XYZ coordinates), `check_reachability`, and `retract_arm`. I thoroughly simulated and validated these behaviors in **Gazebo** and **Rviz2** before deploying them to the physical robot.

## What I Learned

This sprint was a crash course in hardware pragmatism. I learned that:
1.  **Simulation lies, hardware is messy:** A trajectory that looks smooth in Gazebo will shake, lag, or hit a physical limit due to servo backlash and power distribution limits. Physical tuning is non-negotiable.
2.  **API encapsulation is key:** Designing the arm as a self-contained service-based node made it incredibly easy to integrate later. The main coordinator didn't need to know *how* to plan joint paths; it just sent a coordinate and waited for a success code.
3.  **Perfect is the enemy of done:** The wrist servo current bug was annoying, but writing a robust software workaround saved us days of mechanical disassembly when deadlines were tight.
