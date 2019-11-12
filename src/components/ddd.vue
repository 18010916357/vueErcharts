<template>
<div>
  <input v-model="dddValue"/>
  <div @click="aa"> dsfd</div>点击
</div>
</template>

<script>

export default {
  data(){
    return {
      dddValue: this.$route.query.params
    }
    },
  methods:{
    aa(){
      this.$router.push({path:'/HelloWorld',query:{params:222222}})
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  beforeRouteLeave(to, from, next) {
    location.reload()
    from.meta.keepAlive = false;
    next();
  },
  created(){
    this.$vux.loading.show({
      text: '加载中...'
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
