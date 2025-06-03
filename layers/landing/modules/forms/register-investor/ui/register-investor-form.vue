<script setup lang="ts">
const { t } = useI18n({
  useScope: "local"
})

import Multiselect from "@vueform/multiselect"

type FormTypes = {
  companyName: string
  country: string
  contactPerson: string
  position: string
  email: string
  phone: string
  website: string

  annualRevenue: string
  netProfit: string
  employees: string

  targetIndustry: (typeof options)[number]["value"] | undefined
  preferredRegion: string
  investmentType: string
  investmentAmount: string

  haveBusiness: boolean
  investmentExperience: string

  findType: string
  comments: string
}

const options: Array<Record<string, string>> = [
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

const regions = [
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

const investmentType = [
  { name: t("investment-preferences.options.investment_type.greenfield"), value: "greenfield" },
  { name: t("investment-preferences.options.investment_type.brownfield"), value: "brownfield" }
]

const amountRange = [
  { name: t("investment-preferences.options.amount_range.one_two"), value: "one_two" },
  { name: t("investment-preferences.options.amount_range.five_ten"), value: "five_ten" },
  { name: t("investment-preferences.options.amount_range.ten_twenty"), value: "ten_twenty" },
  { name: t("investment-preferences.options.amount_range.fifty_hundred"), value: "fifty_hundred" },
  { name: t("investment-preferences.options.amount_range.other"), value: "other" }
]

const aboutUs = [
  { name: t("additional-information.options.about_us.google"), value: "google" },
  { name: t("additional-information.options.about_us.linkedin"), value: "linkedin" },
  { name: t("additional-information.options.about_us.instagram"), value: "instagram" },
  { name: t("additional-information.options.about_us.telegram"), value: "telegram" },
  { name: t("additional-information.options.about_us.forum"), value: "forum" },
  { name: t("additional-information.options.about_us.other"), value: "other" }
]

const business = [
  { name: t("short-answers.yes"), value: "yes" },
  { name: t("short-answers.no"), value: "no" }
]

const formFields = ref<FormTypes>({
  companyName: "",
  country: "",
  contactPerson: "",
  position: "",
  email: "",
  phone: "+998",
  website: "",

  annualRevenue: "",
  netProfit: "",
  employees: "",

  targetIndustry: undefined,
  preferredRegion: "",
  investmentType: "",
  investmentAmount: "",

  haveBusiness: false,
  investmentExperience: "",

  findType: "",
  comments: ""
})

const { required, email, minLength } = useRule()
const rules = ref({
  companyName: { required },
  country: { required },
  contactPerson: { required },
  position: { required },
  phone: { required, minLength: minLength(9) },
  email: { required, email },

  targetIndustry: { required },
  preferredRegion: { required },
  investmentType: { required },
  investmentAmount: { required, minLength: minLength(1) },

  haveBusiness: { required },
  investmentExperience: { required },

  findType: { required },
  comments: { required }
})
const { vuelidate, hasError } = useValidate(formFields, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    // Handle form submission logic here
    console.log("Form submitted:", formFields.value)
  } else {
    console.error("Form validation failed")
  }
}
</script>

<template>
  <form class="register-investor-form" @submit.prevent="submit">
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <h3 class="title col-span-full">
        {{ t("basic-information.title") }}
      </h3>
      <ui-form-group
        v-bind="hasError('companyName')"
        v-slot="{ id }"
        class="col-span-full"
        :label="t('basic-information.fields.company-name')"
      >
        <ui-input v-model="formFields.companyName" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('country')" v-slot="{ id }" :label="t('basic-information.fields.country')">
        <ui-input v-model="formFields.country" :id />
      </ui-form-group>

      <ui-form-group
        v-bind="hasError('contactPerson')"
        v-slot="{ id }"
        :label="t('basic-information.fields.contact-person')"
      >
        <ui-input v-model="formFields.contactPerson" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('position')" v-slot="{ id }" :label="t('basic-information.fields.position')">
        <ui-input v-model="formFields.position" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('basic-information.fields.email')">
        <ui-input v-model="formFields.email" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" :label="t('basic-information.fields.phone')">
        <ui-mask-input v-model="formFields.phone" unmasked mask="+998 (##) ### ## ##" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('website')" v-slot="{ id }" :label="t('basic-information.fields.website')">
        <ui-input type="url" :placeholder="t('basic-information.fields.website')" />
      </ui-form-group>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <h3 class="title col-span-full">
        {{ t("financial-information.title") }}
      </h3>
      <ui-form-group v-slot="{ id }" class="col-span-full" :label="t('financial-information.fields.annual-revenue')">
        <ui-input v-model="formFields.annualRevenue" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('financial-information.fields.net-profit')">
        <ui-input v-model="formFields.netProfit" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('financial-information.fields.employees')">
        <ui-input v-model="formFields.employees" :id />
      </ui-form-group>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <h3 class="title col-span-full">
        {{ t("investment-preferences.title") }}
      </h3>
      <ui-form-group v-slot="{ id }" :label="t('investment-preferences.fields.target-industry')">
        <multiselect v-model="formFields.targetIndustry" label="name" value="value" :options="options" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('investment-preferences.fields.preferred-region')">
        <multiselect v-model="formFields.netProfit" label="name" value="value" :options="regions" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('investment-preferences.fields.investment-type')">
        <multiselect v-model="formFields.employees" label="name" value="value" :options="investmentType" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('investment-preferences.fields.investment-amount')">
        <multiselect v-model="formFields.employees" label="name" value="value" :options="amountRange" :id />
      </ui-form-group>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <h3 class="title col-span-full">
        {{ t("experience.title") }}
      </h3>
      <ui-form-group v-slot="{ id }" :label="t('experience.fields.have-a-business')">
        <multiselect v-model="formFields.haveBusiness" label="name" value="value" :options="business" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('experience.fields.investment-experience')">
        <ui-input v-model="formFields.investmentExperience" :id />
      </ui-form-group>
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <h3 class="title col-span-full">
        {{ t("additional-information.title") }}
      </h3>
      <ui-form-group v-slot="{ id }" :label="t('additional-information.fields.find-type')">
        <multiselect v-model="formFields.haveBusiness" label="name" value="value" :options="aboutUs" :id />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('additional-information.fields.comments')">
        <ui-input v-model="formFields.investmentExperience" :id />
      </ui-form-group>
    </div>
    <div class="col-span-full mt-6 text-center">
      <ui-button class="ui-button-rounded" size="lg" type="submit" color="success">
        {{ t("submit-button") }}
      </ui-button>
    </div>
  </form>
</template>

<style>
.register-investor-form {
  @apply grid grid-cols-1 gap-y-6;

  .title {
    @apply text-center text-lg font-semibold text-white;
  }

  .ui-form-label {
    @apply text-white;
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
        "comments": "Comments"
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
  "ru": {},
  "uz": {}
}
</i18n>
