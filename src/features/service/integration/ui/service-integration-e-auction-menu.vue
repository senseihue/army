<script setup lang="ts">

interface IProps {
  id: number
  name: string
}

const props = defineProps<IProps>()

const modal = useModal()

const showEventModal = () => modal.show("e-auction", props.id)
</script>

<template>
  <ui-button-group class="justify-end">
    <ui-icon-button
      size="sm"
      variant="white"
      color="secondary"
      icon-class="text-xl"
      icon-name="ph:eye"
      :label="$t('actions.edit')"
      @click="showEventModal"
    />
  </ui-button-group>
</template>
