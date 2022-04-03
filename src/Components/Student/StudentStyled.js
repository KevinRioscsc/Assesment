import styled from 'styled-components'

export const StudentCard = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    gap: 50px;
    width: 97%;
    @media screen and (max-width:600px){
        flex-direction: column;
        justify-content: center;
    }
`
export const StudentProfile = styled.div`
     border: 1px solid rgb(202, 202, 202);
    border-radius: 100px;
    height: 130px;
    width: 130px;
    overflow: hidden;
    
`
export const StudentImg = styled.img`
  
    height: 130px;
`
export const StudentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width:600px){
        width: 80%;
        
    }
`
export const StudentName = styled.h1`
     text-transform: uppercase;
     font-size: 2.2em;
`
export const StudentDetails = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    @media screen and (max-width:600px){
        margin-left: 0;

    }
`
export const StudentEmail = styled.p`
`
export const StudentCompany = styled.p`
`
export const StudentSkill = styled.p`
`
export const StudentAvg = styled.p`
    
`
export const ButtonPosition = styled.div`
    width: 3%;
   
`
export const Button = styled.button`
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
    color: rgb(172, 172, 172);

`
export const StudentWrapper = styled.div`
    padding: 1.3em;
    display: flex;
    border-bottom: 1px solid rgb(202, 202, 202);
`
export const Tags = styled.div`
    margin-top: 10px;
    display: flex;
    width: 80%;
    gap: 5px;
    flex-wrap: wrap;

`
export const Grades = styled.div`
    margin-top: 20px;
`