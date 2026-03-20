import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Phase 1: Foundation",
    duration: "Months 1–3",
    color: "#4F46E5",
    bg: "#EEF2FF",
    icon: "🧱",
    sections: [
      {
        title: "Linux & Command Line",
        items: [
          "Ubuntu OS — install, configure, dual boot",
          "Bash scripting — file management, automation",
          "SSH, SCP, file permissions",
          "Package management — apt, pip, conda",
          "Terminal tools — tmux, vim/nano basics",
        ],
      },
      {
        title: "Python (Deep Dive)",
        items: [
          "OOP — classes, inheritance, dunder methods",
          "File I/O, JSON, CSV handling",
          "Virtual environments — venv, conda",
          "Decorators, generators, context managers",
          "Async programming — asyncio basics",
          "Libraries: NumPy, SciPy, Matplotlib, Pandas",
          "Testing — pytest, unittest",
        ],
      },
      {
        title: "Mathematics & Statistics",
        items: [
          "Linear Algebra — vectors, matrices, transformations, eigenvalues",
          "Calculus — derivatives, gradients, chain rule",
          "Probability & Statistics — distributions, Bayes theorem",
          "Optimization — gradient descent variants",
          "Coordinate geometry & trigonometry for robotics",
        ],
      },
      {
        title: "Git & Dev Tools",
        items: [
          "Git — branching, merging, rebasing",
          "GitHub — pull requests, issues, actions (CI/CD basics)",
          "Docker — containers for robotics environments",
          "VS Code with Python & ROS extensions",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Phase 2: AI/ML Core",
    duration: "Months 3–7",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: "🤖",
    sections: [
      {
        title: "Machine Learning",
        items: [
          "Supervised Learning — regression, classification, SVMs",
          "Unsupervised Learning — clustering, PCA, dimensionality reduction",
          "Model evaluation — cross-validation, confusion matrix, ROC",
          "Feature engineering & selection",
          "Libraries: scikit-learn, XGBoost, LightGBM",
          "Hyperparameter tuning — Optuna, GridSearchCV",
        ],
      },
      {
        title: "Deep Learning",
        items: [
          "Neural network architecture — layers, activations, loss functions",
          "CNNs — convolution, pooling, feature maps",
          "RNNs, LSTMs, GRUs — sequential data",
          "Transformers & Attention mechanism",
          "Transfer learning — fine-tuning pretrained models",
          "Libraries: PyTorch (primary), TensorFlow/Keras, torchvision",
          "Training tools: Weights & Biases, TensorBoard",
          "ONNX — model export and deployment",
        ],
      },
      {
        title: "Computer Vision",
        items: [
          "Image processing — filters, morphology, histograms",
          "Feature detection — SIFT, ORB, Harris corners",
          "Object detection — YOLO v8/v11, SSD, Faster RCNN",
          "Semantic & instance segmentation — SAM, Mask RCNN",
          "Depth estimation — monocular and stereo",
          "Optical flow — Lucas-Kanade, Farneback",
          "Camera calibration — intrinsics, extrinsics, distortion",
          "Libraries: OpenCV, Pillow, Albumentations, Roboflow",
        ],
      },
      {
        title: "Data Handling & MLOps Basics",
        items: [
          "Data collection & labeling — LabelImg, CVAT, Roboflow",
          "Dataset management — train/val/test splits",
          "Data augmentation pipelines",
          "Model versioning — MLflow, DVC",
          "Basic model deployment — Flask/FastAPI serving",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Phase 3: Robotics Core",
    duration: "Months 6–12",
    color: "#059669",
    bg: "#ECFDF5",
    icon: "⚙️",
    sections: [
      {
        title: "C++ for Robotics",
        items: [
          "C++ basics — syntax, pointers, references",
          "OOP in C++ — classes, inheritance, polymorphism",
          "STL — vectors, maps, queues, algorithms",
          "Memory management — smart pointers, RAII",
          "Multithreading — std::thread, mutex, condition variables",
          "CMake — build systems for robotics projects",
          "Real-time programming concepts",
        ],
      },
      {
        title: "ROS 2 (Robot Operating System)",
        items: [
          "ROS 2 architecture — nodes, topics, services, actions",
          "Publisher / Subscriber pattern",
          "Custom message types — .msg, .srv, .action files",
          "TF2 — coordinate frame transforms",
          "Launch files — XML and Python launch",
          "ROS 2 bags — recording and playback",
          "ROS 2 with Python (rclpy) AND C++ (rclcpp)",
          "Quality of Service (QoS) policies",
          "Lifecycle nodes and managed nodes",
          "ROS 2 security (SROS2 basics)",
        ],
      },
      {
        title: "Simulation",
        items: [
          "Gazebo Harmonic — world building, physics simulation",
          "URDF / SDF — robot description files",
          "Xacro — parametric robot models",
          "RViz2 — visualization of robot state and sensor data",
          "Webots — alternative simulator",
          "Isaac Sim (NVIDIA) — GPU-accelerated simulation with AI",
          "MuJoCo — physics simulation for RL training",
        ],
      },
      {
        title: "Robot Kinematics & Dynamics",
        items: [
          "Forward kinematics — DH parameters",
          "Inverse kinematics — analytical and numerical methods",
          "Jacobians — velocity and force mapping",
          "Dynamics — Newton-Euler, Lagrangian formulation",
          "Libraries: ikpy, PyKDL, Robotics Toolbox (Peter Corke)",
          "MoveIt 2 — motion planning framework",
          "OMPL — Open Motion Planning Library",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Phase 4: Hardware & Embedded",
    duration: "Months 6–12 (Parallel)",
    color: "#D97706",
    bg: "#FFFBEB",
    icon: "🔧",
    sections: [
      {
        title: "Microcontrollers & SBCs",
        items: [
          "Arduino (deepen) — interrupts, timers, I2C, SPI, UART",
          "ESP32 — WiFi, Bluetooth, FreeRTOS, deep sleep modes",
          "Raspberry Pi 4/5 — full Linux, GPIO, camera interface",
          "Raspberry Pi Pico — MicroPython, real-time control",
          "NVIDIA Jetson Nano / Orin — edge AI inference",
          "micro-ROS — ROS 2 on microcontrollers",
        ],
      },
      {
        title: "Sensors",
        items: [
          "IMU — MPU6050, BNO055 — accelerometer, gyroscope, magnetometer",
          "LiDAR — RPLIDAR A1/A3, Hokuyo, Velodyne (3D)",
          "Depth cameras — Intel RealSense D435, OAK-D, ZED 2",
          "Ultrasonic — HC-SR04, calibration techniques",
          "Encoders — quadrature, absolute, odometry",
          "GPS — NEO-M8N, RTK GPS for precision",
          "Force/Torque sensors — for manipulation",
          "Sensor fusion — Kalman Filter, Extended Kalman Filter",
        ],
      },
      {
        title: "Actuators & Power",
        items: [
          "DC motors + motor drivers — L298N, BTS7960, ODrive",
          "BLDC motors — ESC control, FOC (Field Oriented Control)",
          "Servo motors — PWM control, feedback servos (Dynamixel)",
          "Stepper motors — A4988, TMC2209 drivers",
          "Pneumatic and hydraulic actuator basics",
          "Battery management — LiPo, BMS, power distribution",
          "PCB design basics — EasyEDA, KiCad",
        ],
      },
      {
        title: "Communication Protocols",
        items: [
          "I2C, SPI, UART — in-depth",
          "CAN bus — for multi-actuator robots",
          "RS485 — industrial communication",
          "MQTT — IoT robot communication",
          "WebSockets — browser-robot interface (your web dev advantage!)",
          "rosbridge — connect ROS 2 to web apps",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Phase 5: Advanced AI for Robotics",
    duration: "Months 12–18",
    color: "#DC2626",
    bg: "#FEF2F2",
    icon: "🧠",
    sections: [
      {
        title: "Reinforcement Learning",
        items: [
          "RL fundamentals — MDP, reward, policy, value function",
          "Q-Learning, DQN, DDPG, PPO, SAC algorithms",
          "Sim-to-Real transfer — domain randomization",
          "Libraries: Stable-Baselines3, RLlib, Gymnasium (OpenAI Gym)",
          "Training in MuJoCo / Isaac Gym / Gazebo",
          "Imitation learning — behavioral cloning, GAIL",
          "Multi-agent RL — cooperative and competitive",
        ],
      },
      {
        title: "SLAM & Navigation",
        items: [
          "SLAM theory — probabilistic robotics, particle filters",
          "2D SLAM — GMapping, Cartographer, RTAB-Map",
          "3D SLAM — LIO-SAM, LOAM, ORB-SLAM3",
          "Visual Odometry — monocular and stereo",
          "Nav2 stack — costmaps, planners, controllers",
          "Path planning — A*, Dijkstra, RRT, RRT*, PRM",
          "Behavior trees — BehaviorTree.CPP, py_trees",
          "Dynamic obstacle avoidance — DWA, TEB planner",
        ],
      },
      {
        title: "Robot Learning & Foundation Models",
        items: [
          "Grasp detection — GraspNet, 6-DOF grasp planning",
          "Point cloud processing — Open3D, PCL",
          "3D object detection — PointNet, VoxelNet",
          "Vision-Language Models for robotics — CLIP, LLaVA",
          "LLM-integrated robots — using Claude/GPT APIs for task planning",
          "RT-2, OpenVLA — vision-language-action models",
          "Diffusion policy — robot learning from demonstrations",
        ],
      },
      {
        title: "Control Systems",
        items: [
          "PID control — tuning, anti-windup, cascade control",
          "State space representation",
          "LQR / LQG controllers",
          "Model Predictive Control (MPC)",
          "Adaptive control basics",
          "Libraries: control (Python), scipy.signal",
          "MATLAB/Simulink (optional but valuable)",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Phase 6: Specialization & Projects",
    duration: "Months 18–24",
    color: "#0891B2",
    bg: "#ECFEFF",
    icon: "🚀",
    sections: [
      {
        title: "Choose Your Specialization",
        items: [
          "Mobile Robotics — autonomous ground vehicles, AMRs",
          "Robotic Arms & Manipulation — pick and place, assembly",
          "Aerial Robotics — drones, UAVs, using PX4 / ArduPilot",
          "Humanoid Robotics — bipedal locomotion, whole-body control",
          "Medical Robotics — surgical assistance, rehabilitation",
          "Industrial Automation — cobots, Industry 4.0",
        ],
      },
      {
        title: "Must-Build Projects",
        items: [
          "Autonomous navigation robot with LiDAR + Nav2",
          "Robotic arm with vision-based pick and place",
          "Object detection + tracking system with YOLO",
          "RL-trained robot in simulation (MuJoCo/Isaac)",
          "Web-controlled robot using your web dev skills + rosbridge",
          "Drone with autonomous waypoint navigation",
          "LLM-powered robot that understands voice commands",
        ],
      },
      {
        title: "Tools & Platforms",
        items: [
          "NVIDIA Isaac ROS — GPU-accelerated ROS 2 packages",
          "Open Robotics platforms — TurtleBot 4, Unitree Go2",
          "PX4 Autopilot — drone firmware",
          "ArduPilot — open source drone + rover autopilot",
          "ROS Industrial — manufacturing robotics",
          "Kaggle & HuggingFace — datasets and pretrained models",
        ],
      },
      {
        title: "Career & Portfolio",
        items: [
          "GitHub portfolio — well-documented projects with READMEs",
          "Research papers — read arxiv.org daily (cs.RO, cs.AI sections)",
          "Contribute to open source ROS packages",
          "Robotics competitions — RoboCup, DARPA challenges, hackathons",
          "LinkedIn — document your build journey",
          "Certifications — NVIDIA Deep Learning Institute, Coursera Robotics",
          "Target companies — Boston Dynamics, ABB, Kuka, ISRO, startups",
        ],
      },
    ],
  },
];

const timelineData = [
  { month: "M1-3", label: "Foundation", color: "#4F46E5" },
  { month: "M3-7", label: "AI/ML Core", color: "#7C3AED" },
  { month: "M6-12", label: "Robotics + Hardware", color: "#059669" },
  { month: "M12-18", label: "Advanced AI", color: "#DC2626" },
  { month: "M18-24", label: "Specialization", color: "#0891B2" },
];

const stackSummary = [
  { cat: "Languages", items: "Python, C++, Bash, (MATLAB optional)" },
  { cat: "AI/ML", items: "PyTorch, scikit-learn, OpenCV, YOLO, Stable-Baselines3" },
  { cat: "Robotics", items: "ROS 2, MoveIt 2, Nav2, Gazebo, Isaac Sim, MuJoCo" },
  { cat: "Hardware", items: "Raspberry Pi, Jetson, ESP32, Arduino, LiDAR, RealSense" },
  { cat: "Tools", items: "Docker, Git, VS Code, W&B, MLflow, CMake" },
  { cat: "Cloud/Deploy", items: "AWS RoboMaker, NVIDIA Isaac, Docker containers" },
];

export default function Roadmap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("roadmap");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", maxWidth: 900, margin: "0 auto", padding: "24px 16px", color: "#1e293b" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1d4ed8 100%)", borderRadius: 16, padding: "32px 28px", marginBottom: 24, color: "white" }}>
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 6, letterSpacing: 2, textTransform: "uppercase" }}>Complete Learning Roadmap</div>
        <h1 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 800 }}>AI/ML + Robotics & Mechatronics</h1>
        <p style={{ margin: "0 0 20px", opacity: 0.85, fontSize: 15 }}>From Web Dev & Arduino → Advanced Robotics Engineer · 24-Month Plan</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["6 Phases", "24 Months", "100+ Topics", "7 Projects"].map(t => (
            <span key={t} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["roadmap", "stack", "timeline"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14,
            background: tab === t ? "#1d4ed8" : "#f1f5f9", color: tab === t ? "white" : "#475569",
            transition: "all 0.2s"
          }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
        ))}
      </div>

      {/* Roadmap Tab */}
      {tab === "roadmap" && (
        <div>
          {phases.map(phase => (
            <div key={phase.id} style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", border: `1px solid ${phase.color}30` }}>
              <button
                onClick={() => setActive(active === phase.id ? null : phase.id)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
                  background: active === phase.id ? phase.color : phase.bg,
                  color: active === phase.id ? "white" : "#1e293b",
                  border: "none", cursor: "pointer", textAlign: "left", transition: "all 0.2s"
                }}
              >
                <span style={{ fontSize: 28 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{phase.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>{phase.duration}</div>
                </div>
                <span style={{ fontSize: 20, opacity: 0.7 }}>{active === phase.id ? "▲" : "▼"}</span>
              </button>

              {active === phase.id && (
                <div style={{ background: "white", padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                  {phase.sections.map(sec => (
                    <div key={sec.title} style={{ background: phase.bg, borderRadius: 10, padding: 16, borderLeft: `4px solid ${phase.color}` }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: phase.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{sec.title}</div>
                      {sec.items.map(item => (
                        <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13.5, color: "#374151" }}>
                          <span style={{ color: phase.color, marginTop: 1, flexShrink: 0 }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Stack Tab */}
      {tab === "stack" && (
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ background: "#f8fafc", borderRadius: 12, padding: 20, border: "1px solid #e2e8f0" }}>
            <h3 style={{ margin: "0 0 16px", color: "#1e293b" }}>📦 Complete Tech Stack Summary</h3>
            {stackSummary.map(s => (
              <div key={s.cat} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid #e2e8f0", alignItems: "flex-start" }}>
                <div style={{ minWidth: 100, fontWeight: 700, fontSize: 13, color: "#6366f1" }}>{s.cat}</div>
                <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{s.items}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fefce8", borderRadius: 12, padding: 20, border: "1px solid #fde68a" }}>
            <h3 style={{ margin: "0 0 12px", color: "#92400e" }}>⭐ Your Web Dev Advantage</h3>
            <p style={{ fontSize: 14, color: "#78350f", margin: 0, lineHeight: 1.7 }}>
              Use <strong>rosbridge + WebSockets</strong> to build browser dashboards for robot control. Build <strong>React/Next.js</strong> interfaces for robot teleoperation. Create <strong>FastAPI backends</strong> to serve AI models. Build <strong>real-time monitoring dashboards</strong> with your existing JS skills. This combo is extremely rare and valuable in the robotics industry.
            </p>
          </div>

          <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 20, border: "1px solid #bbf7d0" }}>
            <h3 style={{ margin: "0 0 12px", color: "#14532d" }}>🎯 Priority Learning Order</h3>
            {["1. Python + Linux + Math", "2. ROS 2 + Simulation (Gazebo)", "3. Computer Vision (OpenCV + YOLO)", "4. C++ for ROS 2", "5. Deep Learning (PyTorch)", "6. Hardware (Raspberry Pi + Jetson)", "7. Reinforcement Learning", "8. SLAM + Navigation", "9. Advanced AI (LLMs + Robotics)"].map(i => (
              <div key={i} style={{ fontSize: 14, padding: "5px 0", color: "#166534", borderBottom: "1px solid #dcfce7" }}>{i}</div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline Tab */}
      {tab === "timeline" && (
        <div>
          <div style={{ background: "#f8fafc", borderRadius: 12, padding: 20, marginBottom: 16, border: "1px solid #e2e8f0" }}>
            <h3 style={{ margin: "0 0 20px" }}>📅 24-Month Visual Timeline</h3>
            {timelineData.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ minWidth: 70, fontSize: 12, fontWeight: 700, color: "#64748b" }}>{t.month}</div>
                <div style={{ flex: 1, height: 36, borderRadius: 8, background: t.color, display: "flex", alignItems: "center", paddingLeft: 14, color: "white", fontWeight: 600, fontSize: 14 }}>{t.label}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, fontSize: 13, color: "#64748b" }}>* Hardware learning runs parallel to Phase 3 & 4</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ background: "#fef2f2", borderRadius: 12, padding: 16, border: "1px solid #fecaca" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#dc2626", marginBottom: 10 }}>🎓 Month 12 Milestone</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.8 }}>
                ✅ ROS 2 proficient<br/>
                ✅ YOLO object detection working<br/>
                ✅ Basic autonomous robot built<br/>
                ✅ C++ basics solid<br/>
                ✅ 3 GitHub projects live
              </div>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 16, border: "1px solid #bbf7d0" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#059669", marginBottom: 10 }}>🏆 Month 24 Milestone</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.8 }}>
                ✅ Full autonomous robot<br/>
                ✅ RL-trained simulation agent<br/>
                ✅ LLM-integrated robot<br/>
                ✅ SLAM-capable system<br/>
                ✅ Job-ready portfolio
              </div>
            </div>
          </div>

          <div style={{ marginTop: 14, background: "#eff6ff", borderRadius: 12, padding: 20, border: "1px solid #bfdbfe" }}>
            <h3 style={{ margin: "0 0 12px", color: "#1d4ed8" }}>📚 Best Learning Resources</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                "The Construct — ROS 2 courses", "fast.ai — Deep Learning (free)", 
                "Coursera — Robotics Specialization (UPenn)", "Udemy — ROS 2 for Beginners",
                "arxiv.org — Latest research papers", "PyTorch official tutorials",
                "Peter Corke's Robotics Toolbox", "NVIDIA Deep Learning Institute",
                "ROS 2 Documentation (docs.ros.org)", "Hugging Face — pretrained models"
              ].map(r => (
                <div key={r} style={{ fontSize: 13, color: "#1e40af", display: "flex", gap: 6 }}>
                  <span>📖</span><span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: 24, textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
        AI/ML + Robotics Roadmap · Tailored for Web Dev + Arduino background · 2025–2026
      </div>
    </div>
  );
}
