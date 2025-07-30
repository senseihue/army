<script setup lang="ts">
const { t, tm, rt, locale } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex flex-col gap-4">
          <img src="/img/guide/partnership/hero.png" alt="Image" />
          <p class="whitespace-pre-line text-gray-olive">{{ t("content") }}</p>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="text-center text-xl font-bold text-blue-command">{{ t("initiation.heading") }}</h3>
            <p class="whitespace-pre-line text-gray-olive">{{ t("initiation.text") }}"></p>
            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('initiation.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="text-center text-xl font-bold text-blue-command">{{ t("project.heading") }}</h3>
            <p class="whitespace-pre-line text-gray-olive">{{ t("project.text") }}"></p>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-bold">{{ t("single_criteria.heading") }}</h3>
            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('single_criteria.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>

          <div class="mb-8 flex flex-col gap-4">
            <h3 class="font-bold">{{ t("single_criteria.heading") }}</h3>
            <ul class="list-disc pl-10">
              <li v-for="(item, index) in tm('single_criteria.list')" :key="index">{{ rt(item) }}</li>
            </ul>
          </div>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="mb-4 text-center text-xl font-bold text-blue-command md:mb-8">
              {{ t("tender.heading") }}
            </h3>
            <img v-if="locale === 'ru'" src="/img/guide/partnership/tender-ru.png" alt="" />
            <img v-else src="/img/guide/partnership/tender.png" alt="" />
          </div>
          <div class="p-section"></div>

          <div class="my-4 flex flex-col gap-4">
            <h3 class="mb-4 text-center text-xl font-bold text-blue-command md:mb-8">{{ t("initiative.heading") }}</h3>
            <img v-if="locale === 'ru'" src="/img/guide/partnership/intiative-ru.png" alt="" />
            <img v-else src="/img/guide/partnership/invitation.png" alt="" />
          </div>
          <div class="p-section"></div>

          <ui-button
            class="sm:max-w-min"
            color="success"
            rounded
            target="_blank"
            href="https://www.pppda.uz/en/projects-2/prospective-projects"
            :label="t('button')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "button": "Department of PPP Projects Development",
    "content": "Uzbekistan committed to public-private partnerships (PPPs), viewing them as essential for improving public services and attracting much-needed investment and expertise. The country has experienced significant growth in PPP projects, with over 400 infrastructure initiatives, valued at approximately $16 bln, either completed or in progress. This marks a major change, especially given the lack of private sector involvement in such projects before 2018.\n\nCurrently, PPPs cover various sectors, including energy, healthcare, and education, with an expected mobilization of around $700 million. Additionally, several projects in energy, healthcare, and the chemical sectors have already been completed, with a total anticipated mobilization exceeding $1.8 billion.\n\nUzbekistan plans to expand its PPP efforts into sectors such as irrigation, transport, power distribution, and municipal services - all of which face underinvestment and operational issues. To speed up the implementation of PPPs, the country needs to streamline project development, accelerate approvals, and simplify land acquisition processes.\n\nLooking ahead, Uzbekistan’s ambitious Strategy 2030 targets $30 billion in private sector mobilization by the year 2030.",
    "initiation": {
      "heading": "Public-Private Partnership Projects initiation",
      "text": "A private or public partner first develops a concept paper on the Public-Private Partnership (PPP) project as well as a feasibility document packet, then approaches the responsible state authority for approval. Depending on its value, the PPP project may go through several stages of approval, starting from simple adoption by the public partner up to final approval by the Cabinet of Ministers. Depending on the project value, the following approval gradation is applicable:",
      "list": [
        "<1 million USD: approval by the public partner",
        "1–10 million USD: approval by both the public partner and Department of the Implementation of PPP Projects",
        ">10 million USD: acknowledgment by the public partner and the Department for the Implementation of PPP Projects, followed by final approval by the Cabinet of Ministers."
      ]
    },
    "tender": {
      "heading": "Standard Tender Process"
    },
    "initiative": {
      "heading": "Private Initiative Project Implementation Process (Swiss Challenge Method)"
    },
    "project": {
      "heading": "Selection of the Public-Private Partnership Projects",
      "text": "The public partner selects the private partner through a tender process, which can be conducted in either one or two stages."
    },
    "single_criteria": {
      "heading": "Criteria for a single stage tender",
      "list": [
        "The project value amounts to 1 mln USD or below, and/or",
        "The private partner acts as an initiator (unsolicited project). If the public partner approves the concept paper the private partner submitted, the project proposal is put out for tender. A Request for expression of interest should be posted on the website of the public partner and Department of the Implementation of PPP Projects for 45 days. If no one declares interest during the specified period, the public partner may enter into a direct agreement with the private partner."
      ]
    },
    "multiple_criteria": {
      "heading": " Criteria for a two-stage tender",
      "list": [
        "The project value exceeds USD 1 mln, and/or",
        "The public partner acts as the initiator (solicited project). The tender commission, comprised of representatives from state authorities (e.g., public partner, Ministry of Finance, Antimonopoly Committee, Department of the Implementation of PPP Projects) determines the winning bid."
      ]
    }
  },
  "ru": {
    "button": "Департамент развития проектов ГЧП",
    "content": "Узбекистан взял на себя обязательство развивать государственно-частное партнерство (ГЧП), рассматривая его как ключевой инструмент для улучшения государственных услуг и привлечения необходимых инвестиций и экспертизы. Страна продемонстрировала значительный рост проектов ГЧП — реализовано и находится в процессе более 400 инфраструктурных инициатив общей стоимостью примерно 16 млрд долларов США. Это стало серьёзным изменением, особенно учитывая отсутствие частного сектора в таких проектах до 2018 года.\n\nВ настоящее время проекты ГЧП охватывают различные отрасли, включая энергетику, здравоохранение и образование, при этом ожидается мобилизация около 700 миллионов долларов. Кроме того, несколько проектов в энергетике, здравоохранении и химическом секторе уже завершены, а общая ожидаемая мобилизация превышает 1,8 миллиарда долларов.\n\nУзбекистан планирует расширить усилия в сфере ГЧП в таких отраслях, как орошение, транспорт, распределение электроэнергии и муниципальные услуги — все они сталкиваются с недостаточным финансированием и проблемами в эксплуатации. Для ускорения реализации ГЧП страна должна оптимизировать разработку проектов, ускорить процесс согласований и упростить процедуры приобретения земли.\n\nВ перспективе амбициозная Стратегия Узбекистана 2030 предусматривает мобилизацию 30 миллиардов долларов частного сектора к 2030 году.",
    "initiation": {
      "heading": "Инициация проектов государственно-частного партнерства",
      "text": "Частный или государственный партнер сначала разрабатывает концептуальный документ по проекту ГЧП и пакет документов по технико-экономическому обоснованию, затем обращается в уполномоченный государственный орган для утверждения. В зависимости от стоимости проект ГЧП может пройти несколько этапов согласования — от простого утверждения государственным партнером до окончательного утверждения Кабинетом Министров. В зависимости от стоимости применяется следующая градация согласований:",
      "list": [
        "<1 миллиона долларов США: утверждение государственным партнером",
        "1–10 миллионов долларов США: утверждение государственным партнером и Департаментом реализации проектов ГЧП",
        ">10 миллионов долларов США: согласование государственным партнером и Департаментом реализации проектов ГЧП с последующим окончательным утверждением Кабинетом Министров."
      ]
    },
    "tender": {
      "heading": "Стандартный процесс тендера"
    },
    "initiative": {
      "heading": "Процесс реализации инициативы частного партнера (метод Swiss Challenge)"
    },
    "project": {
      "heading": "Отбор проектов государственно-частного партнерства",
      "text": "Государственный партнер выбирает частного партнера через тендерный процесс, который может проводиться в одну или две стадии."
    },
    "single_criteria": {
      "heading": "Критерии одностадийного тендера",
      "list": [
        "Стоимость проекта составляет 1 миллион долларов США или меньше, и/или",
        "Частный партнер выступает инициатором (не запрашиваемый проект). Если государственный партнер одобряет представленный частным партнером концептуальный документ, проект выставляется на тендер. Запрос на выражение заинтересованности должен быть размещен на сайте государственного партнера и Департамента реализации проектов ГЧП на срок 45 дней. Если в течение указанного периода никто не проявит интерес, государственный партнер может заключить прямое соглашение с частным партнером."
      ]
    },
    "multiple_criteria": {
      "heading": "Критерии двухстадийного тендера",
      "list": [
        "Стоимость проекта превышает 1 миллион долларов США, и/или",
        "Государственный партнер выступает инициатором (запрашиваемый проект). Тендерная комиссия, состоящая из представителей государственных органов (например, государственного партнера, Министерства финансов, Антимонопольного комитета, Департамента реализации проектов ГЧП), определяет победителя."
      ]
    }
  },
  "uz": {
    "button": "GCHP Loyihalarini Rivojlantirish Bo‘limi",
    "content": "O‘zbekiston davlat-xususiy sherikliklarga (GCHP) sodiqlik bildirgan bo‘lib, ularni davlat xizmatlarini yaxshilash va zarur investitsiyalar hamda tajribani jalb qilish uchun muhim vosita deb hisoblaydi. Mamlakatda 400 dan ortiq infratuzilma loyihalari amalga oshirilmoqda yoki yakunlanmoqda, ularning umumiy qiymati taxminan 16 milliard dollarni tashkil qiladi. Bu katta o‘zgarish bo‘lib, ayniqsa 2018 yilgacha xususiy sektor bu kabi loyihalarda deyarli ishtirok etmaganini hisobga olsak.\n\nHozirgi vaqtda GCHP loyihalari energetika, sog‘liqni saqlash va ta’lim kabi turli sohalarni qamrab oladi va taxminan 700 million dollar jalb qilinishi kutilmoqda. Bundan tashqari, energetika, sog‘liqni saqlash va kimyo sohalarida bir nechta loyihalar allaqachon yakunlangan bo‘lib, ularning umumiy kutilayotgan investitsiyalari 1,8 milliard dollardan oshadi.\n\nO‘zbekiston GCHP sohasidagi faoliyatini sug‘orish, transport, elektr taqsimoti va kommunal xizmatlar kabi kam investitsiya qilingan va operatsion muammolarga duch kelayotgan sohalarga kengaytirishni rejalashtirmoqda. GCHP loyihalarini tezroq amalga oshirish uchun loyiha ishlab chiqishni soddalashtirish, tasdiqlash jarayonini tezlashtirish va yer olish jarayonini yengillashtirish zarur.\n\nKelajakda, O‘zbekistonning 2030 strategiyasi 2030 yilga borib xususiy sektor tomonidan 30 milliard dollar investitsiya jalb qilishni maqsad qilgan.",
    "initiation": {
      "heading": "Davlat-xususiy sheriklik loyihalarini boshlash",
      "text": "Xususiy yoki davlat sherik dastlab GCHP loyihasiga oid kontseptsiya hujjati va texnik-iqtisodiy asoslash hujjatlarini tayyorlaydi, so‘ng mas’ul davlat organiga tasdiqlash uchun murojaat qiladi. Loyihaning qiymatiga qarab, GCHP loyihasi bir nechta tasdiqlash bosqichlaridan o‘tishi mumkin — davlat sherik tomonidan oddiy tasdiqlashdan tortib Vazirlar Mahkamasi tomonidan yakuniy tasdiqlashgacha. Quyidagi tasdiqlash tartibi qiymatga bog‘liq:",
      "list": [
        "1 million AQSh dollaridan kam: davlat sherik tomonidan tasdiqlash",
        "1–10 million AQSh dollari: davlat sherik va GCHP loyihalarini amalga oshirish bo‘limi tomonidan tasdiqlash",
        "10 million AQSh dollaridan ortiq: davlat sherik va GCHP loyihalarini amalga oshirish bo‘limi tomonidan rozilik, so‘ng Vazirlar Mahkamasi tomonidan yakuniy tasdiqlash."
      ]
    },
    "tender": {
      "heading": "Standart tanlov jarayoni"
    },
    "initiative": {
      "heading": "Xususiy tashabbus loyihasini amalga oshirish jarayoni (Swiss Challenge usuli)"
    },
    "project": {
      "heading": "Davlat-xususiy sheriklik loyihalarini tanlash",
      "text": "Davlat sherik xususiy sherikni tanlov orqali tanlaydi, bu tanlov bir yoki ikki bosqichda o‘tkazilishi mumkin."
    },
    "single_criteria": {
      "heading": "Bir bosqichli tanlov mezonlari",
      "list": [
        "Loyihaning qiymati 1 million AQSh dollariga teng yoki undan kam, va/yoki",
        "Xususiy sherik tashabbuskor (tashabbuskor loyihalar). Agar davlat sherik xususiy sherik tomonidan taqdim etilgan kontseptsiya hujjatini ma’qullasa, loyiha tanlovga qo‘yiladi. Qiziqish bildirganlar to‘g‘risida e’lon davlat sherik va GCHP loyihalarini amalga oshirish bo‘limi saytlarida 45 kun davomida joylashtirilishi kerak. Belgilangan muddatda hech kim qiziqish bildirmasa, davlat sherik to‘g‘ridan-to‘g‘ri kelishuvni xususiy sherik bilan amalga oshirishi mumkin."
      ]
    },
    "multiple_criteria": {
      "heading": "Ikki bosqichli tanlov mezonlari",
      "list": [
        "Loyihaning qiymati 1 million AQSh dollaridan oshadi, va/yoki",
        "Davlat sherik tashabbuskor (so‘ralgan loyihalar). Tanlov komissiyasi davlat organlari vakillaridan (masalan, davlat sherik, Moliya vazirligi, Antimonopoliya qo‘mitasi, GCHP loyihalarini amalga oshirish bo‘limi) tashkil topgan bo‘lib, g‘olib taklifni aniqlaydi."
      ]
    }
  }
}
</i18n>
