<template>
  <div class="container">
    <h2><a href="/" class="logo">Quản lý bệnh nhân</a></h2><br/>
    <div class="login">
      <form action="#" method="POST" @submit.prevent="loginUser">
        <table>
          <tr>
            <th>User name</th>
            <th><input v-model="user.username" type="text" name="username"></th>
          </tr>
          <tr>
            <th>Password</th>
            <th><input v-model="user.password" type="password" name="password"></th>
          </tr>
          <tr>
            <th></th>
            <th><button type="submit" class="loginBtn">Đăng nhập</button></th>
          </tr>
        </table>
      </form>
    </div>
  </div>

</template>
<style>
.container {
  font-family: 'Arial', sans-serif;
}

.login {
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login form {
  background-color: #dfceb9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);
}

.logo {
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

.loginBtn {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #ffffff;
  font-size: 16px;
  transition: transform 0.3s, background-color 0.3s;
}

.loginBtn:hover {
  transform: scale(1.1);
  background-color: #2980b9;
  cursor: pointer;
}
</style>
<script>

import { ref } from 'vue';
import axios from 'axios';
const isLoggined =localStorage.getItem("isLoggined")
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
            localStorage.setItem("isLoggined","true");
            localStorage.setItem("key",response.data.data.rawData);
            window.location.href='/'
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
 //middleware: 'auth'
}
</script    >