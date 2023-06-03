<template>
    <div class="p-2">
        <NuxtLink
        v-for="(e,i) in data"
        class="block hover:bg-[#F4F4F4] text-sm lg:text-base"
        :href="e.name"
        :key="i">
            {{e.name}}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>

type dataType = {
    name : string
}

interface dataInterface {
    data : dataType[]
}

const {data} = defineProps<dataInterface>()
</script>