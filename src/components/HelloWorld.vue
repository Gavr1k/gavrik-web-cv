<template>
  <div class="container">
    <button @click="addSphere">Add sphere</button>
    <Renderer resize="window" orbit-ctrl>
      <Camera :position="{ z: 70 }" />
      <Scene>
        <AmbientLight :intensity="0.5" />
        <DirectionalLight :position="{ x: 50, y: 50, z: 50 }" :intensity="1" />
        <DirectionalLight
          :position="{ x: -50, y: 50, z: -50 }"
          :intensity="1"
        />
        <Sphere
          v-for="(sphere, index) in spheres"
          :key="index"
          :radius="10"
          :width-segments="64"
          :height-segments="64"
          :position="sphere.position"
          ref="sphere"
        >
          <LambertMaterial
            :color="sphere.color"
            :specular="'#ffffff'"
            :shininess="100"
          />
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {
  Sphere,
  Camera,
  LambertMaterial,
  DirectionalLight,
  AmbientLight,
  Renderer,
  Scene,
} from 'troisjs';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    Sphere,
    Camera,
    LambertMaterial,
    Renderer,
    Scene,
    AmbientLight,
    DirectionalLight,
  },
  setup() {
    const spheres = ref<
      {
        position: { x: number; y: number; z: number };
        color: string;
        angle: number;
      }[]
    >([]);
    let direction = 1;

    const animate = () => {
      spheres.value.forEach((sphere) => {
        sphere.angle += 0.015;
        sphere.position.y = 50 * Math.sin(sphere.angle);
        sphere.position.x = 50 * Math.cos(sphere.angle);
      });

      requestAnimationFrame(animate);
    };

    const addSphere = () => {
      const newSphere = {
        position: { x: 0, y: 0, z: 0 },
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        angle: Math.random() * Math.PI * 2,
      };
      spheres.value.push(newSphere);
    };

    onMounted(() => {
      animate();
    });

    return {
      spheres,
      addSphere,
    };
  },
});
</script>

<style>
html,
body,
#app,
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
