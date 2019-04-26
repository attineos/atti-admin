import styled from 'styled-components'
import { Grid } from 'atti-components'

const FormGroupGridWrapper = styled(Grid)`
  margin: 10px 0;
  padding: 10px 0;
  
  border-top: 1px solid ${({theme}) => theme.colors.lightGrey };
`

export {
  FormGroupGridWrapper,
}