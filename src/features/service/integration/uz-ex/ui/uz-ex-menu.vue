<script setup lang="ts">
interface IProps {
  id: number
}

const props = defineProps<IProps>()

const modal = useModal()

const showUzExModal = () => modal.show("uz-ex", props.id)
</script>

<template>
  <ui-button-group class="justify-end">
    <ui-icon-button
      size="sm"
      variant="white"
      color="secondary"
      icon-class="text-xl"
      icon-name="ph:eye"
      :label="$t('actions.view')"
      @click="showUzExModal"
    />
  </ui-button-group>
</template>
