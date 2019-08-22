import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default ({ store }) => {
  console.log(12345)
  Vue.use(new VueSocketIO({
      debug: false,
      connection: 'http://localhost:3000/',
      vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_"
      }
    })
  );
}
// import Vue from 'vue';
// import io from 'socket.io-client';
// import VueSocketIOExt from 'vue-socket.io-extended';
 
// const socket = io('http://localhost:3000');
 
// export default ({ store }) => {
//   Vue.use(VueSocketIOExt, socket, { store });
// }