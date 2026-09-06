"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group for Mouse Parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Concentric Outer Geodesic Core (Icosahedron)
    const outerGeom = new THREE.IcosahedronGeometry(10, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    worldGroup.add(outerMesh);

    // 2. Mid Geometric Cage (Octahedron)
    const midGeom = new THREE.OctahedronGeometry(6.5, 1);
    const midMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.26,
    });
    const midMesh = new THREE.Mesh(midGeom, midMat);
    worldGroup.add(midMesh);

    // 3. Inner Crystalline Node (Dodecahedron)
    const innerGeom = new THREE.DodecahedronGeometry(3.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    worldGroup.add(innerMesh);

    // 4. Autonomous Orbital Network Particles
    const particleCount = prefersReducedMotion ? 40 : 130;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOriginalPositions: THREE.Vector3[] = [];
    const particleVelocities: THREE.Vector3[] = [];
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x22d3ee);
    const indigo = new THREE.Color(0x818cf8);
    const emerald = new THREE.Color(0x34d399);

    for (let i = 0; i < particleCount; i++) {
      const radius = 9 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleOriginalPositions.push(new THREE.Vector3(x, y, z));
      particleVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );

      const color =
        Math.random() > 0.65
          ? emerald
          : Math.random() > 0.3
          ? cyan
          : indigo;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particlePoints = new THREE.Points(particleGeom, particleMat);
    worldGroup.add(particlePoints);

    // 5. Dynamic Interconnecting Cybernetic Lines (Neural Mesh)
    const maxLineConnections = prefersReducedMotion ? 0 : 300;
    const linePositions = new Float32Array(maxLineConnections * 6);
    const lineColors = new Float32Array(maxLineConnections * 6);

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    lineGeom.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });

    const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
    worldGroup.add(lineSegments);

    // Mouse Physics & Smooth Damping with Reactive Velocity Momentum
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocity = 0;

    const onMouseMove = (e: MouseEvent) => {
      const newX = (e.clientX / window.innerWidth) * 2 - 1;
      const newY = -(e.clientY / window.innerHeight) * 2 + 1;
      const dx = newX - lastMouseX;
      const dy = newY - lastMouseY;
      mouseVelocity = Math.min(Math.sqrt(dx * dx + dy * dy) * 4, 3.0);
      lastMouseX = newX;
      lastMouseY = newY;
      mouseX = newX;
      mouseY = newY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Performance Observer (Pauses animation when outside viewport)
    let isInViewport = true;
    let isTabVisible = !document.hidden;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewport = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let frameId: number;

    const renderLoop = () => {
      if (isInViewport && isTabVisible && !prefersReducedMotion) {
        targetX += (mouseX - targetX) * 0.035;
        targetY += (mouseY - targetY) * 0.035;

        // Exponential decay of cursor kinetic momentum
        mouseVelocity *= 0.94;
        const kineticBoost = 1 + mouseVelocity * 1.6;

        // Rotate Concentric Geometric Lattices with kinetic momentum boost
        outerMesh.rotation.x += 0.0014 * kineticBoost;
        outerMesh.rotation.y += 0.0022 * kineticBoost;

        midMesh.rotation.x -= 0.0028 * kineticBoost;
        midMesh.rotation.z += 0.002 * kineticBoost;

        innerMesh.rotation.y += 0.0036 * kineticBoost;
        innerMesh.rotation.x += 0.0018 * kineticBoost;

        // Kinetic Parallax
        worldGroup.rotation.y = targetX * 0.45;
        worldGroup.rotation.x = -targetY * 0.35;

        // Particle dynamics & proximity lines
        const posAttr = particleGeom.getAttribute("position") as THREE.BufferAttribute;
        const positions = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVelocities[i].x;
          positions[i * 3 + 1] += particleVelocities[i].y;
          positions[i * 3 + 2] += particleVelocities[i].z;

          // Gentle spring return to base radius
          const orig = particleOriginalPositions[i];
          positions[i * 3] += (orig.x - positions[i * 3]) * 0.002;
          positions[i * 3 + 1] += (orig.y - positions[i * 3 + 1]) * 0.002;
          positions[i * 3 + 2] += (orig.z - positions[i * 3 + 2]) * 0.002;
        }
        posAttr.needsUpdate = true;

        // Compute dynamic connections
        if (maxLineConnections > 0) {
          let lineIndex = 0;
          const maxDistance = 4.2;

          for (let i = 0; i < particleCount; i++) {
            if (lineIndex >= maxLineConnections) break;

            const p1x = positions[i * 3];
            const p1y = positions[i * 3 + 1];
            const p1z = positions[i * 3 + 2];

            for (let j = i + 1; j < particleCount; j++) {
              if (lineIndex >= maxLineConnections) break;

              const p2x = positions[j * 3];
              const p2y = positions[j * 3 + 1];
              const p2z = positions[j * 3 + 2];

              const dx = p1x - p2x;
              const dy = p1y - p2y;
              const dz = p1z - p2z;
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist < maxDistance) {
                const alpha = (1.0 - dist / maxDistance) * 0.65;
                const ptr = lineIndex * 6;

                linePositions[ptr] = p1x;
                linePositions[ptr + 1] = p1y;
                linePositions[ptr + 2] = p1z;
                linePositions[ptr + 3] = p2x;
                linePositions[ptr + 4] = p2y;
                linePositions[ptr + 5] = p2z;

                lineColors[ptr] = 0.13 * alpha;
                lineColors[ptr + 1] = 0.82 * alpha;
                lineColors[ptr + 2] = 0.93 * alpha;
                lineColors[ptr + 3] = 0.38 * alpha;
                lineColors[ptr + 4] = 0.4 * alpha;
                lineColors[ptr + 5] = 0.94 * alpha;

                lineIndex++;
              }
            }
          }

          // Clear remaining unused slots
          for (let k = lineIndex * 6; k < maxLineConnections * 6; k++) {
            linePositions[k] = 0;
            lineColors[k] = 0;
          }

          lineGeom.setDrawRange(0, lineIndex * 2);
          (lineGeom.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
          (lineGeom.getAttribute("color") as THREE.BufferAttribute).needsUpdate = true;
        }

        renderer.render(scene, camera);
      } else if (prefersReducedMotion && isInViewport && isTabVisible) {
        renderer.render(scene, camera);
      }

      frameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeom.dispose();
      outerMat.dispose();
      midGeom.dispose();
      midMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
}
