<template>
   <div class="header">
     <h2 class="logo"><a href="/ ">Quản lý bệnh nhân</a></h2>
     <!-- <button class="logOutBtn "  id="btn" @click="logOut"> Đăng xuất</button> -->
     <Button icon="pi pi-sign-out"  id="btn" @click="logOut" label="Đăng xuất" />

   </div>
</template>
 <style>
  .header{
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-between;
    padding-right: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    
  }
  .logo{
  
  }
  a{
    text-decoration: none;
  color: black;}
</style>
<script>
import Button from 'primevue/button';

export default {
   methods: {
      async logOut(){
         localStorage.clear()
         await this.$auth.logout()
         this.$router.push('/login')
},
btn(){
 
  const isLoggedIn=localStorage.getItem('isLoggedIn');

   if( !isLoggedIn)
   {
      this.$router.push('/login')
   }

}

},
mounted() {
      this.btn();
    },
  name: 'Header',
}
</script>
