<template>
  <div class="container">
    <h2><a href="/" class="logo">Quản lý bệnh nhân</a></h2><br/>
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
        <Button label="Login" icon="pi pi-user" type="submit" class="w-10rem mx-auto"></Button>
    </div>
      </form>
    </div>
  </div>

</template>
<style>
.container {
  font-family: 'Arial', sans-serif;
  
}

.login {

  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 10%;
}



.logo {
  position: fixed;
  margin: 20px;
  box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
  padding: 15px;
  border-radius: 10px;
  background-color: #f4f4f4;
}

a {
  text-decoration: none;
  color: black;
}


</style>
<script>


const isLoggined =localStorage.getItem("isLoggined")

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
   localStorage.setItem('isLoggedIn', true)
     alert("Đăng nhập thành công")
    
     window.location.href ="/" 
    } else {
      console.log('Đăng nhập thất bại');
      alert("Đăng nhập thất bại")
        

    }
      } catch (err) {
        console.log("error",err)
      }
    }
    
},

auth: false


}
</script    >