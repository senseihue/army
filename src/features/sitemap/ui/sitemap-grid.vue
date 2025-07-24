<script setup lang="ts">
import { SitemapCard } from "~/features/sitemap"

const { list } = useSitemap()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div>
          <h3 class="mb-8 text-2xl font-bold text-blue-command lg:text-3xl">
            {{ t("heading") }}
          </h3>

          <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <sitemap-card v-for="item in list" :key="item.label" :sitemap="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
