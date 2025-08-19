<script setup lang="ts" generic="T extends File | string | undefined = string">
interface IError {
  invalid: boolean
  hint: string
}

interface IProps {
  errors: Record<keyof IContent, IError>
}

defineProps<IProps>()
const { locales, locale: _l } = useI18n()

const _locale = ref(_l.value)

const locale = computed({
  get: () => _locale.value,
  set: (value) => (_locale.value = value)
})
const model = defineModel<IContent<T>>()

const handle = (e: string | undefined) => {
  if (!model.value) return
  // const target = e.target as HTMLInputElement
  model.value[locale.value] = e
}
</script>

<template>
  <ui-form-group :hint="errors[locale]?.hint" :invalid="errors[locale]?.invalid">
    <template #corner>
      <div class="-mb-1 flex gap-[5px]">
        <ui-button
          v-for="{ code } in locales"
          class="!rounded-b-none px-[10px] py-[5px] md:px-[15px] md:py-[5px]"
          type="button"
          size="xs"
          :class="{
            '!text-[#FF383C]': errors[code]?.invalid,
            '!text-black': !errors[code]?.invalid && locale != code,
            '!bg-transparent': locale != code
          }"
          :label="code.toLocaleUpperCase()"
          :key="code"
          @click="locale = code"
        ></ui-button>
      </div>
    </template>
    <template #default="{ id }">
      <slot :id :model="model[locale]" :handle="handle"></slot>
    </template>
  </ui-form-group>
</template>
