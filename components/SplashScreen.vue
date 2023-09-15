<template>
  <div class="h-[100dvh]">
    <div class="layer-background"></div>
    <div class="layer-moon"></div>
    <div class="layer-mountain-far"></div>
    <div class="layer-mountain-near"></div>
    <div class="layer-trees"></div>
    <div class="layer-mountain-near-reflection"></div>
    <div class="layer-mountain-far-reflection"></div>
    <div class="layer-reflection"></div>
    <div class="layer-foreground"></div>
  </div>
</template>

<style scoped>
[class^='layer'] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

[class^='layer']:not(:last-of-type) {
  background-attachment: fixed;
}

.layer-background {
  background-image: url(assets/images/splash-layers/layer-background.svg);
  overflow: hidden;
}

.layer-moon {
  background-image: url(assets/images/splash-layers/layer-moon.svg);
  background-position: 90%;
}

.layer-mountain-far {
  background-image: url(assets/images/splash-layers/layer-mountain-far.svg);
  background-position: 80%;
}

.layer-mountain-near {
  background-image: url(assets/images/splash-layers/layer-mountain-near.svg);
  background-position: 70%;
}

.layer-trees {
  background-image: url(assets/images/splash-layers/layer-trees.svg);
  background-position: 50%;
}

.layer-mountain-far-reflection {
  background-image: url(assets/images/splash-layers/layer-mountain-far-reflection.svg);
  background-position: 80%;
}

.layer-mountain-near-reflection {
  background-image: url(assets/images/splash-layers/layer-mountain-near-reflection.svg);
  background-position: 70%;
}

.layer-reflection {
  background-image: url(assets/images/splash-layers/layer-reflection.svg);
  background-position: 50%;
}

.layer-foreground {
  background-image: url(assets/images/splash-layers/layer-foreground.svg);
  background-position: 15%;
}
</style>