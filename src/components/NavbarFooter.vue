<template>
  <div>
    <nav class="navbar navbar-light bg-light d-flex navbar-expand">
      <!--logo section-->
      <a class="navbar-brand" href="#">
        <!--<img src="Bomb.png">-->
        <p class="my-auto">LOGO</p>
      </a>
      <div class="d-flex ml-auto">
        <ul class="navbar-nav flex-fill pl-md-5 text-nowrap">
          <li class="nav-item mx-2" :class="{active: active === index}" v-on:click="active = index">
            <router-link class="nav-link " to="/login">Главная</router-link>
          </li>
          <li class="nav-item mx-2" :class="{active: active === index}" v-on:click="active = index">
            <router-link class="nav-link" to="/login">Публичные записи</router-link>
          </li>
          <li class="nav-item mx-2" :class="{active: active === index}" v-on:click="active = index">
            <router-link class="nav-link btn btn-primary text-white" to="/login">Авторизация</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Contact: vk.com/colond</span>
      </div>
    </footer>
  </div>
</template>

<script>
import login from './Login'
import router from './router'

export default {
  router,
  name: 'navigation',
  // el: '#nav',
  components: {
    login
  },
  data: function () {
    return {
      active: 1,
      menuItems:
        [
          {id: 1, title: 'MAIN', link: '#'},
          {id: 2, title: 'LATEST', link: '#'},
          {id: 3, title: 'MY DIARY', link: '#'}
        ]
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;

}
</style>
