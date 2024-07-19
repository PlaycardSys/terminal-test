<template>
  <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="in-out">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>