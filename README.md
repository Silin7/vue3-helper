# vue3-helper
### Version:  0.0.1
### Author:  Silin7

<br/>

# 用户代码片段功能

<img src="https://www.silin7.cn/files/snippets.gif?raw=true" style="zoom: 40%;" />

<br/>

### 模版片段

|  关键词  |                                代码片段                                 |
| :------: | :---------------------------------------------------------------------: |
|   vue3   | `<template></template><script setup lang="ts"></script><style></style>` |
| template |                   `<template><div></div></template>`                    |
| scripte  |                   `<script setup lang="ts"></script>`                   |
|  style   |                        `<style lang=""></style>`                        |
|   css    |                        `<style scoped></style>`                         |
|   scss   |                      `<style lang="scss"></style>`                      |
|   Sass   |                      `<style lang="sass"></style>`                      |
|   Less   |                      `<style lang="less"></style>`                      |

<br/>

### script&vue 片段

|      关键词      |                   代码片段                   |
| :--------------: | :------------------------------------------: |
|      Import      |          `import {...} from '...'`           |
|       Data       |            `data(){return {...}}`            |
|      Setup       |          `setup(){...return{...}}`           |
|      vText       |                `v-text="..."`                |
|      vHtml       |                `v-html="..."`                |
|      vShow       |                `v-show="..."`                |
|       vIf        |                 `v-if="..."`                 |
|      velse       |                   `v-else`                   |
|     velseif      |              `v-else-if="..."`               |
|       vFor       |       `v-for="... in ..." :key="..."`        |
| vFor(withoutKey) |             `v-for="... in ..."`             |
|       vOn        |                 `v-on="..."`                 |
|      vBind       |                `v-bind="..."`                |
|      vModel      |               `v-model="..."`                |
|      vSlot       |                `v-slot="..."`                |
|      vOnce       |                   `v-once`                   |
|   iscomponent    |     `<component :is="..."></component>`      |
|    **vprops**    | `const props = defineProps({ foo: String })` |
|    **vemits**    |  `const emit = defineEmits(['...', '...'])`  |

<br/>

### vue-router 片段

|      关键词      |                        代码片段                        |
| :--------------: | :----------------------------------------------------: |
|    beforeeach    |      `router.beforeEach((to, from, next) =>{...}`      |
|  beforeresolve   |    `router.beforeResolve((to, from, next) => {...}`    |
|    afterEach     |         `router.afterEach((to, from) => {...}`         |
|   beforeenter    |          `beforeEnter(to, from, next) {...}`           |
| beforeRouteEnter |        `beforeRouteEnter(to, from, next) {...}`        |
| beforeRouteLeave |        `beforeRouteLeave(to, from, next) {...}`        |
|      vroute      | `{'path':...,name:...,component: () => import('...')}` |

<br/>

**Enjoy!**
