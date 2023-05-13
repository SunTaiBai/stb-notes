<script setup lang="ts">
import { withBase } from "vitepress";
import { NavItem } from "../../types";
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
const props = defineProps<{
  data: NavItem;
}>();

const badgeComputed = computed(() => {
  if (typeof props.data.badge === "string") {
    return { text: props.data.badge, type: "info" };
  }
  return props.data.badge;
});

</script>

<template>
  <a class="nav-link" :href="data.link" target="_blank">
    <article class="nav-box">
      <div class="nav-box-header">
        <div class="icon">
          <img
            :src="withBase(data.icon)"
            :alt="data.title"
            onerror="this.parentElement.style.display='none'"
          />
        </div>
        <h5 class="title">
          {{ data.title }}
        </h5>
      </div>
      <Badge
        v-if="badgeComputed"
        class="badge"
        :type="badgeComputed?.type"
        :text="badgeComputed?.text"
      />
      <p v-if="data.desc" class="desc">{{ data.desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.nav-link {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;
  position: relative;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
  }
  .nav-box {
    display: flex;
    flex-direction: column;
    padding: 12px;
    color: var(--vp-c-text-1);
    height: 100%;
    &-header {
      display: flex;
      align-items: center;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: var(--vp-c-bg-soft-down);
        border-radius: 7px;
        margin-right: 10px;
        img {
          width: 24px;
          border-radius: 4px;
        }
      }
      .title {
        overflow: hidden;
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 600;
        &:not(.no-icon) {
          line-height: var(40px);
        }
      }
    }
    .badge {
      position: absolute;
      top: 2px;
      right: 0;
      transform: scale(0.8);
    }
    .desc {
      display: inline-block;
      line-height: 1;
      font-size: 12px;
      color: var(--vp-c-text-2);
    }
  }
}
</style>
