<script setup lang="ts">
import LogoWhite from "~/app/assets/svg/logo-white.svg"
</script>

<template>
  <footer class="footer">
    <div class="container-7xl">
      <div class="p-section">
        <div class="footer__grid">
          <!-- Column 1: Logo & Support -->
          <div class="footer__branding">
            <logo-white class="mb-2 sm:mb-0 md:mb-6" />
          </div>

          <!-- Column 2: Contact Info -->
          <div class="footer__contact">
            <div class="footer__contact-item">
              <icon class="footer__icon" name="lucide:home" :size="20" />

              <a class="footer__link" href="https://maps.app.goo.gl/427fQ4Q9PMGdm8Wn7" target="_blank">
                13 Amir Temur Avenue, Tashkent 112330, Uzbekistan
              </a>
            </div>

            <div class="footer__contact-item">
              <icon class="footer__icon" name="lucide:phone" :size="20" />
              <a class="footer__link" href="tel:+9987120201013">+998 (71) 123-02-10</a>
            </div>

            <div class="footer__contact-item">
              <icon class="footer__icon" name="lucide:phone" :size="20" />
              <a class="footer__link" href="tel:402">402 {{ $t("labels.office") }}</a>
            </div>

            <div class="footer__contact-item">
              <icon class="footer__icon" name="lucide:at-sign" :size="20" />
              <a class="footer__link" href="mailto:uzipa@invest.gov.uz">
                uzipa@invest1.gov.uz --->
                <br />
                ({{ $t("labels.investment_related") }})
              </a>
            </div>
            <div class="footer__contact-item">
              <icon class="footer__icon" name="lucide:at-sign" :size="20" />
              <a class="footer__link" href="mailto:info@invest.gov.uz">
                info@invest1.gov.uz --->
                <br />
                ({{ $t("labels.official_correspondence") }})
              </a>
            </div>

            <!--            <div class="footer__contact-item">-->
            <!--              <icon class="footer__icon" name="tabler:brand-facebook" :size="20" />-->
            <!--              <a class="footer__link" href="https://www.facebook.com/InvestUZB" target="_blank">Facebook</a>-->
            <!--            </div>-->

            <!--            <div class="footer__contact-item">-->
            <!--              <icon class="footer__icon" name="hugeicons:linkedin-02" :size="20" />-->
            <!--              <a class="footer__link" href="https://www.linkedin.com/company/investinuzb" target="_blank">Linkedin</a>-->
            <!--            </div>-->
          </div>

          <!-- Column 3: Bottom Text -->
          <div class="footer__text">
            <p class="text-xs text-white">
<!--              {{ // $t("description.footer_desc") }}-->
            </p>
          </div>
        </div>

        <!-- Bottom Links -->
        <div class="footer__bottom">
          <p>
            {{ new Date().getFullYear() }}
          </p>

          <nuxt-link-locale class="footer__link xl:col-span-2" to="/privacy-policy">
            {{ $t("labels.privacy_policy") }}
          </nuxt-link-locale>

          <nuxt-link-locale class="footer__link xl:col-span-2" to="/cookie-policy">
            {{ $t("labels.cookie_policy") }}
          </nuxt-link-locale>

          <nuxt-link-locale class="footer__link" to="/sitemap">
            {{ $t("labels.sitemap") }}
          </nuxt-link-locale>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  @apply bg-blue-midnight;

  &__grid {
    @apply mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3;
  }

  &__branding {
    @apply flex flex-col justify-between gap-x-4 sm:flex-row md:flex-col md:justify-start;
  }

  &__contact {
    @apply flex flex-col gap-2 md:border-l md:border-white/20 md:px-6;

    &-item {
      @apply flex items-center gap-4;
    }
  }

  &__text {
    @apply lg:border-l lg:border-white/20 lg:px-6;
  }

  &__icon {
    @apply shrink-0 text-2xl text-white;
  }

  &__link {
    @apply text-sm text-white hover:underline;
  }

  &__bottom {
    @apply grid grid-cols-1 gap-4 whitespace-nowrap text-sm text-white md:grid-cols-2 xl:grid-cols-6;
  }
}
</style>
