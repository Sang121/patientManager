<template>
     
     <div class="modal hide" tabindex="-1" role="dialog" id="addPatient">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title "> <strong> Thêm bệnh nhân mới</strong> </h2>
          
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="unShow">
    X
</button>

         
          </div>

      <div class="modal-body" >
    <form @submit.prevent="addPatient" class="formAddUser " method="POST">
    <div class="form-group">
      <label for="fullName">Họ và tên</label>

      <input type="text" class="form-control" id="fullName" v-model="patient.hovaten"  required>

    

    </div>

    <div class="form-group">
      <label for="namsinh">Năm sinh</label>

      <input type="number" class="form-control" id="namsinh"  v-model="patient.namsinh" required> 
    </div>

    <div class="form-group">
      <label for="gender">Giới tính</label>

      <input type="text" class="form-control" id="gender" v-model="patient.gioitinh" required>

    </div>

    <div class="form-group">
      <label for="address">Địa chỉ</label>

      <input type="text" class="form-control" id="address" v-model="patient.diachi" required>
    </div>
    <div class="form-group">
      <label for="nghenghiep">Nghề nghiệp</label>
      <input type="text" class="form-control"  v-model="patient.nghenghiep" required>
    </div>
    <div class="form-group">
      <label for="socon">Số con</label>
      <input type="number" class="form-control" v-model="patient.socon" required>
    </div>
    <div class="form-group">
      <label for="cannang">Cân nặng</label>
      <input type="number" class="form-control" v-model="patient.cannang" required>
    </div>
    <div class="form-group">
      <label for="tiensu">Tiểu sử</label>
      <input type="text" class="form-control" v-model="patient.tiensu" required>
    </div>
    <div class="form-group">
      <label for="lamsang">Lâm sàng </label>
      <input type="text" class="form-control" v-model="patient.lamsang" required>
    </div>
    <div class="form-group">
      <label for="mach">Mạch</label>
      <input type="number" class="form-control" v-model="patient.mach" required>
    </div>
    <div class="form-group">
      <label for="huyetapcao">Nhiệt độ</label>
      <input type="number" class="form-control" v-model="patient.nhietdo" required>
    </div>
    <div class="form-group">
      <label for="mota">Mô tả</label>
      <input type="text" class="form-control" v-model="patient.mota" required>
    </div>
    <div class="form-group">
      <label for="chuandoan">Chẩn đoán</label>
      <input type="text" class="form-control" v-model="patient.chandoan" required>

    </div>
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
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.modal-title {
  font-size: 25px;
}

.formAddUser {
  margin-left: 20%;
  width: 60%;
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


export default {
data(){
    return {

        patient:{},
    };
},
methods:{
    addPatient(){
      //var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      var patient=
        {

          
  "hovaten": this.patient.hovaten,
  "socon": this.patient.socon,
  "namsinh": this.patient.namsinh,
  "sohoso": "string",
  "diachi": this.patient.diachi,
  "gioitinh": this.patient.gioitinh,
  "nghenghiep": this.patient.nghenghiep,
  "ngaytao": "2023-12-12T03:24:48.462Z",
  "ngayketthuc": "2023-12-12T03:24:48.462Z",
  "medicalRecord": {
    "id": 0,
    "benhnhan_id": 0,
    "cannang": "string",
    "chieucao": "string",
    "tiensu": this.patient.tiensu,
    "lamsang": "string",
    "mach": this.patient.mach,
    "nhietdo":this.patient.nhietdo,
    "huyetapcao": "string",
    "huyetapthap": "string",
    "tebao": "string",
    "mauchay": 0,
    "mota": this.patient.mota,
    "chuandoan": this.patient.chandoan,

    "dieutri": "string",
    "hinhanh1": "string",
    "hinhanh2": "string",
    "benhNhan": {
      "id": 0,

      "hovaten":this.patient.hovaten,
      "socon": this.patient.socon,
      "namsinh": this.patient.namsinh,
      "sohoso": "string",
      "diachi": this.patient.diachi,
      "gioitinh": this.patient.gioitinh,
      "nghenghiep":this.patient.nghenghiep,
      "ngaytao": "2023-12-12T03:24:48.462Z",
      "ngayketthuc": "2023-12-12T03:24:48.462Z",
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
        alert("Thêm thành công")
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
            console.log("đã hide");

    },
   
},
name: 'addPatient',
}
</script>