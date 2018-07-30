<template>
  <div id="app" class="container">
    <div class="main nav-main">
      <router-link to="/">
        <img class="logo" src="./assets/logo.png" alt="">
      </router-link>
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/course">课程</router-link>
        </li>
        <li>
          <router-link to="/mentor">导师</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/*Vue隐藏*/
[v-cloak] {
    display: none;
}
/*清除样式*/
*{
    box-sizing: border-box;
}
body, ol, ul, dl, li, dt, dd, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea,select{
    margin: 0;
    padding: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block
}

html, body {
    height: 100%;
}

html {
    position: relative;
    margin: 0 auto;
    width: 100%;
}

body {
    position: relative;
    font-size: 14px;
    font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    background: #fff;
    color: #282828;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}

h1, h2, h3, h4, h5 {
    font-weight: normal;
    font-size: 14px;
}

a {
    color: #333;
    text-decoration: none;
    transition: color .2s ease-out;
}

a:hover {
    text-decoration: none;
}

em, i {
    font-style: normal;
}

ol, ul, dl, li, dt, dd {
    list-style: none
}

img {
    border: 0;
    vertical-align: middle
}

.boxShadow{
    box-shadow: 0 0 .18rem 0 rgba(0,0,0,0.1);
}

a img {
    border: 0
}

table {
    border-collapse: collapse;
    border-spacing: 0
}
input, textarea {
    font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    outline: none;
}

input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    outline: none;
    padding: 0px;
    margin: 0;
}
/*透明度渐变*/
.opacity{
    -webkit-animation: opacity 0.3s linear;
    animation: opacity 0.3s linear;
}
@-webkit-keyframes opacity {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}
@keyframes opacity {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}
/*清除浮动*/
.clearfloat{
    zoom:1
}
.clearfloat:after{
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
}
.container{
  width:100%;
  .main{
    width:1200px;
    margin: 0 auto;
  }
}
</style>
<style lang="less" scoped>
  .nav-main{
    height: 80px;
    overflow: hidden;
    line-height: 80px;
    .logo{
      height: 60px;
      vertical-align: middle;
    }
    .nav{
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      li{
        float: left;
        margin-left: 42px;
      }
      .router-link-exact-active{
        color:red;
      }
    }
  }
  
</style>
