<script setup>
import { reactive } from 'vue';

const props = defineProps({ abilities: { default: null } });

const ability = reactive({});

const description = ({});

async function handleAbility(event) {
    const url = event.target.getAttribute("data-url");

    const result = await fetch(url);

    const data = await result.json();

    Object.assign(ability, data);
    
    Object.assign(description, ability.flavor_text_entries.find((element) => element.language.name === "en"));    
}
</script>

<template>
    <div class="abilities">
        <button v-for="item in props.abilities" class="abilities__button" @click="handleAbility"
            :data-url="item.ability.url">
            {{ item.ability.name }}
        </button>
    </div>
    <div v-if="ability.name !== undefined" class="ability">
        <h2 class="ability__title">{{ ability.name }}</h2>
        <p class="ability__paragraph">{{ description.flavor_text }}</p>
    </div>
</template>