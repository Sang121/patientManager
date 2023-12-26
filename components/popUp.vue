
<template>
    <div class="card flex justify-content-center">
        <Dialog modal header="Header" :visible="{visible}" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <template #header>
                <div class="inline-flex align-items-center justify-content-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold white-space-nowrap">Amy Elsner</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="unShow(false)" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script >

import Dialog from 'primevue/dialog';

import { ref } from "vue";

    export default {
    data: {
        return: {
            visible:"",

        },
    },
    methods: {
        unShow(check){
        this.visible=check
        console.log(this.visible)
}
    },
name:"popUp"
    }
</script>