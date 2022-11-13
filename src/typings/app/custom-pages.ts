interface CustomPageParams {
  slug: string[]
}

interface CustomPagePageProps {
  params: CustomPageParams
}

interface CustomPageHeadProps {
  params: CustomPageParams
}

export type { CustomPageHeadProps, CustomPagePageProps, CustomPageParams }
