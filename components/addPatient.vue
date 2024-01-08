<template>
     
     <div class="modal hide" tabindex="-1" role="dialog" id="addPatient">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title "> <strong> Thêm bệnh nhân mới</strong> </h2>
          
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="unShow">X</button>

          </div>

      <div class="modal-body" >
    <form @submit.prevent="addPatient"  method="POST">
  <div class=" formAddUser" > 
    <div class="inf item"> 

      <label for="fullName">Họ và tên</label>
      <input type="text" class="form-control" id="fullName" v-model="patient.hovaten"  required>
   
      <label for="namsinh">Năm sinh</label>

      <input type="number" class="form-control" id="namsinh"  v-model="patient.namsinh" required> 


      <label for="gender">Giới tính</label>
  <select  v-model="patient.gioitinh" name="gioitinh" id="gioitinh">
    <option value="Nam" disabled>--Chọn giới tính của bạn--</option>

    <option value="Nam">Nam</option>
    <option value="Nữ">Nữ</option>
    <option value="Khác">Khác</option>

  </select>
  <br>
   
        <!-- <label for="gender">Giới tính</label><br/>
        <input type="text" class="form-control" id="gioitinh" v-model="patient.gioitinh" required> -->

<br/>
      <label for="address">Địa chỉ</label>

      <input type="text" class="form-control" id="address" v-model="patient.diachi" required>
    
   
      <label for="nghenghiep">Nghề nghiệp</label>
      <input type="text" class="form-control"  v-model="patient.nghenghiep" required>

    <br/>

      <label for="socon">Số con</label>
      <input type="number" class="form-control" v-model="patient.socon" required>
    </div> 
    <div class="record item">  
      <label for="chieucao">Chiều cao</label>
      <input type="number" class="form-control" v-model="patient.chieucao" required>
    
      <label for="cannang">Cân nặng</label>
      <input type="number" class="form-control" v-model="patient.cannang" required>
   
      <label for="tiensu">Tiểu sử</label>
      <input type="text" class="form-control" v-model="patient.tiensu" required>
 
      <label for="lamsang">Lâm sàng </label>
      <input type="text" class="form-control" v-model="patient.lamsang" required>

      <label for="mach">Mạch</label>
      <input type="number" class="form-control" v-model="patient.mach" required>
   
      <label for="nhietdo">Nhiệt độ</label>
      <input type="number" class="form-control" v-model="patient.nhietdo" required>
 
    <br/>
  </div>
</div>
      <label for="mota">Mô tả</label>
      <textarea type="text" class="form-control" v-model="patient.mota" required></textarea>
   
      <label for="chuandoan">Chẩn đoán</label>
      <textarea type="text" class="form-control" v-model="patient.chandoan" required></textarea>
    
    <br/>

      <label for="dieutri">Cách điều trị</label>
      <textarea type="text" class="form-control" v-model="patient.dieutri" required> </textarea>
 
 
    <button type="submit" class="btn btn-primary add" >Thêm</button>
  </form>
</div>
        </div>
      </div>
      
    </div>

</template>
<style>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

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
  margin: auto;
  margin-top: 10%;
  padding: 20px;
  border: 1px solid #888;
  width:45%;
}
.modal-title {
  font-size: 25px;
}
.modal-body{
  margin-left: 5%;
  width: 80%;
}

.formAddUser {
  display:flex;
  flex-direction: row;
}
.item{
  margin: 10px;
  width:45%
}
.addUser {
  margin-bottom: 10px;
  padding: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}   

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.add {
  display: flex;
  justify-content: space-around;
  margin-left: 45%;
}

.form-control:focus {
  outline: 0;
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {  
  display: inline-block;
  font-weight: 400;
  color:white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}
.hide{
    display:none;
}
</style>
<script>
import axios from "axios";
const base_URL = "http://192.168.1.53:9098"

const access_token= localStorage.getItem("auth._token.local"); //get bearer token
  var today= new Date();
  var dateToday = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
export default {
data(){
    return {

        patient:{},
    };
},
methods:{
    addPatient(){
      
      var patient=
        {

          
  "hovaten": this.patient.hovaten,
  "socon": this.patient.socon,
  "namsinh": this.patient.namsinh,
  "sohoso": "",
  "diachi": this.patient.diachi,
  "gioitinh": this.patient.gioitinh,
  "nghenghiep": this.patient.nghenghiep,
  "ngaytao": today.toISOString(),
  "ngayketthuc":  today.toISOString(),
  "medicalRecord": {
    "id": 0,
    "benhnhan_id": 0,
    "cannang": this.patient.cannang,
    "chieucao": this.patient.chieucao,
    "tiensu": this.patient.tiensu,
    "lamsang": this.patient.lamsang,
    "mach": this.patient.mach,
    "nhietdo":this.patient.nhietdo,
    "huyetapcao": "",
    "huyetapthap": "",
    "tebao": "",
    "mauchay": 0,
    "mota": this.patient.mota,
    "chuandoan": this.patient.chandoan,

    "dieutri": this.patient.dieutri,
    "hinhanh1": "",
    "hinhanh2": "",
    "benhNhan": {
      "id": 0,

      "hovaten":this.patient.hovaten,
      "socon": this.patient.socon,
      "namsinh": this.patient.namsinh,
      "sohoso": "", 
      "diachi": this.patient.diachi,
      "gioitinh": this.patient.gioitinh,
      "nghenghiep":this.patient.nghenghiep,
      "ngaytao":  today.toISOString(),
      "ngayketthuc": today.toISOString(),
      "medicalRecords": [

      ]
    },
    "hinhanh": [


    ]
  },
  "hinhanh": [

  ]
}
    try{  
      axios.post(`${base_URL}/Patient`,
      patient,
      {headers: {

          Authorization: access_token,

          "Content-type": "application/json; charset=UTF-8"
        },
      }
      )
      .then((response) => {
        alert("Thêm thành công", response)
      //  localStorage.setItem("addPt",JSON.stringify(patient))
        console.log(response)
              setTimeout(() => {

               window.location.reload()

              }, 300);
          console.log(patient);
        
      })

    }
        catch (e) {
            console.log("Thêm bệnh nhân không thành công",e)
        alert("Không thể thêm được bệnh nhân mới")
        }
    },
  
    unShow() {
        const modal = document.getElementById('addPatient');
        modal.classList.add('hide') 

    },
   
},
name: 'addPatient',
}
</script>