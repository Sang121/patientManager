<template>
    <div><Header /> <br>
    <div class="container"> 
    
    <div class="listUser"> 
        <div class="addUser">
        <Button icon="pi pi-user"  @click="addBtn()" label=" Thêm bệnh nhân"/> 

    </div>
    <div>
    <date-picker v-model="time" valueType="format">Chọn ngày</date-picker>
  </div>
  
    <!-- Danh sách bệnh nhân -->

    <div class="card" id="null list" >
     
       
        <DataTable :value="listPatient"  paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]" 
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">

                  <Column field="id" header="ID"   style="width:5%"></Column>

                  <Column field="hovaten" header="Họ và tên" style="width: 25%"></Column>
                  <Column field="namsinh" header="Năm sinh"  style="width: 5%"></Column>
                  <Column field="gioitinh" header="Giới tính" style="width: 15%"></Column>
                  <Column field="diachi" header="Địa chỉ" style="width: 25%"></Column>
                  <Column field="nghenghiep" header="Nghề nghiệp" style="width: 25%"></Column>

                  <Column  header="Xem chi tiết" style="width: 20%"> 
                    <template #body="slotProps">
                      <Button id="btn" @click="seeMore(  slotProps.data.id)"  icon="pi pi-eye" label="Xem" />
                    </template>

                  </Column> 
            </DataTable>

    </div>

    </div>

<!-- Form add patient -->
    <addPatient/>
</div>
    <div class="footer"> 
      <hr>
      <Footer />
    </div>
</div>
</template>
<style>
.container {
  padding: 5px;
 
    display: flex;
    flex-direction: column;
  }
.footer{
  

flex-direction: column;
background-color: white;
width: 100%;
}
.listUser {
    display: flex;
    padding: 10px;  
    background-color: white;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }



  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  button:hover {
    background-color: #007bff;
    color: white;
    transform: scale(1.05);
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




/* @media screen and (max-width: 550px){ 
  .p-datatable-tbody {
    border: 0 none;
}

.p-datatable-tbody{

    width: 500px !important;
    align-items: center;
    justify-content: space-between;
}

} */
</style>
<script>
import axios from "axios";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Button from 'primevue/button';


const base_URL = "http://192.168.1.53:9098"
const access_token= localStorage.getItem("auth._token.local"); //get bearer token
var today= new Date() 
export default {
    data() {
        return {
            listPatient: [],
            patient: {},
            time:this.time,
        };
    },

    components: { DatePicker,Button },
    watch: {
    time(newValue, oldValue) {
      this.getPatient(newValue);
    },
  },
  
    methods: {
      async getPatient(time) {

            try {
               await axios.get(`${base_URL}/Patient?date=${time}`, { headers: {
                        Authorization: access_token
                    }
                })
                    .then((response) => {

                    if (response.data.total_count == 0) {
                     this.listPatient=response.data.data
                    }
                    else {
                     
                        this.listPatient = response.data.data;

                        console.log("Lấy data thành công",response.data);

                    }
                });
            }
            catch (e) {
                console.log("Không thể lấy được thông tin bệnh nhân", e);
            }

},
        

        seeMore(index) {
           
            window.open(`/patient?id=${index}`)
        },
        // getTime(){
        //   console.log("times:", this.time)
        // },
        handleTimeChange(){
            var time = this.time
            this.getPatient(time)
        },
        addBtn() {
          
                const modal = document.getElementById('addPatient');
                modal.classList.remove('hide');
            },
          
    },
    onRowEditSave(event) {
                let { newData, index } = event;
    
                this.list[index] = newData;
            },

     mounted(){
 
      if(this.time==null){
       this.time = today.toISOString()
      };
      console.log("auth",this.$auth);
     },
     

}



</script>