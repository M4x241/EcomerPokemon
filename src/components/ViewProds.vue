<template>
    <div class="products">

        <figure v-for="(poke,index) in pokes" :key="index">
            <button class="pokeselect" v-on:click="carritopokemon(poke)">
                <div class="pokeFont">
                    <img :src="poke.sprites.front_default">
                </div>
                <div class="pokeDetail">
                    <label>{{  poke.price  }} $</label>
                    <label>{{ poke.name }}</label>
                    <label> <input type="checkbox" v-model="poke.marcado">{{ poke.marcado }}</label>
                </div>
            </button>
        </figure>
    </div>
</template>

<script setup>
import {pokemon} from '../API/varpokemon.js'
import { userCartStores } from '@/API/cartStore.js'
import {ref, onMounted} from 'vue'

const poke = ref(null)
const pokes = ref([])

const r = 20
const lisnum = []

function carritopokemon(pokito){
    console.log("Haciendo la copia")
    userCartStores.additem(pokito)
}

function GetAzarPokemon(){
    for (var i = 0; i < r; i++) {
       lisnum.push(parseInt( Math.random()*(100-0)+0))
    }
}

const loadpokemon = async(pokename)=>{
    poke.value = await pokemon(pokename);
}

const loadmorepokemon = async ()=>{
    GetAzarPokemon();
    pokes.value = []
    for (var i = 0; i < r; i++) {
        poke.value = await pokemon(lisnum[i])
        poke.value.marcado = false
        poke.value.price = (Math.random()*(100-20)+20).toFixed(2) 
        pokes.value.push(poke.value)
    }
    console.log("New pokemon")
    console.log(pokes)
    console.log("Hasta aqui")
}


onMounted(()=>{
    loadpokemon("abra");
    loadmorepokemon();
})
</script>


<style scoped>
.products{
    background-color: gold;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
ol{
    list-style-type: none;
}
img{
    width: 200px;
    height: auto;
}
.item{
    flex-grow: 1;
    flex-basis: 200;
}

.pokeselect{
    background: rgb(131, 131, 202);
}

.pokeFont{
    background-color: azure;
    border-radius: 50%;
}

.pokeselect:hover{
    background-color: red;
    cursor: pointer;
}

.pokeDetail{
    display: grid;
}


</style>