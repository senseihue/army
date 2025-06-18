<script setup lang="ts">
const { t, tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex flex-col gap-4">
          <img src="/img/guide/privatization/privatization.webp" alt="img" />
          <p class="whitespace-pre-line text-gray-olive">{{ t("content") }}</p>

          <div class="mb-8 flex flex-col gap-4">
            <h3 class="font-bold">{{ t("highlights.heading") }}</h3>
            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('highlights.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>

          <ui-button
            class="mb-8 sm:max-w-min"
            color="success"
            rounded
            target="_blank"
            href="https://davaktiv.uz/en/privatization"
            :label="t('button')"
          />

          <div class="flex flex-col gap-4">
            <h3 class="font-bold">{{ t("process.heading") }}</h3>
            <h4 class="font-bold">{{ t("process.first.heading") }}</h4>
            <p class="whitespace-pre-line text-gray-olive">{{ t("process.first.text") }}</p>

            <h4 class="font-bold">{{ t("process.second.heading") }}</h4>
            <p class="whitespace-pre-line text-gray-olive">{{ t("process.second.text") }}</p>

            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('process.second.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="text-center text-xl font-bold text-blue-command">{{ t("procedures.heading") }}</h3>
            <p class="whitespace-pre-line text-gray-olive">{{ t("procedures.text") }}</p>
          </div>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="text-center text-xl font-bold text-blue-command">{{ t("offering.heading") }}</h3>
            <p class="whitespace-pre-line text-gray-olive">{{ t("offering.text") }}</p>
            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('offering.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "button": "State Assets Management Agency",
    "content": "Privatization is a key process aimed at transforming state and municipal ownership into private assets. The primary objective of this process is to enhance the efficiency of management and utilization of these assets, as well as to attract significant investments to stimulate sustainable economic growth.\n\nTransferring ownership to the private sector creates conditions for the implementation of innovations, improves the quality of services provided, and maximizes the potential of resources. This, in turn, contributes to the formation of a more competitive economy and the improvement of societal welfare as a whole.\n\nThe Government of Uzbekistan is actively enhancing its economic landscape by prioritizing foreign investor involvement in privatization efforts. This initiative seeks to reduce state ownership in key sectors, elevate private enterprise participation, and attract foreign direct investment. Recent legislative changes now allow for the acquisition of state assets at zero redemption value, provided significant investment commitments are made. A key aspect of this strategy is the planned online auction of 247 state-owned enterprises, designed to boost transparency and efficiency.\n\nAdditionally, Uzbekistan is preparing to facilitate IPOs and SPOs for 12 major enterprises, with four slated for international markets, further extending its global investment appeal. Key milestones in the privatization process include the sale of the Coca-Cola bottling plant to Turkey's Coca-Cola İçecek Group and the acquisition of a 75% stake in Ipoteka Bank by OTP Bank. The government also plans to reduce its share in the economy by 75% by 2025, with ambitious goals to modernize and privatize key sectors like banking and mining, positioning Uzbekistan as a competitive global investment destination.",
    "highlights": {
      "heading": "Key highlights of the new stage in the privatization program include:",
      "list": [
        "The privatization of approximately 300 companies with state shares.",
        "The sale of over 1,600 real estate properties.",
        "The sale of shareholdings in 40 companies through IPOs, following the principle of “one share - one lot”.",
        "The full sale of 1,001 state shareholdings at public auctions."
      ]
    },
    "process": {
      "heading": "The privatization process of SoEs in Uzbekistan consists of two stages:",
      "first": {
        "heading": "1. SoEs Institutional Transformation",
        "text": "This stage envisages the transformation of SoEs into LLCs or JSCs, transitioning towards International Financial Reporting Standards (IFRS), obtaining international credit ratings, and developing an appropriate privatization strategy that covers financial projections and operational reorganizations, etc."
      },
      "second": {
        "heading": "2. Sale of SoEs",
        "text": "Upon transformation, the sale of SoEs assets is carried out through one of the following methods:",
        "list": [
          "An auction or competition managed and organized by State Assets Management Agency or jointly with a specialized private organization.",
          "An Initial Public Offering (IPO) or Secondary Public Offering (SPO) placed on the stock exchange."
        ]
      }
    },
    "procedures": {
      "heading": "Auction and Competition Procedures",
      "text": "State Assets Management Agency, as the seller of state assets, determines the type of privatization procedure (i.e., auction or competition) based on the nature of the asset to be privatized. For example, while state-owned shares in JSCs can only be sold through competition with specific selection criteria for bidders, shares in LLCs' charter capital and real estate objects can be sold through either auction or competition.\n\nMore detailed information on the types of bids and requirements for participants is published on the website of the State Assets Management Agency., the E-AUKSION platform, the Republican Stock Exchange Toshkent’s website, the newspaper \"Birja,\" periodicals of the Council of Ministers of the Republic of Karakalpakstan, regional authorities (khokimiyats), and Tashkent.\n\nBoth auctions and competitions may be held online through the E-AUKSION platform. A sale and purchase agreement is then conducted with the winner of the auction or competition."
    },
    "offering": {
      "heading": "Public Offering",
      "text": "The sale of state shares through IPO/SPO is a relatively recent development as part of the privatization program. The public offering of state shares can be conducted via the following:",
      "list": [
        "The local Republican Stock Exchange (RSE) Tashkent: The local listing is conducted in accordance with national legislation. The roadmap for each company's IPO/SPO process must be approved by the Cabinet of Ministers.",
        "International foreign exchanges: This is regulated according to foreign stock exchange rules and applicable foreign laws. From January 1, 2023, domestic issuers are able to offer their shares in foreign stock markets only after a preliminary listing on the national stock exchange."
      ]
    }
  },
  "ru": {
    "button": "Агентство по управлению государственным имуществом",
    "content": "Приватизация — это ключевой процесс, направленный на преобразование государственной и муниципальной собственности в частные активы. Основная цель этого процесса — повысить эффективность управления и использования этих активов, а также привлечь значительные инвестиции для стимулирования устойчивого экономического роста.\n\nПередача собственности в частный сектор создает условия для внедрения инноваций, улучшает качество предоставляемых услуг и максимально раскрывает потенциал ресурсов. Это, в свою очередь, способствует формированию более конкурентоспособной экономики и повышению благосостояния общества в целом.\n\nПравительство Узбекистана активно совершенствует экономическую среду, делая приоритетом привлечение иностранных инвесторов в процесс приватизации. Эта инициатива направлена на сокращение доли государства в ключевых секторах, увеличение участия частного бизнеса и привлечение прямых иностранных инвестиций. Недавние законодательные изменения позволяют приобретать государственные активы по нулевой выкупной стоимости при условии значительных инвестиционных обязательств. Важным аспектом стратегии является планируемый онлайн-аукцион 247 государственных предприятий, направленный на повышение прозрачности и эффективности.\n\nКроме того, Узбекистан готовится к проведению IPO и SPO для 12 крупных предприятий, из которых четыре предназначены для международных рынков, что дополнительно расширяет глобальную инвестиционную привлекательность страны. Ключевыми этапами процесса приватизации стали продажа завода по розливу напитков Coca-Cola турецкой компании Coca-Cola İçecek Group и приобретение OTP Bank 75% акций Ипотека Банка. Правительство также планирует сократить свою долю в экономике на 75% к 2025 году, ставя амбициозные задачи по модернизации и приватизации ключевых секторов, таких как банковский и горнодобывающий, позиционируя Узбекистан как конкурентоспособное глобальное инвестиционное направление.",
    "highlights": {
      "heading": "Ключевые направления новой стадии программы приватизации:",
      "list": [
        "Приватизация около 300 компаний с долей государства.",
        "Продажа более 1 600 объектов недвижимости.",
        "Продажа долей в 40 компаниях через IPO по принципу «одна акция — один лот».",
        "Полная продажа 1 001 доли государства на публичных аукционах."
      ]
    },
    "process": {
      "heading": "Процесс приватизации государственных предприятий в Узбекистане состоит из двух этапов:",
      "first": {
        "heading": "1. Институциональная трансформация государственных предприятий",
        "text": "На этом этапе государственные предприятия преобразуются в общества с ограниченной ответственностью (ООО) или акционерные общества (АО), переходят на Международные стандарты финансовой отчетности (МСФО), получают международные кредитные рейтинги и разрабатывают соответствующую стратегию приватизации, включающую финансовые прогнозы и операционные реорганизации."
      },
      "second": {
        "heading": "2. Продажа государственных предприятий",
        "text": "После трансформации продажа активов государственных предприятий осуществляется одним из следующих способов:",
        "list": [
          "Аукцион или конкурс, организуемый Агентством по управлению государственным имуществом или совместно со специализированной частной организацией.",
          "Первичное публичное предложение (IPO) или вторичное публичное предложение (SPO) на фондовой бирже."
        ]
      }
    },
    "procedures": {
      "heading": "Процедуры аукциона и конкурса",
      "text": "Агентство по управлению государственным имуществом, как продавец государственных активов, определяет вид процедуры приватизации (аукцион или конкурс) в зависимости от характера приватизируемого актива. Например, доли государства в акционерных обществах могут продаваться только через конкурс с конкретными критериями отбора участников, тогда как доли в уставном капитале ООО и объекты недвижимости могут продаваться как через аукцион, так и через конкурс.\n\nБолее подробная информация о видах заявок и требованиях к участникам публикуется на сайте Агентства по управлению государственным имуществом, платформе E-AUKSION, сайте Республиканской фондовой биржи Ташкента, в газете «Биржа», в изданиях Совета Министров Республики Каракалпакстан, региональных органов власти (хокимиятов) и в Ташкенте.\n\nАукционы и конкурсы могут проводиться онлайн через платформу E-AUKSION. Затем с победителем аукциона или конкурса заключается договор купли-продажи."
    },
    "offering": {
      "heading": "Публичное предложение",
      "text": "Продажа государственных долей через IPO/SPO — относительно новое направление в программе приватизации. Публичное предложение государственных долей может проводиться следующим образом:",
      "list": [
        "На местной Республиканской фондовой бирже (РФБ) в Ташкенте: местное листинг проводится в соответствии с национальным законодательством. Дорожная карта процесса IPO/SPO каждой компании должна быть утверждена Кабинетом Министров.",
        "На международных зарубежных биржах: регулируется согласно правилам иностранных фондовых бирж и применимому иностранному законодательству. С 1 января 2023 года местные эмитенты могут предлагать свои акции на международных фондовых рынках только после предварительного листинга на национальной фондовой бирже."
      ]
    }
  },
  "uz": {
    "button": "Davlat Mulkini Boshqarish Agentligi",
    "content": "Xususiylashtirish — davlat va munitsipal mulkni xususiy aktivlarga aylantirishga qaratilgan asosiy jarayon hisoblanadi. Ushbu jarayonning asosiy maqsadi mulklarni boshqarish va ulardan foydalanishni samaraliroq qilish, shuningdek barqaror iqtisodiy o‘sishni rag‘batlantirish uchun sezilarli investitsiyalarni jalb qilishdir.\n\nMulkni xususiy sektorga o'tkazish innovatsiyalarni amalga oshirish uchun shart-sharoit yaratadi, ko‘rsatilayotgan xizmatlarning sifatini yaxshilaydi va resurslarning imkoniyatlarini maksimal darajada oshiradi. Bu esa o‘z navbatida raqobatbardosh iqtisodiyot shakllanishiga va jamiyat farovonligining yaxshilanishiga xizmat qiladi.\n\nO‘zbekiston hukumati iqtisodiy muhitni yaxshilash uchun xususiylashtirish jarayonlarida xorijiy investorlarning ishtirokini ustuvor yo‘nalish sifatida belgilagan. Ushbu tashabbus davlat mulkini asosiy sohalarda qisqartirish, xususiy korxonalar faoliyatini kengaytirish va to‘g‘ridan-to‘g‘ri xorijiy investitsiyalarni jalb qilishni maqsad qilgan. Yaqinda qabul qilingan qonunchilik o‘zgarishlari asosida, katta investitsiya majburiyatlari mavjud bo‘lsa, davlat aktivlarini nol tovon narxida sotib olish imkoniyati paydo bo‘ldi. Ushbu strategiyaning muhim jihatlaridan biri sifatida davlat mulkidagi 247 ta korxonaning onlayn auksion orqali sotilishi rejalashtirilgan bo‘lib, bu jarayon shaffoflik va samaradorlikni oshirishga xizmat qiladi.\n\nShuningdek, O‘zbekiston 12 ta yirik korxonaning IPO va SPO jarayonlarini o‘tkazishga tayyorlanmoqda, ulardan to‘rttasi xalqaro bozorlar uchun mo‘ljallangan bo‘lib, bu esa mamlakatning global investitsiya jozibasini yanada oshiradi. Xususiylashtirish jarayonidagi muhim bosqichlarga Coca-Cola ichimliklarni qadoqlash zavodining Turkiyaning Coca-Cola İçecek Group kompaniyasiga sotilishi va Ipoteka Bankning 75% ulushini OTP Bank sotib olishi kiradi. Hukumat 2025 yilgacha iqtisodiyotdagi davlat ulushini 75% ga kamaytirishni rejalashtirgan, asosiy sohalarni modernizatsiya qilish va xususiylashtirish, xususan bank va konchilik sohalarida, O‘zbekistonni raqobatbardosh global investitsiya markaziga aylantirishni maqsad qilgan.",
    "highlights": {
      "heading": "Xususiylashtirish dasturining yangi bosqichining asosiy yo‘nalishlari:",
      "list": [
        "Davlat ulushi mavjud bo‘lgan taxminan 300 ta kompaniyaning xususiylashtirilishi.",
        "1 600 dan ortiq ko‘chmas mulk obyektlarining sotilishi.",
        "IPO orqali 40 ta kompaniyada aksiyalar ulushlarini sotish, “bir aksiya — bir lot” tamoyili asosida.",
        "1 001 ta davlat ulushi mavjud kompaniyaning to‘liq sotilishi jamoat auksionlarida."
      ]
    },
    "process": {
      "heading": "O‘zbekistondagi davlat korxonalarini xususiylashtirish jarayoni ikki bosqichdan iborat:",
      "first": {
        "heading": "1. Davlat korxonalarining institutsional transformatsiyasi",
        "text": "Ushbu bosqichda davlat korxonalari mas’uliyati cheklangan jamiyatlar (MChJ) yoki aksiyadorlik jamiyatlariga (AJ) aylantiriladi, Xalqaro moliyaviy hisob hisobot standartlariga (IFRS) moslashish, xalqaro kredit reytinglarini olish va moliyaviy prognozlar hamda operatsion reorganizatsiyalarni o‘z ichiga olgan xususiylashtirish strategiyasini ishlab chiqish nazarda tutiladi."
      },
      "second": {
        "heading": "2. Davlat korxonalarini sotish",
        "text": "Transformatsiyadan so‘ng davlat korxonalarining aktivlari quyidagi usullardan biri bilan sotiladi:",
        "list": [
          "Davlat Mulkini Boshqarish Agentligi tomonidan yoki maxsus xususiy tashkilot bilan birgalikda tashkil etilgan auksion yoki tanlov orqali.",
          "Aksiyalarni birinchi (IPO) yoki ikkinchi (SPO) jamoat taklifi shaklida fond birjasida sotish."
        ]
      }
    },
    "procedures": {
      "heading": "Auksion va tanlov tartiblari",
      "text": "Davlat aktivlarini sotuvchi sifatida Davlat Mulkini Boshqarish Agentligi privatizatsiya tartibini (auksion yoki tanlov) sotilayotgan aktivning tabiati asosida belgilaydi. Masalan, aksiyadorlik jamiyatlaridagi davlat ulushlari faqat tanlov orqali, qat’iy tanlov mezonlari bilan sotilishi mumkin, MChJ lar aksiyadorlik kapitalidagi ulushlar va ko‘chmas mulklar esa auksion yoki tanlov yo‘li bilan sotilishi mumkin.\n\nQatnashuvchilarga qo‘yiladigan talablar va taklif turlari haqida batafsil ma’lumot Davlat Mulkini Boshqarish Agentligi sayti, E-AUKSION platformasi, Toshkent Respublikachilik Fond Birjasi sayti, “Birja” gazetasi, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi matbuoti, hududiy hokimiyatlar va Toshkent shahrida e’lon qilinadi.\n\nAuksion va tanlovlar E-AUKSION platformasi orqali onlayn tarzda ham o‘tkazilishi mumkin. Auksion yoki tanlov g‘olibi bilan sotish-shartnoma tuziladi."
    },
    "offering": {
      "heading": "Jamoat taklifi",
      "text": "Davlat ulushlarini IPO/SPO orqali sotish xususiylashtirish dasturining nisbatan yangi yo‘nalishi hisoblanadi. Davlat ulushlarini jamoat taklifi quyidagi shakllarda o‘tkazilishi mumkin:",
      "list": [
        "Mahalliy Toshkent Respublikachilik Fond Birjasi (RSE): Mahalliy ro‘yxatga olish milliy qonunchilik asosida amalga oshiriladi. Har bir kompaniyaning IPO/SPO jarayonlari uchun yo‘l xaritasi Vazirlar Mahkamasi tomonidan tasdiqlanishi kerak.",
        "Xalqaro fond birjalari: Bu xorijiy fond birjalari qoidalari va tegishli xorijiy qonunlarga muvofiq tartibga solinadi. 2023 yil 1 yanvardan boshlab, mahalliy chiqaruvchilar o‘z aksiyalarini xalqaro fond bozorlarida faqat milliy fond birjasida oldindan ro‘yxatdan o‘tgandan keyin taklif eta oladi."
      ]
    }
  }
}
</i18n>
