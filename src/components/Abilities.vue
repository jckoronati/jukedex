<script setup>
import { store } from '../store';

const props = defineProps({ abilities: { default: null } });

async function handleAbility(event) {
    const url = event.target.getAttribute("data-url");

    const result = await fetch(url);

    const data = await result.json();

    store.setAbility(data);
}
</script>

<template>
    <div class="abilities">
        <button v-for="item in props.abilities" class="abilities__button" @click="handleAbility"
            :data-url="item.ability.url">
            {{ item.ability.name }}
        </button>
    </div>
    <div v-if="store.ability.name !== undefined" class="ability">
        <h2 class="ability__title">{{ store.ability.name }}</h2>
        <p class="ability__paragraph">{{ store.abilityDescription.flavor_text }}</p>
    </div>
</template>