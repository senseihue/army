<script setup lang="ts">
import { ReasonNav, SectionGrid } from "~/layers/features/reason"
import { ProvenTable, ResourcesChart } from "~/layers/features/reason/resources"

definePageMeta({ fixedHeader: false })
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div>
    <reason-nav></reason-nav>
    <section-grid>
      <template #right>
        <div>
          <h3 class="text-center">
            {{ t("resources.title") }}
          </h3>
          <br />
          <p v-html="t('resources.description')" class="text-justify"></p>
        </div>
      </template>

      <template #left>
        <div>
          <img class="section-card__image" src="/img/reason/resources/gold.webp" alt="Talent in Uzbekistan" />
        </div>
      </template>
    </section-grid>

    <section-grid>
      <template #left>
        <div>
          <img class="section-card__image" src="/img/reason/resources/screw.webp" alt="" />
        </div>
      </template>
      <template #right>
        <div>
          <proven-table />
        </div>
      </template>
    </section-grid>

    <resources-chart />
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "resources": {
      "title": "Natural Resources",
      "description": "Uzbekistan is rich in natural resources, with significant mineral deposits and reserves of oil and natural gas. Possessing the world's fourth-largest gold reserves, Uzbekistan ranks as the seventh largest producer globally, and the country's Muruntau mine – operated by the Navoi Mining and Metallurgical Company (NMMC) – is among the largest gold mines operating today.      <br><br>Furthermore, Uzbekistan has some of the world's largest reserves of uranium, as well as an abundance of strategically important metals such as copper, zinc, lead, tungsten, and molybdenum. This is in addition to Uzbekistan's leading potential in renewables, with abundant wind and solar resources to drive the energy transition, both in the region and beyond.<br><br>To observe Geological maps of Uzbekistan <a class=' underline text-blue-midnight' target='_blank' href='https://www.geoportal-uz.org/maps/'>click here</a>"
    }
  },
  "ru": {
    "resources": {
      "title": "Природные ресурсы",
      "description": "Узбекистан богат природными ресурсами, располагает значительными залежами полезных ископаемых и запасами нефти и природного газа. Обладая четвертыми по величине запасами золота в мире, Узбекистан занимает седьмое место в мире по добыче золота, а рудник Мурунтау в стране, управляемый Навоийской горно-металлургической компанией (НГМК), является одним из крупнейших золотодобывающих предприятий, действующих на сегодняшний день.  <br><br>    Кроме того, Узбекистан обладает одними из крупнейших в мире запасов урана, а также изобилием стратегически важных металлов, таких как медь, цинк, свинец, вольфрам и молибден. Это является дополнением к лидирующему потенциалу Узбекистана в области возобновляемых источников энергии, с его богатыми ветровыми и солнечными ресурсами, которые способствуют переходу к энергетике как в регионе, так и за его пределами.      <br><br>Чтобы ознакомиться с геологическими картами Узбекистана, нажмите здесь <a class=' underline text-blue-midnight' target='_blank' href='https://www.geoportal-uz.org/maps/'>нажмите здесь</a>"
    }
  },
  "uz": {
    "resources": {
      "title": "Tabiiy Resurslar",
      "description": "O'zbekiston tabiiy resurslarga boy, foydali qazilma konlari va neft va tabiiy gaz zaxiralariga ega. Dunyodagi to'rtinchi yirik oltin zaxiralariga ega bo'lgan O'zbekiston jahon miqyosida yettinchi yirik ishlab chiqaruvchi, Navoiy kon – metallurgiya kompaniyasi (NKMK) tomonidan boshqariladigan Muruntov koni esa bugungi kunda faoliyat ko'rsatayotgan eng yirik oltin konlari qatoriga kiradi.      <br><br>Bundan tashqari, O'zbekiston dunyodagi eng yirik uran zaxiralariga, shuningdek, mis, rux, qo'rg'oshin, volfram va molibden kabi strategik ahamiyatga ega metallarning ko'pligiga ega. Bu O'zbekistonning mintaqada ham, undan tashqarida ham energiya almashinuvini ta'minlash uchun mo'l-ko'l shamol va quyosh resurslariga ega bo'lgan qayta tiklanadigan energiya manbalari bo'yicha yetakchi salohiyatidan tashqari.      <br><br>O'zbekistonning geologik xaritalarini kuzatish uchun <a class=' underline text-blue-midnight' target='_blank' href='https://www.geoportal-uz.org/maps/'>bu yerni bosing</a>"
    }
  }
}
</i18n>
