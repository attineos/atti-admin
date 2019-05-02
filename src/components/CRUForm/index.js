import React, { Component } from 'react'

import { Loader } from 'atti-components'

import Form from '../Form'
import RestFetcher from './RestFetcher'

export const CRUFORM_MODE_NEW = "MODE_NEW"
export const CRUFORM_MODE_UPDATE = "MODE_UPDATE"

class CRUForm extends Component {

  state = {
    isLoaded: this.props.mode === CRUFORM_MODE_NEW,
    data: {},
  }

  getFetcher() {
    const CustomFetcher = this.props.customFetcher? this.props.customFetcher: RestFetcher
    return new CustomFetcher(this.props.config)
  }

  handleDataChange = data => this.setState({ data })

  handleSubmit = () => {
    const fetcher = this.getFetcher()

    if (this.props.mode === CRUFORM_MODE_NEW) {
      fetcher.createData(this.state.data).then(data => {
        console.log(data)
      })
    }
    if (this.props.mode === CRUFORM_MODE_UPDATE) {
      fetcher.updateData(this.state.data).then(data => {
        console.log(data)
      })
    }
  }

  componentDidMount() {
    const fetcher = this.getFetcher()

    fetcher.getData().then(data => {
      this.setState({
        data: data,
        isLoaded: true,
      })
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loader />
    }

    return <Form
      config={ this.props.config.groups }
      data={ this.state.data }
      onDataChange={ this.handleDataChange }
      onSubmit={ this.handleSubmit }
    />
  }
}

export default CRUForm
