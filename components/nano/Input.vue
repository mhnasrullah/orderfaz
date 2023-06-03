<template>
    <div class="border border-gray rounded-md flex items-center">
        <input
        :value="modelValue"
        :placeholder="placeholder"
        class="outline-none rounded-md w-full p-2 placeholder:font-medium text-sm lg:text-base placeholder:text-gray"
        type="text"
        @input="handleInput">
        <slot name="right-side"/>
    </div>
</template>

<script lang="ts" setup>

const {modelValue} = defineProps({
    modelValue : {
        type : [String,Number],
        required : true
    },
    placeholder : {
        type : String,
        default : ''
    }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e : Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}

</script>