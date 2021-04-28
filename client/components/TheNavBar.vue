<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">
          Tropedia
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              Link
            </b-nav-item>
            <b-nav-item href="#">
              Link
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input v-model="searchText" size="sm" class="mr-sm-2" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" variant="outline-success" @click="onSearchClick">
                Search
              </b-button>
            </b-nav-form>

            <b-nav-item-dropdown v-if="isAuthenticated" right class="ml-3">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                {{ user.username }}
              </template>
              <b-dropdown-item href="#" @click="onSignOutClick">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-if="!isAuthenticated" href="#" to="/register">
              Sign up
            </b-nav-item>
            <b-nav-item v-if="!isAuthenticated" href="#" to="/login">
              Sign in
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    isAuthenticated () {
      return this.$strapi.user != null
    },
    user () {
      return (this.isAuthenticated) ? this.$strapi.user : null
    }
  },
  methods: {
    onSignOutClick () {
      this.$strapi.logout()
      this.$router.push('/')
    },
    onSearchClick () {
      // alert(this.searchText)
      this.$router.push(`/articles/search?text=${this.searchText}`)
    }
  }
}
</script>
