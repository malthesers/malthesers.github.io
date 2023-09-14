<template>
  <div class="cavern-bottom-transition">
    <div class="cavern-bottom-back"></div>
    <div class="cavern-bottom-left"></div>
    <div class="cavern-bottom-right"></div>
    <div class="cavern-bottom-front"></div>
  </div>
</template>

<style scoped>
.cavern-bottom-transition {
  position: relative;
  width: 100%;
  height: 15rem;
  pointer-events: none;
}

.cavern-bottom-back {
  position: absolute;
  width: 100%;
  height: 24rem;
  bottom: 0;
  background-image: url(assets/images/cavern-transitions/cavern-bottom-back.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 24%;
}

.cavern-bottom-front {
  position: absolute;
  width: 100%;
  height: 24rem;
  bottom: 0;
  background-image: url(assets/images/cavern-transitions/cavern-bottom-front.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.cavern-bottom-left {
  position: absolute;
  width: 8rem;
  height: 17rem;
  bottom: 0;
  background-image: url(assets/images/cavern-transitions/cavern-bottom-left.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.cavern-bottom-right {
  position: absolute;
  width: 8rem;
  height: 16rem;
  bottom: 0;
  right: 0;
  background-image: url(assets/images/cavern-transitions/cavern-bottom-right.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>