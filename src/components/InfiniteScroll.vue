<template>
    <div class="work_with">
        <navbar></navbar>
        <section class="headings"
            style="background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../src/assets/images/nurse-jobs.jpg'), no-repeat center center">
            <div class="text-heading">
                <div class="container">
                    <div class="bread">
                        <h3 class="text-white">Nursing</h3>
                        <p class="text-white">Icu Nurse, Dialysis Nurse , Ward Nurse , A &amp; E Nurse , Oncology Nurse</p>
                    </div>
                </div>
            </div>
        </section>

        <div ref="listEl" class="mt-5">
            <MDBContainer>
                <LazyList :data="productList" :itemsPerRender="1" containerClasses="list" defaultLoadingColor="#222">
                    <MDBRow>
                        <MDBCol class="contain mb-3" size='4' sm="6" md="6" lg="3" v-for="product in productList">
                            <div class="preview-top" data-aos="fade">
                                <img class="img-thumbnail preview"
                                    v-progressive="'../src/assets/images/' + product.main_image"
                                    :src="'../src/assets/images/' + product.main_image">
                            </div>
                            <h3 class="post-title">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-2">
                                            <img v-progressive="'../src/assets/images/' + product.logo"
                                                :src="'../src/assets/images/' + product.logo" style="width:34px">
                                        </div>
                                        <div class="col-10 p-1 text-black">
                                            <h6>{{ product.name }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </h3>
                        </MDBCol>
                    </MDBRow>
                </LazyList>
            </MDBContainer>
            <!-- <div class="text-center mt-5">
                    <MDBSpinner grow slot="loading">
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                </div> -->
        </div>
        <MainFooter></MainFooter>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import RestGetProduct from "../api"
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-vue-ui-kit';
import navbar from './navbar.vue';
import MainFooter from './footer.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyList from 'lazy-load-list/vue'

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const listEl = ref(null);

const limit = 30;
let page = 0;
const productList = ref(await RestGetProduct(page, limit))
</script>

<style scoped>
.work_with {
    padding: 30px;
}

h3 {
    color: #fff;
}

.preview-top {
    width: 100%;
    position: relative;
    overflow: hidden;
    top: 0;
    left: 0;
    transition: 0.3s;
}

.preview {
    transition: transform .2s;
    height: 250px;
}

.preview:hover {
    transform: scale(1.1);
    opacity: 1;
    cursor: pointer;
}

.slide-fade-enter-active {
    transition: all 3s ease-in;
}

.slide-fade-leave-active {
    transition: all 3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    /* transform: translateX(20px); */
    opacity: 0;
}
</style>