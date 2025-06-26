<script setup lang="ts">

interface IProps {
  service: IService
}
const route = useRoute()

const {data: steps} = await useFetch<IResponse<IServiceStep[]>>('/gateway/siw/public/service/step', {
  query: {
    process_id: 23,
    page: 0,
    size: 100
  }
})

</script>

<template>
  <div class="w-full rounded-2xl bg-white px-2 py-4">
    <div class="grid gap-2">
      <div>
        <div
          v-for="step in steps?.content"
          class="!text-midnight flex cursor-pointer items-center gap-1 rounded-[14px] !bg-[#D6E8FF] p-[10px] text-black"
          :key="step.id"
        >
          <icon :name="step.icon" />
          <p data-v-ea57a248="" class="text-sm font-medium">
            {{ step.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
