<template>
  <div class="container"> 
    <Header /> <hr/>  
        <div class="main">
 <!-- <button @click="getExam()">In phiếu khám </button> -->
 <div> 
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

    </div>
  <br/>
      <h2>medicalRecords, có {{ medicalRecords.length }} bản ghi</h2> 
     
      <div class="card">   
    <DataTable class="" :value="medicalRecords"  editMode="row" dataKey="id" 
    :editingRows.sync="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
      <Column field="id" header="ID" :styles="{width:'10%'}"> </Column>
     <Column field="chieucao" header="Chiều cao(cm)" :styles="{width:'10%'}"> 
       <template #editor="slotProps">
                   <InputText v-model="slotProps.data[slotProps.column.field]"  />
        </template>
     </Column> 
      
     <Column field="cannang" header="Cân nặng(kg)" :styles="{width:'10%'}" >
       <template #editor="slotProps">
                   <InputText v-model="slotProps.data[slotProps.column.field]"  />
               </template>
     </Column>
    
     <Column field="tiensu" header="Tiền sử" :styles="{width:'20%'}">
       <template #editor="slotProps">
                   <textarea  rows="6" v-model="slotProps.data[slotProps.column.field]"  />
               </template>
     </Column>
     <Column field="lamsang" header="Lâm sàng" :styles="{width:'20%'}">
       <template #editor="slotProps">
                  <textarea   rows="6"   v-model="slotProps.data[slotProps.column.field]"  />
               </template>
     </Column>
     <Column field="chuandoan" header="Chẩn đoán" :styles="{width:'20%'}">
       <template #editor="slotProps">
                   <textarea   rows="6" v-model="slotProps.data[slotProps.column.field]"  />
               </template>
     </Column>
     <Column field="dieutri" header="Điều trị" :styles="{width:'20%'}">
       <template #editor="slotProps">
                  <textarea   rows="6" v-model="slotProps.data[slotProps.column.field]"  />
               </template>
     </Column>
    
     <Column :rowEditor="true" :styles="{width:'10%', 'min-width':'8rem'}" :bodyStyle="{'text-align':'center'}"></Column>

    </DataTable>
   </div>
</div>
</div>
</template>
<style>
  /* Container Styles */
  .container {
    margin: 0 ;
    padding: 5px;

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
.table_update td{
  border:none;
}
.table_update th{
  border:none;
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
  .card {
    background-color: transparent transparent;
    padding-left: 10px;

  }
textarea:focus{
  outline:none;
}
input:focus{
  outline: none;
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

  .modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.modal-content {
  border-radius: 10px;
  background-color: #fefefe;
  margin: auto;
  margin-top: 7%;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.modal-title {
  font-size: 25px;
}
.modal-body{
  margin-left: 5%;
  width: 80%;
}
.close{
  display: flex;
 float: right;
}
  .save_btn{
    margin-top: 5px;
    margin-left: 40%;
  }
  input:focus {
   outline: none;
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
.update {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hide{
  display:none;
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
        medicalRecords:{

        },
        editingRows:[],
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
                                console.log("Không có data",response);
                            }
                            else {
                              this.medicalRecords= response.data.data ;
                                console.log(" data get",response.data.data);
                                
                            }
                        });
                    }
                    catch (e) {
                        console.log("Không thể lấy được thông tin bệnh nhân",e.message);
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
    onRowEditSave(event) {
            let {newData, index } = event;
            this.medicalRecords[index] = newData;
            this.patient.medicalRecord=this.medicalRecords[index]
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
              console.log("partientUpdate send",partientUpdate)
console.log(" res partientUpdate send",response)

              // setTimeout(() => {
              //   window.location.reload()
              //   }, 300);
            }
            )}
            catch (e) {
                console.log("Không thể update",e)

            }
      

        },
        edit(){
          const modal = document.getElementById('seeMore');
                        modal.classList.remove('hide');
        },
        unSee() {
              const modal = document.getElementById('seeMore');
              modal.classList.add('hide'); 
            },

            },


    mounted(){
        this.getSiglePatient()
        this.getRecord()
    },
    name: 'siglePatient',
    }

</script>