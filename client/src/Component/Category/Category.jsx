import React from 'react'
import './Category.css';
function Category() {
    return (
        <div className='cat-edu'>

            <h4 style={{marginTop:"100px",textAlign:"center",marginBottom:"50px"}}>All the skills you need in one place</h4>
            <div class="category">
                
                <div class="category-contain">
                    <h2>Machine learning</h2>
                </div>
                <div class="category-contain">
                    <h2>Web development</h2>
                </div>
               
                <div class="category-contain">
                    <h2>Cyber security</h2>
                </div>
                <div class="category-contain">
                    <h2>Cloud computing</h2>
                </div>
                <div class="category-contain">
                    <h2>Digital Marketing</h2>
                </div>
                <div class="category-contain">
                    <h2>Mobile development</h2>
                </div>
                <div class="category-contain">
                    <h2>Data Science </h2>
                </div>
                <div class="category-contain">
                    <h2>Blockchain development</h2>
                </div>
                
            </div>

        </div>
    )
}

export default Category