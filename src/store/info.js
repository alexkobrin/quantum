import firebase from "firebase";

export default {
  state: {
    info: {},
    productPageItem: {
      id: "smarthone_1",
      part: "smartphone",
      model: "ZS671KS ",
      title: "Asus ZenFone",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsmarthone_1%2Fblack%2Fblack%201.png?alt=media&token=df1d8473-e8a4-4963-a27b-7c98fb80b9f2",
      quantity: 1,
      sale: 10,
      price: 384.4,
      color: ["black", "white"],
      rating: 5,
      totalvote: 10
    },
    sliderImage: []
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
    setSelectedItem(state, info) {
      state.productPageItem = info;
    },
    setSliderImage(state) {
      let storageRef = firebase.storage().ref();
      let listRef = storageRef.child(
        `image/${state.productPageItem.part}/${state.productPageItem.id}/${state.productPageItem.color[0]}`
      );
      let array = [];
      listRef.listAll().then(async function(res) {
        console.log("loading true");
        for (let i = 0; i < res.items.length; i++) {
          let result = await res.items[i].getDownloadURL();
          array.push({
            src: result
          });
        }
        state.sliderImage = array;
      });
    }
  },
  actions: {
    async fetchInfo({ commit }, itemName) {
      try {
        const info = (
          await firebase
            .database()
            .ref(`/${itemName}`)
            .once("value")
        ).val();
        commit("setInfo", info);
        return info;
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    addedSelectedItem({ commit }, selectedItem) {
      commit("setSelectedItem", selectedItem);
    },
    addedSliderImage({ commit }) {
      commit("setSliderImage");
    }
  },

  getters: {
    getInfo: s => s.info,
    getItem: s => s.productPageItem,
    getSliderImage: s => s.sliderImage
  }
};
