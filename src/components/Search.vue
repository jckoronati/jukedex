<script setup>
import { reactive } from 'vue';
import Pokemon from './Pokemon.vue';

const keyword = defineModel("keyword", { default: '' });

const pokemonData = reactive({});

async function fetchPokeData(keyword) {
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const result = await fetch(url + keyword.toLowerCase());

    const data = await result.json();

    Object.assign(pokemonData, data);    
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
            <Pokemon :pokemon="pokemonData"/>
        </div>
    </section>    
</template>