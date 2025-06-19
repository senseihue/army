<script setup lang="ts">
import Logo from "~/app/assets/svg/logo.svg"

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="bg-blue-bright">
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div class="hidden lg:col-span-2 lg:block" data-aos="fade-left" data-aos-delay="100">
            <logo class="w-full" />
          </div>

          <div class="lg:col-span-3" data-aos="fade-right" data-aos-delay="50">
            <h3 class="mb-8 text-2xl font-bold text-blue-command lg:text-3xl">{{ t("heading") }}</h3>
            <p class="whitespace-pre-line text-gray-700">{{ t("text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "About Us",
    "text": "The Investment Promotion Agency under the Ministry of Investment, Industry, and Trade of the Republic of Uzbekistan (Agency) is resolutely committed to cultivating a dynamic and investor-friendly environment. Our primary goal is to assist foreign investors in navigating and leveraging new business opportunities across diverse sectors in Uzbekistan.\n\nEstablished in 2019 the Agency serves as a vital “One-Stop-Shop” for foreign investors exploring the abundant opportunities in business-friendly Uzbekistan. As the primary point of contact with the state, we simplify the investment process by providing comprehensive support and guidance, ensuring that investors navigate the regulatory landscape with ease.\n\nBy acting as a bridge between foreign investors and local entrepreneurs, we foster strategic trust and build meaningful partnerships that contribute to the economic growth and mutual prosperity of all parties involved. Our commitment is to streamline the investment experience, making Uzbekistan an attractive and accessible destination for global business."
  },
  "ru": {
    "heading": "О нас",
    "text": "Агентство по привлечению иностранных инвестиций при Министерстве инвестиций, промышленности и торговли Республики Узбекистан нацелено на создание динамичной и благополучной для инвесторов среды. Наша основная задача — содействие иностранным инвесторам в поиске и реализации новых бизнес-возможностей в различных секторах экономики Узбекистана.\n\nОснованное в 2019 году, Агентство служит «единым окном» для иностранных инвесторов, заинтересованных в изучении широких возможностей, которые предлагает открытая и ориентированная на бизнес экономика Узбекистана. Выступая в качестве основного связующего звена между инвесторами и государственными структурами, мы упрощаем процесс инвестирования, предоставляем всестороннюю поддержку и помогаем инвесторам ориентироваться в нормативно-правовой базе страны.\n\nКроме того, Агентство выступает в качестве моста между иностранными инвесторами и местными предпринимателями, способствуя укреплению стратегического доверия и формированию прочных партнерских связей. Эти отношения служат основой для устойчивого экономического роста и взаимовыгодного процветания всех участников. Мы стремимся обеспечить комфортные условия для инвестиций, делая Узбекистан привлекательным и доступным направлением для глобального бизнеса."
  },
  "uz": {
    "heading": "Biz haqimizda",
    "text": "O’zbekiston Respublikasi Investitsiyalar, sanoat va savdo vazirligi huzuridagi Investitsiyalarni jalb etish agentligi investorlar uchun dinamik va do’stona muhit yaratishga qat’iy qaror qilgan. Bizning asosiy maqsadimiz — xorijiy investorlarni O’zbekistondagi turli sohalarda yangi biznes imkoniyatlarini o’rganish va foydalanishlariga yordam berish.\n\n2019-yilda tashkil etilgan (Agentlik) UZIPA xorijiy investorlar uchun O’zbekistondagi keng imkoniyatlarni tadqiq etishda muhim \"Yagona darcha\" sifatida xizmat qiladi. Biz investitsiya jarayonini soddalashtirib, kompleks qo’llab-quvvatlash va yo’l-yo’riq ko’rsatish orqali investorlarning regulyator muhitida oson rivojlanishiga yordam beramiz.\n\nXorijiy investorlar bilan mahalliy tadbirkorlar o’rtasida ko’prik vazifasini o’tab, biz strategik ishonchni rivojlantiramiz va iqtisodiy o’sish va o’zaro farovonlikni ta’minlovchi ahamiyatli hamkorliklarni quramiz. Bizning sadoqatimiz investitsiya tajribasini soddalashtirishda va O’zbekistonni global biznes uchun qulay bo’lgan manzilga aylantirishda namoyon bo’ladi."
  }
}
</i18n>
