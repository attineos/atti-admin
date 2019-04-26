import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, defaultTheme } from 'atti-components'

console.log(ThemeProvider, defaultTheme)

class Wrapper extends React.Component {
  static propTypes = {
    /**
     * The child node.
     */
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (<ThemeProvider theme={defaultTheme}>
      { children }
    </ThemeProvider>)
  }
}

export default Wrapper
