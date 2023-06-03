<template>
    <div class="relative w-full max-w-[500px] py-6 overflow-hidden">
        <h6 class="text-base lg:text-lg font-semibold">LatLong</h6>
        <p class="text-4xl lg:text-5xl mt-2 text-purple font-bold">{{ latitude }}, {{ longitude }}</p>

        <IconGlobe
        class="absolute w-44 h-fit top-0 right-0"/>
    </div>
</template>

<script lang="ts" setup>

interface latLongProps {
    latitude : number,
    longitude : number
}

defineProps<latLongProps>()

</script>