import type { IHeaderNav } from "~/features/layout"

export const useHeaderNav = () => {
  const { t } = useI18n()

  const list = computed<IHeaderNav[]>(() => [
    {
      label: t("nav.reason.label"),
      to: "/reason/economy",
      dropdown: [
        { label: t("nav.reason.economy"), to: "/reason/economy" },
        { label: t("nav.reason.talent"), to: "/reason/talent" },
        { label: t("nav.reason.resource"), to: "/reason/resource" },
        { label: t("nav.reason.innovation"), to: "/reason/innovation" },
        { label: t("nav.reason.culture"), to: "/reason/culture" },
        { label: t("nav.reason.living"), to: "/reason/living" },
        { label: t("nav.reason.strategy"), to: "/reason/strategy" },
        { label: t("nav.reason.environment"), to: "/reason/environment" }
      ]
    },
    {
      label: t("nav.guide.label"),
      to: "/guide/explore",
      dropdown: [
        { label: t("nav.guide.explore"), to: "/guide/explore" },
        { label: t("nav.guide.partnership"), to: "/guide/partnership" },
        { label: t("nav.guide.privatization"), to: "/guide/privatization" },
        { label: t("nav.guide.register-investor"), to: "/guide/register-investor" }
      ]
    },
    {
      label: t("nav.advert.label"),
      to: "/guide/register-business",
      dropdown: [{ label: t("nav.advert.registration"), to: "/guide/register-business" }]
    },
    {
      label: t("nav.media.label"),
      to: "/media/news"
    },
    { label: t("nav.guide.single_window"), to: "/guide/project/category" },
    {
      label: t("nav.about.label"),
      to: "/about",
      dropdown: [{ label: t("nav.about.about_us"), to: "/about" }]
    },
    { label: t("nav.about.event"), to: "/event" }
  ])

  return { list }
}
