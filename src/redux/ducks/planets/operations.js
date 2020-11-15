import actions from "./actions"
import store from '../../store'

const fetchPlanets = async ( planetsEndPoint) => {
    const { dispatch } = store
    try{
    dispatch(actions.fetchPlanetsStart())
    let planets = []
    let endPoint = planetsEndPoint
    while (endPoint !== null){
     const response = await fetch(endPoint)
     const pagePlanets = await response.json()
     endPoint = pagePlanets.next
     planets = [...planets, ...pagePlanets.results]
    }
     
        
    
    
    dispatch(actions.fetchPlanetsCompleted(planets))
        
    }catch(err){
        dispatch(actions.fetchPlanetsFailed(err))
    }
}

export default {
    fetchPlanets,
};