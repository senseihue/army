<script setup lang="ts">

interface IProps {
  id: number
}

const props = defineProps<IProps>()

const modal = useModal()

const showEAuctionModal = () => modal.show("e-auction", props.id)
</script>

<template>
  <ui-button-group class="justify-end">
    <ui-icon-button
      size="sm"
      variant="white"
      :rounded="true"
      color="secondary"
      icon-class="text-xl"
      icon-name="ph:eye"
      :label="$t('actions.view')"
      @click="showEAuctionModal"
    />
  </ui-button-group>
</template>
