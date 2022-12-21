import React, {useState} from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './AppCalendar.css';

const locales = {
    'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: 'Big Meeting',
        allDay: true,
        start: new Date(2022, 11, 21),
        end: new Date(2022, 11, 23)
    },
    {
        title: 'Vacation',
        //allDay: false,
        start: new Date(2022, 11, 24),
        end: new Date(2022, 11, 26)
    },
    {
        title: 'Conference',
        //allDay: false,
        start: new Date(2022, 11, 27),
        end: new Date(2022, 11, 29)
    }
];

function AppCalendar() {
    const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    return (
        <div className='app'>
            <h1>React Js Calendar</h1>
            <div className='container'>
                <div className='calendar'>
                    <Calendar 
                        localizer={localizer} 
                        events={allEvents} 
                        startAccessor='start' 
                        endAccessor='end' 
                    />
                </div>
                <div className='eventManager'>
                    <h2>Add New Event</h2>
                    <div>
                        <input type='text' placeholder='Add Title' value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                        <DatePicker placeholderText='Start Date' selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                        <DatePicker placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
                        <button className='button' onClick={handleAddEvent}>Add Event</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppCalendar;
