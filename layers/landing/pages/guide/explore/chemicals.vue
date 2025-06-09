<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"
import hero from "@/public/img/guide/explore/chemicals/hero.png"
import outsideFactory from "@/public/img/guide/explore/chemicals/outside-factory.png"
import insideFactory from "@/public/img/guide/explore/chemicals/inside-factory.png"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/chemicals.pdf"

const images = computed(() => ({
  hero: hero,
  slider: outsideFactory,
  content: insideFactory
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
    "heading": "Chemicals",
    "text": "Uzbekistan’s chemical sector has a compelling story to tell. Building on an abundance of rich mineral resources, the industry specialises in producing nitrogen, phosphate fertilizers and basic petrochemicals. With large-scale production facilities located in Chirchiq, Ferghana, and Navoiy, the industry is benefiting from modernisation efforts and government initiatives.\n\nThe 2019-2030 National Programme for the development of the chemical industry has identified 31 projects with a total value of $12 billion. The government plans to increase production of higher value-added goods through mineral processing such PVC, synthetic rubbers and polymer composites.\n\nTo further build out Uzbekistan’s investment appeal, there’s growing interest in developing chemicals to support regional sectors such as textiles, construction and agriculture.\n\nWith strong domestic demand, and a strategic position from which to export to neighbouring Central Asian markets, Uzbekistan’s chemical resources could be the key to unlocking its full economic potential.",
    "slides": [
      {
        "heading": "$495.1 million",
        "text": "total exports in 2023"
      },
      {
        "heading": "3.2%",
        "text": "total export of Uzbekistan"
      },
      {
        "heading": "71",
        "text": "number of chemical projects"
      }
    ]
  },
  "ru": {
    "heading": "Химическая промышленность",
    "text": "Химическая промышленность Узбекистана имеет впечатляющую историю развития. Опираясь на богатые минеральные ресурсы, отрасль специализируется на производстве азотных и фосфатных удобрений, а также основных нефтехимических продуктов. С крупными производственными мощностями, расположенными в Чирчике, Фергане и Навои, отрасль активно модернизируется и поддерживается инициативами правительства.\n\nНациональная программа развития химической промышленности на 2019–2030 годы включает 31 проект, общей стоимостью 12 млрд долл. США. Правительство планирует увеличить производство товаров с высокой добавленной стоимостью, таких как ПВХ, синтетические каучуки и полимерные композиты.\n\nДля дальнейшего повышения инвестиционной привлекательности Узбекистана растет интерес к разработке химических веществ для поддержки таких региональных секторов, как текстильная промышленность, строительство и сельское хозяйство.\n\nС высоким внутренним спросом и стратегией, направленной на экспорт на соседние рынки Центральной Азии, химические ресурсы Узбекистана могут стать ключом к раскрытию его полного экономического потенциала.",
    "slides": [
      {
        "heading": "$495,1 млн",
        "text": "общий объем экспорта в 2023 году"
      },
      {
        "heading": "3,2%",
        "text": "всего экспорта Узбекистана"
      },
      {
        "heading": "71",
        "text": "количество проектов в химической промышленности"
      }
    ]
  },
  "uz": {
    "heading": "Kimyo sanoati",
    "text": "O'zbekistonning kimyo sanoati ajoyib rivojlanish tarixiga ega. Boy mineral resurslarga tayanib, sanoat azot va fosfat o'g'itlari, shuningdek, asosiy neftkimyo mahsulotlarini ishlab chiqarishga ixtisoslashgan. Chiroqchi, Farg'ona va Navoi shaharlarida joylashgan katta ishlab chiqarish quvvatlari bilan sanoat faoliyatini modernizatsiya qilmoqda va hukumat tashabbuslari bilan qo'llab-quvvatlanmoqda.\n\nMilliy kimyo sanoatini rivojlantirish dasturi 2019–2030 yillar uchun 31 ta loyiha va umumiy qiymati 12 milliard dollarni o'z ichiga oladi. Hukumat yuqori qo'shilgan qiymatga ega mahsulotlar, masalan, PVC, sintetik kauchuklar va polimer kompozitlar ishlab chiqarishni oshirishni rejalashtirmoqda.\n\nO'zbekistonning investitsiya jozibadorligini oshirish maqsadida, mato sanoati, qurilish va qishloq xo'jaligi kabi mintaqaviy sektorlarga yordam berish uchun kimyoviy moddalarning ishlab chiqilishiga qiziqish ortib bormoqda.\n\nYuqori ichki talab va Markaziy Osiyo bozorlariga eksport qilish uchun strategik pozitsiya bilan birga, O'zbekistonning kimyoviy resurslari uning to'liq iqtisodiy potensialini ochishda kalit bo'lishi mumkin.",
    "slides": [
      {
        "heading": "495.1 million dollar",
        "text": "2023 yildagi umumiy eksport hajmi"
      },
      {
        "heading": "3.2%",
        "text": "O'zbekistonning jami eksportining"
      },
      {
        "heading": "71",
        "text": "Kimyo sanoatidagi loyihalar soni"
      }
    ]
  }
}
</i18n>
