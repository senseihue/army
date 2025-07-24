<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorHero,
} from "~/features/guide/explore"
import hero from "public/img/guide/explore/oil-and-gas/oil-gas.jpeg"
import hero1 from "public/img/guide/explore/oil-and-gas/oilandgas.jpg"
import hero2 from "public/img/guide/explore/oil-and-gas/image_2025-06-27_11-41-52.png"
import statistic1 from "public/img/guide/explore/oil-and-gas/graphasfd.jpg"
import statistic2 from "public/img/guide/explore/oil-and-gas/image_2025-06-26_18-00-04.png"

const { t } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const images = computed(() => ({
  hero,
  content: hero1
}))
</script>

<template>
  <div>
    <explore-sector-hero :image="images.hero" :heading="t('heading')" />
    <section>
      <div class="container-7xl">
        <div class="p-section">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <img class="w-full object-cover object-center" alt="Image" :src="images.content" />
              <img class="w-full object-cover object-center" alt="Image" :src="hero2" />
            </div>
            <div>
              <p class="whitespace-pre-line font-bold text-gray-600 text-justify">{{ t('heading1') }}</p>
              <br>
              <p class="whitespace-pre-line text-gray-600 text-justify">{{ t('text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-7xl">
        <div class="p-section">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <img class="w-full object-cover object-center" alt="Image" :src="statistic1" />
            <img class="w-full object-cover object-center" alt="Image" :src="statistic2" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<i18n>
{
  "en": {
    "heading": "Oil and gas",
    "heading1": "A Snapshot of the Oil and Gas Sector",
    "text": "The oil and gas sector remains a cornerstone of Uzbekistan’s economy, contributing significantly to fiscal revenues, export earnings, and employment, while serving as a critical input provider for other sectors. The sector is primarily overseen by the state-owned enterprise Uzbekneftegaz, which plays a central role in domestic production. International participation is structured largely through production sharing agreements (PSAs) with the state.\n\nUzbekneftegaz is the principal natural gas producer in Uzbekistan, responsible for approximately 60% of the country’s total gas output. The company plays a critical role in the national economy, contributing an estimated 3.5% to GDP. It oversees the development and operation of 129 hydrocarbon fields, which collectively contain around 50% of Uzbekistan’s proven reserves. In addition to upstream activities, Uzbekneftegaz maintains an integrated refining and marketing platform, with a total processing capacity of 6.7 million tons per year, supporting downstream diversification and value addition within the sector"
  },
  "ru": {
    "heading": "Нефть и газ",
    "heading1": "Краткий обзор нефтегазового сектора",
    "text": "Нефтегазовый сектор остается краеугольным камнем экономики Узбекистана, внося значительный вклад в налоговые поступления, экспортные поступления и занятость, а также являясь важным источником ресурсов для других секторов. Сектор в основном контролируется государственным предприятием \"Узбекнефтегаз\", которое играет центральную роль в отечественном производстве. Международное участие в основном обеспечивается соглашениями о разделе продукции (СРП) с государством.\n\n \"Узбекнефтегаз\" является основным производителем природного газа в Узбекистане, на долю которого приходится около 60% от общего объема добычи газа в стране. Компания играет важную роль в национальной экономике, обеспечивая, по оценкам, 3,5% ВВП. Он курирует разработку и эксплуатацию 129 месторождений углеводородов, которые в совокупности содержат около 50% доказанных запасов Узбекистана. В дополнение к деятельности по добыче полезных ископаемых, \"Узбекнефтегаз\" поддерживает интегрированную платформу переработки и сбыта с общей мощностью переработки 6,7 млн тонн в год, что способствует диверсификации переработки и увеличению добавленной стоимости в секторе"
  },
  "uz": {
    "heading": "Neft va gaz",
    "heading1": "Neft va gaz sektorining surati",
    "text": "Neft va gaz sektori O'zbekiston iqtisodiyotining asosi bo'lib qolmoqda, fiskal daromadlar, eksport daromadlari va bandlikka sezilarli hissa qo'shmoqda, shu bilan birga boshqa tarmoqlar uchun muhim omil bo'lib xizmat qilmoqda. Sektorni birinchi navbatda mahalliy ishlab chiqarishda Markaziy rol o'ynaydigan O'zbekneftgaz davlat korxonasi nazorat qiladi. Xalqaro ishtirok etish asosan davlat bilan ishlab chiqarishni taqsimlash shartnomalari (PSA) orqali tuzilgan.\n\n O'zbekneftgaz O'zbekistondagi asosiy tabiiy gaz ishlab chiqaruvchisi bo'lib, mamlakatdagi umumiy gaz ishlab chiqarishning taxminan 60 foizini tashkil qiladi. Kompaniya milliy iqtisodiyotda muhim rol o'ynaydi va YaIMga taxminan 3,5% hissa qo'shadi. U 129 ta uglevodorod konlarini o'zlashtirish va ekspluatatsiya qilishni nazorat qiladi, ular tarkibida O'zbekistonning tasdiqlangan zaxiralarining 50% ga yaqini mavjud. O'zbekneftgaz yuqori oqimdagi faoliyatdan tashqari, yiliga umumiy qayta ishlash quvvati 6,7 million tonnani tashkil etadigan kompleks qayta ishlash va marketing platformasiga ega bo'lib, quyi oqimlarni diversifikatsiya qilish va sektor ichidagi qiymatni qo'shishni qo'llab-quvvatlaydi"
  }
}
</i18n>
