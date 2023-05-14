<script setup lang="ts">
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'
import type { NavItem } from '../../types'
import Link from './link.vue'

const props = defineProps<{
  title: string
  items: NavItem[]
}>()
const anchorPoint = computed(() => slugify(props.title))
</script>

<template>
  <h2 :id="anchorPoint" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${anchorPoint}`" aria-hidden="true" />
  </h2>
  <div class="nav-links-box  w-full">
    <Link v-for="(item, index) in items" :key="index" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
.nav-links-box {
  display: grid;
  grid-auto-flow: row dense;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-top: 20px;
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .nav-links-box {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}
</style>
