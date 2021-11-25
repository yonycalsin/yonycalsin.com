import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import pick from 'just-pick'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import { Button } from '~/components/button'
import { FieldText } from '~/components/field-text'
import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'
import cookielib from '~/lib/cookielib'
import { cookieNames, socialLinks } from '~/utils/constants'
import formConstraints from '~/utils/form-constraints'
import validationResolver from '~/utils/validation-resolver'

interface ResumePageProps {
  hasGuestSessionToken: boolean
}

interface FormFields {
  email: string
}

const Item = ({ children, href }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="transition-all border-b-2 border-transparent hover:border-primary hover:text-primary-500 no-underline"
    style={{ textDecoration: 'none' }}
  >
    {children}
  </a>
)

function ResumePage(props: ResumePageProps) {
  const { hasGuestSessionToken } = props

  const formMethods = useForm<FormFields>({
    resolver: validationResolver,
    context: pick(formConstraints, 'email'),
  })

  const onSubmit = async (values: FormFields) => {
    try {
      const response = await fetch('/api/auth/guest/signin', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      cookielib.setCookie(null, cookieNames.GUEST_SESSION_TOKEN, data.data.token)

      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  if (hasGuestSessionToken) {
    return (
      <HomeLayout>
        <Meta title="Resume - Yony Calsin" notRobots />
        <div className="max-w-xl mx-auto flex flex-col items-center mt-3 ">
          <h1>¡Resume!</h1>
          <p>
            <b>Iniciaste session como invitado</b>, ahora puedes contactarme por los siguientes medios:
          </p>
          <ul className="w-full m-0 list-disc list-inside">
            <li>
              <Item href={socialLinks.GITHUB}>Github</Item>
            </li>
            <li>
              <Item href={socialLinks.LINKEDIN}>Linkedin</Item>
            </li>
            <li>
              <Item href={socialLinks.TWITTER}>Twitter</Item>
            </li>
            <li>
              <Item href={socialLinks.EMAIL}>Email</Item>
            </li>
          </ul>

          <p>
            <a href="/resume/preview" target="_blank" className="text-secondary">
              Ver <q>resume</q> en PDF 😀
            </a>
          </p>

          <div className="w-full">
            <Button
              onClick={() => {
                cookielib.destroyCookie(null, cookieNames.GUEST_SESSION_TOKEN)

                window.location.reload()
              }}
              colorScheme="gray"
            >
              Cerrar sesion{' '}
            </Button>
          </div>
        </div>
      </HomeLayout>
    )
  }

  return (
    <HomeLayout>
      <Meta title="Resume - Yony Calsin" notRobots />
      <div className="max-w-xl mx-auto mt-3">
        <h1>Ingresa tu email</h1>
      </div>
      <FormProvider {...formMethods}>
        <form className="max-w-xl mx-auto my-5 space-y-2" onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FieldText name="email" type="email" label="Correo electronico" />
          <Button isFullWidth>Ver resume</Button>
        </form>
      </FormProvider>
    </HomeLayout>
  )
}

export function getServerSideProps(context: GetServerSidePropsContext): GetServerSidePropsResult<ResumePageProps> {
  const cookies = cookielib.parseCookies(context)

  const hasGuestSessionToken = !!cookies[cookieNames.GUEST_SESSION_TOKEN]

  return {
    props: {
      hasGuestSessionToken,
    },
  }
}

export default ResumePage
