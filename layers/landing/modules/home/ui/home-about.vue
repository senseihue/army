<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 class="mb-4 text-2xl font-bold text-blue-command lg:text-3xl" data-aos="fade-up" data-aos-delay="50">
              {{ t("heading") }}
            </h3>

            <p class="whitespace-pre-line text-gray-700">{{ t("text") }}</p>
          </div>

          <div class="relative h-fit" data-aos="zoom-in" data-aos-delay="50">
            <video
              class="aspect-video w-full object-cover object-center"
              controls
              poster="https://dev-portal.miit.uz/uploads/new-uzbekistan/info.png"
              src="https://dev-portal.miit.uz/uploads/new-uzbekistan/hero.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Creating and expanding growth opportunities in Uzbekistan",
    "text": "Uzbekistan is a country transformed. Over the last five years, a sweeping reform program has liberalized the national economy and spurred a period of unprecedented growth. From the establishment of an independent energy regulator to major privatization projects in strategic sectors from chemicals to banking, Uzbekistan’s economic re-structuring is attracting investors from around the world.\n\n What’s more, a burgeoning tech industry is testament to the ingenuity and entrepreneurialism of Uzbekistan’s young, STEM-educated population and its culture of innovation.\n\n Once a key node on the fabled Silk Road, Uzbekistan is reclaiming its place at the heart of global trade."
  },
  "ru": {
    "heading": "Создавая и расширяя возможности для роста бизнеса в Узбекистане",
    "text": "Узбекистан — это страна, которая преобразилась. За последние пять лет масштабная программа реформ либерализовала национальную экономику и сформировала стимулы для беспрецедентного роста. От создания независимого регулятора энергетики до крупных проектов приватизации в таких стратегических секторах как химическая промышленность, финансовый сектор и других — экономическая реструктуризация Узбекистана привлекает инвесторов со всего мира.\n\nБолее того, растущая технологическая отрасль является свидетельством энергии ипредприимчивости, развивающейся культуры инноваций молодого населения Узбекистана.\n\nНекогда ключевой узел на легендарном Шелковом пути, Узбекистан возвращает себеместо в мировой торговли."
  },
  "uz": {
    "heading": "O’zbekistonda biznes taraqqiyot imkoniyatlarini yaratish va kengaytirish",
    "text": "O‘zbekiston bu tubdan o‘zgargan mamlakatdir. So‘nggi besh yil ichida keng ko‘lamli islohotlar dasturi milliy iqtisodiyotni liberallashtirib, misli ko‘rilmagan taraqqiyotga turtki berdi. Energetika sohasida mustaqil organning yaratilishidan tortib, kimyo sanoati, moliya sektori va boshqa strategik sohalarda yirik xususiylashtirish loyihalarigacha - O‘zbekistonning iqtisodiy taraqqiyoti dunyo investorlarini jalb qilmoqda.\n\nBundan tashqari, texnologiya sanoati va innovatsion muhitning rivojlanishi O‘zbekistonning faol va tashabbuskor yosh avlodining mehnatlarini namoyon etadi.\n\nTarixiy Buyuk Ipak Yo’lining markazi bo’lgan O‘zbekiston, bugun jahon savdosida o‘z o‘rnini qayta tiklamoqda."
  }
}
</i18n>
