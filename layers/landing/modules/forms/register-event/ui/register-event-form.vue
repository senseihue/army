<script setup lang="ts">
import { RegisterEvent } from "#layers/landing/modules/forms/register-event"
import Multiselect from "@vueform/multiselect"

const { t } = useI18n({
  useScope: "local"
})
type SelectOptions = Array<{
  name: string
  value: string
}>

const roles: SelectOptions = [{ name: t("applicant.options.role.attendee"), value: "attendee" }]

const genders: SelectOptions = [
  { name: t("applicant.options.gender.male"), value: "male" },
  { name: t("applicant.options.gender.female"), value: "female" }
]

const form = ref<RegisterEvent>(new RegisterEvent())
const { required, email, minLength } = useRule()

const rules = ref({
  role: { required },
  firstName: { required },
  middleName: { required },
  lastName: { required },
  gender: { required },
  birthDate: { required },
  email: { required, email },
  phone: { required, minLength: minLength(12) },
  passportId: { required },
  country: { required },
  livingAddress: { required },
  birthPlace: { required },
  organization: { required },
  position: { required },
  activity: { required },
  filePassport: { required },
  filePhoto: { required }
})
const { vuelidate, hasError } = useValidate(form, rules)

const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    // Handle form submission logic here
    console.log("Form submitted:", form.value)
  } else {
    console.error("Form validation failed")
  }
}
</script>

<template>
  <form class="register-event-form" @submit.prevent="submit">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <h3 class="title-text col-span-full">
        {{ t("applicant.title") }}
      </h3>
      <ui-form-group v-bind:class="hasError('role')" v-slot="{ id }" :label="t('applicant.fields.role')">
        <multiselect v-model="form.role" value="value" label="name" :options="roles" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('firstName')" v-slot="{ id }" :label="t('applicant.fields.first_name')">
        <ui-input v-model="form.firstName" name="firstName" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('middleName')" v-slot="{ id }" :label="t('applicant.fields.middle_name')">
        <ui-input v-model="form.middleName" name="middleName" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('lastName')" v-slot="{ id }" :label="t('applicant.fields.last_name')">
        <ui-input v-model="form.lastName" name="lastName" :id />
      </ui-form-group>
      <ui-form-group v-bind:class="hasError('gender')" v-slot="{ id }" :label="t('applicant.fields.gender')">
        <multiselect v-model="form.gender" value="value" label="name" :options="genders" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('birthDate')" v-slot="{ id }" :label="t('applicant.fields.birth_date')">
        <ui-input v-model="form.birthDate" name="birthDate" type="date" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('applicant.fields.email')">
        <ui-input v-model="form.email" name="email" type="email" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" :label="t('applicant.fields.phone')">
        <ui-mask-input v-model="form.phone" unmasked mask="+### (##) ### ## ##" name="phone" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('passportId')" v-slot="{ id }" :label="t('applicant.fields.passport_id')">
        <ui-input v-model="form.passportId" name="passportId" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('country')" v-slot="{ id }" :label="t('applicant.fields.country')">
        <ui-input v-model="form.country" name="country" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('livingAddress')" v-slot="{ id }" :label="t('applicant.fields.living_address')">
        <ui-input v-model="form.livingAddress" name="livingAddress" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('birthPlace')" v-slot="{ id }" :label="t('applicant.fields.birth_place')">
        <ui-input v-model="form.birthPlace" name="birthPlace" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('organization')" v-slot="{ id }" :label="t('applicant.fields.organization')">
        <ui-input v-model="form.organization" name="organization" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('position')" v-slot="{ id }" :label="t('applicant.fields.position')">
        <ui-input v-model="form.position" name="position" :id />
      </ui-form-group>
      <ui-form-group
        v-if="form.role === 'attendee' || form.role === 'speaker' || form.role === 'moderator'"
        v-model="form.activity"
        v-bind="hasError('position')"
        v-slot="{ id }"
        :label="t('applicant.fields.activity')"
      >
        <ui-input v-model="form.position" name="position" :id />
      </ui-form-group>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <h3 class="title-text col-span-full">
        {{ t("files.title") }}
      </h3>
      <ui-form-group v-bind="hasError('filePassport')" v-slot="{ id }" :label="t('files.passport')">
        <ui-file-input v-model="form.filePassport" name="filePassport" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('filePhoto')" v-slot="{ id }" :label="t('files.photo')">
        <ui-file-input v-model="form.filePhoto" name="filePhoto" :id />
      </ui-form-group>
      <div></div>
      <div class="flex items-center gap-2">
        <ul class="ml-5 list-disc text-white">
          <li>{{ t("labels.photo_recent") }}</li>
          <li>{{ t("labels.photo_face_clear") }}</li>
          <li>{{ t("labels.photo_natural") }}</li>
          <li>{{ t("labels.photo_not_selfie") }}</li>
          <li>{{ t("labels.photo_no_glasses") }}</li>
          <li>{{ t("labels.photo_white_bg") }}</li>
        </ul>

        <img class="h-40" alt="img" src="https://tiif.online/images/photo-req.webp" />
      </div>
    </div>
    <div class="col-span-full mt-6 flex items-center justify-center gap-8 pt-8 text-center">
      <ui-button class="ui-button-rounded" type="button" size="lg" color="danger">
        {{ t("cancel-button") }}
      </ui-button>
      <ui-button class="ui-button-rounded" size="lg" type="submit" color="success">
        {{ t("submit-button") }}
      </ui-button>
    </div>
  </form>
</template>

<style>
.register-event-form {
  @apply grid grid-cols-1 gap-y-6;

  .title {
    @apply text-center text-lg font-semibold text-white;
  }

  .ui-form-label {
    @apply text-white;
  }
}

.title-text {
  @apply mb-4 rounded-3xl px-6 py-3 text-center font-bold text-white;
}
</style>

<i18n>
{
  "en": {
    "applicant": {
      "title": "Applicant",
      "fields": {
        "role": "Participant role",
        "first_name": "First name",
        "middle_name": "Middle name",
        "last_name": "Last name",
        "birth_date": "Birth date",
        "gender": "Gender",
        "email": "Email",
        "phone": "Phone",
        "passport_id": "Passport ID",
        "country": "Country",
        "living_address": "Living address",
        "birth_place": "Place of birth",
        "organization": "Organization",
        "position": "Position",
        "activity": "Activity"
      },
      "options": {
        "role": {
          "attendee": "Attendee"
        },
        "gender": {
          "male": "Male",
          "female": "Female"
        }
      }
    },
    "files": {
      "title": "Attach files",
      "passport": "Upload your passport",
      "photo": "Upload your photo",
      "description": "Drag and Drop your file to upload { format }, max size { size }"
    },
    "labels": {
      "photo_recent": "Taken within the last 6 months",
      "photo_face_clear": "Clear view of your face",
      "photo_natural": "Natural, unedited (no filters or AI)",
      "photo_not_selfie": "Taken by someone else (not a selfie)",
      "photo_no_glasses": "Without glasses",
      "photo_white_bg": "Plain white background (no shadows or textures)"
    },
    "submit-button": "Register",
    "cancel-button": "Cancel"
  },
  "uz": {
    "applicant": {
      "title": "Ariza beruvchi",
      "fields": {
        "role": "Ishtirokchi roli",
        "first_name": "Ism",
        "middle_name": "Otasining ismi",
        "last_name": "Familiya",
        "birth_date": "Tug'ilgan sana",
        "gender": "Jins",
        "email": "Elektron pochta",
        "phone": "Telefon",
        "passport_id": "Pasport ID",
        "country": "Mamlakat",
        "living_address": "Yashash manzili",
        "birth_place": "Tug'ilgan joyi",
        "organization": "Tashkilot",
        "position": "Lavozim",
        "activity": "Faoliyat"
      },
      "options": {
        "role": {
          "attendee": "Ishtirokchi"
        },
        "gender": {
          "male": "Erkak",
          "female": "Ayol"
        }
      }
    },
    "files": {
      "title": "Fayllarni qo'shish",
      "passport": "Pasportingizni yuklang",
      "photo": "Rasm yuklang",
      "description": "Faylni yuklash uchun torting va qo'ying { format }, maksimal o'lcham { size }"
    },
    "labels": {
      "photo_recent": "Oxirgi 6 oy ichida olingan",
      "photo_face_clear": "Yuzingizning aniq ko'rinishi",
      "photo_natural": "Tabiiy, tahrirlanmagan (filtrlar yoki AI ishlatilmagan)",
      "photo_not_selfie": "Boshqa odam tomonidan olingan (selfie emas)",
      "photo_no_glasses": "Ko'zoynaksiz",
      "photo_white_bg": "Soddalashgan oq fon (soya yoki teksturalar yo'q)"
    },
    "submit-button": "Ro'yxatdan o'tish",
    "cancel-button": "Bekor qilish"
  },
  "ru": {
    "applicant": {
      "title": "Заявитель",
      "fields": {
        "role": "Роль участника",
        "first_name": "Имя",
        "middle_name": "Отчество",
        "last_name": "Фамилия",
        "birth_date": "Дата рождения",
        "gender": "Пол",
        "email": "Электронная почта",
        "phone": "Телефон",
        "passport_id": "Паспорт ID",
        "country": "Страна",
        "living_address": "Адрес проживания",
        "birth_place": "Место рождения",
        "organization": "Организация",
        "position": "Должность",
        "activity": "Деятельность"
      },
      "options": {
        "role": {
          "attendee": "Участник"
        },
        "gender": {
          "male": "Мужчина",
          "female": "Женщина"
        }
      }
    },
    "files": {
      "title": "Прикрепить файлы",
      "passport": "Загрузите свой паспорт",
      "photo": "Загрузите свою фотографию",
      "description": "Перетащите и отпустите файл для загрузки { format }, максимальный размер { size }"
    },
    "labels": {
      "photo_recent": "Сделано в последние 6 месяцев",
      "photo_face_clear": "Четкий вид вашего лица",
      "photo_natural": "Естественное, необработанное (без фильтров или ИИ)",
      "photo_not_selfie": "Сделано кем-то другим (не селфи)",
      "photo_no_glasses": "Без очков",
      "photo_white_bg": "Простой белый фон (без теней или текстур)"
    },
    "submit-button": "Зарегистрироваться",
    "cancel-button": "Отмена"
  }
}
</i18n>
