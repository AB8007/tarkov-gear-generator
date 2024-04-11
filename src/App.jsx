import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';
import { ALL_HANDGUNS } from './queries/gql.js'
import { RenderItems } from './comps/RenderItems';
import { SearchForm } from './comps/SearchForm';
import { RenderRandomPistol } from './comps/RenderRandomPistol';
import { RenderCharacter } from './comps/RenderCharacter';
import { ALL_HEADWEAR } from './queries/gql.js';
import { RenderRandomHeadwear } from './comps/RenderRandomHeadwear';
import '../src/app.css'
import { SettingsMenu } from './comps/SettingsMenu.jsx';

function App() {
  const queryAllPistols = useQuery(ALL_HANDGUNS)
  const queryAllHeadwear = useQuery(ALL_HEADWEAR)
  const [pistols, setPistols] = useState([])
  const [filteredPistols, setFilteredPistols] = useState([...pistols])
  const [headwear, setHeadwear] = useState([])
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!queryAllPistols.loading && searchValue === '') {
      setPistols(queryAllPistols.data.items)
      setFilteredPistols(queryAllPistols.data.items)
    }
  }, [queryAllPistols.loading])

  useEffect(() => {
    if (!queryAllHeadwear.loading) {
      setHeadwear(queryAllHeadwear.data.items)
    }
  }, [queryAllHeadwear.loading])
  

  useEffect(() => {
    const filteredPistols = pistols.filter(pistol => pistol.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredPistols(filteredPistols)
  }, [searchValue, pistols])

  if (queryAllPistols.loading) {
    return <>Loading...</>
  }

  return (
    <>
    <div><h2>Welcome</h2></div>
    <SettingsMenu
      checkboxValue={checkboxValue}
      setCheckboxValue={setCheckboxValue}
    ></SettingsMenu>
    <div className='character-container'>
      <RenderCharacter></RenderCharacter>
        <div className='earpiece-headwear-facecover'>
          <RenderRandomHeadwear 
            headwear={headwear}
            checkboxValue={checkboxValue}
          ></RenderRandomHeadwear>
        </div>
        <div className='bodyarmor'>

        </div>
        <div className='onsling-holster'>
          <RenderRandomPistol filteredPistols={filteredPistols}></RenderRandomPistol>
        </div>
    </div>
    <SearchForm 
      setSearchValue={setSearchValue}></SearchForm>
    {filteredPistols.map(pistol => 
    <RenderItems key={pistol.id} pistol={pistol}/>
    )}
    </>
  )
}

export default App