<template>
  <div class="cavern-top-transition">
    <div class="cavern-top-back"></div>
    <div class="cavern-top-left"></div>
    <div class="cavern-top-right"></div>
    <div class="cavern-top-front"></div>
  </div>
</template>

<style scoped>
.cavern-top-transition {
  position: relative;
  width: 100%;
  height: 7rem;
  pointer-events: none;
}

.cavern-top-back {
  position: absolute;
  width: 100%;
  height: 11rem;
  background-image: url(assets/images/cavern-transitions/cavern-top-back.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;
}

.cavern-top-front {
  position: absolute;
  width: 100%;
  height: 17rem;
  background-image: url(assets/images/cavern-transitions/cavern-top-front.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40%;
}

.cavern-top-left {
  position: absolute;
  width: 8rem;
  height: 17rem;
  background-image: url(assets/images/cavern-transitions/cavern-top-left.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.cavern-top-right {
  position: absolute;
  width: 8rem;
  height: 16rem;
  right: 0;
  background-image: url(assets/images/cavern-transitions/cavern-top-right.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>