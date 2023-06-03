<template>
    <div class="pt-6">
        <NanoButton
        nuxt-link
        href="/">&larr; Back to homepage</NanoButton>

        <div
        v-if="getterDetailCountry">
            <MicroLabelTagInfo
            :country="getterDetailCountry.name"
            :flag="getterDetailCountry.flag"
            :label="getterDetailCountry.tag"
            :alt="getterDetailCountry.altFlag"
            class="mt-10"/>

            <div class="mt-8">
                <MicroLatLong
                :latitude="getterDetailCountry.latitude"
                :longitude="getterDetailCountry.longitude"/>

                <MicroInfoRegion
                :capital="getterDetailCountry.capital"
                :region="getterDetailCountry.region"
                :sub-region="getterDetailCountry.subRegion"/>

            </div>
        </div>

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