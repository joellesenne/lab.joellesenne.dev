import React from 'react'
import PropTypes from 'prop-types'

import {ButtonToggleStyled} from '../styled/ToggleStyled'

const Toggle = ({ toggleTheme }) => <ButtonToggleStyled onClick={toggleTheme}>Toggle theme</ButtonToggleStyled>

Toggle.propTypes = {
  	toggleTheme: PropTypes.func.isRequired,
}

export default Toggle
