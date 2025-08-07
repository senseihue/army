<script setup lang="ts">

interface Props {
    logo: string
    label: string
    value: string
}

const model = defineModel<any>()
defineProps<Props>()
</script>
<template>
    <label :for="value">
        <input v-model="model" :id="value" class="hidden" type="radio" :value="value" />
        <div class="flex cursor-pointer flex-row items-center gap-4 rounded-lg border-2 border-blue-light p-4 sm:flex-col sm:justify-center sm:gap-2 sm:p-10"
            :class="model === value && '!border-blue-midnight'">
            <!-- <img :src="`../../../public/img/auth/${value}.png`" :alt="label" /> -->
            <!-- <slot name="logo" /> -->
            <img :src="logo" :alt="label" />
            <p>{{ label }}</p>
        </div>
    </label>
</template>
