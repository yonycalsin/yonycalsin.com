import type { DefaultBodyType, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw'

export type MockRequest<Body = never, Params extends PathParams = PathParams<string>> = RestRequest<Body, Params>

export type MockResponse = ResponseComposition<DefaultBodyType>

export type MockContext = RestContext
