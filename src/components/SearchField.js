import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import clearIcon from '../assets/images/icons/clear.svg'
import searchIcon from '../assets/images/icons/search.svg'

const SearchField = ({ onChange, value = '', placeholder = 'Search', className = '' }) => {
  const [inputValue, setInputValue] = useState(value)

  return (
    <StyledField className={className}>
      <input
        type='search'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className='input-field'
      />
      {inputValue && <button onClick={clear} className='clear-button'>X</button>}
    </StyledField>
  )

  function handleChange(event) {
    const value = event.target.value
    setInputValue(value)
    onChange(value)
  }

  function clear() {
    setInputValue('')
    onChange('')
  }
}

SearchField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

const StyledField = styled.span``

export default SearchField
