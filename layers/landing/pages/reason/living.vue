<script setup lang="ts">
import { ReasonNav, SectionGrid, GalleryGrid } from "#layers/landing/modules/reason/ui"
import { LivingTable } from "#layers/landing/modules/reason/living/ui"
definePageMeta({
  fixedHeader: false
})

const { t } = useI18n({ useScope: "local", warnHtmlMessage: false })

const livingTableRows = ref([
  { country: "Uzbekistan", index: 1, score: 0.8 },
  { country: "Kazakhstan", index: 2, score: 0.7 },
  { country: "Kyrgyzstan", index: 3, score: 0.6 },
  { country: "Tajikistan", index: 4, score: 0.5 },
  { country: "Turkmenistan", index: 5, score: 0.4 }
])
</script>

<template>
  <div>
    <reason-nav />
    <section-grid>
      <template #left>
        <div>
          <h3 class="text-center">
            {{ t("living-uzbekistan.title") }}
          </h3>
          <br />
          <p v-html="t('living-uzbekistan.description')" class="text-justify"></p>
        </div>
      </template>
      <template #right>
        <div>
          <img class="section-card__image" src="/public/img/reason/living/tashkent-city.jpeg" alt="" />
        </div>
      </template>
    </section-grid>
    <section-grid>
      <template #right>
        <div>
          <h3 class="text-center">
            {{ t("entry-regulations.title") }}
          </h3>
          <br />
          <p v-html="t('entry-regulations.description')" class="text-justify"></p>
        </div>
      </template>
      <template #left>
        <div>
          <img
            class="section-card__image"
            src="/public/img/reason/living/uzbekistan-airways-787-8-landing1.avif"
            alt=""
          />
        </div>
      </template>
    </section-grid>
    <gallery-grid>
      <div>
        <img class="section-card__image" src="/public/img/reason/living/living-2.png" alt="" />
      </div>
      <living-table />
      <div>
        <img class="section-card__image" src="/public/img/reason/living/living-3.png" alt="" />
      </div>
      <div>
        <img class="section-card__image" src="/public/img/reason/living/original.jpg" alt="" />
      </div>
    </gallery-grid>
  </div>
</template>

<style scoped>
.section-card__image {
  width: 100%;
  aspect-ratio: auto;
  @apply object-cover object-center;
}
</style>

<i18n>
{
  "en": {
    "living-uzbekistan": {
      "title": "Living in Uzbekistan",
      "description": "The Republic of Uzbekistan is a country located in Central Asia. Its capital is Tashkent, which is also the largest city in the country. Covering an area of 448,900 km², Uzbekistan is a country rich in history and culture, standing out as a regional hub with a distinct blend of traditions and modernity. The capital, Tashkent, holds a special administrative status and serves as the country's economic and cultural center. <br /> <br /> Uzbekistan’s administrative structure is diverse, comprising the autonomous Republic of Karakalpakstan, several regions (known as viloyat), rural districts (tuman), urban districts, and cities with regional subordination. Smaller communities, including villages called kishlaks and auls, reflect the country's deep-rooted traditions and close-knit society. <br /> <br /> Living in the UTC +5 time zone (MSK +2) and connected globally by the international code +998, Uzbekistan is an exciting destination for those interested in its historical heritage, strategic location, and the economic opportunities it offers as a modernizing nation. <br> <br> Mild climate, more than 300 sunny days make Uzbekistan favorable for agriculture and tourism. Uzbekistan’s stable and secure environment, coupled with its rapidly growing economy and dynamic young population, fosters a vibrant and optimistic atmosphere where bold ideas are encouraged, and every contribution is valued."
    },
    "entry-regulations": {
      "title": "Entry Regulations",
      "description": "Citizens of 90 countries can enter Uzbekistan without a visa, with the allowed duration of stay ranging from 10 days to one year, depending on nationality. Additionally, residents of the UAE and individuals aged 55 and older are also exempt from requiring a visa to travel to Uzbekistan. To the full list of eligible countries <a target='_blank' class=' underline text-blue-midnight' href='/public/docs/list_of_90_countries_with_visa-free_regime.pdf'>click here</a>. <br> <br> The process for obtaining an Investment Visa in Uzbekistan is detailed in Resolution No. 864 (11.10.2019). Foreign nationals who invest at least 8,500 times the base calculation amount (BCA) in Uzbekistan can receive a three-year, multiple-entry Investment Visa, which is renewable indefinitely without leaving the country. Family members (spouse, parents, children) also receive guest visas with the same conditions. <br> <br> Investment Visas are issued and renewed by regional offices of Uzbekistan’s Ministry of Internal Affairs for foreign nationals entering with business, guest, or compatriot visas. For those with an initial Investment Visa, extensions are processed by the same offices. Foreign investors wishing to apply for permanent residence must submit an application, along with an investment confirmation certificate from the Central Securities Depository (for shares) or the Public Services Agency (for stakes or foreign-invested enterprises)"
    }
  },
  "uz": {
    "living-uzbekistan": {
      "title": "O'zbekistonda hayot",
      "description": "O'zbekiston Respublikasi Markaziy Osiyoda joylashgan davlatdir. Uning poytaxti Toshkent bo'lib, u ham mamlakatning eng yirik shahri hisoblanadi. 448 900 km2 maydonni egallagan O'zbekiston tarix va madaniyatga boy mamlakat bo'lib, o'ziga xos an'ana va zamonaviylik uyg'unligiga ega mintaqaviy markaz sifatida ajralib turadi. Poytaxt Toshkent alohida ma'muriy maqomga ega bo'lib, mamlakatning iqtisodiy va madaniy markazi bo'lib xizmat qiladi. <br> <br> O'zbekistonning ma'muriy tuzilishi xilma-xil bo'lib, unga Qoraqalpog'iston avtonom Respublikasi, bir qancha viloyatlar (viloyat nomi bilan mashhur), qishloq tumanlari (tuman), shahar tumanlari va viloyatga bo'ysunuvchi shaharlar kiradi. Kichik jamoalar, shu jumladan qishloqlar deb nomlangan qishloqlar qishloqlar va ovullar, mamlakatning chuqur ildiz otgan an'analari va yaqin jamiyatini aks ettiradi.<br><br> UTC +5 soat mintaqasida (MSK +2) yashab, dunyo miqyosida +998 xalqaro kodi bilan bog'langan O'zbekiston o'zining tarixiy merosi, strategik joylashuvi va modernizatsiya qilinayotgan davlat sifatida taqdim etayotgan iqtisodiy imkoniyatlari bilan qiziquvchilar uchun qiziqarli manzildir.<br><br>Yumshoq iqlim, 300 dan ortiq quyoshli kunlar O'zbekistonni qishloq xo'jaligi va turizm uchun qulay qiladi. O'zbekistonning barqaror va xavfsiz muhiti, jadal rivojlanayotgan iqtisodiyoti va yosh aholisi bilan birgalikda dadil g'oyalar rag'batlantiriladigan, har bir hissasi qadrlanadigan jonli va optimistik muhitni yaratmoqda."
    },
    "entry-regulations": {
      "title": "Kirish qoidalari",
      "description": "90 mamlakat fuqarolari O'zbekistonga vizasiz kirishlari mumkin, ruxsat etilgan yashash muddati millatiga qarab 10 kundan bir yilgacha. Bundan tashqari, BAA aholisi va 55 va undan katta yoshdagi shaxslar ham O'zbekistonga sayohat qilish uchun viza talab qilishdan ozod qilingan. Muvofiq mamlakatlarning to'liq ro'yxatiga <a class=' underline text-blue-midnight' target='_blank' href='/public/docs/list_of_90_countries_with_visa-free_regime.pdf'>  bu yerni bosing </a>. <br> <br> Investitsiya vizalari biznes, mehmon yoki Vatandosh vizalari bilan kiradigan chet el fuqarolari uchun O'zbekiston ichki ishlar vazirligining mintaqaviy idoralari tomonidan beriladi va yangilanadi. Dastlabki investitsiya vizasiga ega bo'lganlar uchun kengaytmalar bir xil idoralar tomonidan qayta ishlanadi. Doimiy yashash uchun ariza berishni istagan xorijiy investorlar Markaziy qimmatli qog'ozlar depozitariysidan (aktsiyalar uchun) yoki Davlat xizmatlari agentligidan (ulushlar yoki xorijiy investitsiya qilingan korxonalar uchun)investitsiyalarni tasdiqlash to'g'risidagi guvohnoma bilan birga ariza topshirishlari shart <br><br> Investitsiya vizalari biznes, mehmon yoki Vatandosh vizalari bilan kiradigan chet el fuqarolari uchun O'zbekiston ichki ishlar vazirligining mintaqaviy idoralari tomonidan beriladi va yangilanadi. Dastlabki investitsiya vizasiga ega bo'lganlar uchun kengaytmalar bir xil idoralar tomonidan qayta ishlanadi. Doimiy yashash uchun ariza berishni istagan xorijiy investorlar Markaziy qimmatli qog'ozlar depozitariysidan (aktsiyalar uchun) yoki Davlat xizmatlari agentligidan (ulushlar yoki xorijiy investitsiya qilingan korxonalar uchun)investitsiyalarni tasdiqlash to'g'risidagi guvohnoma bilan birga ariza topshirishlari shart"
    }
  },
  "ru": {
    "living-uzbekistan": {
      "title": "Жизнь в Узбекистане",
      "description": "Республика Узбекистан - государство, расположенное в Центральной Азии. Ее столицей является Ташкент, который также является крупнейшим городом страны. Узбекистан, занимающий территорию в 448 900 км, является страной с богатой историей и культурой, которая выделяется как региональный центр с особым сочетанием традиций и современности. Столица, Ташкент, имеет особый административный статус и служит экономическим и культурным центром страны. <br> <br> Административная структура Узбекистана разнообразна и включает автономную Республику Каракалпакстан, несколько областей (известных как вилоят), сельские округа (туман), городские округа и города областного подчинения. Небольшие общины, включая деревни, называемые кишлаками и аулами, отражают глубоко укоренившиеся традиции страны и сплоченное общество. <br><br> Узбекистан, расположенный в часовом поясе UTC +5 (MSK +2) и связанный по всему миру международным кодом +998, является привлекательным местом для тех, кто интересуется его историческим наследием, стратегическим расположением и экономическими возможностями, которые он предлагает как модернизирующаяся страна. <br><br> Мягкий климат, более 300 солнечных дней в году делают Узбекистан благоприятным для сельского хозяйства и туризма. Стабильная и безопасная обстановка в Узбекистане в сочетании с быстрорастущей экономикой и динамичным молодым населением создают живую и оптимистичную атмосферу, где поощряются смелые идеи и ценится каждый вклад."
    },
    "entry-regulations": {
      "title": "Правила въезда",
      "description": "Граждане 90 стран могут въезжать в Узбекистан без виз, при этом разрешенный срок пребывания составляет от 10 дней до одного года, в зависимости от гражданства. Кроме того, резиденты ОАЭ и лица в возрасте 55 лет и старше также освобождаются от необходимости получения визы для поездки в Узбекистан. К полному списку стран, имеющих на это право, <a class=' underline text-blue-midnight' target='_blank' href='/public/docs/list_of_90_countries_with_visa-free_regime.pdf'> можно ознакомиться здесь</a> <br><br> Процесс получения инвестиционной визы в Узбекистане подробно описан в Постановлении № 864 от 11.10.2019. Иностранные граждане, инвестирующие в Узбекистан не менее чем в 8500 раз больше базовой расчетной суммы (BCA), могут получить трехлетнюю многократную инвестиционную визу, которая может быть продлена на неопределенный срок без выезда из страны. Члены семьи (супруг(а), родители, дети) также получают гостевые визы на тех же условиях. <br><br> Инвестиционные визы выдаются и продлеваются региональными управлениями Министерства внутренних дел Узбекистана для иностранных граждан, въезжающих по деловым, гостевым визам или визам соотечественников. Для тех, у кого первоначальная инвестиционная виза, продление оформляется в тех же подразделениях. Иностранные инвесторы, желающие подать заявление на получение вида на жительство, должны подать заявление вместе со свидетельством о подтверждении инвестиций из Центрального депозитария ценных бумаг (для акций) или Агентства государственных услуг (для долей участия или предприятий с иностранными инвестициями)."
    }
  }
}
</i18n>
