---
layoutClass: nav-layout
---


<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>
# 快捷导航

<NavBox v-for="(data, index) in NAV_DATA" :items="data.items" :title="data.title"/>