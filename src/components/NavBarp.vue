<template>

    <div class="navtitle">
        <div class="nav-header" v-show="showbar">
            <router-link to="/">
                <h1>MyMaker</h1>
            </router-link>
            <div class="buscador">
                <label >Search:<input v-model="dsearch" placeholder="Search"> <img src="../assets/icon_search.svg" style="width: 10px;"></label>

            </div>

            <div class="profile">
                <router-link to="/shop"><img src="../assets/shopingcon.png"></router-link>
                <router-link to="/session" class="logo-link">
                    <img src="@/assets/logo.png" alt="logo">
                </router-link>

            </div>


        </div>
        <div class="nav-option">
            <ol class="navlist">
                <li v-for="(page, index) in pagesOpt" :key="index" id="elemList">
                    <button>{{ page }}</button>
                </li>
            </ol>
        </div>
    <router-view></router-view>

    </div>
</template>

<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router';

const showbar = true
const dsearch = ref("")

const pagesOpt = ref(["All", "More Populars", "More Shopings",
    "Electronics", "Accesors"
])

</script>

<style scoped>
h1{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-style: italic;
    color: black;
    font-size:xx-large
}
.navtitle{
    color:black;
    background-color: rgb(97, 97, 156);
    margin-top: 0px;
}
.nav-header{
    margin: 0px;
    box-sizing: border-box;
    display: grid;
    grid-column: 3;
    align-items: center;
}
.buscador{
    width: calc(100%);
    display: grid;
    place-content: center;
}
.profile{
    grid-column: 3;
    width: calc(100%);
    display: flex;
    place-content: center;
}

.nav-header >div> button{
    width: 50px;
    height: auto;
    border-radius: 8%;
    grid-column: 3;
    background: none;
}
.nav-header>div > button>img {
    width: 40px;
    height: auto;
}
.profile img{
    width: 40px;
}

.nav-option{
    border-top: 0px;
    background: skyblue;
    height: 30px;

}

.navlist{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-content: space-evenly;
    list-style-type: none;
}
#elemList{
    width: 200px;

}
button{
    width: 200px;
    height: 30px;
    border:100px;
    background-color: rgb(131, 131, 210);
}
button:hover{
    background-color: rgb(38, 38, 169);
    cursor: pointer;
}

@media (max-width: 956px){
    .nav-option > :no-button{
        background-color: red;
    }
}
</style>
