<script setup>
import { reactive } from 'vue';
import Pokemon from './Pokemon.vue';
import { store } from '../store';

const keyword = defineModel("keyword", { default: '' });

const responseStatus = reactive({ status: null });

async function fetchPokeData(keyword) {
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const result = await fetch(url + keyword.toLowerCase());

    responseStatus.status = 200;

    if (responseStatus.status !== 200) {
        return;
    }

    const data = await result.json();

    store.setPokemon(data);    
    store.setAbilities(data.abilities);

    /**
     * clean ability component
     * when a new pokemon is
     * required
     */
    store.setAbility({}); 
}
</script>

<template>
    <section class="u-container draft">
        <div class="home">
            <div class="search">
                <div class="search-draft">
                    <label class="search-draft__label" for="keyword">Search for a Pokémon:</label>
                    <div class="search-draft__group">
                        <input id="keyword" class="search-draft__group-input" v-model="keyword" type="text" />
                        <button @click="fetchPokeData(keyword)" class="search-draft__group-button">Search</button>
                    </div>
                </div>
            </div>
            <Pokemon :pokemon="store.pokemon" :status="responseStatus.status"/>
            <div class="fail-component" v-if="responseStatus.status !== null && responseStatus.status !== 200">
                <h2 class="fail-component__title">Something went wrong!</h2>
                <small class="fail-component__disclaimer">Try again later.</small>                
            </div>
        </div>
    </section>    
</template>