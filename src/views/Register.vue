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
           <span>I agree with  </span>
          <!-- <small
          v-if="$v.agree.$dirty && $v.agree.required"
          class="helper-text invalid"
          >Field name should not be empty</small> -->
        </label>
        <a data-target="rules"  class=" modal-trigger"  > rules and terms </a>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit"  type="submit">
          Sign Up
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Have already account?
        <router-link to="/login">Log In!</router-link>
      </p>
    </div>
     <div id="rules" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import {fb ,db} from "../firebase"
import messages from "../utils/messages.js"
import { mapActions } from 'vuex'
 
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
    agree: { checked: v=> v }
  },
  mounted() {

  },
  methods: {
    ...mapActions(['logout' , 'register']),
    async  submitHandler() {
       this.$v.$touch()
         if(this.$v.invalid) {
              console.log('error');
         }  else {
           try {
                await fb.auth().createUserWithEmailAndPassword(this.email,  this.password)
                .then((user)=> {
                    db.collection('profiles').doc(user.user.uid)
                    .set({ 
                       name: this.name,
                       rules: true
                       })
                       })      
                this.$router.push("/admin");   
                this.$message('You sucsesfully registered')      
             }
              catch (e) { 
               this.$error(messages[e.code]) 
                 throw (e)
             }
         }  
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
