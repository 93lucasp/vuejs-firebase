<template>
  <div class="container">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus odit similique adipisci deleniti voluptate perspiciatis architecto inventore debitis nulla? Autem qui similique nobis doloremque, harum odio sunt rem numquam.</p>
        <p>click for more info</p>
        <nav class="navbar">
          <ul class="nav">
                  <router-link to="/contact" tag="li">
                    <a class="nav-link">Contact</a>
                  </router-link>
                  <router-link to="/login" tag="li">
                    <a class="nav-link">Login</a>
                  </router-link>
          </ul>
      </nav>
      <router-view></router-view>
  </div>
</template>
