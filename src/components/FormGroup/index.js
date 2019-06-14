import React from 'react'
import { map } from 'lodash'
import { Header3, Cell } from 'atti-components'

import { FormGroupGridWrapper } from './styles'

import FormField from '../FormField'

const FormGroup = ({
  name,
  label,
  fields,
  ...rest,
}) => (<FormGroupGridWrapper id={name}>
  <Cell cols={[[1, 7], [1, 7], [1, 4]]} >
    <Header3>{label}</Header3>
  </Cell>
  <Cell cols={[[1, 7], [1, 7], [4, 13]]}>
    {map(fields, (field, key) => <FormField key={key} {...field} />)}
  </Cell>
</FormGroupGridWrapper>)

export default FormGroup
