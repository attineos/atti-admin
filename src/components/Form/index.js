import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, cloneDeep, forEach, set, noop, get } from 'lodash'

import { Button } from 'atti-components'

import FormGroup from '../FormGroup'

class Form extends Component {

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

  getConfig() {
    const newConfig = cloneDeep(this.props.config)

    forEach(newConfig, groupConfig => {
      forEach(groupConfig.fields, field => {
        set(field, 'value', get(this.props.data, field.field, null))
        set(field, 'error', get(this.props.errors, field.field, null))
        set(field, 'onChange', this.handleValueChange(field.field))
      })
    })

    return newConfig
  }

  render () {
    const config = this.getConfig()

    return <form onSubmit={this.props.onSubmit}>
      { map(config, groupConfig => (<FormGroup
        key={ groupConfig.name }
        {...groupConfig}
      />)) }
      {this.props.delete &&
        <Button onClick={() => this.props.onDelete()}> Delete </Button>
      }
      <Button type="submit">{ this.props.submitButtonText || 'Send' }</Button>
    </form>
  }
}

Form.propTypes = {
  config: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onDataChange: PropTypes.func,
  onDelete: PropTypes.func,
  delete: PropTypes.bool,
  errors: PropTypes.array.isRequired,
}

Form.defaultProps = {
  onSubmit: noop,
  onDataChange: noop,
  errors: [],
  onDelete : noop,
  delete : false,
}

export default Form
