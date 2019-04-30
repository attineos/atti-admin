import React, { Component } from 'react'

import { map, cloneDeep, forEach, find, mapValues } from 'lodash'

class Form extends Component {

  getConfig() {
    const newConfig = cloneDeep(this.props.config)

    forEach(this.props.data, (value, index) => {
      forEach(newConfig, groupConfig => {
        const configItem = find(groupConfig.fields, { field: index })
        if (configItem) {
          configItem.value = value
          configItem.onChange = this.handleValueChange(index)
        }
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

    const newData = mapValues(this.props.data, (oldValue, index) => {
      if (index === fieldName) {
        return newValue
      }

      return oldValue
    })

    this.props.onDataChange(newData)
  }

  render () {
    const config = this.getConfig()

    return <form onSubmit={this.props.onSubmit}>
      { map(config, groupConfig => (<FormGroup
        {...groupConfig}
      />)) }
    </form>
  }
}

export default Form