<script setup lang="ts">
import Multiselect from "@vueform/multiselect"
import { RegisterInvestor } from "#layers/landing/modules/forms/register-investor"

const { t } = useI18n({ useScope: "local" })

type SelectOptions = Array<{
  name: string
  value: string
}>

const options: SelectOptions = [
  { name: t("investment-preferences.options.target.agriculture_agribusiness"), value: "agro" },
  { name: t("investment-preferences.options.target.energy"), value: "energy" },
  { name: t("investment-preferences.options.target.manufacturing"), value: "manufacturing" },
  { name: t("investment-preferences.options.target.textiles_garments"), value: "textiles" },
  { name: t("investment-preferences.options.target.construction_materials"), value: "construction" },
  { name: t("investment-preferences.options.target.logistics_transport"), value: "logistics" },
  { name: t("investment-preferences.options.target.tourism_hospitality"), value: "tourism" },
  { name: t("investment-preferences.options.target.healthcare"), value: "healthcare" },
  { name: t("investment-preferences.options.target.pharmaceuticals"), value: "pharmaceuticals" },
  { name: t("investment-preferences.options.target.education"), value: "education" },
  { name: t("investment-preferences.options.target.ict"), value: "ict" },
  { name: t("investment-preferences.options.target.mining_metallurgy"), value: "mining" },
  { name: t("investment-preferences.options.target.chemical_industry"), value: "chemical" },
  { name: t("investment-preferences.options.target.financial_services"), value: "financial" },
  { name: t("investment-preferences.options.target.food_beverage_processing"), value: "food" },
  { name: t("investment-preferences.options.target.other"), value: "other" }
]

const regions: SelectOptions = [
  { name: t("investment-preferences.options.region.tashkent_city"), value: "tashkent_city" },
  { name: t("investment-preferences.options.region.tashkent_region"), value: "tashkent_region" },
  { name: t("investment-preferences.options.region.samarkand_region"), value: "samarkand_region" },
  { name: t("investment-preferences.options.region.bukhara_region"), value: "bukhara_region" },
  { name: t("investment-preferences.options.region.fergana_region"), value: "fergana_region" },
  { name: t("investment-preferences.options.region.namangan_region"), value: "namangan_region" },
  { name: t("investment-preferences.options.region.andijan_region"), value: "andijan_region" },
  { name: t("investment-preferences.options.region.surkhandarya_region"), value: "surkhandarya_region" },
  { name: t("investment-preferences.options.region.kashkadarya_region"), value: "kashkadarya_region" },
  { name: t("investment-preferences.options.region.khorezm_region"), value: "khorezm_region" },
  { name: t("investment-preferences.options.region.navoi_region"), value: "navoi_region" },
  { name: t("investment-preferences.options.region.jizzakh_region"), value: "jizzakh_region" },
  { name: t("investment-preferences.options.region.syrdarya_region"), value: "syrdarya_region" },
  { name: t("investment-preferences.options.region.republic_of_karakalpakstan"), value: "republic_of_karakalpakstan" }
]

const investmentType: SelectOptions = [
  { name: t("investment-preferences.options.investment_type.greenfield"), value: "greenfield" },
  { name: t("investment-preferences.options.investment_type.brownfield"), value: "brownfield" }
]

const amountRange: SelectOptions = [
  { name: t("investment-preferences.options.amount_range.one_two"), value: "one_two" },
  { name: t("investment-preferences.options.amount_range.five_ten"), value: "five_ten" },
  { name: t("investment-preferences.options.amount_range.ten_twenty"), value: "ten_twenty" },
  { name: t("investment-preferences.options.amount_range.fifty_hundred"), value: "fifty_hundred" },
  { name: t("investment-preferences.options.amount_range.other"), value: "other" }
]

const aboutUs: SelectOptions = [
  { name: t("additional-information.options.about_us.google"), value: "google" },
  { name: t("additional-information.options.about_us.linkedin"), value: "linkedin" },
  { name: t("additional-information.options.about_us.instagram"), value: "instagram" },
  { name: t("additional-information.options.about_us.telegram"), value: "telegram" },
  { name: t("additional-information.options.about_us.forum"), value: "forum" },
  { name: t("additional-information.options.about_us.other"), value: "other" }
]

const business: SelectOptions = [
  { name: t("short-answers.yes"), value: "yes" },
  { name: t("short-answers.no"), value: "no" }
]

const form = ref<RegisterInvestor>(new RegisterInvestor())

const { required, email, minLength } = useRule()
const rules = ref({
  name: { required },
  country: { required },
  contactPerson: { required },
  position: { required },
  phone: { required, minLength: minLength(12) },
  email: { required, email },

  target: { required },
  region: { required },
  investmentType: { required },
  investmentAmountRange: { required, minLength: minLength(1) },

  business: { required },
  investmentExperience: { required },

  aboutUs: { required },
  comments: { required }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  console.log("Form submitted:", useNuxtApp())

  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    // Handle form submission logic here
    console.log("Form submitted:", useNuxtApp())
  } else {
    console.error("Form validation failed")
  }
}
</script>

<template>
  <form class="register-investor-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">{{ t("basic-information.title") }}</h3>
      <ui-form-group
        v-bind="hasError('name')"
        v-slot="{ id }"
        class="col-span-full"
        :label="t('basic-information.fields.company-name')"
      >
        <ui-input v-model="form.name" name="name" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('country')" v-slot="{ id }" :label="t('basic-information.fields.country')">
        <ui-input v-model="form.country" name="country" :id />
      </ui-form-group>

      <ui-form-group
        v-bind="hasError('contactPerson')"
        v-slot="{ id }"
        :label="t('basic-information.fields.contact-person')"
      >
        <ui-input v-model="form.contactPerson" name="contactPerson" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('position')" v-slot="{ id }" :label="t('basic-information.fields.position')">
        <ui-input v-model="form.position" name="position" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('basic-information.fields.email')">
        <ui-input v-model="form.email" name="email" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" :label="t('basic-information.fields.phone')">
        <ui-mask-input v-model="form.phone" unmasked mask="+### (##) ### ## ##" name="phone" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('basic-information.fields.website')">
        <ui-input v-model="form.website" type="url" :id :placeholder="t('basic-information.fields.website')" />
      </ui-form-group>
    </div>
    <hr />
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">
        {{ t("financial-information.title") }}
      </h3>
      <ui-form-group
        v-bind="hasError('annualRevenue')"
        v-slot="{ id }"
        class="col-span-full"
        :label="t('financial-information.fields.annual-revenue')"
      >
        <ui-input v-model="form.annualRevenue" name="annualRevenue" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('netProfit')"
        v-slot="{ id }"
        :label="t('financial-information.fields.net-profit')"
      >
        <ui-input v-model="form.netProfit" name="netProfit" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('numberOfEmployees')"
        v-slot="{ id }"
        :label="t('financial-information.fields.employees')"
      >
        <ui-input v-model="form.numberOfEmployees" name="numberOfEmployees" :id />
      </ui-form-group>
    </div>
    <hr />
    <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2">
      <h3 class="title col-span-full">{{ t("investment-preferences.title") }}</h3>
      <ui-form-group
        v-bind="hasError('target')"
        v-slot="{ id }"
        :label="t('investment-preferences.fields.target-industry')"
      >
        <multiselect v-model="form.target" label="name" value="value" name="target" :options="options" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('region')"
        v-slot="{ id }"
        :label="t('investment-preferences.fields.preferred-region')"
      >
        <multiselect v-model="form.region" label="name" value="value" name="region" :options="regions" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('investmentType')"
        v-slot="{ id }"
        :label="t('investment-preferences.fields.investment-type')"
      >
        <multiselect
          v-model="form.investmentType"
          label="name"
          value="value"
          name="investmentType"
          :options="investmentType"
          :id
        />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('investmentAmountRange')"
        v-slot="{ id }"
        :label="t('investment-preferences.fields.investment-amount')"
      >
        <multiselect
          v-model="form.investmentAmountRange"
          label="name"
          value="value"
          name="investmentAmountRange"
          :options="amountRange"
          :id
        />
      </ui-form-group>
      <ui-form-group
        v-if="form.investmentAmountRange === 'other'"
        v-slot="{ id }"
        :label="t('investment-preferences.fields.investment-amount')"
      >
        <ui-input v-model="form.amountRange" name="amountRange" :id />
      </ui-form-group>
    </div>
    <hr />
    <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2">
      <h3 class="title col-span-full">{{ t("experience.title") }}</h3>
      <ui-form-group v-bind="hasError('business')" v-slot="{ id }" :label="t('experience.fields.have-a-business')">
        <multiselect v-model="form.business" label="name" value="value" name="business" :options="business" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('investmentExperience')"
        v-slot="{ id }"
        :label="t('experience.fields.investment-experience')"
      >
        <ui-input v-model="form.investmentExperience" name="investmentExperience" :id />
      </ui-form-group>
    </div>
    <hr />
    <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2">
      <h3 class="title col-span-full">{{ t("additional-information.title") }}</h3>
      <ui-form-group v-bind="hasError('aboutUs')" v-slot="{ id }" :label="t('additional-information.fields.find-type')">
        <multiselect
          v-model="form.aboutUs"
          label="name"
          value="value"
          name="aboutUs"
          :options="aboutUs"
          :id
          @change="form.aboutUsOther = ''"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('comments')" v-slot="{ id }" :label="t('additional-information.fields.comments')">
        <ui-input v-model="form.comments" name="comments" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('aboutUsOther')"
        v-if="form.aboutUs === 'other'"
        v-slot="{ id }"
        :label="t('additional-information.fields.aboutUsOther')"
      >
        <ui-input v-model="form.aboutUsOther" name="aboutUsOther" :id />
      </ui-form-group>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <ui-button class="w-full sm:w-auto" rounded size="lg" type="submit" color="success" :label="t('submit-button')" />
    </div>
  </form>
</template>

<style>
.register-investor-form {
  @apply mx-auto grid max-w-3xl gap-6;

  .title {
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "basic-information": {
      "title": "Basic Information",
      "fields": {
        "company-name": "Company Name",
        "country": "Country",
        "contact-person": "Contact Person",
        "position": "Position",
        "email": "Email",
        "phone": "Phone",
        "website": "Website"
      },
      "description": "Please provide your basic information to proceed with the registration."
    },
    "financial-information": {
      "title": "Financial Information",
      "fields": {
        "annual-revenue": "Annual Revenue",
        "net-profit": "Net Profit",
        "employees": "Number of Employees"
      }
    },
    "investment-preferences": {
      "title": "Investment Preferences",
      "fields": {
        "target-industry": "Target Industry",
        "preferred-region": "Preferred Region",
        "investment-type": "Investment type",
        "investment-amount": "Investment amount ( in USD )"
      },
      "options": {
        "target": {
          "agriculture_agribusiness": "Agriculture & Agribusiness",
          "energy": "Energy (Renewables, Solar, Wind)",
          "manufacturing": "Manufacturing",
          "textiles_garments": "Textiles & Garments",
          "construction_materials": "Construction Materials",
          "logistics_transport": "Logistics & Transport",
          "tourism_hospitality": "Tourism & Hospitality",
          "healthcare": "Healthcare",
          "pharmaceuticals": "Pharmaceuticals",
          "education": "Education",
          "ict": "ICT (Information and Communication Technologies)",
          "mining_metallurgy": "Mining & Metallurgy",
          "chemical_industry": "Chemical Industry",
          "financial_services": "Financial Services",
          "food_beverage_processing": "Food & Beverage Processing",
          "other": "Other"
        },
        "region": {
          "tashkent_city": "Tashkent City",
          "tashkent_region": "Tashkent Region",
          "samarkand_region": "Samarkand Region",
          "bukhara_region": "Bukhara Region",
          "fergana_region": "Fergana Region",
          "namangan_region": "Namangan Region",
          "andijan_region": "Andijan Region",
          "surkhandarya_region": "Surkhandarya Region",
          "kashkadarya_region": "Kashkadarya Region",
          "khorezm_region": "Khorezm Region",
          "navoi_region": "Navoi Region",
          "jizzakh_region": "Jizzakh Region",
          "syrdarya_region": "Syrdarya Region",
          "republic_of_karakalpakstan": "Republic of Karakalpakstan"
        },
        "investment_type": {
          "greenfield": "Greenfield",
          "brownfield": "Brownfield"
        },
        "amount_range": {
          "one_two": "$1-2",
          "five_ten": "$5-10",
          "ten_twenty": "$10-20",
          "fifty_hundred": "$50-100",
          "other": "Other"
        }
      }
    },
    "experience": {
      "title": "Experience & Presence",
      "fields": {
        "have-a-business": "Do you have a business in Uzbekistan?",
        "investment-experience": "Investment Experience"
      }
    },
    "additional-information": {
      "title": "Additional Information",
      "fields": {
        "find-type": "How did you find out about us?",
        "comments": "Comments",
        "aboutUsOther": "Write your variant here"
      },
      "options": {
        "about_us": {
          "google": "Google",
          "linkedin": "LinkedIn",
          "instagram": "Instagram",
          "telegram": "Telegram",
          "forum": "Forum",
          "other": "Other"
        }
      }
    },
    "short-answers": {
      "yes": "Yes",
      "no": "No"
    },
    "submit-button": "Register"
  },
  "ru": {
    "basic-information": {
      "title": "Основная информация",
      "fields": {
        "company-name": "Название компании",
        "country": "Страна",
        "contact-person": "Контактное лицо",
        "position": "Должность",
        "email": "Электронная почта",
        "phone": "Телефон",
        "website": "Веб-сайт"
      },
      "description": "Пожалуйста, предоставьте вашу основную информацию для продолжения регистрации."
    },
    "financial-information": {
      "title": "Финансовая информация",
      "fields": {
        "annual-revenue": "Годовой доход",
        "net-profit": "Чистая прибыль",
        "employees": "Количество сотрудников"
      }
    },
    "investment-preferences": {
      "title": "Инвестиционные предпочтения",
      "fields": {
        "target-industry": "Целевая отрасль",
        "preferred-region": "Предпочитаемый регион",
        "investment-type": "Тип инвестиций",
        "investment-amount": "Диапазон инвестиций (в USD)"
      }
    },
    "experience": {
      "title": "Опыт и присутствие",
      "fields": {
        "have-a-business": "Есть ли у вас бизнес в Узбекистане?",
        "investment-experience": "Опыт инвестиций"
      }
    },
    "additional-information": {
      "title": "Дополнительная информация",
      "fields": {
        "find-type": "Как вы узнали о нас?",
        "comments": "Комментарии",
        "aboutUsOther": "Напишите ваш вариант здесь"
      }
    },
    "short-answers": {
      "yes": "Да",
      "no": "Нет"
    },
    "submit-button": "Зарегистрироваться"
  },
  "uz": {
    "basic-information": {
      "title": "Asosiy ma'lumotlar",
      "fields": {
        "company-name": "Kompaniya nomi",
        "country": "Mamlakat",
        "contact-person": "Aloqa shaxsi",
        "position": "Lavozim",
        "email": "Elektron pochta",
        "phone": "Telefon",
        "website": "Veb-sayt"
      },
      "description": "Ro'yxatdan o'tishni davom ettirish uchun asosiy ma'lumotlaringizni taqdim eting."
    },
    "financial-information": {
      "title": "Moliyaviy ma'lumotlar",
      "fields": {
        "annual-revenue": "Yillik daromad",
        "net-profit": "Sof foyda",
        "employees": "Xodimlar soni"
      }
    },
    "investment-preferences": {
      "title": "Investitsiya afzalliklari",
      "fields": {
        "target-industry": "Maqsadli tarmoqlar",
        "preferred-region": "O'zbekistonda afzal ko'rilgan investitsiya hududlari",
        "investment-type": "Investitsiya turi",
        "investment-amount": "Investitsiya miqdori diapazoni (AQSH dollarida)"
      }
    },
    "experience": {
      "title": "Tajriba va mavjudlik",
      "fields": {
        "have-a-business": "O'zbekistonda biznesingiz bormi?",
        "investment-experience": "Investitsiya tajribasi"
      }
    },
    "additional-information": {
      "title": "Qo'shimcha ma'lumotlar",
      "fields": {
        "find-type": "Biz haqimizda qanday ma'lumot oldingiz?",
        "comments": "Izohlar",
        "aboutUsOther": "Bu yerda o'z variantingizni yozing"
      }
    },
    "short-answers": {
      "yes": "Ha",
      "no": "Yo'q"
    },
    "submit-button": "Ro'yxatdan o'tish"
  }
}
</i18n>
