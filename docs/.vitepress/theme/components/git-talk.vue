<template>
	<div class="gitalk-container">
		<div id="gitalk-container"></div>
	</div>
</template>
<script lang="ts" setup>
import md5 from 'md5';
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import { ref, unref } from 'vue';

const commentConfig = ref({
	clientID: '',
	clientSecret: '',
	repo: '你的仓库名',
	owner: '你的账户名',
	admin: ['你的账户名'],
	id: md5(location.pathname),
	distractionFreeMode: false,
});
const gitalk = new Gitalk(unref(commentConfig));
gitalk.render('gitalk-container');
</script>
<style>
.gt-container .gt-header-textarea {
	color: #000;
}
</style>
