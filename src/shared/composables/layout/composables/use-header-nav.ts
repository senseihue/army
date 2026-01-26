export const useHeaderNav = () => {
  const { t } = useI18n()

  const list = computed<IHeaderNav[]>(() => [
    {
      label: t("nav.admission.main"),
      to: "/admission",
    },
    {
      label: t("nav.about.about_us"),
      to: "/about",
    }
  ])

  return { list }
}
