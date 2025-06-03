<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/pharmaceuticals.pdf"

const images = computed(() => ({
  hero: "https://dev-portal.miit.uz/uploads/image_assetherosizedefaultstatedefault@2x1-1.png",
  slider: "https://dev-portal.miit.uz/uploads/guide/image-assetsmallsizedefaultstatedefault-2-3.png",
  content: "https://dev-portal.miit.uz/uploads/guide/image-assetsmallsizedefaultstatedefault-1-3.png"
}))
</script>

<template>
  <div>
    <explore-sector-hero :image="images.hero" :heading="t('heading')" />

    <explore-sector-slider :image="images.slider">
      <explore-sector-slide
        v-for="(slide, idx) in tm('slides')"
        :key="idx"
        :text="rt(slide?.text)"
        :heading="rt(slide?.heading)"
      />
    </explore-sector-slider>

    <explore-sector-content :image="images.content" :text="t('text')" />
    <explore-sector-footer :file-url="fileUrl" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Pharmaceuticals",
    "text": "In 2023, Uzbekistan’s pharmaceutical industry reached an impressive $338.2 million in production and $1.51 billion in foreign trade turnover, equalling 2.6% of total trade and 4% of imports. An industry still in its infancy, it is showcasing positive signs for sustained growth.\n\nA key strategy for growing the sector is a strong focus on education to produce a highly-skilled workforce. The industry has 5 higher educational institutions, 81 professional colleges and 9 high-schools – all specialising in pharmaceuticals. The government aims to nurture the next generation of experts to create a consistent stream of talent.\n\nThe flagship project for the sector was the launch of the Tashkent Pharma Park. The complex is home to 18 projects worth $746.6 million with the objective of improving domestic production and fostering innovation. Tashkent Pharma Park is also home to key institutions such as the Pharmaceutical Industry Development Agency and the Center for the Safety of Pharmaceutical Products.\n\nAs part of Tashkent Pharma Park, the development of the University of Pharmacy with International Diploma to accompany the Pharmaceutical Technical University, is underway. Designed as a tool to enhance the country’s research abilities, it aligns with the government’s approach to integrate education, research and development of the sector to strengthen Uzbekistan’s position as an emerging force in the global pharmaceutical market.",
    "slides": [
      {
        "heading": "$1.51 bln",
        "text": "Foreign trade turnover in 2023"
      },
      {
        "heading": "2.6%",
        "text": "of Uzbekistans's total trade"
      },
      {
        "heading": "$338.2 million",
        "text": "Pharmaceutical Production in 2023"
      }
    ]
  },
  "ru": {
    "heading": "Фармацевтика",
    "text": "В 2023 году на долю фармацевтической промышленности Узбекистана приходилось 2,6% от общего объема торговли страны и 4% от ее импорта. Несмотря на то, что отрасль все еще находится на ранних стадиях своего развития, она демонстрирует многообещающие признаки устойчивого роста.\n\nКлючевая стратегия роста отрасли включает акцент на подготовке высококвалифицированных специалистов. В рамках отрасли функционируют 5 высших учебных заведений, 81 профессиональный колледж и 9 специализированных школ. Государство стремится создать стабильный приток специалистов.\n\nФлагманским проектом для сектора стал запуск Ташкентского Фармацевтического парка. Комплекс включает в себя 18 проектов стоимостью 746,6 млн долл. США, направленных на улучшение внутреннего производства и стимулирование инноваций. Ташкентский Фармацевтический парк также является домом для таких учреждений, как Агентство по развитию фармацевтической промышленности и Центр безопасности фармацевтических продуктов.\n\nВ рамках Ташкентского Фармацевтического парка предусмотрено развитие Фармацевтического Университета. Парк является элементом повышения научно-исследовательского потенциала страны в соответствии с государственным подходом к интеграции образования, исследований и развития сектора в целях укрепления позиций Узбекистана как нового игрока на мировом рынке фармацевтики.",
    "slides": [
      {
        "heading": "$1,51 млрд",
        "text": "Внешнеторговый оборот в 2023 году"
      },
      {
        "heading": "2,6%",
        "text": "От общего объема торговли Узбекистана"
      },
      {
        "heading": "$338,2 млн",
        "text": "фармацевтическое производство в 2023 году"
      }
    ]
  },
  "uz": {
    "heading": "Farmatsevtika",
    "text": "2023 yilda O'zbekistonning farmatsevtika sanoati mamlakatning umumiy savdo hajmining 2,6% ini va uning importining 4% ini tashkil etdi. Tarmoq rivojlanishning dastlabki bosqichida bo'lishiga qaramay, barqaror o'sish uchun istiqbolli belgilarni ko'rsatmoqda.\n\nSektorning o'sish strategiyasida yuqori malakali mutaxassislarni tayyorlashga katta e'tibor qaratiladi. Sektor ichida 5 ta oliy o'quv yurtlari, 81 ta kasb-hunar kollejlari va 9 ta maxsus maktablar faoliyat yuritmoqda. Davlat mutaxassislarni barqaror tayyorlashni maqsad qilib qo'ygan.\n\nSektor uchun asosiy loyiha Toshkent Farmatsevtika Parkining ishga tushirilishi bo'ldi. Kompleks 746,6 million AQSh dollari qiymatiga ega bo'lgan 18 ta loyiha o'z ichiga oladi va ichki ishlab chiqarishni yaxshilash hamda innovatsiyalarni rag'batlantirishga qaratilgan. Toshkent farmatsevtika parkida shuningdek, Farmatsevtika sanoatini rivojlantirish agentligi va Farmatsevtika mahsulotlari xavfsizligi markazi kabi asosiy tashkilotlar mavjud.\n\nToshkent Farmatsevtika Parki doirasida Farmatsevtika Universitetining rivojlantirilishi rejalashtirilgan. Park mamlakatning ilmiy-tadqiqot salohiyatini oshirish elementidir va O'zbekistonning farmatsevtika sohasidagi global bozorda yangi kuch sifatida o'z o'rnini mustahkamlash maqsadida ta'lim, tadqiqotlar va sektorni rivojlantirishni integratsiya qilishga qaratilgan davlat yondashuviga mos keladi.",
    "slides": [
      {
        "heading": "1.51 milliard dollar",
        "text": "2023 yildagi tashqi savdo aylanmasi"
      },
      {
        "heading": "2.6%",
        "text": "O'zbekistonning jami savdosidan"
      },
      {
        "heading": "338.2 million dollar",
        "text": "2023 yildagi farmatsevtika ishlab chiqarishi"
      }
    ]
  }
}
</i18n>
