<template>
    <div>
        <div class="flex items-center space-x-2">
            <h1 class="text-4xl lg:text-5xl font-bold">{{ country }}</h1>
            <img 
            :src="flag" 
            :alt="alt"
            class="w-10 lg:w-12 h-fit">
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
            <NanoTag
            v-for="(e,i) in label"
            :key="i"
            :name="e"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

interface labelTagProps{
    country : string,
    flag : string,
    label : string[],
    alt : string
}

defineProps<labelTagProps>()


</script>