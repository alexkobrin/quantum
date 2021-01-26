<template>
  <div class="admin ">
    <div class="page-wrapper sidebar-bg ice-theme bg3 toggled">
      <!-- <div id="show-slider" @click="closeSlideBar">
        <a class=" btn btn-sm btn-dark" href="#">
          <i class="fas fa-bars"></i>
        </a>
      </div> -->
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <router-link to="/">pro sidebar</router-link>
            <div id="close-slidebar" @click="closeSlideBar">
              <i class="   text-white fas fa-times-circle"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="../assets/img/user.jpg"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span v-if="name" class="user-name">{{ name }} </span>
              <span v-if="email" class="user-email">{{ email }}</span>
              <span class="user-role">Administrator</span>
              <span v-if="email" class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
              <span v-else class="user-status">
                <i class="fa fa-circle text-danger "></i>
                <span>Offline</span>
              </span>
            </div>
          </div>
        
         
          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/overview">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Overview</span>
                </router-link>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#"
                        >Dashboard 1
                        <span class="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/profile">
                  <i class="fas fa-user"></i>
                  <span class="menu-text">Profile</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/products">
                  <i class="fab fa-affiliatetheme"></i>
                  <span class="menu-text">Products</span>
                </router-link>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Products </a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/orders">
                  <i class="fab fa-affiliatetheme"></i>
                  <span class="menu-text">Orders</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown">
                <a href="#" @click="logOut">
                  <i class="fas fa-power-off"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>

import { fb, db } from "../firebase";

export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null
    };
  },
  methods: {
    // closeSlideBar() {
    //   $(".page-wrapper").toggleClass("toggled");
    // },
    // logOut() {
    //   fb.auth()
    //     .signOut()
    //     .then(() => {
    //       this.$router.replace("/");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },
  created() {
    // let user = fb.auth().currentUser;
    // this.email = user.email;
    // var docRef = db.collection("profiles").doc(user.uid);
    // docRef
    //   .get()
    //   .then(doc => {
    //     if (doc.exists) {
    //       this.name = doc.data().name;
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting document:", error);
    //   });
  }
};
</script>
<style lang="scss">
#show-slider {
  text-align: left;
}
#close-slidebar {
  cursor: pointer;
}
</style>
