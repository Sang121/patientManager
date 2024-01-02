<template>
  <div class="container"> 
    <Header /> <hr/>  
        <div class="main">
 <!-- <button @click="getExam()">In phiếu khám </button> -->
 <h2>Thông tin cá nhân</h2>
      <table>
        <tr> 

          <th>ID:</th>
          <td>{{ patient.id }}</td>
          <th>Họ và tên:</th>
          <td>{{ patient.hovaten }}</td>
        </tr>
        <tr>
          <th>Năm sinh:</th>
          <td>{{ patient.namsinh }}</td>
          <th>Giới tính:</th>
          <td>{{ patient.gioitinh }}</td>
        </tr>
        <tr>
          
          <th>Địa chỉ:</th>
          <td>{{ patient.diachi }}</td>
          <th>Nghề Nghiệp:</th>
          <td>{{ patient.nghenghiep }}</td>
        </tr>
      

        <tr>
          <th>Tuổi:</th>
          <td>{{ patient.tuoi }}</td>
          <th>Số con</th>
          <td>{{ patient.socon }}</td>
        </tr>
      


      </table>
      <h2>MedicalRecord</h2>
      <table class="records"> 
        <tr>
          <th>Chiều cao(cm):</th>
          <td>{{ medicalRecord.chieucao }} cm</td>

        </tr>
        <tr>
          <th>Cân nặng:</th>
          <td>{{ medicalRecord.cannang }} kg</td>

        </tr>
        <tr>
          <th>Tiền sử:</th>
          <td>{{ medicalRecord.tiensu }}</td>

        </tr>
        <tr>
          <th>Lâm sàng:</th>
          <td>{{ medicalRecord.lamsang }}</td>

        </tr>
        <tr>
          <th>Mạch:</th>
          <td>{{ medicalRecord.mach }}</td>

        </tr>
      
        <tr>
          <th>Mô tả:</th>
          <td>{{ medicalRecord.mota }}</td>

        </tr>
        <tr>
          <th>Chẩn đoán:</th>
          <td>{{ medicalRecord.chuandoan }}</td>

        </tr>
        <tr>
          <th>Điều trị:</th>
          <td>{{ medicalRecord.dieutri }}</td>

        </tr>

      </table>
    <Button type="button" icon="pi pi-user-edit"  @click="edit()" label="Sửa thông tin "/>  
<!-- <updatePatient/> -->
<div class="update"> 
    <div class="modal hide " tabindex="-1" role="dialog" id="seeMore">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="unSee">
              <span aria-hidden="true">&times;</span>
            </button> 
          <div class="modal-header">
            <form @submit.prevent="updatePatient"  method="POST">
            <table id="seeMore" >
          <tr>
      
              <th>Họ và tên</th>
              <th>Năm sinh</th>
              <th>Giới tính</th>
          <th> Địa chỉ </th>
          <th>Nghề Nghiệp</th>
            </tr>
           
            <tr >
         
            <td><input type="text" v-model=" patient.hovaten " name="hovaten">  </td>
            <td><input type="number" v-model=" patient.namsinh " name="tuoi">  </td>
        
            <td> <select style="margin: auto;"  v-model="patient.gioitinh" name="gioitinh" id="gioitinh">
             

              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </td>
            <td><input type="text" v-model=" patient.diachi " name="diachi">  </td>
            <td><input type="text" v-model=" patient.nghenghiep " name="nghenghiep">  </td>

          </tr>
          <tr> 

               
              <th>Số con</th>
              <th>Cân nặng</th>
              <th>Chiều cao(cm)</th>
              <th>Lâm sàng</th>
              <th>Mạch</th>
            </tr>
            <tr> 
           
            <td><input type="number" v-model=" patient.socon " name="socon">  </td>
            <td><input type="text" v-model="medicalRecord.cannang" name="cannang">  </td>
            <td><input type="text" v-model="medicalRecord.chieucao" name="chieucao">  </td>
            <td><input type="text" v-model=" medicalRecord.lamsang " name="lamsang">  </td>
            <td><input type="text" v-model="medicalRecord.mach " name="mach">  </td>
        </tr>
        <tr> 
          <th>Tiền sử</th>
             
               <th>Mô tả</th>
               <th>Chuẩn đoán</th>
            <th>Điều trị</th>
          </tr>
       
          <tr >  
            <td><textarea rows="7" type="text" v-model=" medicalRecord.tiensu " name="tieusu"></textarea> </td>  
            <td><textarea rows="7"  type="text" v-model=" medicalRecord.mota " name="mota"></textarea>  </td>
            <td><textarea rows="7" type="text" v-model=" medicalRecord.chuandoan" name="chuandoan"></textarea>  </td>
            <td><textarea rows="7" type="text" v-model=" medicalRecord.dieutri" name="dieutri"></textarea>  </td>
        </tr>
    </table>
    <Button type="submit" icon="pi pi-save" class="save_btn"  label="Lưu" />
  </form>
  </div>
</div>
</div>
    </div>
     </div>
</div>
</div>
</template>
<style>
  /* Container Styles */
  .container {
    margin: 0 ;
    padding: 5px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  /* Header Styles */
  .container hr {
    margin-top: 10px;
  }

  /* Main Content Styles */
  .main {
    margin-top: 10px;
  }

  /* Table Styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    width: 20%;
  }

  /* Records Table Styles */
  .records {
    border: 1px solid black;
  }

  /* Button Styles */
  .addUser {
    margin-top: 20px;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Responsive Styles */
  /* @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }
  } */
  form{
    width: 100%;
  }
  .modal-content {

    width: 80%;
    margin-top: 7%;
  }
  .save_btn{
    margin-top: 5px;
    margin-left: 40%;
  }
  textarea:focus {
   outline: none;
}
  input:focus {
   outline: none;
}
</style>
<script>
import axios from "axios";
const base_URL = "http://192.168.1.53:9098"
const access_token= localStorage.getItem("auth._token.local"); //get bearer token
import Button from 'primevue/button';

export default {
 
    data(){
    return {
        patient:{},
        medicalRecord:{
   benhNhan:{},
        },
    };
},

    methods: {
      async getRecord( ) {
        const id=this.$route.query.id

                    try {
                    await axios.get(`${base_URL}/Patient/${id}/records`, { headers: {
                                Authorization: access_token
                            }
                        })
                            .then((response) => {
                            if (response.data.total_count == 0) {
                                console.log("Không có data");
                                document.getElementById("list").innerHTML = "Không có bản ghi nào!";
                            }
                            else {
                                this.medicalRecord= response.data.data[0];
                                console.log(" data render",response.data.data[0]);
                            }
                        });
                    }
                    catch (e) {
                        console.log("Không thể lấy được thông tin bệnh nhân", e.message);
                    }
                    },
        async getSiglePatient( ) {
          const id=this.$route.query.id
                    try {
                    await axios.get(`${base_URL}/Patient/${id}`, { headers: {
                                Authorization: access_token
                            }
                        })
                            .then((response) => {
                            if (response.data.total_count == 0) {
                                console.log("Không có data");
                                document.getElementById("list").innerHTML = "Không có bản ghi nào!";
                            }
                            else {
                                this.patient = response.data.data;
                                console.log("patient got",this.patient)

                            }
                        });
                    }
                    catch (e) {
                        console.log("Không thể lấy được thông tin bệnh nhân", e.message);
                    }
                    },
    updatePatient(){
        this.patient.medicalRecord=this.medicalRecord
        var partientUpdate=this.patient
        console.log("partientUpdate",partientUpdate)  
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
              console.log("res",response);
              console.log("partientUpdate",partientUpdate)
              setTimeout(() => {
                window.location.reload()
                }, 300);
            }
            )}
            catch (e) {
                console.log("Không thể update",e)

            }
      },

    async  getExam(){
        const id=this.$route.query.id
        try {
                    await axios.get(`${base_URL}/Patient/${id}/examination`, { headers: {
                                Authorization: access_token
                            }
                        })
                            .then((response) => {
                              console.log("patient got",response.data.data )
                              localStorage.setItem("examination",response.data.data)
                              window.location.href = '/exam.html'
                                // this.patient = response.data.data;
                                // console.log("patient got",this.patient)

                           
                        });
                    }
                    catch (e) {
                        console.log("Không thể lấy được thông tin bệnh nhân", e.message);
                    }
                    },
edit(){
  const modal = document.getElementById('seeMore');
                modal.classList.remove('hide');


},
unSee() {
      const seeMore = document.getElementById('seeMore');
      seeMore.classList.add('hide'); 
    },

    },


    mounted(){
        this.getSiglePatient(),
this.getRecord()
    },
    name: 'siglePatient',
    }

</script>