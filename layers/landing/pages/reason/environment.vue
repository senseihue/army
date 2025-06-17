<script setup lang="ts">
import { ReasonNav, SectionGrid } from "#layers/landing/modules/reason"

definePageMeta({
  fixedHeader: false
})

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div>
    <reason-nav />
    <section-grid>
      <template #left>
        <div>
          <h3 class="text-center">
            {{ t("reason.supportive-environment.title") }}
          </h3>
          <br />
          <p class="text-justify">
            {{ t("reason.supportive-environment.description") }}
          </p>
        </div>
      </template>
      <template #right>
        <div>
          <img class="section-card__image" src="/public/img/reason/supportive-environment/city.webp" alt="" />
        </div>
      </template>
    </section-grid>
    <section-grid>
      <template #right>
        <div>
          <h3 class="text-center">
            {{ t("reason.casifc.title") }}
          </h3>
          <br />
          <p class="text-justify">
            {{ t("reason.casifc.description") }}
          </p>
        </div>
      </template>
      <template #left>
        <div>
          <img class="section-card__image" src="/public/img/reason/supportive-environment/night-city.webp" alt="" />
        </div>
      </template>
    </section-grid>
    <section-grid>
      <template #left>
        <div>
          <h3 class="text-center">
            {{ t("reason.taic.title") }}
          </h3>
          <br />
          <p class="text-justify">
            {{ t("reason.taic.description") }}
          </p>
        </div>
      </template>
      <template #right>
        <div>
          <img
            class="section-card__image"
            src="/public/img/reason/supportive-environment/appeal.webp"
            alt=""
          />
        </div>
      </template>
    </section-grid>
    <section-grid>
      <template #left>
        <div>
          <img
            class="section-card__image"
            src="/public/img/reason/supportive-environment/meeting.webp"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div>
          <h3 class="text-center">
            {{ t("reason.fic.title") }}
          </h3>
          <br />
          <p class="text-justify">
            {{ t("reason.fic.description") }}
          </p>
        </div>
      </template>
    </section-grid>
  </div>
</template>

<style>
.section-card__image {
  width: 100%;
  aspect-ratio: auto;
  @apply object-cover object-center;
}
</style>

<i18n lang="json">
{
  "en": {
    "reason": {
      "casifc": {
        "title": "Central Asian International Financial Center",
        "description": "Uzbekistan is establishing the Central Asia International Financial Center (CAIFC) in Tashkent, driven by the 2030 Strategy. The CAIFC will support foreign investors, enhance Uzbekistan's financial market, and promote sectors like fintech, digital assets, green finance, and Islamic banking. With benefits for investors, CAIFC will improve corporate governance, attract investments, and create jobs. Significant progress has been made, including feasibility studies, international collaborations, and strategic planning. The CAIFC is set to play a crucial role in Uzbekistan's economic reforms and global financial integration."
      },
      "taic": {
        "title": "Tashkent International Arbitration Center",
        "description": "The Tashkent International Arbitration Center (TIAC), established in 2018, was created to improve Uzbekistan's investment climate. Operating under the 2021 International Commercial Arbitration Law it is also compliant with the UNCITRAL Model Law. TIAC offers tax exemptions and work permit waivers for foreign arbitrators, and allows the application of foreign laws. Arbitrators can operate without local law licenses, and TIAC’s decisions are enforceable globally under the New York Convention. TIAC conducts multilingual and online arbitrations, and has handled nearly 70 international cases. Some key incentives include zero administration fees, a strategic partnership with HKIAC, and specialized rules for technology disputes."
      },
      "fic": {
        "title": "Foreign Investor Council under the President of Uzbekistan",
        "description": "The Foreign Investor Council under the President of Uzbekistan was created in 2019. Operating under presidential decree, it facilitates dialogue between the government and major foreign investors. Meeting quarterly, the Council compromises of representatives from international corporations, diplomatic missions, and financial institutions. Members can discuss and propose changes to laws and regulations. The Council has helped resolve investor disputes, advised on the investment strategy and supported public-private partnership frameworks. It has played a role in improving Uzbekistan's ranking in international business indices and attracting new foreign investment."
      },
      "supportive-environment": {
        "title": "Supportive Environment",
        "description": "Uzbekistan’s transformation offers real opportunities for foreign investors to expand their presence in the country. Uzbekistan has made significant strides in creating a business-friendly environment through various reforms, infrastructural improvements, and changes in governance."
      }
    }
  },
  "ru": {
    "reason": {
      "casifc": {
        "title": "Центрально-Азиатский Международный Финансовый Центр",
        "description": "Узбекистан создает Центрально-Азиатский Международный Финансовый Центр (ЦА МФЦ / CAIFC) в Ташкенте. ЦА МФЦ / CAIFC будет поддерживать иностранных инвесторов, развивать финансовый рынок Узбекистана и продвигать такие секторы, как финтех, цифровые активы, зеленое финансирование и исламский банкинг. ЦА МФЦ / CAIFC улучшит корпоративное управление, привлечет инвестиции и создаст рабочие места. ЦА МФЦ / CAIFC призван сыграть решающую роль в экономических реформах Узбекистана и глобальной финансовой интеграции."
      },
      "taic": {
        "title": "Ташкентский Международный арбитражный центр",
        "description": "Ташкентский Международный Арбитражный Центр (ТМАЦ / TIAC) был создан в 2018 году для улучшения инвестиционного климата в Узбекистане. Действуя в соответствии с Законом о международном коммерческом арбитраже 2021 года, он также соответствует Типовому закону комиссии ООН по праву международной торговли (UNCITRAL).        ТМАЦ / TIAC предлагает налоговые льготы и освобождение от получения разрешений на работу для иностранных арбитров, а также позволяет применять иностранные законы. Арбитры могут работать без местных юридических лицензий, а решения ТМАЦ / TIAC подлежат исполнению во всем мире в соответствии с Нью-Йоркской конвенцией. ТМАЦ / TIAC проводит арбитражные операции на различных языках, в том числе в он-лайн формате, и уже обработал около 70 международных дел. Некоторые ключевые стимулы работы TIAC включают нулевые административные сборы, стратегическое партнерство с Гонконгским Международным Арбитражным Центром (ГМАЦ / HKIAC), также имеются специальные правила для технологических споров."
      },
      "fic": {
        "title": "Совет иностранных инвесторов при Президенте Республики Узбекистан",
        "description": "Совет иностранных инвесторов при Президенте Узбекистана был создан в 2019 году. Действующий в соответствии с указом президента, он способствует диалогу между правительством и крупными иностранными инвесторами. На ежеквартальных заседаниях Совет принимает представителей международных корпораций, дипломатических миссий и финансовых институтов. Члены Совета могут обсуждать и предлагать изменения в законы и нормативные акты. Совет помогает разрешать споры с инвесторами, консультирует по инвестиционной стратегии и поддерживает механизмы государственно-частного партнерства. Это сыграло свою роль в повышении рейтинга Узбекистана в международных бизнес-индексах и привлечении новых иностранных инвестиций."
      },
      "supportive-environment": {
        "title": "Поддерживающая среда",
        "description": "Преобразования в Узбекистане предоставляют иностранным инвесторам реальные возможности для расширения своего присутствия в стране. Узбекистан добился значительных успехов в создании благоприятной для бизнеса среды благодаря различным реформам, совершенствованию инфраструктуры и изменениям в управлении."
      }
    }
  },
  "uz": {
    "reason": {
      "casifc": {
        "title": "Markaziy Osiyo xalqaro moliya markazi",
        "description": "O‘zbekiston 2030-yilgacha bo‘lgan strategiyaga muvofiq Toshkentda Markaziy Osiyo xalqaro moliya markazini (CAIFC) tashkil etmoqda. CAIFC xorijiy investorlarni qo‘llab-quvvatlaydi, O‘zbekiston moliya bozorini rivojlantiradi va fintech, raqamli aktivlar, yashil moliya va islom bankingi kabi sohalarni rag‘batlantiradi. Investorlar uchun imtiyozlar bilan CAIFC korporativ boshqaruvni yaxshilaydi, investitsiyalarni jalb qiladi va ish o'rinlarini yaratadi. Texnik-iqtisodiy asoslash, xalqaro hamkorlik va strategik rejalashtirish kabi muhim yutuqlarga erishildi. CAIFC O‘zbekistondagi iqtisodiy islohotlar va global moliyaviy integratsiyada hal qiluvchi rol o‘ynashi kerak."
      },
      "taic": {
        "title": "Toshkent xalqaro arbitraj markazi",
        "description": "2018-yilda tashkil etilgan Toshkent xalqaro arbitraj markazi (TIAC) \n\nO‘zbekistondagi sarmoyaviy muhitni yaxshilash maqsadida tashkil etilgan. 2021 yilgi Xalqaro tijorat arbitraj qonuni doirasida faoliyat yurituvchi u UNCITRAL Model qonuniga ham mos keladi. TIAC chet ellik hakamlar uchun soliq imtiyozlari va ishlash ruxsatnomasidan voz kechishni taklif qiladi va xorijiy qonunlarni qo'llashga ruxsat beradi. Arbitrlar mahalliy qonunchilik litsenziyalarisiz ishlay oladilar va TIAC qarorlari Nyu-York konventsiyasiga muvofiq butun dunyo bo'ylab ijro etilishi mumkin. TIAC ko'p tilli va onlayn arbitrajlar olib boradi va 70 ga yaqin xalqaro ishlarni ko'rib chiqdi. Ba'zi asosiy rag'batlantirishlar nol ma'muriy to'lovlar, HKIAC bilan strategik hamkorlik va texnologiya nizolari uchun maxsus qoidalarni o'z ichiga oladi."
      },
      "fic": {
        "title": "O‘zbekiston Prezidenti huzuridagi Xorijiy investorlar kengashi",
        "description": "O‘zbekiston Prezidenti huzuridagi Xorijiy investorlar kengashi 2019-yilda tashkil etilgan bo‘lib, Prezident farmoni asosida faoliyat yuritib, hukumat va yirik xorijiy investorlar o‘rtasidagi muloqotga ko‘maklashmoqda. Kengash har chorakda bir marta xalqaro korporatsiyalar, diplomatik missiyalar va moliya institutlari vakillaridan murosaga keladi. A'zolar qonunlar va qoidalarga o'zgartirishlar kiritishlari va taklif qilishlari mumkin. Kengash investorlar bilan bog'liq nizolarni hal qilishda yordam berdi, investitsiya strategiyasi bo'yicha maslahat berdi va davlat-xususiy sheriklik asoslarini qo'llab-quvvatladi. Bu O‘zbekistonning xalqaro biznes indekslaridagi o‘rnini oshirish va yangi xorijiy sarmoyalarni jalb etishda muhim rol o‘ynadi."
      },
      "supportive-environment": {
        "title": "Qo'llab-quvvatlovchi muhit",
        "description": "O'zbekistonning o'zgarishi xorijiy investorlarga mamlakatda o'z ishtirokini kengaytirish uchun real imkoniyatlarni taqdim etadi. O'zbekiston turli islohotlar, infratuzilmani takomillashtirish va boshqaruvni o'zgartirish orqali biznes uchun qulay muhit yaratish borasida salmoqli yutuqlarga erishdi."
      }
    }
  }
}
</i18n>
