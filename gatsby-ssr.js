const React = require('react')

const HeadComponents = [
   <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />,
]

exports.onRenderBody = (
   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
   pluginOptions,
) => {
   setHeadComponents(HeadComponents)
   setBodyAttributes({
      className: 'dark:bg-gray-900',
   })
}
