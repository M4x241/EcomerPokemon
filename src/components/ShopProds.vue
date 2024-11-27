<template>
    <div class="items">
        <div>
            <h1>Tu Carrito</h1>
        </div>
        <div class="compras">
            <figure class="card" v-for="(poke,index) in listapokemon" :key="index" >
                <button class="pokeselect" @click="changepokevalue(poke)">
                    <div class="pokeFont">
                        <img :src=poke.sprites.front_default>
                    </div>
                    <div class="pokeDetail">
                        <label>{{ poke.price }} $</label>
                        <label>{{ poke.name }}</label>
                        <label> <input type="checkbox" v-model="poke.marcado">{{ poke.marcado }}</label>
                    </div>
                </button>
                
            </figure>
            
        </div>

        <button class="pokecompra" v-on:click="mostrar">
                compras
        </button>
        <a>{{ valor }}</a>
        <input type="checkbox" v-model="valor">
    </div>
</template>

<script setup>
import { ref, computed} from 'vue'
import { userCartStores, changepokevalue } from '@/API/cartStore'
import { onMounted } from 'vue';

const valor = ref(true);

const listapokemon = computed(()=>{
    return userCartStores.items;

})

function mostrar(){
    console.log(listapokemon.value)
    console.log("hola")
    console.log(userCartStores.items)
}

onMounted(()=>{
    mostrar();

})

</script>

<style scoped>
.compras{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgb(39, 39, 107);
    width: calc(100%);
    height: calc(100%);
}
.card{
    border-radius: 18px;
    width: 250px;
    display: flex;
    place-content: center;
}
img{
    width: 200px;
    height: auto;
}
a{
    color:white
}
.pokeselect{
    background: rgb(131, 131, 202);
}

.pokeFont{
    background-color: azure;
    border-radius: 50%;
}
.pokeDetail{
    display: grid;
}


</style>