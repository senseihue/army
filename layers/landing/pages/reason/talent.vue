<script setup lang="ts">
import { StatisticCard, ReasonNav, SectionGrid } from "#layers/landing/modules/reason"
import { TalentUniversities, TalentStatistics } from "#layers/landing/modules/reason/talent"

definePageMeta({ fixedHeader: false })

const { t } = useI18n({ useScope: "local" })

const statisticData = ref([
  { label: t("statistics.population-under-19"), value: "40%" },
  { label: t("statistics.high-school-students"), value: "6.5m" },
  { label: t("statistics.gdp"), value: "6 %" }
])
</script>

<template>
  <div class="talent-page">
    <reason-nav></reason-nav>
    <section-grid>
      <template #left>
        <div>
          <h3 class="text-center">
            {{ t("reason.talent.title") }}
          </h3>
          <br />
          <p class="text-justify">
            {{ t("reason.talent.description") }}
          </p>
          <p class="text-justify">
            {{ t("reason.talent.sub-description") }}
          </p>
        </div>
      </template>

      <template #right>
        <img
          class="section-card__image"
          src="/public/img/reason/talent/kukeldash-madrasah.webp"
          alt="Talent in Uzbekistan"
        />
      </template>
    </section-grid>

    <section-grid>
      <template #left>
        <div>
          <img class="section-card__image" src="/public/img/reason/talent/independance-day.webp" alt="" />
        </div>
      </template>
      <template #right>
        <div>
          <statistic-card align="right" theme="midnight" :items="statisticData" />
          <p class="text-justify">
            {{ t("reason.stats.description") }}
          </p>
          <p class="text-justify">
            {{ t("reason.stats.sub-description") }}
          </p>
        </div>
      </template>
    </section-grid>
    <talent-statistics />
    <talent-universities />
    <section class="relative bg-blue-bright">
      <div class="container-7xl">
        <div class="flex flex-col gap-8 py-16" data-aos="fade" data-aos-delay="50"></div>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "reason": {
      "talent": {
        "title": "Talent",
        "description": "Since Khiva-born Al-Khawarizmi, 'the grandfather of computer science, gave the world algebra, Uzbeks have made an outsized contribution to humanity's collective understanding of the world and the scientific principles underpinning it. This is a culture in which education and intellectual inquiry are highly valued.",
        "sub-description": "With 40% of the population under the age of 19, and 30% even younger than 14, Uzbekistan is a young country, full of the dynamism and energy of youth."
      },
      "stats": {
        "title": "",
        "description": "What's more, the almost 6.5 million students currently attending Uzbekistan's high schools are benefiting from an increasingly sophisticated STEM education, and a million are receiving further training at one of the country's 209 higher educational institutions, preparing the nation's next generation for a critical role in the global economy of tomorrow.",
        "sub-description": "From science and math to art, literature, and music, Uzbeks inherit a legacy of great achievement, and we are determined to enrich the 21st century just as we have enriched so many other periods in history."
      }
    },
    "statistics": {
      "population-under-19": {},
      "high-school-students": "High school students",
      "gdp": "GDP allocated to education"
    }
  },
  "ru": {
    "reason": {
      "talent": {
        "title": "Талант",
        "description": "С тех пор как родившийся в Хиве Аль-Хорезми, «дедушка компьютерных наук», подарил миру алгебру, узбеки внесли значительный вклад в коллективное понимание человечеством мира и научных принципов, лежащих в его основе. Это культура, в которой образование и интеллектуальное исследование высоко ценятся.",
        "sub-description": "С 40% населения младше 19 лет и 30% еще младше 14 лет Узбекистан — молодая страна, полная динамики и энергии молодежи."
      },
      "stats": {
        "title": "",
        "description": "Более того, почти 6,5 миллиона учащихся, которые сейчас посещают средние школы Узбекистана, получают выгоду от все более сложного STEM-образования, а миллион получает дальнейшее обучение в одном из 209 высших учебных заведений страны, готовя следующее поколение нации к критической роли в глобальной экономике завтрашнего дня.",
        "sub-description": "От науки и математики до искусства, литературы и музыки узбеки унаследовали наследие великих достижений, и мы стремимся обогатить XXI век так же, как мы обогатили многие другие периоды истории."
      }
    },
    "statistics": {
      "population-under-19": {},
      "high-school-students": "Ученики средней школы",
      "gdp": "ВВП, выделенный на образование"
    }
  },
  "uz": {
    "reason": {
      "talent": {
        "title": "Iqtidor",
        "description": "Xiva tug'ilgan Al-Xorazmiy, 'kompyuter fanlari otasi', olamga algebra berganidan beri, o'zbeklar insoniyatning umumiy tushunchasiga va uning asosidagi ilmiy tamoyillarga katta hissa qo'shdi. Bu ta'lim va intellektual tadqiqotlar yuqori baholangan madaniyat.",
        "sub-description": "Aholining 40 foizi 19 yoshgacha, 30 foizi esa 14 yoshgacha bo'lgan O'zbekiston yoshlik mamlakati bo'lib, yoshlikning dinamikasi va energiyasi bilan to'la."
      },
      "stats": {
        "title": "",
        "description": "Bundan tashqari, O'zbekistonning 6,5 million o'quvchisi hozirgi kunda o'rta maktablarda STEM ta'limidan foydalanmoqda va milliondan ortiq talabalar mamlakatning 209 oliy ta'lim muassasalarida qo'shimcha ta'lim olishmoqda, bu esa kelajakdagi avlodni global iqtisodiyotda muhim rolga tayyorlamoqda.",
        "sub-description": "Fan va matematika, san'at, adabiyot va musiqa sohalaridan tortib, o'zbeklar buyuk yutuqlar merosini meros qilib oldilar va biz XXI asrni boyitishga intilamiz."
      }
    },
    "statistics": {
      "population-under-19": {},
      "high-school-students": "O'rta maktab o'quvchilari",
      "gdp": "Ta'limga ajratilgan Iqtisodiy ko'rsatkich"
    }
  }
}
</i18n>

<style>
.talent-page {
  overflow: clip;
}

.section-card__image {
  width: 100%;
  aspect-ratio: auto;
  @apply object-cover object-center;
}
</style>
