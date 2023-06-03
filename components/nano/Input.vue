<template>
    <div 
    :class="getBorderColor"
    class="rounded-md flex items-center">
        <input
        :value="modelValue"
        :placeholder="placeholder"
        class="outline-none rounded-md w-full p-2 placeholder:font-medium text-sm lg:text-base placeholder:text-gray"
        type="text"
        @input="handleInput"
        @focusin="handleFocusIn"
        @focusout="handleFocusOut">
        
        <IconSearch
        v-if="isSearch" 
        :fill="getFillIcon"
        class="w-5 h-5 mr-2"/>
    </div>
</template>

<script lang="ts" setup>

interface inputProps {
    modelValue : string | number,
    placeholder? : string,
    isSearch? : boolean
}

const {modelValue,placeholder,isSearch} = defineProps<inputProps>()

const isFocus : Ref<boolean> = ref(false)

const emit = defineEmits(['update:modelValue'])

const getBorderColor = computed(()=>({
    'border-gray border' : !isFocus.value,
    'border-[#8362F280] border-2' : isFocus.value
}))

const getFillIcon = computed(()=> isFocus.value ? "#8362F280" : "#C8C8C8")

const handleFocusIn = () => {
    isFocus.value = true
}

const handleFocusOut = () => {
    isFocus.value = false
}

const handleInput = (e : Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}

</script>