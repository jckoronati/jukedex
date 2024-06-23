<script setup>
    const props = defineProps({ name: { default: null }, url: { default: null }  });
</script>

<template>
    <button data-url="props.">
        {{ props.url }}
    </button>
</template>