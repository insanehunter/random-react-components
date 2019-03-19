import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchField from './SearchField'
import Tag from './Tag'

const TagChooser = ({
  dataSet,
  onSelect,
  selectedItems = [],
  tagLabelSelector = 'title',
  renderLimit = 10,
  onSearch = () => {},
  className = ''
}) => {
  const [searchString, setSearchString] = useState('')
  const visibleData = useMemo(() => getVisibleData(), [dataSet, searchString])

  return (
    <StyledChooser className={className}>
      <SearchField onChange={handleSearch} className='search-field' />
      <div className='tags-container'>
        {renderTags()}
      </div>
    </StyledChooser>
  )

  function handleSearch(searchString) {
    const processedString = searchString.trim().toLowerCase()
    setSearchString(processedString)
    onSearch(processedString)
  }

  function renderTags() {
    return visibleData.map((item, index) => (
      <Tag key={index} onClick={() => onSelect(item)} isSelected={selectedItems.includes(item)}>
        {item[tagLabelSelector]}
      </Tag>
    ))
  }

  function getVisibleData() {
    if (!searchString) return getTopData(dataSet)

    const regExp = new RegExp(`\\b${searchString}`)
    const filteredDataSet = dataSet.filter(item => regExp.test(item[tagLabelSelector].toLowerCase()))
    return getTopData(filteredDataSet)
  }

  function getTopData(data) {
    return data
      .slice(0, renderLimit)
      .sort((a, b) => {
        return a[tagLabelSelector] > b[tagLabelSelector] ? 1 : -1
      })
  }
}

TagChooser.propTypes = {
  dataSet: PropTypes.array,
  onSelect: PropTypes.func,
  selectedItems: PropTypes.array,
  tagLabelSelector: PropTypes.string,
  renderLimit: PropTypes.number,
  onSearch: PropTypes.func,
  className: PropTypes.string
}

const StyledChooser = styled.div``

export default TagChooser
