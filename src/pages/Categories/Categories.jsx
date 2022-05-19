import React , { useState , useEffect } from 'react'
import axios from "axios"
import "./Categories.css"
import { Nav } from '../../components/Nav/Nav'
import { Categorycard } from '../../components/Categorycard/Categorycard'

const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get("/api/quizzes")
                setCategories(resp.data.quizes)
            } catch(err) {
                console.log(err);
            }
        })()
    } ,[])

  return (
    <>
    <Nav />
    <div className="categories-container">
        <h1>Categories</h1>
        <div className="category-card-container">
        {categories.map(category => <Categorycard key={category._id} category={category}/>)}
        

        </div>
    </div>
    </>
  )
}

export { Categories }