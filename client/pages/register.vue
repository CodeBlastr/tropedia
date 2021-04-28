<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="4" class="mt-5">
        <div v-show="error !== ''" class="text-center text-danger">
          <p>{{ error }}</p>
        </div>
        <b-card title="Sign Up">
          <div>
            <b-form @submit="createUser">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                />
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Name:"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="username"
                  type="text"
                  required
                />
              </b-form-group>

              <b-form-group id="input-group-3" label="Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  required
                />
              </b-form-group>

              <b-button type="submit" variant="primary" :disabled="email === '' || password === '' || username === ''">
                Register
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
      email: '',
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async createUser (e) {
      e.preventDefault()
      try {
        const newUser = await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password
        })
        if (newUser !== null) {
          this.error = ''
          this.$nuxt.$router.push('/')
        }
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
<style></style>
