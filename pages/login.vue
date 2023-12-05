<template>  

<div class="login"> 
    <form  action="#" method="POST"   @submit.prevent="loginUser"> 
    <table>
    <tr>
        <th>User name</th> 
        <th>
    
        <input  v-model="user.username"  type="text" name="username" > </th>
    </tr>
    <tr>
        <th>Password</th>
        <th><input v-model="user.password" type="password" name="password" >
        </th>
    </tr>
    <tr> <button type="submit"> Đăng nhập</button> </tr>

    </table>
    </form>

    
</div>
</template>
<style>
.login{
    display: flex;
    align-items: center;
    justify-content: center;
}
button:hover{
  transform: scale(1.1);
  cursor: pointer;
}
</style>
<script>

import { ref } from 'vue';
import axios from 'axios';
const isLoggined =localStorage.getItem("isLogined")
      if(isLoggined){
        alert("Bạn đã đăng nhập");
        window.location.href='/'
      
      }
      else{console.log("Bạn chưa đăng nhập") }
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
    
    loginUser(){
      const loginUser = {
        username: this.user.username,
        password: this.user.password,
        rememberLogin: true
      };
      
    try{
    axios.post('http://192.168.1.53:9098/Auth/login',loginUser)
        .then((response) => {
            
          if (response.data.status === "OK") {
            localStorage.setItem("userloggedin",JSON.stringify(loginUser));
            localStorage.setItem("isLogined","true");
            localStorage.setItem("key",response.data.data.rawData);

             this.$router.push('/');
          } else {
            console.log('Lỗi');
            alert("Đăng nhập thất bại");
          }
        })}

        catch(e) {
          console.error('Đăng nhập thất bại:', e.response.data.message 
        );
        };
    
    },
},
}
</script    >