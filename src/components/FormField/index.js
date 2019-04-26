import React from 'react'

import {
  Label,
} from 'atti-components'

import {
  FormFieldWrapper,
  FormFieldLabelWrapper,
  FormFieldInputWrapper,
} from './styles'

import FormFieldInput from '../FormFieldInput'

const FormField = ({
                    name,
                    label,
                    ...rest,
}) => (<FormFieldWrapper>
  <FormFieldLabelWrapper>
    <Label htmlFor={name}>{ label }</Label>
  </FormFieldLabelWrapper>
  <FormFieldInputWrapper>
      <FormFieldInput id={name} {...rest}/>
  </FormFieldInputWrapper>
</FormFieldWrapper>)

export default FormField