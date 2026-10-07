"use client";

import { useEffect, useRef } from "react";

interface ColorConfig {
  r: number;
  g: number;
  b: number;
}

interface Colors {
  blueStart: ColorConfig;
  blueEnd: ColorConfig;
  redBase: ColorConfig;
  redPercent: number;
  redVariation: number;
}

interface MousePos {
  x: number | null;
  y: number | null;
}

class Particle {
  isStatic: boolean = false;
  angle: number = 0;
  baseRadiusOffset: number = 0;
  size: number = 0;
  speed: number = 0;
  travelDistance: number = 0;
  baseOpacity: number = 0;
  opacity: number = 0;
  isRed: boolean = false;
  redMix: number = 0;
  colorMix: number = 0;
  color: string = "";
  progress: number = 0;
  direction: number = 1;
  offsetX: number = 0;
  offsetY: number = 0;
  targetOffsetX: number = 0;
  targetOffsetY: number = 0;
  initialScatter: number = 0;
  x: number = 0;
  y: number = 0;

  constructor(
    private clusterCenters: number[],
    private globalScaleFactor: number,
    private colors: Colors,
    private config: ParticleConfig,
  ) {
    this.reset();
  }

  reset() {
    this.isStatic = Math.random() < 0.24;
    let isBunched = false;
    if (!this.isStatic && Math.random() < 0.4) {
      isBunched = true;
    }

    if (isBunched) {
      const t = Math.floor(Math.random() * this.clusterCenters.length);
      this.angle = this.clusterCenters[t] + (Math.random() - 0.5) * 0.02;
    } else {
      this.angle = Math.random() * Math.PI * 2;
    }

    const randAvg = (Math.random() + Math.random() + Math.random()) / 3;
    const sizeScale =
      1.0 +
      (this.globalScaleFactor - 1.0) * this.config.PARTICLE_SIZE_SCALE_STRENGTH;
    const trackScale = this.config.SCALE_TRACK_WIDTH
      ? this.globalScaleFactor
      : 1.0;

    if (this.isStatic) {
      const staticWidth = this.config.STATIC_TRACK_WIDTH * trackScale;
      this.baseRadiusOffset = (Math.random() - 0.5) * staticWidth;
      this.size =
        (this.config.PARTICLE_SIZE_BASE +
          this.config.PARTICLE_SIZE_VAR * 0.5 * Math.random()) *
        sizeScale;
      this.speed = 0.025 + 1 * Math.random();
      this.travelDistance = 0.5 + 2.5 * Math.random();
    } else {
      const trackWidth =
        this.config.MOVING_TRACK_WIDTH * trackScale * (isBunched ? 0.8 : 1);
      this.baseRadiusOffset = (randAvg - 0.5) * trackWidth;
      this.size =
        (this.config.PARTICLE_SIZE_BASE +
          this.config.PARTICLE_SIZE_VAR * Math.random()) *
        sizeScale;
      this.speed =
        this.config.PARTICLE_SPEED_BASE +
        this.config.PARTICLE_SPEED_VAR * Math.random();
      const baseFlow = this.config.MOVING_FLOW_LENGTH * trackScale;
      const varianceMult =
        1.0 + Math.random() * this.config.FLOW_LENGTH_VARIANCE;
      this.travelDistance =
        (baseFlow + baseFlow * (isBunched ? 0.4 : 0.2) * Math.random()) *
        varianceMult;
    }

    const dist = Math.abs(this.baseRadiusOffset);
    this.baseOpacity = Math.max(0.2, Math.min(1, 1 - dist / 90));

    const makeTransparent = this.isStatic && Math.random() < 0.4;
    this.opacity = makeTransparent
      ? 0.15 + 0.25 * Math.random()
      : this.baseOpacity * (0.1 + 1.4 * Math.random());
    this.opacity = Math.min(1, this.opacity * this.config.GLOBAL_OPACITY);

    this.isRed = Math.random() < this.colors.redPercent;
    this.redMix = this.isRed ? Math.random() * this.colors.redVariation : 0;
    this.colorMix = Math.random();
    this.updateColor();
    this.progress = (Math.random() - 0.5) * 2;
    this.direction = Math.random() > 0.5 ? 1 : -1;
  }

  updateColor() {
    const br = Math.round(
      this.colors.blueStart.r +
        (this.colors.blueEnd.r - this.colors.blueStart.r) * this.colorMix,
    );
    const bg = Math.round(
      this.colors.blueStart.g +
        (this.colors.blueEnd.g - this.colors.blueStart.g) * this.colorMix,
    );
    const bb = Math.round(
      this.colors.blueStart.b +
        (this.colors.blueEnd.b - this.colors.blueStart.b) * this.colorMix,
    );

    let r = br,
      g = bg,
      b = bb;
    if (this.isRed) {
      r = Math.round(
        this.colors.redBase.r * (1 - this.redMix) + br * this.redMix,
      );
      g = Math.round(
        this.colors.redBase.g * (1 - this.redMix) + bg * this.redMix,
      );
      b = Math.round(
        this.colors.redBase.b * (1 - this.redMix) + bb * this.redMix,
      );
    }
    this.color = `rgba(${r},${g},${b},${this.opacity})`;
  }

  update(
    activeMouse: MousePos,
    proximity: number,
    globalPullStrength: number,
    centerX: number,
    centerY: number,
    circleRadius: number,
  ) {
    const currentDist = circleRadius + this.baseRadiusOffset;
    const fixedX = centerX + Math.cos(this.angle) * currentDist;
    const fixedY = centerY + Math.sin(this.angle) * currentDist;

    this.progress += this.speed * this.direction * 0.009;
    if (this.progress > 1) {
      this.progress = 1;
      this.direction = -1;
    } else if (this.progress < -1) {
      this.progress = -1;
      this.direction = 1;
    }

    const travelOffset = this.progress * this.travelDistance;
    const baseX = fixedX + Math.cos(this.angle) * travelOffset;
    const baseY = fixedY + Math.sin(this.angle) * travelOffset;

    let finalPullStrength = 0;
    if (proximity > 0 && activeMouse.x !== null && activeMouse.y !== null) {
      const dx = activeMouse.x - baseX;
      const dy = activeMouse.y - baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.config.MOUSE_RADIUS) {
        const localForce =
          (this.config.MOUSE_RADIUS - dist) / this.config.MOUSE_RADIUS;
        const mousePull = localForce * proximity * 1.3;
        if (mousePull > finalPullStrength) finalPullStrength = mousePull;
      }
    }

    if (globalPullStrength > finalPullStrength)
      finalPullStrength = globalPullStrength;

    if (
      finalPullStrength > 0 &&
      activeMouse.x !== null &&
      activeMouse.y !== null
    ) {
      const ringX = centerX + Math.cos(this.angle) * circleRadius;
      const ringY = centerY + Math.sin(this.angle) * circleRadius;
      this.targetOffsetX = (ringX - baseX) * finalPullStrength;
      this.targetOffsetY = (ringY - baseY) * finalPullStrength;
      this.offsetX +=
        (this.targetOffsetX - this.offsetX) * this.config.MOUSE_RESPONSE_SPEED;
      this.offsetY +=
        (this.targetOffsetY - this.offsetY) * this.config.MOUSE_RESPONSE_SPEED;
    } else {
      this.offsetX *= this.config.MOUSE_RETURN_SPEED;
      this.offsetY *= this.config.MOUSE_RETURN_SPEED;
    }

    this.x = baseX + this.offsetX;
    this.y = baseY + this.offsetY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

interface ParticleConfig {
  REFERENCE_WIDTH: number;
  SCALE_PARTICLE_COUNT: boolean;
  SCALE_TRACK_WIDTH: boolean;
  PARTICLE_SIZE_SCALE_STRENGTH: number;
  PARTICLE_COUNT: number;
  CLUSTER_COUNT: number;
  MOUSE_RADIUS: number;
  RADIUS_PERCENTAGE: number;
  PARTICLE_SIZE_BASE: number;
  PARTICLE_SIZE_VAR: number;
  PARTICLE_SPEED_BASE: number;
  PARTICLE_SPEED_VAR: number;
  MOVING_TRACK_WIDTH: number;
  MOVING_FLOW_LENGTH: number;
  FLOW_LENGTH_VARIANCE: number;
  STATIC_TRACK_WIDTH: number;
  GLOBAL_OPACITY: number;
  RENDER_QUALITY: number;
  MOUSE_RESPONSE_SPEED: number;
  MOUSE_RETURN_SPEED: number;
}

export const ParticleRing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration
    const config: ParticleConfig = {
      REFERENCE_WIDTH: 1600,
      SCALE_PARTICLE_COUNT: true,
      SCALE_TRACK_WIDTH: true,
      PARTICLE_SIZE_SCALE_STRENGTH: 0.35,
      PARTICLE_COUNT: 3000,
      CLUSTER_COUNT: 90,
      MOUSE_RADIUS: 140,
      RADIUS_PERCENTAGE: 0.23,
      PARTICLE_SIZE_BASE: 0.9,
      PARTICLE_SIZE_VAR: 2.2,
      PARTICLE_SPEED_BASE: 0.25,
      PARTICLE_SPEED_VAR: 1.8,
      MOVING_TRACK_WIDTH: 70,
      MOVING_FLOW_LENGTH: 5.0,
      FLOW_LENGTH_VARIANCE: 3.0,
      STATIC_TRACK_WIDTH: 0.1,
      GLOBAL_OPACITY: 0.2,
      RENDER_QUALITY: 2.5,
      MOUSE_RESPONSE_SPEED: 0.45,
      MOUSE_RETURN_SPEED: 0.82,
    };

    const colors: Colors = {
      blueStart: { r: 255, g: 180, b: 80 },
      blueEnd: { r: 255, g: 210, b: 120 },
      redBase: { r: 255, g: 255, b: 255 },
      redPercent: 0.25,
      redVariation: 0.9,
    };

    // Variables
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let circleRadius = 0;
    let particles: Particle[] = [];
    const clusterCenters: number[] = [];
    const mouse: MousePos = { x: null, y: null };
    let globalScaleFactor = 1.0;

    function resize() {
      if (!container || !canvas || !ctx) return;
      width = container.offsetWidth;
      height = container.offsetHeight;

      const screenWidth = window.innerWidth;
      globalScaleFactor = screenWidth / config.REFERENCE_WIDTH;
      if (globalScaleFactor < 0.3) globalScaleFactor = 0.3;
      if (globalScaleFactor > 1.5) globalScaleFactor = 1.5;

      const dpr = window.devicePixelRatio || 1;
      const renderScale = dpr * config.RENDER_QUALITY;

      canvas.width = width * renderScale;
      canvas.height = height * renderScale;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(renderScale, renderScale);

      centerX = width / 2;
      centerY = height / 2;
      circleRadius = config.RADIUS_PERCENTAGE * Math.min(width, height);

      initParticles();
    }

    function initParticles() {
      particles = [];
      let countToUse = config.PARTICLE_COUNT;
      if (config.SCALE_PARTICLE_COUNT) {
        countToUse = Math.floor(config.PARTICLE_COUNT * globalScaleFactor);
      }
      for (let i = 0; i < countToUse; i++) {
        particles.push(
          new Particle(clusterCenters, globalScaleFactor, colors, config),
        );
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const activeMouse: MousePos = { x: mouse.x, y: mouse.y };
      let proximity = 0;

      if (activeMouse.x !== null && activeMouse.y !== null) {
        const dx = activeMouse.x - centerX;
        const dy = activeMouse.y - centerY;
        const angle = Math.atan2(dy, dx);
        const projX = centerX + Math.cos(angle) * circleRadius;
        const projY = centerY + Math.sin(angle) * circleRadius;
        const dist = Math.sqrt(
          Math.pow(activeMouse.x - projX, 2) +
            Math.pow(activeMouse.y - projY, 2),
        );
        if (dist < config.MOUSE_RADIUS) {
          proximity = 1 - dist / config.MOUSE_RADIUS;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(
          activeMouse,
          proximity,
          0,
          centerX,
          centerY,
          circleRadius,
        );
        particles[i].draw(ctx);
      }

      requestAnimationFrame(animate);
    }

    // Initialize cluster centers
    for (let i = 0; i < config.CLUSTER_COUNT; i++) {
      clusterCenters.push(Math.random() * Math.PI * 2);
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);
    document.addEventListener("mouseleave", handleMouseLeave);

    resize();
    initParticles();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="particle-container"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200%",
        height: "200%",
        zIndex: 1,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    >
      <canvas
        ref={canvasRef}
        id="particleCanvas"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          opacity: 1,
          visibility: "visible",
        }}
      />
      <style>{`
        #particle-container {
          /* No fixed size needed here anymore as it's 100% of parent */
        }
      `}</style>
    </div>
  );
};
