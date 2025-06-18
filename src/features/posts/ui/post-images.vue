<script lang="ts" setup>
interface Image {
  image: {
    src: string
    alt: string
    height: number
    width: number
    type: string
    sources?: []
  }
  size: {
    width: {
      value: number
      unit: string
    }
  }
  aspectRatio: "auto" | "1/1" | "3/2" | "4/3" | "16/9"
}

interface IProps {
  images: Image[]
}

defineProps<IProps>()
const style = (size: any, aspectRatio: any) => ({
  width: `${size?.width.value}${size?.width?.unit}`,
  aspectRatio: aspectRatio
})
</script>

<template>
  <div class="my-4">
    <img
      v-for="image in images"
      class="mb-4 object-cover object-center first:mt-4"
      :src="image.src"
      :alt="image.alt"
      :style="style(image.size, image.aspectRatio)"
    />
  </div>
</template>
