<template>
   <div class="header">
     <h2>Quản lý bệnh nhân</h2>
     <button class="logOutBtn "  id="btn" @click="logOut"></button>
   </div>
 </template>
 
 <style>
 .header{
   background-color: #ffffff;
   display: flex;
   align-items: center;
   padding: 10px;
   justify-content: space-between;
   padding-right: 20px;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   
 }
 
 .logOutBtn {
   width: 100px;
   height: 30px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   background-color: #3498db;
   color: #ffffff;
   font-size: 14px;
   transition: transform 0.3s, background-color 0.3s;
 }
 
 .logOutBtn:hover {
   transform: scale(1.1);
   background-color: #2980b9;
 }
</style>
<script>
export default {
   methods: {
      logOut(){
         localStorage.clear();
   this.$router.push('/login');
},
btn(){
   if( localStorage.getItem("isLoggined")==null) 
   {
      document.getElementById("btn").innerHTML="Đăng nhập"
   }
   else{
      document.getElementById("btn").innerHTML="Đăng xuất"

 }
}

},
mounted() {
      this.btn();
    },
  name: 'Header',
}
</script>
