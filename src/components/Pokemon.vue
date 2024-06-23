<script setup>
import Abilities from './Abilities.vue';

const props = defineProps({ pokemon: { default: null }, status: { default: null } });
</script>

<template>
    <div v-if="props.pokemon.name !== undefined && status && status === 200" class="pokemon-info">
        <div class="pokemon-info__introduce">
            <h1 class="pokemon-info__introduce-name">{{ props.pokemon.name }}</h1>
            <img class="pokemon-info__introduce-image" :src="props.pokemon.sprites.front_default" />
            <h2 class="pokemon-info__introduce-order">#{{ props.pokemon.order }}</h2>
        </div>        
        <div class="pokemon-info__about">
            <p class="pokemon-info__about-item"><span>Weight</span>: {{ props.pokemon.weight }}</p>
        </div>
        <div class="pokemon-info__group">
            <div class="pokemon-info__group-abilities">
                <h2 class="pokemon-info__group-abilities-title">Abilities</h2>
                <Abilities :abilities="props.pokemon.abilities" />
            </div>
        </div>
    </div>
</template>