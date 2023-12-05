<template>
     <div class="header">
        <h2>Quản lý bệnh nhân</h2>
        <button class="logOutBtn" id="btn" @click="logOut()"> </button>  



     </div>
</template>
<style>
.header{
   background-color: white;
   display: flex;
   padding:5px;
   flex-direction: row;
   justify-content: space-between;
   padding-right: 10%;
}
.logOutBtn{
   width: 80px;
   height:70%;
   border-radius: 10px;
   cursor: pointer;
transition: 1.5;

}
.logOutBtn:hover { 

   transform: scale(1.1);
}
</style>
<script>
   
   
export default {

   methods: {
      logOut(){
   localStorage.removeItem("isLogined")
   localStorage.removeItem("userloggedin")
   this.$router.push('/login');
},
btn(){
   if( localStorage.getItem("isLogined")==null) 
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
