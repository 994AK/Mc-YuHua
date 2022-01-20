<script setup lang="ts">

const token = localStorage.getItem("token")

console.log(token)

</script>

<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand ">
      <router-link to="/" class="navbar-item">
        <img src="../../assets/Logo.jpg" alt="" class="image is-24x24">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>


    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          主页
        </router-link>
        <router-link class="navbar-item" to="/title">
          商店
        </router-link>
      </div>
    </div>
    <nav-user />
  </nav>
</template>

<style scoped>

</style>
