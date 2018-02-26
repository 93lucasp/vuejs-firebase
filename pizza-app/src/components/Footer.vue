 <template>
 <header class="row">
      <footer class="navbar">
          <ul class="nav">
              <router-link :to="{name: 'aboutLink'}" tag="li">
                    <a class="nav-link">about</a>
                  </router-link>
                  <router-link :to="{name: 'adminLink'}" tag="li">
                     <a class="nav-link">Admin</a>
                  </router-link>
          </ul>
      </footer>
  </header>
</template>