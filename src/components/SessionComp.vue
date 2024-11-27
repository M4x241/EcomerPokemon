<template>
    <div class="jefe">
        <div class="box">
        <div class="box-session">
            <div class="sesleft" v-bind:class="{'backdrop':!viewlog}">
                <div class="details">
                    <h1>Loggin</h1>
                </div>
                <div>
                    <form action="send" v-show="viewlog">
                        <div class="details">
                            <label><input placeholder="User"></label>
                        </div>
                        <div class="details">
                            <label><input type="password" placeholder="*****"></label>
                        </div >
                        <div class="details">
                            <button>Ingresar</button>
                        </div>
                        
                    </form>
                    <div class="formOff" v-show="!viewlog" v-bind:class="{'details':true}">
                        <button v-on:click="viewlog = true">Logging</button>
                    </div>
                    
                </div>
            </div>
            <div class="sesright" :class="{'backdrop':viewlog}">
                <div>
                    <h1>Sig up</h1>
                </div>
                <div>
                    <form action="send" v-show="!viewlog" >
                        <div class="details">
                            <label><input placeholder="example@gmail.com"></label>
                        </div>
                        <div class="details">
                            <label><input placeholder="user"></label>
                        </div>
                        <div class="details">
                            <label><input type="password" placeholder="****"></label>
                        </div>
                        <div class="details">
                            <button>Registrar</button>
                        </div>
                        
                    </form>
                    <div class="formOff" v-show="viewlog" v-bind:class="details">
                        <button @click="viewlog=false">Sig Up</button>
                    </div>
                </div>
                
            </div>
            <div class="details" v-bind:class="{'home':true}">
                <router-link to="/">
                    <img src="../assets/logo.png" >
                </router-link>
            </div>
            
        </div>
        
        </div>
    </div>
    
</template>

<script setup>
import {ref} from 'vue'

const viewlog = ref(false)
</script>

<style scoped>
.jefe{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 100px;
}

.box-session{
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    color:white;
    background-image:url(/public/m.png);
    background-repeat:round;
    background-color: blue;
    display: grid;
    justify-content: center;
    width:fit-content;
    height: 450px;
    grid-template-columns: 2fr 2fr;

}

.sesright{
    display:grid;
    place-items: center;
    align-content: center;
    grid-column: 2;
    height: 450px;
    transition: linear;
    transition-duration: 1s;

}
.sesleft{
    display:block;
    align-content: center;
    grid-column: 1;
    height: 450px;
    transition: linear;
    transition-duration: 1s;

}

.backdrop{
    backdrop-filter: blur(1rem);
}

label{
    font-size: 0.5cm;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
input{
   background:rgb(107, 120, 120);
   border-style: double;
   color: white;
   width: 200px;
   margin: 10px;
}
.details{
    display: grid;
    place-items: center;
}
.home{
    grid-column: span 2 ;
    position: border;
    background-color: black;
    
}
.home img {
    width: 50px;
    background-color: black;
    border-radius: 50%;
}
</style>