import type Command from '../../../../Shared/Application/Command/Command'

interface SignInCommandProps {
  email: string
}

class SignInCommand implements Command {
  private readonly email: string

  public constructor(props: SignInCommandProps) {
    this.email = props.email
  }

  public getEmail(): string {
    return this.email
  }
}

export default SignInCommand
