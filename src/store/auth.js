
import {fb,db} from '../firebase'
export default {
    state: {
        name: '' ,
        email: '',
        avatar: ''
      },
      mutations: {
          SignInUser:(state, dataUser)  => {
             state.name = dataUser.name
             state.email = dataUser.email
          }
      },
    actions: {
        async login ({dispatch, commit}, {email,password}) {
            let dataUser = {}
            try {
                await fb.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    let docRef = db.collection("profiles").doc(userCredential.user.uid);
                    docRef
                      .get()
                      .then(doc => {
                        if (doc.exists) {
                           dataUser = {
                            name :  doc.data().name  ,
                            email: userCredential.user.email
                               }

                           commit('SignInUser', dataUser   )
                        } else {
                          // doc.data() will be undefined in this case
                          this.$error("No such document!")
                        }
                      })
                      .catch(function(error) {
                        console.log(error)
                      this.$error(messages[e.code])
                      });
                   })
                } catch (e) {
                    console.log(e);
                    throw (e)
                }
                 
                
        },
        
        async logout () {
             console.log('eeeeee');
            //    await  fb.auth().signOut()
        },    
    },
     getters : {
         name: s => s.name,
         email: s => s.email

    }
}  

    
