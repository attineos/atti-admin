import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { Loader } from 'atti-components'

import Form from '../Form'
import RestFetcher from './RestFetcher'

export const CRUDFORM_MODE_NEW = "MODE_NEW"
export const CRUDFORM_MODE_UPDATE = "MODE_UPDATE"
export const CRUDFORM_MODES = [CRUDFORM_MODE_NEW, CRUDFORM_MODE_UPDATE]

class CRUDForm extends Component {

  state = {
    isLoaded: this.props.mode === CRUDFORM_MODE_NEW,
    data: {},
    errors: {},
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

  handleDataChange = data => this.setState({ data })

  handleSubmit = () => {
    const fetcher = this.getFetcher()

    if (this.props.mode === CRUDFORM_MODE_NEW) {
      fetcher.createData(this.state.data).then(data => {
        this.props.onCreateSuccess(data)
        if(this.props.submitAction() !== undefined) {
          this.props.submitAction()
        }
      }, err => {
        this.setState({ errors: this.props.onCreateError(err) })
      })
    }
    if (this.props.mode === CRUDFORM_MODE_UPDATE) {
      fetcher.updateData(this.state.data).then(data => {
        this.props.onUpdateSuccess(data)
        if(this.props.submitAction() !== undefined) {
          this.props.submitAction()
        }
      }, err => {
        this.setState({ errors: this.props.onUpdateError(err) })
      })
    }
  }

  handleDelete = ()  => {
    const fetcher = this.getFetcher()
    fetcher.deleteData(this.state.data).then(data => {
      this.props.onDeleteSuccess(data)
      if(this.props.submitAction() !== undefined) {
        this.props.submitAction()
      }
    }, err => {
      this.setState({errors: this.props.onDeleteError(err) })
    })
  }

  getFetcher() {
    const CustomFetcher = this.props.customFetcher? this.props.customFetcher: RestFetcher
    return new CustomFetcher(this.props.config)
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
      onDelete={ this.handleDelete }
    />
  }
}

CRUDForm.propTypes = {
  mode: PropTypes.oneOf(CRUDFORM_MODES).isRequired,
  config: PropTypes.object.isRequired,
  submitAction : PropTypes.func,
  customFetcher: PropTypes.any,

  onCreateSuccess: PropTypes.func,
  onUpdateSuccess: PropTypes.func,
  onDeleteSuccess: PropTypes.func,

  onCreateError: PropTypes.func,
  onUpdateError: PropTypes.func,
  onDeleteError: PropTypes.func,
}

CRUDForm.defaultProps = {
  onCreateSuccess: noop,
  onUpdateSuccess: noop,
  onDeleteSuccess: noop,

  onCreateError: (err) => err,
  onUpdateError: (err) => err,
  onDeleteError: (err) => err,
}

export default CRUDForm
