<script setup>
const props = defineProps({ pokemon: { default: null } });
</script>

<template>
    <div v-if="props.pokemon.name !== undefined" class="pokemon-info">
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
                <div class="pokemon-info__group-abilities-group">
                    <div v-for="item in props.pokemon.abilities" class="pokemon-info__group-abilities-group-item">
                        <h3 class="pokemon-info__group-abilities-group-item-name">{{ item.ability.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>