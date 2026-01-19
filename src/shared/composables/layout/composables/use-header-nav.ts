export const useHeaderNav = () => {
  const { t } = useI18n()

  const list = computed<IHeaderNav[]>(() => [
    {
      label: t("nav.advert.about"),
      to: "/about",
    }
  ])

  return { list }
}
