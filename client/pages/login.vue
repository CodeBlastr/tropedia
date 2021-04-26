<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="4" class="mt-5">
        <div v-show="error !== ''" class="text-center text-danger">
          <p>{{ error }}</p>
        </div>
        <b-card title="Sign In">
          <div>
            <b-form @submit="loginUser">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="identifier"
                  type="email"
                  required
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  required
                />
              </b-form-group>

              <b-button type="submit" variant="primary">
                Login
              </b-button>
            </b-form>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      identifier: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async loginUser (e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password
        })
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
      }
    }
  }
}
</script>
