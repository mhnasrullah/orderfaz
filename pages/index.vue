<template>
    <div class="font-sf-pro min-h-screen flex items-center justify-center flex-col">

        <h1 class="font-bold text-4xl lg:text-6xl text-center">Country</h1>

        <div class="relative mt-4 w-full max-w-2xl mx-auto">

            <NanoInput
            v-model="inputValue"
            placeholder="Type any country name"
            class="w-full">
                <template #right-side>
                    <IconSearch class="w-5 h-5 mr-2"/>
                </template>
            </NanoInput>

            <div class="absolute w-full mt-2">
                <MicroPopUpListCountry
                v-if="getSuggestionCountry.length > 0"
                :data="getSuggestionCountry"/>
                <p 
                v-if="errorMessage"
                class="text-[#FF0000] text-sm lg:text-base">{{ errorMessage }}</p>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCountryStore } from '~/store';

const store = useCountryStore()
const {getSuggestionCountry,errorMessage} = storeToRefs(store)

const inputValue : Ref<string> = ref('')
const stillChange : Ref<boolean> = ref(false)


watch(inputValue,()=>{

    if(inputValue.value === ''){
        store.clearSuggestionState()
    }

    stillChange.value = true
    setTimeout(()=>{
        stillChange.value = false
    },1000)
})

watch(stillChange,()=>{
    if(!stillChange.value && inputValue.value !== ''){
        store.getAllCountry(inputValue.value)
    }
})
</script>