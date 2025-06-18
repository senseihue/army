<script setup lang="ts">
import { ReasonNav, SectionGrid, ReasonStepsCard } from "~/layers/features/reason"

definePageMeta({ fixedHeader: false })
const { t } = useI18n({ useScope: "local" })

const moments = ref([
  { heading: "01", text: t("moments.0.label") },
  { heading: "02", text: t("moments.1.label") },
  { heading: "03", text: t("moments.2.label") }
])

const moments2 = ref([
  { heading: "04", text: t("moments2.0.label") },
  { heading: "05", text: t("moments2.1.label") },
  { heading: "06", text: t("moments2.2.label") }
])
</script>

<template>
  <div>
    <reason-nav />
    <section-grid>
      <template #left>
        <h3>
          {{ t("title") }}
        </h3>
        <br />
        <p v-html="t('description')" class="text-justify"></p>
      </template>
      <template #right>
        <reason-steps-card :steps="moments" />
      </template>
    </section-grid>

    <section-grid>
      <template #right>
        <p v-html="t('description2')" class="text-justify"></p>
      </template>
      <template #left>
        <reason-steps-card :steps="moments2" />
      </template>
    </section-grid>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "2030 Strategy Highlights",
    "description": "Uzbekistan’s 2030 strategy aims to achieve upper middle-income nation status by the end of the decade, through a radical reform programme designed to liberalise the economy, attract foreign investment, dramatically expand the country’s technological capacity and strategic infrastructure, and reduce regulatory burdens on businesses. <br><br>    Moreover, compelling incentives to attract foreign direct investment are already creating obvious results. International businesses operating in the country’s Free Economic Zones (FEZ) benefit from tax exemptions of up to 10 years, and FDI enterprises enjoy exemptions on property, water usage, and land taxes for up to seven years",
    "description2": "As well as the most liberal tax regime in the region, Uzbekistan's export development is accelerating as major deregulation takes effect, with the abolition of more than 130 permits and licences, as well as all customs duties on exported goods and services. The government's privatisation programme has also marked significant milestones, with sale of more than $1 billion worth of state assets and the adoption of a landmark law on Public-Private Partnership facilitating $17 billion-worth of projects.<br><br>    Moreover, by increasing the number of countries with which Uzbekistan enjoys a visa-free regime from nine to 93, the country is attracting talent and investment from across the world. A critical pillar of the 2030 Strategy has been the substantial expansion of investor protections, ensuring the safeguarding of investor rights and complementing the dispute mechanisms of the Tashkent International Arbitration Centre",
    "moments": [
      {
        "id": "01",
        "label": "Bringing GDP to $160 billion and per capita income to $4 thousand"
      },
      {
        "id": "02",
        "label": "Ensuring an annual inflation rate of 5-6 percent"
      },
      {
        "id": "03",
        "label": "Achieving 100% coverage of high-speed internet in the regions"
      }
    ],
    "moments2": [
      {
        "id": "04",
        "label": "Attracting $250 billion of investment into the country"
      },
      {
        "id": "05",
        "label": "Turning into a green economy and achieving carbon neutrality"
      },
      {
        "id": "06",
        "label": "Radically reducing poverty rate (by more than 2 times)"
      }
    ]
  },
  "ru": {
    "title": "Стратегия 2030 Основные моменты",
    "description": "Стратегия Узбекистана на период до 2030 года предусматривает достижение к концу десятилетия статуса страны с уровнем дохода выше среднего. Этого можно достичь посредством радикальной программы реформ, которая либерализует экономику, привлекает иностранные инвестиции, значительно расширяет технологический потенциал страны и стратегическую инфраструктуру, а также снижает регуляторную нагрузку на бизнес. <br><br>    Стимулы для привлечения прямых иностранных инвесторов в страну уже дают несомненные результаты: международные компании, работающие в свободных экономических зонах (СЭЗ) страны, получают налоговые льготы сроком до 10 лет, а предприятия с прямыми иностранными инвестициями пользуются льготами по налогам на имущество, водопользование и землю сроком до семи лет.",
    "description2": "Развитие экспорта Узбекистана ускоряется благодаря как либеральному налоговому режиму, так и реализации крупной программы дерегуляции с отменой более 130 разрешений и лицензий, а также всех таможенных пошлин на экспортируемые товары и услуги. Правительственная программа приватизации также отметила важные вехи с продажей государственных активов на сумму более 1 млрд долл. США и принятием закона о государственно-частном партнерстве, способствующего реализации проектов на сумму 17 млрд дол. США. <br><br>    Более того, увеличив число стран, с которыми Узбекистан имеет безвизовый режим, с 9 до 93, страна привлекает таланты и инвестиции со всего мира. Важнейшим аспектом Стратегии 2030 стало существенное расширение защиты инвесторов, обеспечение защиты их прав и учреждение Ташкентского международного арбитражного центра.",
    "moments": [
      {
        "id": "01",
        "label": "Довести ВВП до 160 млрд долл. США и уровень дохода на душу населения до 4 тыс. долл. США."
      },
      {
        "id": "02",
        "label": "Обеспечение показателя инфляции на уровне 5-6% в год."
      },
      {
        "id": "03",
        "label": "Увеличение объёма рынка свободно обращающихся ценных бумаг до 8 млрд долл. США."
      }
    ],
    "moments2": [
      {
        "id": "04",
        "label": "Привлечение инвестиций на сумму 250 млрд долл. США."
      },
      {
        "id": "05",
        "label": "Обеспечение роста объёма инвестиций, ежегодно вкладываемых в основные средства, в среднем на 7%."
      },
      {
        "id": "06",
        "label": "Реализация более 500 стратегически значимых технологических и инфраструктурных проектов."
      }
    ]
  },
  "uz": {
    "title": "2030 Strategiyasi eng muhimlari",
    "description": "O'zbekistonning 2030 yilgacha bo'lgan strategiyasi oxirgi o'n yil davomida o'rta daromadli mamlakat maqomiga erishishni nazarda tutadi. Bunga radikal islohotlar dasturi orqali erishish mumkin, bu dastur iqtisodiyotni liberallashtiradi, chet el investitsiyalarini jalb qiladi, mamlakatning texnologik salohiyatini va strategik infratuzilmasini sezilarli darajada kengaytiradi va biznes uchun regulyator yuklarni kamaytiradi. <br><br>    Bundan tashqari, to'g'ridan-to'g'ri chet el investorlari uchun taqdim etilgan ishonchli rag'batlar aniq natijalarni berayapti: mamlakatdagi erkin iqtisodiy zonalarda ishlayotgan xalqaro kompaniyalar 10 yilgacha bo'lgan davr uchun soliq imtiyozlarini olishadi, to'g'ridan-to'g'ri chet el investitsiyalari bo'lgan korxonalar esa mulk, suvdan foydalanish va yer soliqlarida 7 yilgacha imtiyozlardan foydalanadi.",
    "description2": "Mintaqadagi liberal soliq rejimidan tashqari, O'zbekistonning eksporti katta deregulatsiya jarayoniga kirish bilan tezlashmoqda, bunda 130 dan ortiq ruxsatnomalar va litsenziyalar, shuningdek, eksport qilinayotgan tovarlar va xizmatlar uchun barcha bojxona yig'imlari bekor qilinmoqda. Hukumatning xususiylashtirish dasturi ham muhim yutuqlarga erishdi, davlat aktivlarini 1 milliard AQSh dollaridan ortiq summaga sotish va 17 milliard AQSh dollarini tashkil etuvchi loyihalarni amalga oshirishni qo'llab-quvvatlovchi davlat-xususiy sheriklik to'g'risidagi qonunni qabul qilish bilan ajralib turdi. <br><br>    Bundan tashqari, O'zbekiston vizasiz rejim o'rnatilgan mamlakatlar sonini 9 tadan 93 tagacha oshirgan holda, butun dunyodan talantlar va investitsiyalarni jalb qilmoqda. 2030 yilgi strategiyaning muhim jihatlaridan biri investorlarga himoya qilishni sezilarli darajada kengaytirish, ularning huquqlarini ta'minlash va Toshkent xalqaro arbitraj markazini tashkil etishdir.",
    "moments": [
      {
        "id": "01",
        "label": "Yalpi ichki mahsulotni (YIM) 160 milliard AQSh dollarigacha va aholining daromad darajasini 4 ming AQSh dollarigacha yetkazish"
      },
      {
        "id": "02",
        "label": "Inflatsiya ko'rsatkichini yiliga 5-6% darajasida saqlash"
      },
      {
        "id": "03",
        "label": "Erkin aylanayotgan qimmatli qog'ozlar bozorining hajmini 8 milliard AQSh dollarigacha oshirish"
      }
    ],
    "moments2": [
      {
        "id": "04",
        "label": "Qiymati 250 milliard AQSh dollarga teng investitsiyalarni jalb qilish"
      },
      {
        "id": "05",
        "label": "Har yili asosiy vositalarga qilinadigan investitsiyalar hajmini o'rtacha 7% ga oshirish"
      },
      {
        "id": "06",
        "label": "500 dan ortiq strategik ahamiyatga ega texnologik va infratuzilma loyihalarini amalga oshirish"
      }
    ]
  }
}
</i18n>
