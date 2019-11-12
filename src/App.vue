<template>
  <div id="app">22
{{$route.meta.keepAlive}}
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    const sm2 = require('sm-crypto').sm2;

    let keypair = sm2.generateKeyPairHex();

    let publicKey = keypair.publicKey; // 公钥
    let  privateKey = keypair.privateKey; // 私钥

    const cipherMode = 1; // 1 - C1C3C2，0 - C1C2C3，默认为1

    let encryptData = sm2.doEncrypt('1', publicKey, 'A2CAC7153CFCCBDCC8272A6A1C45A30C677684E4367B6F93E2F04579A42A5AAE1C2F0F58DEE5F05E9C7076F7BB308690906102C276E7313225B545E51451E878'); // 加密结果

    let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode); // 解密结果

     // this.$ajax.get('https://api.it120.cc/tz/score/send/rule')
     //   .then(function (response) {
     //     console.log(11);
     //   })
     //   .catch(function (error) {
     //     console.log(22);
     //   })

  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
