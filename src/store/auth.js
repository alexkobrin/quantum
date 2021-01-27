
import {fb,db} from '../firebase'
export default {
    actions: {
        async login ({dispatch, commit}, {email,password}) {
         console.log(email,password);
            try {
                await fb.auth().signInWithEmailAndPassword(email, password) 
                } catch (e) {
                    console.log(e);
                    throw (e)
                }
            },
        
        async logout () {
             console.log('eeeeee');
            //    await  fb.auth().signOut()
        },
        async  register ({dispatch,commit}, {email, password, name, rules}) {
           

            
            }
        
       }
}  

    
