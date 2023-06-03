<template>
    <NuxtLink
    v-if="nuxtLink && href"
    :class="getStyle"
    :href="href">
        <slot/>
    </NuxtLink>
    <button
    :class="getStyle"
    v-else>
        <slot/>
    </button>
</template>

<script lang="ts" setup>

interface buttonProps {
    nuxtLink? : boolean
    type? : 'primary'
    href? : string
}

const {nuxtLink,type,href} = withDefaults(defineProps<buttonProps>(),{
    type : 'primary'
})

const getStyle = computed(()=>({
    'p-4 bg-purple text-white font-medium rounded-md text-sm lg:text-base' : type === 'primary'
}))


</script>