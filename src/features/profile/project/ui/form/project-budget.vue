<script setup lang="ts">
import { ProjectBudget } from "~/entities/profile/personal-project"

const model = defineModel<IPersonalProject["budgets"]>()
const ids = defineModel<number[]>("ids", { default: () => [] })

const addBudget = () => {
  model.value.push(new ProjectBudget())
}

const deleteBudget = (index: number, budget: ProjectBudget) => {
  model.value.splice(index, 1)
  if (budget.id) ids.value.push(budget.id)
}
</script>

<template>
  <ui-form-group>
    <template #corner>
      <ui-icon-button
        type="button"
        icon-name="lucide:square-plus"
        icon-class="text-2xl"
        variant="ghost"
        @click="addBudget"
      />
    </template>
    <div class="grid gap-2">
      <div v-for="(budget, index) in model" class="flex items-center gap-[10px]" :key="index">
        <ui-input v-model="budget.sum" class="w-full" type="number" />
        <ui-icon-button
          v-if="model?.length > 1"
          type="button"
          variant="ghost"
          icon-class="text-2xl"
          icon-name="lucide:square-minus"
          @click="deleteBudget(index, budget)"
        ></ui-icon-button>
      </div>
    </div>
  </ui-form-group>
</template>

<style scoped></style>
