<script setup lang="ts">
import { ReasonNav, SectionGrid, ReasonWrapper } from "#layers/landing/modules/reason/ui"
import { CultureSlides } from "#layers/landing/modules/reason/culture/ui"
definePageMeta({ fixedHeader: false })

const { t } = useI18n({ useScope: "local" })



</script>

<template>
  <div>
    <reason-nav />
    <section-grid>
      <template #right>
        <div>
          <p class="text-justify">
            {{ t("description") }}
          </p>
        </div>
      </template>
      <template #left>
        <div>
          <img class="section-card__image" src="/public/img/reason/culture/image_2024-12-06_18-18-01.png" alt="" />
        </div>
      </template>
    </section-grid>
    <section-grid>
      <template #left>
        <div>
          <p v-html="t('description2')" class="text-justify"></p>
        </div>
      </template>
      <template #right>
        <div>
          <img class="section-card__image" src="/public/img/reason/culture/image_2024-12-06_18-18-43.png" alt="" />
        </div>
      </template>
    </section-grid>
    <culture-slides />
    <reason-wrapper>
      <p v-html="t('description3')"></p>
    </reason-wrapper>
  </div>
</template>

<i18n>
{
  "en": {
    "description": "Uzbekistan is renowned for its artisanal crafts, including intricate silk weaving, pottery, and decorative woodwork, with techniques passed down through generations. This craftsmanship has created a foundation for sectors like textiles, fashion, and tourism, offering the opportunity to collaborate with skilled local artisans to bring authentic, high-quality products to international markets.",
    "description2": "Uzbekistan’s culinary traditions, particularly its world-famous dishes like “plov”, highlight its deep-seated hospitality and social culture. The warm, welcoming nature of Uzbek people is one of the country’s greatest assets, creating a friendly environment for foreign investors and facilitating meaningful local partnerships. This cultural warmth also supports sectors like hospitality, tourism, and services.",
    "description3": "Home to stunning cities like Samarkand, Bukhara, and Khiva, Uzbekistan boasts numerous UNESCO World Heritage Sites. The government is actively promoting these attractions, which provides fertile ground for tourism investments. The expanding infrastructure and commitment to preserving historical sites signals great potential for investors interested in tourism, hospitality, and cultural exchange initiatives. <br>Investing in Uzbekistan is more than a financial opportunity; it’s a chance to engage with a culture rich in tradition and forward-thinking ambition. The country’s unique cultural landscape creates an inviting, inspiring environment for investors who value both economic potential and cultural depth."
  },
  "uz": {
    "description": "Uzbekistan is renowned for its artisanal crafts, including intricate silk weaving, pottery, and decorative woodwork, with techniques passed down through generations. This craftsmanship has created a foundation for sectors like textiles, fashion, and tourism, offering the opportunity to collaborate with skilled local artisans to bring authentic, high-quality products to international markets.",
    "description2": "O'zbekistonning pazandalik an'analari, xususan, palov kabi dunyoga mashhur taomlari uning mehmondo'stligi va ijtimoiy madaniyatini aks ettiradi. O'zbek xalqining samimiy va mehmondo'st tabiati mamlakatning eng katta boyliklaridan biri bo'lib, xorijiy investorlar uchun do'stona muhit yaratadi va mahalliy hamkorlikni mazmunli qilishga yordam beradi. Ushbu madaniy iliqlik mehmondo'stlik, turizm va xizmat ko'rsatish kabi sohalarni ham qo'llab-quvvatlaydi.",
    "description3": "Samarqand, Buxoro va Xiva kabi ajoyib shaharlar joylashgan O'zbekiston YUNESKOning ko'plab Jahon merosi ob'ektlariga ega. Hukumat sayyohlik sarmoyalari uchun qulay zamin yaratadigan ushbu diqqatga sazovor joylarni faol ravishda targ'ib qilmoqda. Kengayib borayotgan infratuzilma va tarixiy joylarni saqlab qolish majburiyati turizm, mehmondo'stlik va madaniy almashinuv tashabbuslariga qiziqqan investorlar uchun katta imkoniyatlardan dalolat beradi.<br> O'zbekistonga sarmoya kiritish-bu moliyaviy imkoniyat emas, balki an'analarga boy madaniyat va oldinga intilish bilan shug'ullanish imkoniyatidir. Mamlakatning noyob madaniy landshafti iqtisodiy salohiyatni ham, madaniy chuqurlikni ham qadrlaydigan investorlar uchun yoqimli, ilhomlantiruvchi muhit yaratadi."
  },
  "ru": {
    "description": "Узбекистан славится своими ремеслами, в том числе сложным шелкоткачеством, керамикой и декоративной резьбой по дереву, техника которых передается из поколения в поколение. Это мастерство создало основу для таких отраслей, как текстильная промышленность, мода и туризм, предоставляя возможность сотрудничать с квалифицированными местными мастерами для вывода аутентичной высококачественной продукции на международные рынки.",
    "description2": "Кулинарные традиции Узбекистана, особенно такие всемирно известные блюда, как “плов”, подчеркивают его глубокое гостеприимство и социальную культуру. Теплый, гостеприимный характер узбекского народа является одним из величайших достоинств страны, создавая благоприятную среду для иностранных инвесторов и способствуя налаживанию конструктивных партнерских отношений на местном уровне. Это культурное тепло также поддерживает такие отрасли, как гостиничный бизнес, туризм и сфера услуг.",
    "description3": "Узбекистан, где расположены такие потрясающие города, как Самарканд, Бухара и Хива, может похвастаться многочисленными объектами Всемирного наследия ЮНЕСКО. Правительство активно продвигает эти достопримечательности, что создает благоприятную почву для инвестиций в туризм. Расширяющаяся инфраструктура и стремление сохранить исторические памятники свидетельствуют о большом потенциале для инвесторов, заинтересованных в инициативах в области туризма, гостиничного бизнеса и культурного обмена.    <br> Инвестирование в Узбекистан - это не просто финансовая возможность; это шанс приобщиться к культуре, богатой традициями и дальновидными амбициями. Уникальный культурный ландшафт страны создает привлекательную, вдохновляющую среду для инвесторов, которые ценят как экономический потенциал, так и глубину культуры."
  }
}
</i18n>

<style scoped></style>
