<template>
    <label
    class="p-2 rounded-full font-semibold bg-egg-green text-xs lg:text-sm text-white">{{ name }}</label>
</template>

<script lang="ts" setup>

interface labelProps {
    name : string
}

defineProps<labelProps>()

</script>