<template>
   <div class="header">
     <a href="/"><img class="logo"  src="../store/logo.svg" alt=""> </a>
      <div class="right">
        <div class="contact"> 
          <a href="https://www.facebook.com/Libra245"  ><i class="pi pi-facebook"></i></a>

          <a href="/"  ><i class="pi pi-phone"></i></a>

      </div>
      <Button class="logOut_btn" icon="pi pi-sign-out"  id="btn" @click="logOut" label="Đăng xuất" />
    </div>
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
    width: 200px;
  }
  a{
    text-decoration: none;
  color: black;}
  .right{
    display: flex;
    flex-direction: row;
    width: 15%;
    justify-content: space-between;

  }
  .contact{
    display: flex;
align-items: center;
justify-content: center;
  }
.contact i{
  font-size: 25px;
  margin-right: 10px;
}
.logOut_btn{
  font-size: smaller;
}
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

},

  name: 'Header',
}
</script>
