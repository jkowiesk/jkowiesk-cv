uniform float time;
uniform float uRepeat;

attribute float aRandom;

varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float elevation = abs(sin(aRandom * time * 0.3)) * 0.15;
    modelPosition.y = elevation - 0.3;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv * uRepeat;
}