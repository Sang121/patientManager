<template>
    
    <div class="container"> 
        <Header /> <hr/>  
    <div class="listUser"> 
        <div class="addUser">
        <button type="button" class="addUser btn btn-primary" @click="addBtn()">  Thêm bệnh nhân</button>
    </div>
    <!-- Danh sách bệnh nhân -->
    <table border="1">
        <tr> 
          <th> STT</th>

            <th> ID bệnh nhân</th>
            <th>Họ và tên</th>
            <th>Năm sinh</th>
            <th>Giới tính</th>

            <th> Địa chỉ </th>
                        <th>Xem chi tiết</th>
            <th>More</th>
        </tr>
        <tr v-for=" (patient,index) in listPatient" :key="index">
          <td>{{ index +1 }}</td>

            <td>{{ patient.id }}</td>
            <td>{{ patient.hovaten }}</td>
            <td>{{ patient.namsinh }}</td>
            <td>{{ patient.gioitinh }}</td>
            <td>{{ patient.diachi }}</td>

            <td><Button  @click="seeMore(index)" class="btn btn-primary"> Xem </Button></td>
            <td><Button @click="deletePatient(patient.id) "  class="btn btn-primary">Xóa </Button></td>
        </tr>
       
    </table>
    <h4 id="list" > </h4>
    </div>

<!-- Form add patient -->
    <div class="modal hide" tabindex="-1" role="dialog" id="addPatient">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title "> <strong> Thêm bệnh nhân mới</strong> </h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="unShow">
              <span aria-hidden="true"> X</span>
            </button>
          </div>

      <div class="modal-body">
    <form @submit.prevent="addPatient" class="formAddUser " method="POST">
    <div class="form-group">
      <label for="fullName">Họ và tên</label>
      <input type="text" class="form-control" id="fullName" v-model="patient.hovatenn"  required>
    </div>

    <div class="form-group">
      <label for="namsinh">Năm sinh</label>
      <input type="number" class="form-control" id="namsinh"  v-model="patient.namsinhh" required> 
    </div>

    <div class="form-group">
      <label for="gender">Giới tính</label>
      <input type="text" class="form-control" id="gender" v-model="patient.gioitinhh" required>
    </div>

    <div class="form-group">
      <label for="address">Địa chỉ</label>
      <input type="text" class="form-control" id="address" v-model="patient.diachii" required>
    </div>
    <div class="form-group">
      <label for="nghenghiep">Nghề nghiệp</label>
      <input type="text" class="form-control"  v-model="patient.nghenghiepp" required>
    </div>
    <div class="form-group">
      <label for="socon">Số con</label>
      <input type="number" class="form-control" v-model="patient.soconn" required>
    </div>
    <div class="form-group">
      <label for="cannang">Cân nặng</label>
      <input type="number" class="form-control" v-model="patient.cannangg" required>
    </div>
    <div class="form-group">
      <label for="tiensu">Tiểu sử</label>
      <input type="text" class="form-control" v-model="patient.tiensuu" required>
    </div>
    <div class="form-group">
      <label for="lamsang">Lâm sàng </label>
      <input type="text" class="form-control" v-model="patient.lamsangg" required>
    </div>
    <div class="form-group">
      <label for="mach">Mạch</label>
      <input type="number" class="form-control" v-model="patient.machh" required>
    </div>
    <div class="form-group">
      <label for="huyetapcao">Huyết áp cap</label>
      <input type="number" class="form-control" v-model="patient.huyetapcaoo" required>
    </div>
    <div class="form-group">
      <label for="mota">Mô tả</label>
      <input type="text" class="form-control" v-model="patient.motaa" required>
    </div>
    <div class="form-group">
      <label for="chuandoan">Chẩn đoán</label>
      <input type="text" class="form-control" v-model="patient.chuandoann" required>
    </div>
    <button type="submit" class="btn btn-primary add" >Thêm</button>


  </form>
</div>
        </div>
      </div>
      
    </div>

<!-- form update -->
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
        <!-- <tr> <th>Cân nặng</th>
              <th>Tiểu sử</th>
              <th>Lâm sàng</th>
              <th>Mạch</th>

              <th> Huyết áp cao</th>
               <th>Mô tả</th>
              <th>Chuẩn đoán</th></tr> -->
              <!-- <tr >
                <td><input type="text" v-model=" patient.medicalRecords[1]" name="cannang">  </td>

            <td><input type="text" v-model=" patient.medicalRecords[2] " name="tieusu">  </td>
            <td><input type="text" v-model=" patient.medicalRecords[3] " name="lamsang">  </td>

            <td><input type="text" v-model=" patient.medicalRecords[4] " name="mach">  </td>
            <td><input type="text" v-model=" patient.medicalRecords[5] " name="huyetapcao">  </td>
            <td><input type="text" v-model=" patient.medicalRecords[6] " name="mota">  </td>
            <td><input type="text" v-model=" patient.medicalRecords[7] " name="chuandoan">  </td>
            

          
        </tr> -->

    </table>
    <button type="submit" class="btn btn-primary updateBtn" >Sửa</button>
  </form>
      
    
  </div>
</div>
</div>
    </div>

    
</div>


</template>
<style>
.container {
  padding: 10px;
  height: 1000px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
}

.listUser {
  display: flex;
  padding: 20px;
  background-color: white;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px;
  text-align: left;
}

button {
  border: none;
  border-radius: 10%;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
}

.close {
  height: 80%;
  background-color: transparent;
}

.hide {
  display: none;
}

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

/* .btn {
  padding: 5px;
  border-radius: 5px;
  background-color: #dddddd;
  margin-right: 5px;
}

.btn:hover {
  background-color: #b7b7b7;
  transform: scale(1.1);
} */

.update {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.updateBtn {
  margin-top: 10px;
  width: 20%;
  margin-left: 40%;
}
</style>
<script>
import axios from "axios";
const bare_URL = "http://192.168.1.53:9098"
const access_token=localStorage.getItem('key'); //get bearer token
const isLoggined = localStorage.getItem('isLoggined');
if (!isLoggined){
  alert("Bạn chưa đăng nhập");
  window.location.href = '/login'
}
export default {
data(){
    return{
        listPatient:[],
        patient:{},
  }
},
methods:{
    getPatient(){
        try{
      axios.get(`${bare_URL}/Patient`,
      {headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
      )
      .then((response) => {
    if(response.data.total_count==0 ){
      console.log("Không có data")
      document.getElementById("list").innerHTML="Không có bản ghi nào!"
    }
    else{ 
       this.listPatient=response.data.data
      // localStorage.setItem("sigleP",JSON.stringify(response.data.data[14]))
              }
      })}
        catch (e) {
            console.log("Không thể lấy được thông tin bệnh nhân",e.message)
        }
    },


    seeMore(id){
      
       this.patient=this.listPatient[id]
     


      // localStorage.removeItem("Patient")

      // localStorage.setItem("Patient",patient)
      const seeMore = document.getElementById('seeMore');
      seeMore.classList.remove('hide'); 
    },
    unSee() {
      const seeMore = document.getElementById('seeMore');
      seeMore.classList.add('hide'); 
    },


    addPatient(){
      //var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      var patient=
        {
          "hovaten": this.patient.hovatenn,
  "socon": this.patient.soconn,
  "namsinh": this.patient.namsinhh,
  "sohoso": "string",
  "diachi": this.patient.diachii,
  "gioitinh":this.patient.gioitinhh,
  "nghenghiep": this.patient.nghenghiepp,
  "ngaytao": "2023-12-07T06:39:26.306Z",
  "ngayketthuc": "2023-12-07T06:39:26.306Z",
  "medicalRecords": {
    "id": 0,
    "benhnhan_id": 0,
    "cannang": this.patient.cannangg,
    "chieucao": "",
    "tiensu":this.patient.tiensuu,
    "lamsang":this.patient.lamsangg,
    "mach": this.patient.machh,
    "nhietdo": "string",
    "huyetapcao": this.patient.huyetapcaoo,
    "huyetapthap": "string",
    "tebao": "string",
    "mauchay": 0,
    "mota": this.patient.motaa,
    "chuandoan":this.patient.chuandoan,
    "dieutri": "string",
    "hinhanh1": "string",
    "hinhanh2": "string",
    "benhNhan": {
      "id": 0,
      "hovaten": this.patient.hovatenn,
      "socon": this.patient.soconn,
      "namsinh": this.patient.namsinhh,
      "sohoso": "string",
      "diachi": this.patient.diachii,
      "gioitinh": this.patient.gioitinhh,
      "nghenghiep": this.patient.nghenghiepp,
      "ngaytao": "2023-12-07T06:39:26.306Z",
      "ngayketthuc": "2023-12-07T06:39:26.306Z",
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
      axios.post(`${bare_URL}/Patient`,
      patient,
      {headers: {
          Authorization: `Bearer ${access_token}`,
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
            console.log("Thêm bệnh nhân khoogn thành công",e)
        alert("Không thể thêm được bệnh nhân mới")
        }
    },
    unShow() {
        const modal = document.getElementById('addPatient');
            modal.classList.add('hide');

    },
    addBtn(){
    if(isLoggined) {
        const modal = document.getElementById('addPatient');
  modal.classList.remove('hide'); }
  else { 
    alert("Bạn phải đăng nhập để sử dụng chức năng này")
    window.location.href='/login'
  }

    },
 deletePatient(id){
        try {
        axios.delete(`${bare_URL}/Patient`,
        {id},
      {headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      .then((response)=>{
      console.log(response)
      })
      } catch (e) {
        alert("Chức năng đang phát triển")
        console.error("lỗi",e);
      }
    },
   

    updatePatient(){
  
      var partientUpdate=this.patient

 
  try{
      axios.post(`${bare_URL}/Patient/update`,
      partientUpdate,
      {headers: {
          Authorization: `Bearer ${access_token}`
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


},


mounted() {
      this.getPatient();
    },
     //Middleware: 'auth'

}



</script>