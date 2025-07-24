<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
} from "~/features/guide/explore"
import hero from "public/img/guide/explore/zdravoohranenie/wmremove-transformed-(8)-1.jpeg"
import hero1 from "public/img/guide/explore/zdravoohranenie/healthcare-sector-image-1.png"

const { t } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/tourism.pdf"

const images = computed(() => ({
  hero,
  content: hero1
}))
</script>

<template>
  <div>
    <explore-sector-hero :image="images.hero" :heading="t('heading')" />
    <explore-sector-content :image="images.content" :text="t('text')" />
  </div>
</template>

<i18n>
{
  "en": {
    "heading": "Healthcare",
    "text": "Uzbekistan’s healthcare system is predominantly state- run and structured across three administrative levels: national, regional, and district or municipal. Public health services are financed primarily through national tax revenues. In recent years, the Government of Uzbekistan has placed a strong emphasis on health sector reform and modernization. Rising demand for quality healthcare is being driven by sustained economic growth, demographic expansion, accelerating urbanization, and increasing per capita income. \n \n To catalyse foreign investment in the healthcare sector,Uzbekistan is actively advancing the use of public -private partnerships (PPPs). The government is particularly focused on mobilizing private sector participation in high - priority areas such as oncology screening and treatment, as well as the development and operation of multifunctional medical facilities. \n \n The sector offers a range of fiscal incentives designed to attract investment and enhance service delivery. Medical institutions that derive at least 90% of their revenue from healthcare services (excluding cosmetology and dentistry) are eligible for preferential treatment, including full exemption from corporate income tax and value-added tax (VAT), relief from property tax obligations, and duty-free importation of medical  equipment. These measures are part of a broader policy framework aimed at improving access to quality healthcare while fostering private sector engagement."
  },
  "ru": {
    "heading": "Туризм",
    "text": "Система здравоохранения Узбекистана в основном находится в ведении государства и структурирована на трех административных уровнях: национальном, региональном и районном или муниципальном. Услуги общественного здравоохранения финансируются в основном за счет государственных налоговых поступлений. В последние годы правительство Узбекистана уделяет большое внимание реформированию и модернизации сектора здравоохранения. Растущий спрос на качественное медицинское обслуживание обусловлен устойчивым экономическим ростом, демографическим ростом, ускоряющейся урбанизацией и увеличением дохода на душу населения. \n \n  Для привлечения иностранных инвестиций в сектор здравоохранения Узбекистан активно продвигает использование механизмов государственно-частного партнерства (ГЧП). Правительство уделяет особое внимание мобилизации участия частного сектора в таких приоритетных областях, как скрининг и лечение онкологических заболеваний, а также развитие и эксплуатация многофункциональных медицинских учреждений.\n \n Этот сектор предлагает ряд налоговых льгот, направленных на привлечение инвестиций и повышение качества предоставляемых услуг. Медицинские учреждения, которые получают не менее 90% своих доходов от медицинских услуг (за исключением косметологии и стоматологии), имеют право на льготный режим, включая полное освобождение от корпоративного подоходного налога и налога на добавленную стоимость (НДС), освобождение от обязательств по налогу на имущество и беспошлинный ввоз медицинского оборудования. Эти меры являются частью более широкой политики, направленной на улучшение доступа к качественному медицинскому обслуживанию при одновременном привлечении частного сектора."
  },
  "uz": {
    "heading": "Turizm",
    "text": "O'zbekiston sog'liqni saqlash tizimi asosan davlat tomonidan boshqariladi va uchta ma'muriy darajada tuzilgan: milliy, mintaqaviy va tuman yoki shahar. Sog'liqni saqlash xizmatlari asosan milliy soliq tushumlari hisobidan moliyalashtiriladi. So'nggi yillarda O'zbekiston hukumati sog'liqni saqlash sohasini isloh qilish va modernizatsiya qilishga katta e'tibor qaratmoqda. Sifatli sog'liqni saqlashga bo'lgan talabning o'sishi barqaror iqtisodiy o'sish, demografik kengayish, urbanizatsiyani tezlashtirish va aholi jon boshiga daromadni oshirish bilan bog'liq. \n \n Sog'liqni saqlash sohasiga xorijiy investitsiyalarni jalb qilish maqsadida O'zbekiston davlat-xususiy sheriklik (Dxsh) dan foydalanishni faol rivojlantirmoqda. Hukumat, ayniqsa, onkologik skrining va davolash, shuningdek, ko'p funktsiyali tibbiyot muassasalarini rivojlantirish va ishlatish kabi ustuvor yo'nalishlarda xususiy sektor ishtirokini safarbar etishga qaratilgan. \n \n  Sektor investitsiyalarni jalb qilish va xizmat ko'rsatishni yaxshilash uchun mo'ljallangan bir qator moliyaviy imtiyozlarni taklif etadi. Daromadlarining kamida 90 foizini sog'liqni saqlash xizmatlaridan oladigan tibbiyot muassasalari (kosmetologiya va stomatologiyadan tashqari) imtiyozli davolanish huquqiga ega, shu jumladan korporativ daromad solig'i va qo'shilgan qiymat solig'i (QQS) dan to'liq ozod qilish, mulk solig'i majburiyatlaridan ozod qilish va tibbiy asbob-uskunalarni bojsiz olib kirish. Ushbu chora-tadbirlar xususiy sektorni jalb qilishni rivojlantirish bilan birga sifatli sog'liqni saqlash tizimidan foydalanishni yaxshilashga qaratilgan kengroq siyosat doirasining bir qismidir."
  }
}
</i18n>
