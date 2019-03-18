import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchField from './SearchField'
import Tag from './Tag'
import appendClassNames from '../helpers/appendClassNames'

const TagChooser = ({
  dataSet,
  selectedItems,
  onSelect,
  tagLabelSelector = 'title',
  renderLimit = 10,
  className = ''
}) => {
  const [visibleItems, setVisibleItems] = useState(getDefaultStateData())

  return (
    <StyledChooser>
      <SearchField onChange={filterTags} />
      <div className='tags-container'>
        {renderTags()}
      </div>
    </StyledChooser>
  )

  function getDefaultStateData() {
    return dataSet.slice(0, renderLimit)
  }

  function renderTags() {
    return visibleItems.map(item => (
      <Tag
        onClick={() => onSelect(item)}
        className={appendClassNames('tag', selectedItems.includes(item) && 'selected')}
      >
        item[tagLabelSelector]
      </Tag>
    ))
  }

  function filterTags(searchString) {
    if (!searchString) setVisibleItems(getDefaultStateData())

    searchString = searchString.toLowerCase()
    const regExp = new RegExp(`\\b${searchString}`)
    const filteredItems = dataSet.filter(item => regExp.test(item[tagLabelSelector].toLowerCase()))
    setVisibleItems(filteredItems.slice(0, renderLimit))
  }
}

TagChooser.propTypes = {
  dataSet: PropTypes.array,
  selectedItems: PropTypes.array,
  onSelect: PropTypes.func,
  tagLabelSelector: PropTypes.string,
  renderLimit: PropTypes.number,
  className: PropTypes.string
}

const StyledChooser = styled.button``

export default TagChooser
