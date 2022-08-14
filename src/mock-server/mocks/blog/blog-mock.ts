import nextBase64 from 'next-base64'

import type { PostResponsePayload, ServerListResponse } from '~/typings/services'

export const getPostsDataResponseOk: PostResponsePayload[] = [
  {
    title: 'How to mock a rest api',
    slug: 'how-to-mock-a-rest-api',
    visibility: 'public',
    body: {
      type: 'mdx',
      code: nextBase64.encode(
        encodeURIComponent(
          encodeURIComponent(
            `var Component=(()=>{var l=Object.create;var s=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var f=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),g=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},i=(t,e,n,r)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let o of d(e))!x.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=u(e,o))||r.enumerable});return t};var j=(t,e,n)=>(n=t!=null?l(m(t)):{},i(e||!t||!t.__esModule?s(n,\"default\",{value:t,enumerable:!0}):n,t)),_=t=>i(s({},\"__esModule\",{value:!0}),t);var p=f((y,a)=>{a.exports=_jsx_runtime});var M={};g(M,{default:()=>w,frontmatter:()=>b});var c=j(p()),b={title:\"How to mock a rest api\",visibility:\"public\",tags:[],categories:[],createdAt:new Date(1660434807505),updatedAt:new Date(1660434807505)};function D(t={}){let{wrapper:e}=t.components||{};return e?(0,c.jsx)(e,Object.assign({},t,{children:(0,c.jsx)(n,{})})):n();function n(){let r=Object.assign({p:\"p\"},t.components);return(0,c.jsx)(r.p,{children:\"Hello World\"})}}var w=D;return _(M);})();\n;return Component;`,
          ),
        ),
      ),
    },
    tags: ['mocking', 'testing'],
    categories: ['testing'],
    createdAt: '2022-08-14T15:09:39.623Z',
    updatedAt: '2022-08-14T15:09:39.623Z',
  },
]

export const getPostsResponseOk: ServerListResponse<PostResponsePayload> = {
  error: null,
  data: getPostsDataResponseOk,
  meta: {
    page: 1,
    pages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    total: 1,
  },
}
