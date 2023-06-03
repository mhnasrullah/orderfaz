<template>
    <div class="pt-6">
        <NanoButton
        nuxt-link
        href="/">&larr; Back to homepage</NanoButton>

        <MicroLabelTagInfo
        v-if="getterDetailCountry"
        :country="getterDetailCountry.name"
        :flag="getterDetailCountry.flag"
        :label="getterDetailCountry.tag"
        :alt="getterDetailCountry.altFlag"
        class="mt-10"/>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCountryStore } from '~/store';

const {params} = useRoute()

const store = useCountryStore()
useAsyncData('country',()=>store.getDetailCountry(String(params.slug)))

const {getterDetailCountry} = storeToRefs(store)

</script>