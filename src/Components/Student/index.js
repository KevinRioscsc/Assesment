import React,{useState} from 'react'
import LazyLoad from 'react-lazy-load';
import {FaMinus, FaPlus} from 'react-icons/fa'
import Tag from '../Tag'
import {StudentCard, StudentProfile, StudentImg, 
    StudentInfo, StudentName, StudentCompany, 
    StudentSkill, StudentAvg, StudentEmail,
    StudentDetails, ButtonPosition, Button, StudentWrapper,
    Tags, Grades} from './StudentStyled'


const Student = ({studentPic, studentName, studentEmail, 
    studentCompany, studentSkill, studentAvg, studentGrades, 
    studentTags}) => {
    
    const [toggle, setToggle] = useState(false);   
    const [input, setInput] = useState('')

    const onKeyUpValue = (event) => {
        if(event.code === 'Enter' && event.target.value){
            studentTags.push(event.target.value.toLowerCase())
            setInput('')
        }
        
    }
  return (
    <div>
        <StudentWrapper>
            <StudentCard>
                <StudentProfile>
                    <LazyLoad height={130} offsetVertical={300}>
                        <StudentImg src={studentPic} alt='studentPic'/>
                    </LazyLoad>
                </StudentProfile>
                <StudentInfo>
                    <StudentName>{studentName}</StudentName>
                    <StudentDetails>
                        <StudentEmail>Email: {studentEmail}</StudentEmail>
                        <StudentCompany>Company: {studentCompany}</StudentCompany>
                        <StudentSkill>Skill: {studentSkill}</StudentSkill>
                        <StudentAvg>Average: {studentAvg}%</StudentAvg>
                        {
                            toggle &&
                            <Grades>
                                {
                                    studentGrades.map((item, index) => {
                                        return (
                                            <p>{`Test ${index + 1}:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item}%`}</p>
                                        )
                                    })
                                }
                            </Grades>
                        }
                        
                        <Tags>
                            {
                                studentTags &&
                                studentTags.map((item, index) => {  
                                    return <Tag tagTitle={item} key ={index}/>
                                })
                            }
                        </Tags>
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} 
                        className='addTag' placeholder='Add a tag'  onKeyUp={onKeyUpValue}/>
                        
                    </StudentDetails>
                </StudentInfo>
            </StudentCard>
            <ButtonPosition>
                    <Button onClick={() => setToggle(!toggle)}> 
                        {
                            !toggle
                            ?
                            <FaPlus size={30}/>
                            :
                            <FaMinus size={30}/>
                        } 
                    </Button>
                </ButtonPosition>
        </StudentWrapper>
    </div>
  )
}

export default Student