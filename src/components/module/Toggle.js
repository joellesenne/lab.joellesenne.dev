import React from 'react'
import func from 'prop-types'

import { ButtonToggleStyled } from '../styled/ToggleStyled'

const Toggle = ({ toggleTheme }) => <ButtonToggleStyled onClick={toggleTheme}>Toggle theme</ButtonToggleStyled>

Toggle.propTypes = {
  toggleTheme: func.isRequired,
}

export default Toggle
