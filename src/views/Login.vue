<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Login</span>
      <div class="input-field">
        <input
          id="email"
          v-model.trim="$v.email.$model"
          type="text"
          :class="{
            invalid:
              ($v.email.$dirty && $v.email.email.$invalid) ||
              ($v.email.$dirty && $v.email.required.$invalid)
          }"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && $v.email.required.$invalid"
          class="helper-text invalid"
          >Field email should not be empty
        </small>
        <small
          v-else-if="$v.email.$dirty && $v.email.email.$invalid"
          class="helper-text invalid"
          >Введите корректный email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          v-model.trim="$v.password.$model"
          type="password"
          :class="{
            invalid:
              ($v.password.$dirty && $v.password.required.$invalid) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
          class="validate"
        />
        <label for="password">Password</label>
        <small
          v-if="$v.password.$dirty && $v.password.required.$invalid"
          class="helper-text invalid"
          >Field email should not be empty</small
        >
        <small
          v-else-if="$v.password.$dirty && $v.password.minLength.$invalid"
          class="helper-text invalid"
          >Password should be at least 6 symbols. It is
          {{ $v.password.$model.length }} symbols</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Haven't account?
        <router-link to="/register">SignUp</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "../utils/messages"
import {fb} from "../firebase"
export default {
  name: "Login",

  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  mounted() {
    // if (messages[this.$route.query.message]) {
    //   this.$message(messages[this.$route.query.message]);
    // }
    // this.$message('Hello new user')
  },
  methods: {
  async  submitHandler() {
    this.$v.$touch() 
    if (this.$v.$invalid) {
        console.log('Error');
    }  else {
       console.log('Go');
             const formData = {
        email : this.email,
        password: this.password
      };
      try {
         await fb.auth().signInWithEmailAndPassword(this.email, this.password)  
         this.$message('You successfully Sign in')      
         this.$router.push("/admin");
      } catch (e) {
         this.$error(messages[e.code])
      }
    }  
       
    
      }      
   
  }
};
</script>
<style lang="scss" scoped>
.card {
  min-width: 280px;
  padding: 10px 20px 10px;
}
.btn {
  width: 100%;
  margin-bottom: 1rem;
}
.invalid {
  border-bottom-color: red;
}
.helper-text.invalid {
  color: red !important;
}
@media (min-width: 1000px) {
  .card {
    min-width: 380px;
  }
}
</style>
