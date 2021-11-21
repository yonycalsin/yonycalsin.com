import type JsonSerializable from '../../../../Shared/Serializer/JsonSerializable'

interface SignInJsonDto {
  token: string
}

interface SignInDtoProps {
  token: string
}

class SignInDto implements JsonSerializable<SignInJsonDto> {
  private readonly token: string

  private constructor(props: SignInDtoProps) {
    this.token = props.token
  }

  public static create(props: SignInDtoProps): SignInDto {
    return new SignInDto(props)
  }

  public toJSON(): SignInJsonDto {
    return {
      token: this.token,
    }
  }
}

export type { SignInDtoProps, SignInJsonDto }

export default SignInDto
