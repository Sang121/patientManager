<template>
  <div class="container"> 
    <Header /> <hr/>  
        <div class="main">
 
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
        </tr>
      


      </table>
      <h3>MedicalRecord</h3>
      <table class="records"> 
        <tr>
          <th>Chiều cao:</th>
          <td>{{ medicalRecord.chieucao }}</td>

        </tr>
        <tr>
          <th>Cân nặng:</th>
          <td>{{ medicalRecord.cannang }}</td>

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
          <th>Huyết áp:</th>
          <td>{{ medicalRecord.huyetapcao }}</td>

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
    <button type="button" class="addUser btn btn-primary" @click="edit()">  Sửa bệnh nhân</button>
<updatePatient/>
</div>
</div>
   
</template>
<style>
  /* Container Styles */
  .container {

    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  /* Header Styles */
  .container hr {
    margin-top: 10px;
    border: none;
    border-top: 2px solid #007bff;
  }

  /* Main Content Styles */
  .main {
    margin-top: 20px;
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
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }
  }
</style>
<script>
import axios from "axios";
const base_URL = "http://192.168.1.53:9098"
const access_token= localStorage.getItem("auth._token.local"); //get bearer token

export default {
  created() {
console.log(this.$route.query.id)
  },
    data(){
    return {
        patient:{},
        medicalRecord:{},
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
                                console.log("Lấy data thành công",response.data.data[0]);

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

                            }
                        });
                    }
                    catch (e) {
                        console.log("Không thể lấy được thông tin bệnh nhân", e.message);
                    }
                    },

edit(){
  const modal = document.getElementById('seeMore');
                modal.classList.remove('hide');


}

    },

    mounted(){
        this.getSiglePatient(),
this.getRecord()
    },
    name: 'siglePatient',
    }

</script>