import React from 'react'
import '../App.css'
import TrendyCards from '../component/TrendyCards'
function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <p> We are a community-based website
                where everyone can contribute and add routes.
                You can check our available routes and find your destination easily.
            </p>
            <h3>Our mission is:</h3>
            <p> to provide a platform where individuals can easily discover and share eco-friendly routes and transportation options, ultimately reducing traffic congestion and promoting environmentally conscious choices
            </p>
            <h3>Advantages of Using Our Website:</h3>
            <ul>

            <li><span style={{color:'#386641'}}>Green Solution: </span>  We prioritize sustainability. By choosing eco-friendly routes and public transport, you can help lower carbon emissions and environmental impact.</li>
            

            <li>Traffic Reduction: Our platform contributes to lessening urban traffic congestion by promoting efficient routes and public transportation, reducing the number of cars on the road.</li>

            <li>Efficiency: Our users enjoy the quickest and most convenient routes, saving valuable time and reducing stress.</li>
            
            <li>Cost Savings: Explore potential cost savings by using public transportation or shared routes, a practical alternative to personal vehicle ownership.</li>
            
            </ul>
            <TrendyCards/>
        </div>
    )
}

export default About
