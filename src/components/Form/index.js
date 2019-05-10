import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, cloneDeep, forEach, find, set, noop, get } from 'lodash'

import { Button } from 'atti-components'

import FormGroup from '../FormGroup'

class Form extends Component {

  getConfig() {
    const newConfig = cloneDeep(this.props.config)

    forEach(newConfig, groupConfig => {
      forEach(groupConfig.fields, field => {
        set(field, 'value', get(this.props.data, field.field, field.defaultValue))
        set(field, 'error', get(this.props.errors, field.field, null))
        set(field, 'onChange', this.handleValueChange(field.field))
      })
    })

    return newConfig
  }

  handleValueChange = (fieldName) => (e) => {
    let newValue = e
    if ('preventDefault' in e) {
      e.preventDefault()
      newValue = e.target.value
    }

    const newData = cloneDeep(this.props.data)

    set(newData, fieldName, newValue)

    this.props.onDataChange(newData)
  }

  render() {
    const config = this.getConfig()

    return <form onSubmit={this.props.onSubmit}>
      {map(config, groupConfig => (<FormGroup
        key={groupConfig.name}
        {...groupConfig}
      />))}
      <Button type="submit">{this.props.submitButtonText || 'Send'}</Button>
    </form>
  }
}

Form.propTypes = {
  config: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onDataChange: PropTypes.func,
  errors: PropTypes.array.isRequired,
}

Form.defaultProps = {
  onSubmit: noop,
  onDataChange: noop,
  errors: [],
}

export default Form
