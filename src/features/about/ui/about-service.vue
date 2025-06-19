<script setup lang="ts">
const { t, tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="bg-blue-bright">
    <div class="container-7xl">
      <div class="p-section">
        <h3
          class="mb-20 text-center text-2xl font-bold text-blue-command lg:text-3xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {{ t("heading") }}
        </h3>

        <div class="grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service,idx) in tm('services')" class="flex flex-col gap-3" :key="idx">
            <h3 class="mb-8 text-5xl font-bold text-blue-command">0{{ idx + 1}}</h3>
            <p class="line-clamp-4 min-h-28 text-xl font-bold text-blue-midnight">{{ rt(service.title)}}</p>
            <p class="text-lg">{{ rt(service.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Services provided by the Investors’ Center under the Agency",
    "services": [
      {
        "title": "Provision of Comprehensive Business Information and Conditions",
        "description": "We deliver in-depth insights into Uzbekistan’s business environment and investment conditions. Our detailed information covers economic trends, regulatory frameworks, and market opportunities, equipping foreign investors with the knowledge necessary to make informed and strategic investment decisions."
      },
      {
        "title": "Assistance in Identifying and Securing Optimal Locations and Land",
        "description": "Our agency excels in guiding investors to suitable locations and land for their projects. We streamline the process of site selection and acquisition, ensuring that investors find the most strategic and advantageous sites for their investments."
      },
      {
        "title": "Prompt Resolution of Emerging Issues",
        "description": "We deliver in-depth insights into Uzbekistan’s business environment and investment conditions. Our detailed information covers economic trends, regulatory frameworks, and market opportunities, equipping foreign investors with the knowledge necessary to make informed and strategic investment decisions."
      },
      {
        "title": "Provision of Sectoral Analysis and Investment Reports",
        "description": "We offer invaluable sectoral analyses and investment reports that provide a thorough understanding of market dynamics and emerging opportunities. These resources are crucial for making well-informed investment choices and capitalizing on market trends."
      },
      {
        "title": "Facilitation of Strategic Meetings with Government and Local Business Leaders",
        "description": "We arrange and coordinate meetings with key governmental bodies and influential local business leaders. This service fosters essential networking and collaboration, enabling investors to establish valuable connections and engage with relevant stakeholders."
      },
      {
        "title": "Prompt Resolution of Emerging Issues",
        "description": "We deliver in-depth insights into Uzbekistan’s business environment and investment conditions. Our detailed information covers economic trends, regulatory frameworks, and market opportunities, equipping foreign investors with the knowledge necessary to make informed and strategic investment decisions."
      }
    ]
  },
  "ru": {
    "heading": "Услуги, предоставляемые Центром поддержки инвесторов при Агентстве",
    "services": [
      {
        "title": "Предоставление комплексной информации о бизнес-среде и условиях инвестирования",
        "description": "Мы обеспечиваем глубокое понимание деловой среды и инвестиционных условий в Узбекистане. Мы предоставляем информацию, которая охватывает экономические тенденции, нормативно-правовую базу и рыночные возможности, снабжая иностранных инвесторов знаниями, необходимыми для принятия обоснованных инвестиционных решений."
      },
      {
        "title": "Помощь в определении оптимального местоположения и выделении земельных участков для бизнеса",
        "description": "Мы оптимизируем процесс подбора и приобретения земельных участков, обеспечивая инвесторам доступ к наиболее подходящим и выгодным площадкам для реализации проектов и ведения бизнеса."
      },
      {
        "title": "Оперативное решение возникающих проблем",
        "description": "Мы стремимся оперативно решать любые вопросы, возникающие в ходе инвестиционного процесса. Благодаря проактивному подходу инвесторы получают всестороннюю поддержку при возникновении затруднений и могут сосредоточиться на своей основной деятельности."
      },
      {
        "title": "Предоставление отраслевого анализа и инвестиционных отчетов",
        "description": "Мы предлагаем глубокий отраслевой анализ, который обеспечит полное понимание динамики рынка и возникающих возможностей."
      },
      {
        "title": "Содействие проведению встреч с представителями правительства и бизнес-лидерами",
        "description": "Мы организуем и координируем встречи с ключевыми государственными структурами и ведущими представителями бизнеса. Это способствует установлению надёжных отношений и открывает возможности для дальнейшего взаимовыгодного сотрудничества."
      },
      {
        "title": "Другие услуги для эффективной реализации инвестиционной деятельности",
        "description": "Мы предоставляем ряд дополнительных услуг для обеспечения успешной реализации инвестиционной деятельности, адаптированных к конкретным потребностям инвестора."
      }
    ]
  },
  "uz": {
    "heading": "Investitsiyalarni Qo‘llab-Quvvatlash Markazi tomonidan taqdim etiladigan xizmatlar",
    "services": [
      {
        "title": "Biznes muhiti va investitsiya sharoitlari bo‘yicha kompleks axborot taqdim etish",
        "description": "Biz O‘zbekistondagi ishbilarmonlik muhiti va investitsiya sharoitlari yuzasidan chuqur tushuncha beramiz. Taqdim etilayotgan ma’lumotlar iqtisodiy tendensiyalar, me’yoriy-huquqiy baza va bozor imkoniyatlarini qamrab olib, xorijiy investorlarning asosli qaror qabul qilishi uchun zarur bilimlarni ta’minlaydi."
      },
      {
        "title": "Biznes uchun optimal joy tanlash va yer uchastkalarini ajratishda ko‘maklashish",
        "description": "Biz investorlar o‘z faoliyatlari uchun eng maqbul joyni topishi va yer ajratish jarayonini soddalashtirish maqsadida to‘liq ko‘mak ko‘rsatamiz, bu esa investitsiyaning samaradorligini oshirishga xizmat qiladi."
      },
      {
        "title": "Yuzaga keladigan muammolarni tezda hal qilish",
        "description": "Biz sarmoya faoliyati jarayonida yuzaga kelishi mumkin bo‘lgan har qanday muammolarni tezda hal qilishga intilamiz. Bizning faol yondashuvimiz investorlarning faoliyatida to‘siqlarsiz jarayonni ta’minlaydi."
      },
      {
        "title": "Tarmoq tahlillari va investitsiya hisobotlarini taqdim etish",
        "description": "Biz bozor dinamikasi va yangi imkoniyatlarni chuqur anglash uchun tarmoq bo‘yicha chuqur tahlillar va investitsiya hisobotlarini taqdim etamiz."
      },
      {
        "title": "Hukumat vakillari va biznes yetakchilari bilan uchrashuvlar tashkil etish",
        "description": "Biz mamlakatdagi asosiy davlat organlari va biznes yetakchilari bilan uchrashuvlar o‘tkazishni tashkil etamiz va muvofiqlashtiramiz. Bu ishonchli aloqalarni o‘rnatish va kelgusidagi hamkorlik uchun asos yaratadi."
      },
      {
        "title": "Investitsiya faoliyatini samarali amalga oshirishga qaratilgan qo‘shimcha xizmatlar",
        "description": "Investorlarning individual ehtiyojlariga moslashtirilgan, ularning investitsiya faoliyatini muvaffaqiyatli amalga oshirishiga xizmat qiluvchi keng qamrovli qo‘shimcha xizmatlarni taqdim etamiz."
      }
    ]
  }
}
</i18n>
