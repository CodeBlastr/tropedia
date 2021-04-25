<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Tropedia
      </h1>
      <div class="links">
        <div v-if="!isAuthenticated">
          <button
            class="button--green"
            @click="onRegisterClick"
          >
            Register
          </button>
          <button
            class="button--grey"
            @click="onSignInClick"
          >
            Sign In
          </button>
        </div>
        <div v-if="isAuthenticated">
          <p>
            Welcome, {{ user.username }}
          </p>
          <button
            class="button--red"
            @click="onLogoutClick"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
    onSignInClick () {
      this.$router.push('/login')
    },
    onRegisterClick () {
      this.$router.push('/register')
    },
    async onLogoutClick () {
      await this.$strapi.logout()
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
