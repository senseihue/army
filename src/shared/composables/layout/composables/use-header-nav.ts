export const useHeaderNav = () => {
  const { t } = useI18n()

  const list = computed<IHeaderNav[]>(() => {
    return [
      {
        label: t("nav.admission.main"),
        to: "/#services"
      },
      {
        label: t("nav.about.label"),
        to: "/about-us",
        dropdown: [
          {
            label: t("nav.about.label"),
            to: "/about-us"
          },
          {
            label: t("nav.about.leadership"),
            to: "/leadership"
          }
        ]
      },
      {
        label: t("nav.contact.label"),
        dropdown: [
          {
            label: `${t("labels.short_phone_number")}: 1530`,
            to: "tel:1530"
          },
          {
            label: "+998 (71) 269-80-19",
            to: "tel:+998712698019"
          }
        ]
      }
    ]
  })

  return { list }
}
