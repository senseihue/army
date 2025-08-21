<script setup lang="ts">
import Multiselect from "@vueform/multiselect"
import { useRegisterInvestorService } from "~/features/forms/register-investor"
import { RegisterInvestor } from "~/entities/forms/register-investor"
import { TargetIndustrySelect } from "~/features/target-industry"
import { TerritorySelect } from "~/features/territory"
import InvestmentTypeSelect from "~/features/investment/ui/investment-type-select.vue"
import InvestmentAmountSelect from "~/features/investment/ui/investment-amount-select.vue"
import { helpers } from "@vuelidate/validators"

const { t } = useI18n({ useScope: "local" })
const { register } = useRegisterInvestorService()

type SelectOptions = Array<ISelect>

const route = useRoute()
const aboutUs: SelectOptions = [
  { label: t("additional-information.options.about_us.google"), value: "google" },
  { label: t("additional-information.options.about_us.linkedin"), value: "linkedin" },
  { label: t("additional-information.options.about_us.instagram"), value: "instagram" },
  { label: t("additional-information.options.about_us.telegram"), value: "telegram" },
  { label: t("additional-information.options.about_us.forum"), value: "forum" },
  { label: t("additional-information.options.about_us.other"), value: "other" }
]

const form = ref<RegisterInvestor>(new RegisterInvestor())
const loading = ref(false)
const { required, email, minLength, requiredIf } = useRule()
const rules = ref({
  company_name: { required },
  website: { required },
  tin: {
    requiredIf: requiredIf(computed(() => form.value.is_resident))
  },

  // applicant
  name: { required },
  surname: { required },
  position: { required },
  phone: { required, minLength: minLength(12) },
  email: { required, email },
  pin: {
    requiredIf: requiredIf(computed(() => form.value.is_resident))
  },

  // additional information
  source: { required },
  comments: { required },
  source_variant: {
    requiredIf: requiredIf(computed(() => form.value.source === "other"))
  }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) register(form, loading)
}

onMounted(() => {
  if (route.query.type && route.query.type !== "resident") {
    form.value.is_resident = false
  }
})
</script>

<template>
  <form class="register-investor-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full bg-blue-bondi text-white">{{ t("basic-information.title") }}</h3>
      <ui-form-group v-bind="hasError('company_name')" v-slot="{ id }">
        <ui-input
          v-model="form.company_name"
          name="name"
          :id
          :placeholder="t('basic-information.fields.company-name')"
        />
      </ui-form-group>
      <ui-form-group v-slot="{ id }">
        <ui-input v-model="form.website" :id :placeholder="t('basic-information.fields.website')" />
      </ui-form-group>
      <ui-form-group v-if="form.is_resident" v-bind="hasError('tin')" v-slot="{ id }">
        <ui-input v-model="form.tin" :id :placeholder="t('basic-information.fields.tin')" />
      </ui-form-group>

    </div>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full bg-blue-bondi text-white">
        {{ t("applicant.title") }}
      </h3>
      <ui-form-group v-bind="hasError('name')" v-slot="{ id }">
        <ui-input v-model="form.name" name="name" :id :placeholder="t('basic-information.fields.name')" />
      </ui-form-group>
      <ui-form-group v-bind="hasError('surname')" v-slot="{ id }">
        <ui-input v-model="form.surname" name="surname" :id :placeholder="t('basic-information.fields.surname')" />
      </ui-form-group>
      <ui-form-group v-bind="hasError('position')" v-slot="{ id }">
        <ui-input v-model="form.position" name="position" :id :placeholder="t('basic-information.fields.position')" />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }">
        <ui-input v-model="form.email" name="email" :id :placeholder="t('basic-information.fields.email')" />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }">
        <ui-mask-input
          v-model="form.phone"
          unmasked
          mask="+### (##) ### ## ##"
          name="phone"
          :id
          :placeholder="t('basic-information.fields.phone')"
        />
      </ui-form-group>

      <ui-form-group v-if="form.is_resident" v-bind="hasError('pin')" v-slot="{ id }">
        <ui-input v-model="form.pin" :id :placeholder="t('basic-information.fields.pin')" />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" class="col-span-full">
        <ui-checkbox
          v-model="form.is_resident"
          name="is_resident"
          label-class="text-white"
          :label="t('basic-information.fields.is_resident')"
          :id
        />
      </ui-form-group>
    </div>
    <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2">
      <h3 class="title col-span-full bg-blue-bondi text-white">{{ t("additional-information.title") }}</h3>
      <ui-form-group v-bind="hasError('source')" v-slot="{ id }">
        <multiselect
          v-model="form.source"
          name="source"
          :placeholder="t('additional-information.fields.find-type')"
          :options="aboutUs"
          :id
          @change="form.source_variant = ''"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('comments')" v-slot="{ id }">
        <ui-input
          v-model="form.comments"
          name="comments"
          :id
          :placeholder="t('additional-information.fields.comments')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('source_variant')" v-if="form.source === 'other'" v-slot="{ id }">
        <ui-input
          v-model="form.source_variant"
          name="source_variant"
          :id
          :placeholder="t('additional-information.fields.aboutUsOther')"
        />
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
    @apply mt-4 rounded-3xl px-6 py-3 text-center font-bold;
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
        "name": "Name",
        "surname": "Surname",
        "country": "Country",
        "contact-person": "Contact Person",
        "position": "Position",
        "email": "Email",
        "phone": "Phone",
        "website": "Website",
        "is_resident": "I am a resident of the Republic of Uzbekistan",
        "pin": "PINOI",
        "tin": "TIN"
      },
      "description": "Please provide your basic information to proceed with the registration."
    },
    "applicant": {
      "title": "Applicant",
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
        "name": "Имя",
        "surname": "Фамилия",
        "company-name": "Название компании",
        "country": "Страна",
        "contact-person": "Контактное лицо",
        "position": "Должность",
        "email": "Электронная почта",
        "phone": "Телефон",
        "website": "Веб-сайт",
        "is_resident": "Я являюсь резидентом Республики Узбекистан",
        "pin": "ПИНФЛ",
        "tin": "ИНН",
      },
      "description": "Пожалуйста, предоставьте вашу основную информацию для продолжения регистрации."
    },
    "applicant": {
      "title": "Заявитель",
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
      },
      "options": {
        "about_us": {
          "google": "Google",
          "linkedin": "LinkedIn",
          "instagram": "Instagram",
          "telegram": "Telegram",
          "forum": "Форум",
          "other": "Другое"
        }
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
        "website": "Veb-sayt",
        "is_resident": "Men O'zbekiston Respublikasi rezidentiman",
        "name": "Ism",
        "surname": "Familiya",
        "pin": "PINFL",
        "tin": "STIR"
      },
      "description": "Ro'yxatdan o'tishni davom ettirish uchun asosiy ma'lumotlaringizni taqdim eting."
    },
    "applicant": {
      "title": "Murojaatchi:",
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
      },
      "options": {
        "about_us": {
          "google": "Google",
          "linkedin": "LinkedIn",
          "instagram": "Instagram",
          "telegram": "Telegram",
          "forum": "Forum",
          "other": "Boshqa"
        }
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
