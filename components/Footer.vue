<template>
<div>
    <div class="container-ft">
        <p > © 2023 - Bản quyền thuộc về Công ty TNHH 1 thành viên</p>
        <div class="address">
            <div class="infContact">
                <div>
                    <p> Cơ sở 1: Số 60 Hào Nam, Phường Ô Chợ Dừa, Quận Đống Đa, TP Hà Nội </p>
                    <div class="contacts"    >
                        <p class="pi pi-phone"> Hotline: 0904172709</p>
                        <p class="pi pi-envelope"> Email: binhtrivuong1985@gmail.com</p>
                        <p class="pi pi-send"> Sky&YM: dnt.vn</p>
                    </div>
                </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7472.372964726728!2d105.82698902596988!3d21.024033996079115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7639a2c983%3A0x4d21c597f83855a!2zNDYvNjAgUC4gSMOgbyBOYW0sIFThu5UgRMOibiBQaOG7kSAzMCwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1704160511899!5m2!1svi!2sus"
            width="250" class="map" height="200" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div  class="infContact"> 
            <div> 
                    <p> Cơ sở 2: Số 166 Đường Nguyễn Văn Linh, Phường Bần Yên Nhân, Phố Nối, Thị Xã Mỹ Hào, Tỉnh Hưng Yên</p>

                    <div class="contacts"    >
                        <p class="pi pi-phone"> Hotline: 0904172709</p>
                        <p class="pi pi-envelope"> Email: binhtrivuong1985@gmail.com</p>
                        <p class="pi pi-send"> Sky&YM: dnt.vn</p>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119246.82539713231!2d106.054848!3d20.933902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a4f5c00d8c89%3A0xadbaa80e6d4e140a!2zUGjDsm5nIEtow6FtIELDoWMgU8SpIMSQ4buXIE5n4buNYyBU4bqlbg!5e0!3m2!1svi!2s!4v1704165435581!5m2!1svi!2s"
                 width="250"  class="map" height="200" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    </div>
</template>
<style>
.container-ft{
    width:100%;
    display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 5% 0 5% ;
}
.address{
    display: flex;
    flex-direction: row;
}
.contacts{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.map{
margin-left: 10px;
margin-top: 15px;

}
.infContact{
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-left: 10px;
}
.infContact p{
    font-size: 15px;
}
</style>
<script>
export default {
    name: "Footer"
}
</script>