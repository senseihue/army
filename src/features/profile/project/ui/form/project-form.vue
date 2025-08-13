<script setup lang="ts">
import { PersonalProject } from "~/entities/profile/personal-project"
import { useVuelidate } from "@vuelidate/core"
import { ProjectFileUpload } from "~/features/profile/project/ui/form"

const form = ref<PersonalProject>(new PersonalProject())
const rules = ref({})
const validate = useVuelidate()
const onSubmit = () => {
  // Handle form submission logic here
  console.log("Form submitted")
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <project-file-upload label="" />
    </div>
  </form>
</template>

<style scoped></style>
