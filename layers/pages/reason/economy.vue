<script setup lang="ts">
import { ReasonNav, SectionGrid, ReasonWrapper } from "~/layers/features/reason"

import {
  EconomyHero,
  EconomyChart,
  EconomyRate,
  EconomyFtt,
  EconomyContactUs,
  EconomyFdi
} from "~/layers/features/reason/economy"

const { t } = useI18n({ useScope: "local" })
definePageMeta({ fixedHeader: true })

const inflationRate = {
  leftNumber: 14.4,
  rightNumber: 9.8,
  leftYear: 2017,
  rightYear: 2024
}

const unemploymentRate = {
  leftNumber: 10.5,
  rightNumber: 5.8,
  leftYear: 2020,
  rightYear: 2024
}
</script>

<template>
  <div>
    <economy-hero />
    <reason-nav />

    <section-grid>
      <template #left>
        <economy-chart />
      </template>

      <template #right>
        <p class="mt-4 text-justify">
          {{ t("chart-description") }}
        </p>
      </template>
    </section-grid>

    <section-grid>
      <template #left>
        <p class="mt-4 text-justify">
          {{ t("inflation-rate.description") }}
        </p>
      </template>

      <template #right>
        <economy-rate
          :left-year="inflationRate.leftYear"
          :left-number="inflationRate.leftNumber"
          :right-number="inflationRate.rightNumber"
          :right-year="inflationRate.rightYear"
          :title="t('inflation-rate.title')"
          :sub-title="t('inflation-rate.sub-title')"
        />
      </template>
    </section-grid>

    <section-grid>
      <template #right>
        <p class="mt-4 text-justify">
          {{ t("unemployment-rate.description") }}
        </p>
      </template>

      <template #left>
        <economy-rate
          :left-year="unemploymentRate.leftYear"
          :left-number="unemploymentRate.leftNumber"
          :right-number="unemploymentRate.rightNumber"
          :right-year="unemploymentRate.rightYear"
          :title="t('unemployment-rate.title')"
          :sub-title="t('unemployment-rate.sub-title')"
        />
      </template>
    </section-grid>

    <section-grid>
      <template #right>
        <economy-ftt />
      </template>

      <template #left>
        <p class="mt-4 text-justify">
          {{ t("fft.description") }}
        </p>
      </template>
    </section-grid>

    <reason-wrapper>
      <p class="text-center">
        {{ t("fdi-description") }}
      </p>
    </reason-wrapper>

    <economy-fdi />

    <economy-contact-us>
      <template #content>
        <h3 class="text-center">
          <strong>
            {{ t("contact-us") }}
          </strong>
        </h3>
      </template>

      <ui-button class="ui-button-rounded" size="lg" color="success" :label="t('contact-us-label')" />
    </economy-contact-us>
  </div>
</template>

<style>
.text-title {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2rem;
}

@media (min-width: 1024px) {
  .text-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "fft": {
      "description": "Job creation, especially among young people, remains one of the most important challenges. The government is taking steps to support small and medium-sized enterprises (SMEs), which should help reduce unemployment. The growth of sectors such as agriculture and tourism is also contributing to higher employment."
    },
    "contact-us-label": "Contact Us",
    "contact-us": "Uzbekistan’s economic transformation is advanced but not yet complete – will you join us?",
    "fdi-description": "Foreign direct investment (FDI) is also rising, driven by improvements in the legal framework and new initiatives aimed at attracting foreign companies. Special attention is being given to strategically important sectors, such as renewable energy and mining, which are attracting major international companies.",
    "chart-description": "The GDP growth in 2024 reached 6.5%, reflecting a strong recovery and robust economic performance. This growth rate indicates a positive outlook for the country's economy. It reflects a high development pace, especially in construction, industry, and agriculture. The government actively supports the private sector and improves business conditions, which helps maintain prospects for continued economic growth.",
    "inflation-rate": {
      "title": "Inflation Rate, %",
      "sub-title": "Decreased by 1.4 times",
      "description": "Inflation in Uzbekistan has remained around 9-10% in recent years, which is higher than in developed countries but in line with other developing economies. The Central Bank of Uzbekistan follows an inflation targeting policy to manage inflation levels and ensure price predictability for businesses. Interest rates also vary, stimulating economic activity and ensuring access to credit for businesses."
    },
    "unemployment-rate": {
      "title": "Unemployment Rate, %",
      "sub-title": "Decreased by 1.8 times",
      "description": "Job creation, especially among young people, remains one of the most important challenges. The government is taking steps to support small and medium-sized enterprises (SMEs), which should help reduce unemployment. The growth of sectors such as agriculture and tourism is also contributing to higher employment."
    }
  },
  "ru": {
    "fft": {
      "description": "Создание рабочих мест, особенно среди молодежи, остается одной из важнейших задач. Правительство предпринимает шаги по поддержке малых и средних предприятий (МСП), что должно способствовать снижению безработицы. Рост таких секторов, как сельское хозяйство и туризм, также способствует повышению занятости."
    },
    "contact-us-label": "Связаться с нами",
    "contact-us": "UzbekistanЭкономические преобразования в Узбекистане продвигаются вперед, но еще не завершены – присоединитесь ли вы к нам?",
    "fdi-description": "Прямые иностранные инвестиции (ПИИ) также растут благодаря совершенствованию законодательной базы и новым инициативам, направленным на привлечение иностранных компаний. Особое внимание уделяется стратегически важным секторам, таким как возобновляемая энергетика и горнодобывающая промышленность, которые привлекают крупные международные компании.",
    "chart-description": "Рост ВВП в 2024 году достиг 6,5%, что свидетельствует о быстром восстановлении и устойчивых экономических показателях. Такие темпы роста указывают на позитивные перспективы для экономики страны. Они отражают высокие темпы развития, особенно в строительстве, промышленности и сельском хозяйстве. Правительство активно поддерживает частный сектор и улучшает условия ведения бизнеса, что помогает поддерживать перспективы дальнейшего экономического роста.",
    "inflation-rate": {
      "title": "Уровень инфляции, %",
      "sub-title": "Снизился в 1,4 раза",
      "description": "Инфляция в Узбекистане в последние годы остается на уровне 9-10%, что выше, чем в развитых странах, но соответствует показателям других развивающихся экономик. Центральный банк Узбекистана придерживается политики инфляционного таргетирования для управления уровнем инфляции и обеспечения предсказуемости цен для бизнеса. Процентные ставки также высоки, стимулируя экономическую активность и обеспечивая доступ к кредитам для бизнеса."
    },
    "unemployment-rate": {
      "title": "Уровень безработицы, %",
      "sub-title": "Снизился в 1,8 раза",
      "description": "Создание рабочих мест, особенно среди молодежи, остается одной из важнейших задач. Правительство предпринимает шаги по поддержке малых и средних предприятий (МСП), что должно способствовать снижению безработицы. Рост таких секторов, как сельское хозяйство и туризм, также способствует повышению занятости."
    }
  },
  "uz": {
    "fft": {
      "description": "Ayniqsa, yoshlar orasida ish o'rinlarini yaratish eng muhim muammolardan biri bo'lib qolmoqda. Hukumat ishsizlikni kamaytirishga yordam beradigan kichik va O'rta korxonalarni (ko'k) qo'llab-quvvatlash choralarini ko'rmoqda. Qishloq xo'jaligi va turizm kabi tarmoqlarning o'sishi ham bandlikning oshishiga yordam beradi."
    },
    "contact-us-label": "Bog'lanish",
    "contact-us": "O'zbekiston Respublikasi oliy Majlisi Senatining birinchi Majlisi to'g'risida axborot ilg'or, lekin hali to'liq emas   - bizga qo'shilasizmi?",
    "fdi-description": "To'g'ridan-to'g'ri xorijiy investitsiyalar (FDI) ham o'sib bormoqda, bu Qonunchilik bazasini takomillashtirish va xorijiy kompaniyalarni jalb qilishga qaratilgan yangi tashabbuslar bilan bog'liq. Yirik xalqaro kompaniyalarni jalb etayotgan qayta tiklanadigan energetika va tog ' - kon sanoati kabi strategik ahamiyatga ega sohalarga alohida e'tibor qaratilmoqda.  ",
    "chart-description": "2024-yilda yalpi ichki mahsulotning o'sishi 6,5 foizga yetdi, bu tez tiklanish va barqaror iqtisodiy ko'rsatkichlardan dalolat beradi. Bunday o'sish sur'atlari mamlakat iqtisodiyoti uchun ijobiy istiqbollarni ko'rsatadi. Ular, ayniqsa, qurilish, sanoat va qishloq xo'jaligida rivojlanishning yuqori sur'atlarini aks ettiradi. Hukumat xususiy sektorni faol qo'llab-quvvatlaydi va biznes sharoitlarini yaxshilaydi, bu esa keyingi iqtisodiy o'sish istiqbollarini qo'llab-quvvatlashga yordam beradi.",
    "inflation-rate": {
      "title": "Inflyatsiya Darajasi, %",
      "sub-title": "1,4 baravar kamaydi",
      "description": "So'nggi yillarda O'zbekistonda inflyatsiya 9-10% atrofida saqlanib qoldi, bu rivojlangan mamlakatlarga qaraganda yuqori, ammo boshqa rivojlanayotgan iqtisodiyotlarga mos keladi. O'zbekiston Markaziy banki inflyatsiya darajasini boshqarish va korxonalar uchun narxlarni bashorat qilishni ta'minlash uchun inflyatsiyaga yo'naltirilgan siyosatni olib boradi. Foiz stavkalari, shuningdek, iqtisodiy faoliyatni rag'batlantirish va korxonalar uchun kredit olish imkoniyatini ta'minlash."
    },
    "unemployment-rate": {
      "title": "Ishsizlik Darajasi, %",
      "sub-title": "1,8 baravar kamaydi",
      "description": "Ayniqsa, yoshlar orasida ish o'rinlarini yaratish eng muhim muammolardan biri bo'lib qolmoqda. Hukumat ishsizlikni kamaytirishga yordam beradigan kichik va O'rta korxonalarni (ko'k) qo'llab-quvvatlash choralarini ko'rmoqda. Qishloq xo'jaligi va turizm kabi tarmoqlarning o'sishi ham bandlikning oshishiga yordam beradi."
    }
  }
}
</i18n>
