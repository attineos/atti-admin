import React from 'react'

import {
  Input
} from 'atti-components'

import { StyledSelect } from './styles'

const FormFieldInput = ({
  name,
  type,
  value,
  onValueChange,
  className,
  ...props,
}) => {
  switch (type) {
    case 'text': return <Input id={name} value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'password': return <Input id={name} type="password" value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'email': return <Input id={name} value={value} onChange={e => onValueChange(e.target.value)} {...props} />

    case 'integer': return <Input id={name} type="number" value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'float': return <Input id={name} value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'number': return <Input id={name} value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'date': return <Input id={name} type="datetime-local" value={value} onChange={e => onValueChange(e.target.value)} {...props} />
    case 'select': return <StyledSelect className={className} id={name} value={value} onChange={e => onValueChange(e.target.value)} {...props} />

    default: throw new Error(`Unsupported FieldInput of type ${type}`)
  }
}

export default FormFieldInput
