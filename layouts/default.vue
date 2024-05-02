<template>
  <div>
    <NuxtPwaManifest />
    <LayoutTheHeader />
    <main>
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>
