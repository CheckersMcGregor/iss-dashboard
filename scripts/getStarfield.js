import * as THREE from "three";
import circle from "../images/circle.png";
import glsl from "glslify";

export default function getStarfield({ numStars = 500 } = {}) {
  function randomSpherePoint() {
    const radius = Math.random() * 25 + 25; // Random radius between 25 and 50
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u; // Random azimuthal angle
    const phi = Math.acos(2 * v - 1); // Random polar angle

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return {
      pos: new THREE.Vector3(x, y, z),
      hue: Math.random(), // Random hue for variety
      minDist: radius,
    };
  }

  const verts = [];
  const colors = [];
  const times = [];
  for (let i = 0; i < numStars; i += 1) {
    let p = randomSpherePoint();
    const { pos, hue } = p;
    verts.push(pos.x, pos.y, pos.z);
    const color = new THREE.Color().setHSL(hue, 0.2, 0.5);
    colors.push(color.r, color.g, color.b);
    times.push(Math.random()); // Random start time for twinkling
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute("time", new THREE.Float32BufferAttribute(times, 1));

  const vertexShader = glsl`
    attribute float time;
    varying float vTime;
    varying vec3 vColor;

    void main() {
      vTime = time;
      vColor = color;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = 1.0;
    }
  `;

  const fragmentShader = glsl`
    uniform float uTime;
    varying float vTime;
    varying vec3 vColor;

    void main() {
      float twinkle = 0.5 + 0.5 * sin(10.0 * (vTime + uTime));
      gl_FragColor = vec4(vColor * twinkle, 1.0);
    }
  `;

  const uniforms = {
    uTime: { value: 0.0 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    vertexColors: true,
  });

  const points = new THREE.Points(geo, mat);

  // Animation function to update time
  function animate() {
    requestAnimationFrame(animate);
    uniforms.uTime.value += 0.002;
  }

  animate();

  return points;
}
