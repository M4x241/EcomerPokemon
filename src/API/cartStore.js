import {ref} from 'vue'

let lista = []

export const userCartStores = {
    items: ref([]),
    updateItems(newItems){
        console.log("Cambiaenado la lista interna de datos")
        this.items = newItems
    },
    additem(item){
        lista.push(item)
        this.items = lista
    }
}

export function changepokevalue(poke){
    poke.marcado = !poke.marcado
    console.log("Cambiando vlaor")
}