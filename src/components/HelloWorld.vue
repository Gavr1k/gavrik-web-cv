<template>
  <div class="container">
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
          :radius="10"
          :width-segments="64"
          :height-segments="64"
          :position="spherePosition"
          ref="sphere"
        >
          <LambertMaterial
            :color="'#ff7f00'"
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
    const spherePosition = ref({ x: 0, y: 0, z: 0 });
    let direction = -1;

    const animate = () => {
      spherePosition.value.y += direction;

      if (spherePosition.value.y > 100 || spherePosition.value.y < -100) {
        direction *= -1;
      }

      requestAnimationFrame(animate);
    };

    onMounted(() => {
      animate();
    });

    return {
      spherePosition,
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
