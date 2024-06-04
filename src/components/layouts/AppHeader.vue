<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [
        {
          'text': 'Home',
          'route': 'home'
        },
        {
          'text': 'About',
          'route': 'about'
        },
        {
          'text': 'Projects',
          'route': 'projects'
        },
        {
          'text': 'Contacts',
          'route': 'contacts'
        }
      ]
    }
  }
};
</script>

<template>
  <nav class="main_menu">

    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <h3 class="logo_AS">Arianna Salvini</h3>
      </div>

      <div>
        <router-link :to="{ name: item.route }" v-for="item in menu" class="ps-3 text-dark">{{ item.text }}
        </router-link>
      </div>
    </div>
  </nav>

</template>

<style scoped>
.logo_AS {
  font-size: 1.5rem;
}

.main_menu {
  margin: 1rem;
  height: 2rem;
}
</style>
