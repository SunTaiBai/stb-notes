<script lang="ts" setup>
import md5 from 'md5'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import { onMounted } from 'vue'
import { message } from 'ant-design-vue'

const gitalk = new Gitalk({
  clientID: 'f8b4f7d249504adb975c',
  clientSecret: '137a4407c3c48fcb2ff416efc36632f6366ff725',
  repo: 'DocComment',
  owner: 'SunTaiBai',
  admin: ['SunTaiBai'],
  id: md5(location.pathname),
  distractionFreeMode: false,
})
// 异步获取点赞元素
function getLikeElementAsync(className: string): Promise<HTMLCollectionOf<Element>> {
  return new Promise((resolve) => {
    // 定义定时器检查点赞元素是否已加载
    const intervalId = setInterval(() => {
      const likeElem = document.getElementById('gitalk-container')?.getElementsByClassName(className) as HTMLCollectionOf<Element>
      if (likeElem.length > 0) {
        clearInterval(intervalId)
        resolve(likeElem)
      }
    }, 100)
  })
}
onMounted(async () => {
  gitalk.render('gitalk-container')
  const gtCommentLikeList = await getLikeElementAsync('gt-comment-like')
  for (let i = 0; i < gtCommentLikeList?.length; i++) {
    gtCommentLikeList[i].addEventListener('click', () => {
      // 如果点赞，先判断有没有登录
      if (!window.localStorage.getItem('GT_ACCESS_TOKEN'))
        message.error('点赞前，请您先进行登录')
    })
  }
})
</script>

<template>
  <div class="gitalk-container">
    <div id="gitalk-container" />
  </div>
</template>

<style>
.gt-container .gt-header-textarea {
    color: #000;
}
</style>
