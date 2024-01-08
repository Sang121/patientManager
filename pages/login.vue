<template>
  <div class="container-login">
    <a href="/"><img class="logo"  src="../store/logo.svg" alt=""> </a>
    <div class="main_content" >
     
      </div>
        <div class="login"> 
        <form action="#" method="POST" @submit.prevent="loginUser">
          <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <div class="flex flex-wrap justify-content-center align-items-center gap-2">
              <label class="w-6rem">Username</label>
              <input id="username"  v-model="user.username" type="text" class="w-12rem" />
          </div>
          <div class="flex flex-wrap justify-content-center align-items-center gap-2">
              <label class="w-6rem">Password</label>
              <input id="password" v-model="user.password" type="password" class="w-12rem" />
          </div>
          <Button label="Login" icon="pi pi-user" type="submit" class="w-10rem mx-auto"/>
      </div>
      
        </form>
        <div class="fgPass flex flex-wrap  gap-3 "> 
          <a href=""><p>Quên mật khẩu</p></a>
          <a href=""><p>Bạn chưa có tài khoản?</p></a>
      </div>
      </div>
    </div>


</template>
<style>
.container-login {
  font-family: 'Arial', sans-serif;
}
.main_content{
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 15%;
}
.intro{
  width: 30%;
  align-items: center;
}
.login {
  margin-left: 25%;
  
}




.logo {
  width: 200px;
  padding: 15px;
  border-radius: 10px;
}

a {
  text-decoration: none;
  color: black;
}
.fgPass{
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  margin-top: 0;
}


</style>
<script>


const isLoggined =localStorage.getItem("isLoggined")
import Button from 'primevue/button';

export default {
  
 data(){
    return {
user :{
  username: '',
  password: '',
  rememberLogin: true
}
    }
 },
 
   methods:{  
    
    // loginUser(){
    //   const loginUser = {
    //     username: this.user.username,
    //     password: this.user.password,
    //     rememberLogin: true
    //   };
      
    // try{
    // axios.post('http://192.168.1.53:9098/Auth/login',loginUser)
    //     .then((response) => {
    //       if (response.data.status === "OK") {
    //         localStorage.setItem("isLoggined","true");
    //         localStorage.setItem("key",response.data.data.rawData);
    //         window.location.href='/'
    //       } else {
    //         console.log('Lỗi');
    //         alert("Đăng nhập thất bại");
    //       }
    //     })}

    //     catch(e) {
    //       console.error('Đăng nhập thất bại:', e.response.data.message 
    //     );
    //     };
    
    // },
    async loginUser() {
      try {
      const res=  await this.$auth.loginWith('local', {
          data: this.user
        })
        console.log("res",res)
        if (res.data.status == "OK") {
      // Chuyển hướng đến trang home.
      this.$auth.setUser({
        username:this.user.username,
        password: this.user.password,
      })
     this.$auth.setUserToken(res.data.data.rawData)
     console.log('Đăng nhập thành công');    
     window.location.href ="/" 
    } else {
      alert("Thông tin đăng nhập không chính xác")
    }
      } catch (err) {
        console.log("error",err)
      }
    }   
},
mounted(){
  console.log("auth",this.$auth)
console.log("test auth",this.$auth.$state.loggedIn)},


}
</script    >