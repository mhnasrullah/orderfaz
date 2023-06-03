import { defineStore } from "pinia";

export const useCountryStore = defineStore('country',()=>{

    const suggestionCountry : Ref<any[]> = ref([]);
    const errorMessage : Ref<string> = ref("");

    const getSuggestionCountry = computed(()=>{
        if(suggestionCountry.value.length === 0) return []

        return suggestionCountry.value.slice(0,5).map((e)=>{
            console.log(e.name.official.replace(' ','-'))
            return {
                name : e.name?.common,
                official : e.name?.official,
                route : e.name?.official.replaceAll(' ','-')
            }
        })
    })

    const clearSuggestionState = () => {
        suggestionCountry.value = []
        errorMessage.value = ""
    }

    const getAllCountry = async (payload : string) => {

        const endpoint = `https://restcountries.com/v3.1/name/${payload}`
        const {data,error} :any = await useFetch(endpoint)

        if( error?.value?.statusCode === 404){
            errorMessage.value = "Data not found"
        }

        if(data?.value?.length > 0){
            errorMessage.value = ""
            suggestionCountry.value = data.value
        }

    }

    return {
        getAllCountry,
        getSuggestionCountry,
        clearSuggestionState,
        errorMessage
    }
})