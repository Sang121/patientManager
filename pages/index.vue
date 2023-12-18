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

            <td><Button  @click="seeMore(patient.id)" class="btn btn-primary"> Xem </Button></td>
            <td><Button  class="btn btn-primary">Xóa </Button></td>
        </tr>
       
    </table>
    <h4 id="list" > </h4>
    </div>

<!-- Form add patient -->
    <addPatient/>



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
const base_URL = "http://192.168.1.53:9098"

const access_token= localStorage.getItem("auth._token.local"); //get bearer token
var today= new Date()                                                      
  var dateToday = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
export default {
    data() {
        return {
            listPatient: [],
            patient: {},
        };
    },

   
  
    methods: {
      async getPatient( ) {

            try {
               await axios.get(`${base_URL}/Patient?date=2023-12-18T09:07:23.205Z`, { headers: {
                        Authorization: access_token
                    }
                })
                    .then((response) => {

                    if (response.data.total_count == 0) {
                        console.log("Không có data");
                        document.getElementById("list").innerHTML = "Không có bản ghi nào!";
                    }
                    else {
                        this.listPatient = response.data.data;

                        console.log("Lấy data thành công",response.data);


                    }
                });
            }
            catch (e) {
                console.log("Không thể lấy được thông tin bệnh nhân", e.message);
            }

},
        seeMore(index) {
           
            this.$router.push(`/patient?id=${index}`)
        },
        addBtn() {
          
                const modal = document.getElementById('addPatient');
                modal.classList.remove('hide');
                console.log(today.toISOString() );
            },
           
        // deletePatient(id) {
        //     try {
        //         axios.delete(`${base_URL}/Patient`, { id }, { headers: {
        //                 Authorization: `Bearer ${access_token}`
        //             }
        //         })
        //             .then((response) => {
        //             console.log(response);
        //         });
        //     }
        //     catch (e) {
        //         alert("Chức năng đang phát triển");
        //         console.error("lỗi", e);
        //     }
        // },
      
        
        
    },
    
        mounted() {
          console.log("mounted");
          this.getPatient()
        
        },

    Middleware: 'auth',
}



</script>