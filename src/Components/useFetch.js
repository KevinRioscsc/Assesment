import {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            try{
                const resp = await fetch(url)
                const data = await resp.json()
                const {students} = data
                
                students.map(item => {
                    setData(newStudents => [...newStudents, {
                        city: item.city,
                        company: item.company,
                        email: item.email,
                        firstName: item.firstName,
                        grades: item.grades,
                        id: item.id,
                        lastName: item.lastName,
                        pic: item.pic,
                        skill: item.skill,
                        tags: []
                    }])
                })
                setLoading(false)
            }catch(err) {
                setError(err)
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return {loading, data, error}
}

export default useFetch