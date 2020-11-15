import React, { useEffect } from 'react'
import { planetsEndPoint } from '../redux/ducks/planets/utils'
import { planetsOperations } from '../redux/ducks/planets'
import { useSelector } from 'react-redux'

const Home = () => {  
    useEffect(() => {
        planetsOperations.fetchPlanets(planetsEndPoint)
    },[])
    const planets = useSelector(state => state.planets)
    return (
        <div>
            <ul>
                {planets.planetList.loading ? 'loading...' : planets.planetList.items.map(planet => <li key={planet.name} >{planet.name}</li>)}
            </ul>
        </div>
    )
}

export default Home
