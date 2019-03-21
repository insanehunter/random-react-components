import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useTitle from '../hooks/useTitle'
import Modal from '../components/Modal'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import TagChooser from '../components/TagChooser'
import ThemeSwitcher from '../components/ThemeSwitcher'
import VisibilityManager from '../components/VisibilityManager'
import LocalizationSwitcher from '../components/LocalizationSwitcher'

const MainPage = () => {
  useTitle('Main')
  const [testData, setTestData] = useState([
    { title: 'tag1' },
    { title: 'tag2' },
    { title: 'item1' },
    { title: 'item2' },
    { title: 'next tag1' },
    { title: 'next tag2' }
  ])

  return (
    <div>
      <TagChooser tags={testData} onSelect={tag => alert(tag.title)} onSearch={testSearch} />

      <Link to='/second'>Next</Link>

      <StyledTitle>
        <Localizer stringPath='mainPage.title' />
      </StyledTitle>

      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Show popup</button>
            <VisibilityManager visible={isOpen}>
              <Modal>
                <h2>Popup</h2>
              </Modal>
            </VisibilityManager>
          </div>
        )}
      </Toggle>
      <LocalizationSwitcher />
      <ThemeSwitcher />
    </div>
  )

  function testSearch(string, result) {
    if (testData.length > 6) return

    setTimeout(() => {
      setTestData(testData.concat([{ title: 'another item1' }, { title: 'next tag3' }]))
    }, 1500)
  }
}

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontColor};
`

export default MainPage
