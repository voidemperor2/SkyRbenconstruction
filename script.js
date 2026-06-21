body {
    margin: 0;
    /* Blueprint Grid Background */
    background-color: #050810;
    background-image: 
        linear-gradient(rgba(0, 170, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 170, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

/* Premium Window Wrapper */
.ui-wrapper {
    background: rgba(10, 13, 20, 0.85);
    border: 1px solid rgba(0, 170, 255, 0.2);
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 170, 255, 0.1);
    backdrop-filter: blur(5px);
    overflow: hidden;
}

/* macOS-style Top Bar */
.top-bar {
    background: rgba(255, 255, 255, 0.03);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 170, 255, 0.1);
}

.dot {
    width: 12px; height: 12px; border-radius: 50%; margin-right: 8px;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; box-shadow: 0 0 8px #27c93f; }

.title {
    margin-left: 12px; font-size: 13px; color: #5a6b82; letter-spacing: 2px; font-weight: 700;
}

.animation-container {
    position: relative;
    width: 350px;
    height: 650px;
    display: flex;
    justify-content: center;
}

/* New Slogan Styles */
.slogan {
    position: absolute;
    top: 50px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 5px;
    color: #8a99ad;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(15px);
    z-index: 10;
}

.slogan span {
    color: #f5b041;
    font-weight: 700;
    text-shadow: 0 0 12px rgba(245, 176, 65, 0.6);
}

/* Building & Animation Elements */
.building {
    position: absolute;
    bottom: 20px;
    width: 300px;
    height: 550px;
}

.tower-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.wire {
    fill: none;
    stroke: #00aaff;
    stroke-width: 3;
    filter: drop-shadow(0 0 10px #00aaff);
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: drawLine 3s ease forwards;
}

.floor { animation-delay: .5s; }

@keyframes drawLine {
    to { stroke-dashoffset: 0; }
}

.windows {
    position: absolute;
    top: 130px;
    left: 85px;
    width: 130px;
    height: 390px;
    z-index: 4;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    padding: 5px;
    box-sizing: border-box;
}

.window {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 1px;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}

#energy {
    position: absolute;
    bottom: 0px;
    left: 148px;
    width: 4px;
    height: 0px;
    background: linear-gradient(to top, #f5b041, #ffffff);
    box-shadow: 0 0 12px #f5b041;
    z-index: 5;
    opacity: 0;
}

#logo {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) scale(0);
    opacity: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo img {
    width: 110px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 15px rgba(245, 176, 65, 0.4));
}

.brand {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    opacity: 0;
    z-index: 10;
    width: 280px;
}

.brand h1 {
    margin: 0;
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 8px;
    color: #ffffff;
}

.divider {
    height: 2px;
    background: #f5b041;
    width: 0;
    margin: 12px auto;
    box-shadow: 0 0 10px #f5b041;
}

.brand p {
    margin: 0;
    font-size: 14px;
    letter-spacing: 10px;
    color: #8a99ad;
    font-weight: 500;
}
