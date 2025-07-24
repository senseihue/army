<script setup lang="ts">
interface IProps {
  sitemap: IHeaderNav
}

defineProps<IProps>()
</script>

<template>
  <div>
    <div class="border-texas border bg-gradient-to-t from-[#7D9D7F] to-[#9CB39D] p-2">
      <nuxt-link-locale class="font-bold" :to="sitemap.to">{{ sitemap.label }}</nuxt-link-locale>
    </div>
    <ul v-if="sitemap.dropdown">
      <li v-for="(link, id) in sitemap.dropdown" class="my-1 border-2 border-black p-2" :key="id">
        <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "heading": "Cookie Policy",
    "text": "We use cookies to enhance your experience on our website. By continuing to use our site, you agree to our use of cookies. You can manage your preferences through your browser settings."
  },
  "ru": {
    "heading": "Политика использования файлов cookie",
    "text": "Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. Продолжая использовать наш сайт, вы соглашаетесь на использование нами файлов cookie. Вы можете управлять своими предпочтениями через настройки браузера."
  },
  "uz": {
    "heading": "Cookie siyosati",
    "text": "Veb-saytimizda tajribangizni oshirish uchun Cookie-fayllardan foydalanamiz. Saytimizdan foydalanishda davom etib, siz Cookie-fayllardan foydalanishimizga rozilik bildirasiz. Siz o'zingizning afzalliklaringizni brauzer sozlamalari orqali boshqarishingiz mumkin."
  }
}
</i18n>
