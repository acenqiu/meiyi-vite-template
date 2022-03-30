<script setup lang="ts">
import { RouterView } from 'vue-router';
import { provide } from 'vue';

const userAgent = navigator?.userAgent;
const isMobile: boolean =
  userAgent.includes('Harmony') ||
  userAgent.includes('Android') ||
  userAgent.includes('iPhone') ||
  userAgent.includes('iPad') ||
  userAgent.includes('ipod') ||
  userAgent.includes('Symbian');

provide('isMobile', isMobile);
</script>

<template>
  <RouterView />
</template>
