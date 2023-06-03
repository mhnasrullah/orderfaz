import { defineStore } from "pinia";

export const useCountryStore = defineStore('country',()=>{

    const {public : {apiUrl}} = useRuntimeConfig()

    const suggestionCountry : Ref<any[]> = ref([]);
    const detailCountry : Ref<any> = ref(null)
    const errorMessage : Ref<string> = ref("");

    const getSuggestionCountry = computed(()=>{
        if(suggestionCountry.value.length === 0) return []

        return suggestionCountry.value.slice(0,5).map((e)=>{
            return {
                name : e.name?.common
            }
        })
    })

    const getterDetailCountry = computed(()=>{
        if(!detailCountry.value) return null

        return {
            name :detailCountry.value.name.common,
            flag : detailCountry.value.flags.svg,
            altFlag : detailCountry.value.flags.alt,
            tag : detailCountry.value.altSpellings
        }}
    )

    const clearSuggestionState = () => {
        suggestionCountry.value = []
        errorMessage.value = ""
        detailCountry.value = null
    }

    const getAllCountry = async (payload : string) => {

        const endpoint = `${apiUrl}/v3.1/name/${payload}`
        const {data,error} :any = await useFetch(endpoint)

        if( error?.value?.statusCode === 404){
            errorMessage.value = "Data not found"
        }

        if(data?.value?.length > 0){
            errorMessage.value = ""
            suggestionCountry.value = data.value
        }

    }

    const getDetailCountry = async (payload : string) => {
        const nameFromSlug = payload.replace('-',' ')
        const endpoint = `${apiUrl}/v3.1/name/${nameFromSlug}?fullText=true`

        const {data} : any = await useFetch(endpoint)

        detailCountry.value = data.value[0]
    }

    return {
        getAllCountry,
        getSuggestionCountry,
        clearSuggestionState,
        getDetailCountry,
        getterDetailCountry,
        detailCountry,
        errorMessage
    }
})