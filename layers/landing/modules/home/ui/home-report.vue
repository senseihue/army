<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="bg-blue-bright">
    <div class="container-7xl relative">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="order-2 mb-12 lg:order-1" data-aos="fade-right" data-aos-delay="50">
            <p class="mb-8 whitespace-pre-line text-gray-700">{{ t("text") }}</p>
            <ui-button size="lg" color="success" rounded :label="t('view_report')" />
          </div>

          <div class="right-4 order-1 w-full lg:absolute lg:order-2 lg:max-w-sm" data-aos="zoom-in" data-aos-delay="50">
            <nuxt-img
              class="aspect-video w-full object-cover object-center lg:aspect-auto"
              src="https://dev-portal.miit.uz/uploads/new_uzb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "view_report": "View report",
    "text": "From IT to green energy and tourism, the “New Uzbekistan: The Big Country With Big Opportunities” report offers foreign investors an overview of the country’s most vibrant sectors – both established and emerging.\n\nThe report captures the sentiment of Uzbekistan’s growing community of advocates, from the London Stock Exchange to the Asian Development Bank, Rothschild & Company, the EBRD, Franklin Templeton and British American Tobacco."
  },
  "ru": {
    "view_report": "Посмотреть отчет",
    "text": "От IT до зеленой энергетики и туризма, отчет «Новый Узбекистан: большая страна больших возможностей» предлагает иностранным инвесторам обзор самых динамичных секторов страны — как устоявшихся, так и развивающихся.\n\nОтчет отражает настроения растущего сообщества международных инвесторов и институтов, заинтересованных в Узбекистане, от Лондонской фондовой биржи до Азиатского банка развития, Rothschild & Company, ЕБРР, Franklin Templeton и British American Tobacco."
  },
  "uz": {
    "view_report": "Hisobotni ko'rish",
    "text": "ITdan yashil energetika va turizmga qadar, «Yangi O‘zbekiston: katta imkoniyatlarga ega katta mamlakat» hisobotida xorijiy investorlar uchun mamlakatning eng dinamik sektorlari, ya'ni rivojlangan va katta o’zgarishlarga erishayotgan sohalar bilan tanishib chiqish imkoniyati taqdim etiladi.\n\nHisobot O‘zbekistonga qiziqish bildirgan xalqaro investorlar va institutlarning o‘sib borayotgan jamoatchiligining ruhiyatini aks ettiradi, London fond birjasidan tortib, Osiyo taraqqiyot banki, Rothschild & Company, EBRR, Franklin Templeton va British American Tobacco kabi tashkilotlargacha."
  }
}
</i18n>
