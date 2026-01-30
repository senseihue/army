<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="ticker-wrap">
    <div class="ticker-move">
      <span class="ticker-item">
        {{ t("title") }}
      </span>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "title": "● УВАЖАЕМЫЕ ПОЛЬЗОВАТЕЛИ! САЙТ РАБОТАЕТ В ТЕСТОВОМ РЕЖИМЕ, НЕКОТОРЫЕ ЕГО ФУНКЦИИ И ДАННЫЕ НЕВЕРНЫ МОЖЕТ БЫТЬ."
  },
  "uz": {
    "title": "● ҲУРМАТЛИ ФОЙДАЛАНУВЧИЛАР! САЙТ ТЕСТ РЕЖИМИДА ИШЛАМОҚДА, УНИНГ БАЪЗИ ФУНКСИЯЛАРИ ВА МАЪЛУМОТЛАРИ НОТЎҒРИ БЎЛИШИ МУМКИН."
  },
  "oz": {
    "title": "● HURMATLI FOYDALANUVCHILAR! SAYT TEST REJIMIDA ISHLAMOQDA, UNING BA'ZI FUNKSIYALARI VA MA'LUMOTLARI NOTO'G'RI BO'LISHI MUMKIN."
  }
}
</i18n>

<style>
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  --bg-color: #0f172a;
  --card-bg: #1e293b;
  --text-color: #f8fafc;
}

/* --- THE MOVING TEXT BAR --- */
.ticker-wrap {
  @apply absolute top-0 w-full overflow-hidden whitespace-nowrap bg-primary-600/50 py-2 text-white;
}

.ticker-move {
  @apply inline-block pl-2 text-[0.9rem] font-bold uppercase;
  animation: ticker 15s linear infinite;
  letter-spacing: 1px;
}

.ticker-item {
  display: inline-block;
  padding: 0 2rem;
}

@keyframes ticker {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
