<template>
    <div class="py-6">
        <ul>
            <li class="text-sm lg:text-base font-bold">
                <span class="font-normal">Capital : </span>
                {{ capital }}
            </li>
            <li class="text-sm lg:text-base font-bold">
                <span class="font-normal">Region : </span>
                {{ region }}
            </li>
            <li class="text-sm lg:text-base font-bold">
                <span class="font-normal">Subregion : </span>
                {{ subRegion }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

interface infoRegionProps {
    capital : string,
    region : string,
    subRegion : string
}

defineProps<infoRegionProps>()



</script>