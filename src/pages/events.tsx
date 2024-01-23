import eventService from '../services/events'
import {useState, useEffect} from 'react'
import List from '../components/list'

const Events = () =>{
    const [events, setEvents] = useState([]);

    useEffect(() =>{
        eventService
            .getAll()
            .then(response =>{
                setEvents(response)
            })
    },[])

    return(
        <List data={events}/>
    )
}

export default Events;