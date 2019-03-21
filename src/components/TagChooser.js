import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchField from './SearchField'
import Tag from './Tag'

const TagChooser = ({
  tags,
  onSelect,
  selectedTags = [],
  tagLabelSelector = 'title',
  renderLimit = 10,
  onSearch = () => {},
  className = ''
}) => {
  const [visibleTags, setVisibleTags] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const filteredTags = getTagsFilteredBySearchQuery(searchQuery)
    setVisibleTags(filteredTags)
  }, [tags])

  return (
    <StyledChooser className={className}>
      <SearchField onChange={handleSearch} className='search-field' />
      <div className='tags-container'>
        {renderTags()}
      </div>
    </StyledChooser>
  )

  function renderTags() {
    return visibleTags.map((item, index) => (
      <Tag key={index} onClick={() => onSelect(item)} isSelected={selectedTags.includes(item)}>
        {item[tagLabelSelector]}
      </Tag>
    ))
  }

  function handleSearch(inputValue) {
    const processedQuery = inputValue.trim().toLowerCase()
    const searchResult = getTagsFilteredBySearchQuery(processedQuery)

    setVisibleTags(searchResult)
    setSearchQuery(processedQuery)
    onSearch(processedQuery, searchResult)
  }

  function getTagsFilteredBySearchQuery(query) {
    if (!query) return sliceAndSort(tags)

    const regExp = new RegExp(`\\b${query}`)
    const filteredTags = tags.filter(item => regExp.test(item[tagLabelSelector].toLowerCase()))
    return sliceAndSort(filteredTags)
  }

  function sliceAndSort(tagsList) {
    return tagsList
      .slice(0, renderLimit)
      .sort((a, b) => a[tagLabelSelector] > b[tagLabelSelector] ? 1 : -1)
  }
}

TagChooser.propTypes = {
  tags: PropTypes.array,
  onSelect: PropTypes.func,
  selectedTags: PropTypes.array,
  tagLabelSelector: PropTypes.string,
  renderLimit: PropTypes.number,
  onSearch: PropTypes.func,
  className: PropTypes.string
}

const StyledChooser = styled.div``

export default TagChooser
