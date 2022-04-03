import React,{useMemo, lazy, Suspense} from 'react'
import Student from '../Student'
import {AiOutlineRobot} from 'react-icons/ai'


const StudentList = ({students, inputName, inputTag}) => {
    
    const getAvg = (getdata) => {
        /*Getting total will be easier using reduce*/
        const avg = getdata.reduce((prev, current) => 
        parseInt(prev) + parseInt(current))/getdata.length
        return avg
    }

    /*
    I need to filter our data, but it's going to be expensive because of future renders
    I'm propably going to cache the data using memoization with useMemo 
    */
    const filteredStudents =  students.filter( (item) => {
            if (!inputTag && !inputName) return true

            const fullName = item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase()

            return ((fullName.includes(inputName.toLowerCase())
            &&
            !inputTag) 
            ||
            (item.tags.some(item => item.includes(inputTag.toLowerCase()))
            &&
            !inputName)
            ||
            (fullName.includes(inputName.toLowerCase())
            && 
            item.tags.some(item => item.includes(inputTag.toLowerCase())))
            )
            
        })
  return (
    <div>
        {
            filteredStudents.length > 0
            ?
            filteredStudents.map(item => {
                return(
                    <Student 
                    key={item.id}
                    studentPic={item.pic} 
                    studentName={`${item.firstName} ${item.lastName}`} 
                    studentEmail={item.email} 
                    studentCompany={item.company} 
                    studentSkill={item.skill} 
                    studentAvg ={getAvg(item.grades)}
                    studentGrades={item.grades}
                    studentTags = {item.tags}/>
                )
                
            })
            :
            /*Add a sad robot face to this */
            <div className='robot'>
                <AiOutlineRobot size={150}/>
                <h2>No student found ...</h2>
            </div>
        }
        
    </div>
  )
}

export default StudentList