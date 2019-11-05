<template>
  <b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :to="{name:'Main_page'}"><h1 style="margin-top:0; margin-bottom:0; font-size:36px">IT Service</h1></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">about</b-nav-item>
          <b-nav-item href="#feature">Services</b-nav-item>
          <b-nav-item href="#screenshot">screenshot</b-nav-item>
          <b-nav-item href="#team">team</b-nav-item>
          <b-nav-item href="#price">price</b-nav-item>
          <b-nav-item href="#testimonial">Testimonial</b-nav-item>
          <b-nav-item href="#contact">contact us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
  export default {
   name:'Navbar'
  }
</script>
