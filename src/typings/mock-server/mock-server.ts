import type { DefaultBodyType, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw'

type MockRequest<Body extends DefaultBodyType = never, Params extends PathParams = PathParams<string>> = RestRequest<
  Body,
  Params
>

type MockResponse = ResponseComposition<DefaultBodyType>

type MockContext = RestContext

export type { MockContext, MockRequest, MockResponse }
