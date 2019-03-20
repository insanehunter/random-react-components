import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useTitle from '../hooks/useTitle'
import Modal from '../components/Modal'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import TagChooser from '../components/TagChooser'
import ThemeSwitcher from '../components/ThemeSwitcher'
import LocalizationSwitcher from '../components/LocalizationSwitcher'

const MainPage = () => {
  useTitle('Main')
  const testArray = []
  const [testData, setTestData] = useState([
    { title: 'hui1' },
    { title: 'hui2' },
    { title: 'jopa1' },
    { title: 'jopa2' },
    { title: 'jopa3' },
    { title: 'zolupa konskaya1' }
  ])

  return (
    <div>
      <TagChooser tags={testData} onSearch={testSearch} />
      <StyledTitle>
        <Localizer stringPath='appHeader.defaultBackButtonText' />
      </StyledTitle>

      <Link to='/second'>Next</Link>

      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Show modal</button>
            {isOpen && <Modal close={toggle}><h1>Hui</h1></Modal>}
          </div>
        )}
      </Toggle>
      <LocalizationSwitcher />
      <ThemeSwitcher />
    </div>
  )

  function testSearch(string, result) {
    setTimeout(() => {
      setTestData(testData.concat([{ title: 'hui3' }, { title: 'hui4' }]))
    }, 1500)
  }
}

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontColor};
`

export default MainPage
