<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Sign Up</span>
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
          class="validate"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && $v.email.required.$invalid"
          class="helper-text invalid"
          >Field email should not be empty</small
        >
        <small
          v-else-if="$v.email.$dirty && $v.email.email.$invalid"
          class="helper-text invalid"
          > Please type a correct email adress</small
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
          >Field password should not be empty</small
        >
        <small
          v-else-if="$v.password.$dirty && $v.password.minLength.$invalid"
          class="helper-text invalid"
          >Password should be at least 6 symbols. It is
          {{ $v.password.$model.length }} symbols</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          v-model.trim="$v.name.$model"
          type="text"
          :class="{
            invalid: $v.name.$dirty && $v.name.required.$invalid
          }"
        />
        <label for="name">Name</label>
        <small
          v-if="$v.name.$dirty && $v.name.required.$invalid"
          class="helper-text invalid"
          >Field name should not be empty</small
        >
      </div>
      <p>
        <label>
          <input v-model="agree" type="checkbox" />
          <span
            >I agree with <router-link to="/rules">rules and terms</router-link>
          </span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit"  type="submit">
          SignUp
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Have already account?
        <router-link to="/login">Log In!</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import {fb ,db} from "../firebase"
export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { check: v => v }
  },
  methods: {
    submitHandler() {
  fb.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then((user) => {
     db.collection("profiles").doc(user.user.uid).set({
       name: this.name
     })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
     console.log(errorCode, errorMessage);
  });
         
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  min-width: 310px;
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
.center {
  min-width: 250px;
}
@media (min-width: 1000px) {
  .card {
    min-width: 380px;
    text-align: center;
  }
}
</style>
