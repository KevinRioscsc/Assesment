import React, { useState} from 'react'
import Student from './Student'
import StudentList from './StudentList'
import useFetch from './useFetch'

/*I want a Home component just in case I need to add more feature in the future
like more pages it makes react-router much easier if I keep it to one page per
component*/

const Home = () => {
    const [inputName, setInput] = useState('')
    const [inputTag, setTag] = useState('')
    const {loading, data, error} = useFetch('https://api.hatchways.io/assessment/students')
        
  return (
    <div>
        <div className="searchBox">
            <input type="text" className='searchInput' onChange={(e) => setInput(e.target.value)} placeholder='Search by name' />
        </div>
        <div className="searchBox">
            <input type="text" className='searchInput' onChange={(e) => setTag(e.target.value)} placeholder='Search by tag' />
        </div>
        
        {!loading ?
            <StudentList students={data} inputTag = {inputTag} inputName = {inputName}/>
            :
            <div className='robot'>
                <h1>Loading...</h1>
            </div>    
        }
    </div>
  )
}

export default Home