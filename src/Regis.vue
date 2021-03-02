<template>
  <el-form class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <h3 class="login_title">用户注册</h3>
    <el-form-item>
      <el-input type="text" v-model="regisForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="regisForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 40%;background: #505458;border: none" v-on:click="regis">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Regis',
  data () {
    return {
      checked: true,
      regisForm: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    regis () {
      var _this = this
      console.log(this.regisForm)
      this.$axios
        .post('/regis', {
          username: this.regisForm.username,
          password: this.regisForm.password
        })
        .then(successResponse => {
          console.log(successResponse)
          if (successResponse.data.code === 200) {
            this.$alert('注册成功', '提示', {
              confirmButtonText: '确定'
            })
            _this.$router.replace('/login')
          } else {
            this.$alert(successResponse.data.message, '提示', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>

<style scoped>

</style>
