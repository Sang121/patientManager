<template>
    <div class="modal hide " tabindex="-1" role="dialog" id="seeMore">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="unSee">
              <span aria-hidden="true">&times;</span>
            </button> 
          <div class="modal-header">
            <form @submit.prevent="updatePatient" class=" " method="POST">
            <table id="seeMore" class="" border="1">
          <tr>
              <th> ID bệnh nhân</th>
              <th>Họ và tên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>

              <th> Địa chỉ </th>
               <th>Nghề Nghiệp</th>
              <th>Số con</th>
            </tr>
            <tr >
            <td > {{ patient.id }}</td>
            <td><input type="text" v-model=" patient.hovaten " name="hovaten">  </td>
            <td><input type="number" v-model=" patient.tuoi " name="tuoi">  </td>
            <td><input type="text" v-model=" patient.gioitinh " name="gioitinh">  </td>
            <td><input type="text" v-model=" patient.diachi " name="diachi">  </td>
            <td><input type="text" v-model=" patient.nghenghiep " name="nghenghiep">  </td>
            <td><input type="number" v-model=" patient.socon " name="socon">  </td>
            

          
        </tr>
        <tr> <th>Cân nặng</th>
              <th>Tiểu sử</th>
              <th>Lâm sàng</th>
              <th>Mạch</th>

              <th> Huyết áp cao</th>
               <th>Mô tả</th>
              <th>Chuẩn đoán</th></tr> 
             <tr >
                <td><input type="text" v-model="medicalRecord.chieucao" name="cannang">  </td>

            <td><input type="text" v-model=" medicalRecord.tieusu " name="tieusu">  </td>
            <td><input type="text" v-model=" medicalRecord.lamsang " name="lamsang">  </td>

            <td><input type="text" v-model="medicalRecord.mach " name="mach">  </td>
            <td><input type="text" v-model=" medicalRecord.huyetapcao " name="huyetapcao">  </td>
            <td><input type="text" v-model=" medicalRecord.mota " name="mota">  </td>
            <td><input type="text" v-model=" medicalRecord.chuandoan" name="chuandoan">  </td>
            

          
        </tr>

    </table>
    <button type="submit" class="btn btn-primary updateBtn" >Sửa</button>
  </form>
      
    
  </div>
</div>
</div>
    </div>
</template>
<style>

.modal {
  position: fixed;
  justify-content: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.show {
  display: block;
}
.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.modal-content {
  border-radius: 10px;
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-title {
  font-size: 25px;
}

.formAddUser {
  margin-left: 20%;
  width: 80%;
}

.addUser {
  margin-bottom: 10px;
  padding: 8px;
}

</style>
<script>
import axios from "axios";
const base_URL = "http://192.168.1.53:9098"
const access_token= localStorage.getItem("auth._token.local"); //get bearer token
export default {
    data(){
    return {

        patient:{},
        medicalRecord:{},
    };
},
    methods: {


        updatePatient(){
  
  this.patient.medicalRecord = this.medicalRecord
  var partientUpdate=this.patient
try{
  axios.post(`${base_URL}/Patient/update`,
  partientUpdate,
  {headers: {
      Authorization:access_token
    }
  }
  ) 
  .then((response) => {
   
    alert("Update thông tin thành công")
    setTimeout(() => {
      window.location.reload()
      }, 300);
  }
  )}
    catch (e) {
        console.log("Không thể update",e)

    }
},
unSee() {
      const seeMore = document.getElementById('seeMore');
      seeMore.classList.add('hide'); 
    },

    },

    name: 'UpdateForm',
    }

</script>