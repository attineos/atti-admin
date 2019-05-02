const { camelCase, upperFirst } = require('lodash')
const path = require('path')

const TITLE = 'Atti-Auto-Admin'

module.exports = {
  title: `${TITLE}`,
  pagePerSection: true,
  components: 'src/components/*/Readme.md',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath)
    const componentSourcesFilesName = componentDirName.split(path.sep).pop()
    const componentName = upperFirst(camelCase(componentSourcesFilesName))
    return `import { ${componentName} } from '${TITLE}'`
  },
  template: {
    favicon: 'favicon.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    },
  },
  theme: {
    color: {
      linkHover: '#666',
      link: '#333',
    },
  },
  sections: [
    {
      name: 'Introduction',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
      ],
    },
    {
      name: 'Forms',
      components: [
        'src/components/Form/index.js',
        'src/components/FormField/index.js',
        'src/components/FormFieldInput/index.js',
        'src/components/FormGroup/index.js',
      ],
    },
    {
      name: 'REST CRUD',
      components: [
        'src/components/CRUForm/index.js',
      ],
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  skipComponentsWithoutExample: true,
  webpackConfig: {
    resolve: {
      extensions: ['.js'],
      alias: {
        components: path.join(__dirname, 'src/components/'),
        helpers: path.join(__dirname, 'src/helpers/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}
