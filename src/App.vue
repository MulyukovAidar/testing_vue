<template>
  <div class="app">
    <navigation></navigation>
  </div>
</template>

<script>
// import CreateNote from './components/CreateNote'
// import NoteList from './components/NoteList'

import navigation from './components/NavbarFooter'
// import login from './components/Login'
export default {
  name: 'app',
  components: {
    navigation
    // login
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Eczar);
  @import url(https://fonts.googleapis.com/css?family=Work+Sans);

  body {
    font-family: "Work Sans", "Segoe UI", "Helvetica Neue", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Eczar", sans-serif;
  }
</style>
