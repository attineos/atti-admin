import React, { Component } from 'react'

import FormGroup from '../FormGroup'

import { Button } from 'atti-components'

import { map, cloneDeep, forEach, find, set, noop, get } from 'lodash'

class Form extends Component {

  getConfig() {
    const newConfig = cloneDeep(this.props.config)

    forEach(newConfig, groupConfig => {
      forEach(groupConfig.fields, field => {
        set(field, 'value', get(this.props.data, field.field, null))
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

  render () {
    const config = this.getConfig()

    return <form onSubmit={this.props.onSubmit}>
      { map(config, groupConfig => (<FormGroup
        {...groupConfig}
      />)) }
      <Button type="submit">{ this.props.submitButtonText || 'Send' }</Button>
    </form>
  }
}

Form.defaultProps = {
  onSubmit: noop,
  onDataChange: noop,
}

export default Form