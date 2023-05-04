---
layout: home
layoutClass: 'stb-home-layout'

hero:
  name: 猩猩点灯
  text: SunTaiBai 的成长笔记
  tagline: 读书无疑者须教有疑，有疑者却要无疑，到这里方是长进
  image:
    src: /logo.svg
    alt: 猩猩点灯
  actions:
    - text: 前端物语
      link: /fe/es6/
    - text: 快捷导航
      link: /pages/nav/
      theme: alt
---

<style>
/*爱的魔力转圈圈*/
.stb-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.stb-home-layout .details small {
  opacity: 0.8;
}

.stb-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>