import types from "./types";

const fetchPlanetsStart = () =>({
    type: types.FETCH_PLANETS_START
})

const fetchPlanetsCompleted = ( planets ) => ({
    type: types.FETCH_PLANETS_COMPLETED,
    payload: { planets }
})

const fetchPlanetsFailed = ( error ) => ({
    type: types.FETCH_PLANETS_FAILED,
    payload: { error }
})

export default {
    fetchPlanetsStart,
    fetchPlanetsCompleted,
    fetchPlanetsFailed
};