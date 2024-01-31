import React from "react";
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  DateRangeFill  from "./Date_range_fill.jpg";
import searchIcon from './search.jpg'
import columns from './columns.jpg'
import "./index.css";
import EventItem from "../EventItem";

const Events =  () =>{

    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [eventStartTime, setEventStartTime] = useState("");
    const [eventEndTime, setEventEndTime] = useState("");
    const [eventItemList, setEventItemList] = useState([]);
    const [originalEventItemList, setOriginalEventItemList] = useState([]);
    const [searchEvent, setSearchEvent] = useState("");
  


  const onAddEventItem = () =>{
    if(eventName!=='' && eventDescription!=="" && eventStartDate!=="" && eventEndDate!=="" && eventStartTime!=="" && eventEndTime!==""){
        const newItem = {
            id: uuidv4(),
            name : eventName,
            description : eventDescription,
            startDate : eventStartDate,
            endDate :eventEndDate ,
            startTime:eventStartTime,
            endTime : eventEndTime,
        }
        setEventItemList(prev => [...prev,newItem])
        setOriginalEventItemList(prev => [...prev,newItem])
        setEventName('')
        setEventDescription('')
        setEventStartDate('')
        setEventEndDate('')
        setEventStartTime('')
        setEventEndTime('')
    }
    else{
        alert("Enter Required Details");
    }
  }

  const onAddName = event =>{
    setEventName(event.target.value)
  }
  const onAddDescription = event =>{
    setEventDescription(event.target.value)
  }
  
  const onAddStartDate =event =>{
    setEventStartDate(event.target.value)
    }
    const onAddEndDate =event =>{
        setEventEndDate(event.target.value)
    }
    const onAddStartTime =event =>{
        setEventStartTime(event.target.value)
    }
    const onAddEndTime =event =>{
        setEventEndTime(event.target.value)
    }

    const filter = (event) => {
        const keyword = event.target.value.toLowerCase();
      
        if (keyword !== "") {
          const results = originalEventItemList.filter((each) => {
            return each.name.toLowerCase().includes(keyword);
          });
          setEventItemList(results);
        } else {
          // If the search input is empty, revert to the original list
          setEventItemList([...originalEventItemList]);
        }
      
        setSearchEvent(keyword);
      };
      
      
      


    return (
        
    <div className='events-section' >
        <div className="events-top-bar">
      <div>
        <div className="text-top-bar">Events</div>
      </div>
      <div className="div-2">
        <div className="div-3">
          <button className="date-range-fill-wrapper">
            <img src={DateRangeFill} alt="date"/>
          </button>
          <button className="menu-wrapper">
          <div className='bg-green' >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <rect x="4.76923" y="5" width="16" height="5" rx="1" stroke="#F7F9FC" stroke-width="2" stroke-linejoin="round"/>
            <rect x="4.76923" y="14" width="16" height="5" rx="1" stroke="#F7F9FC" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          </button>
        </div>
    <Popup
    trigger={<button className="add-event-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="green">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 10V14H8V10H4V8H8V4H10V8H14V10H10Z" fill="white"/>
    </svg>
      <h4 className="tex">Add Event</h4>
    </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Add Event</div>
        <div className="content">
            <div>
                <label htmlFor ="name" >Enter Name of the Event  </label> 
                <input type="text" placeholder="  Name of the Event" id="name" onChange={onAddName} value={eventName} />
            </div>
             <div className="desc-cont" >
                <label htmlFor ="description" >Enter Description of the Event  </label> 
                <textarea rows="5"cols="50" placeholder="Description of the Event..." id="description" onChange={onAddDescription} value={eventDescription} ></textarea>
             </div>
             <div>
                <label htmlFor ="start-date" >Enter Start Date of the Event  </label> 
                <input type="date" id="start-date" onChange={onAddStartDate} value={eventStartDate} />
            </div>
            <div>
                <label htmlFor ="end-date" >Enter End Date of the Event  </label> 
                <input type="date" id="end-date" onChange={onAddEndDate} value={eventEndDate} />
            </div>
            <div>
                <label htmlFor ="start-time" >Enter Start Time of the Event  </label> 
                <input type="time" id="start-time" onChange={onAddStartTime} value={eventStartTime} />
            </div>
            <div>
                <label htmlFor ="end-time" >Enter End Time of the Event  </label> 
                <input type="time" id="end-time" onChange={onAddEndTime} value={eventEndTime} />
            </div>
            <button className="add-event-btn" onClick={onAddEventItem} >  Add Event</button>
        </div>
      </div>
    )}
  </Popup>
      </div>
        </div>
        <div className='filter-section' >
            <div className='fs-1' >
                <select className='fs-dropdown' >
                    <option>Event Name</option>
                </select>
                <div className='search-container' >
                    <input type="search" className='search-bar' placeholder='Search' onChange={filter} value={searchEvent} />
                    <img src={searchIcon} alt="searchIcon" />
                </div>
            </div>
            <button className="fs-2" >
                <img src={columns} alt="columns"/>
                <h4 className="fs2-text" >Columns</h4>
            </button>
            
        </div>
        <div className="events-content-section" >
            <div className="ecs-table" >
                <div className="ecs-table-head" >
                    <h1 className="ecs-table-head-text" >Name</h1>
                    <h1 className="ecs-table-head-text" >Description</h1>
                    <h1 className="ecs-table-head-text" >Start Date</h1>
                    <h1 className="ecs-table-head-text" >End Date</h1>
                    <h1 className="ecs-table-head-text" >Start Time</h1>
                    <h1 className="ecs-table-head-text" >End Time</h1>
            </div>
                {eventItemList.length!==0 ?<>{eventItemList.map(each=>(
                    <EventItem item={each} key={each.id}/>
                ))}</> : <div className="empty-view-section" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="50" viewBox="0 0 86 50" fill="none">
                        <path d="M34.2311 9.36423C35.8642 8.42149 36.6807 7.95011 37.6953 7.95011C38.7099 7.95011 39.5265 8.42149 41.1595 9.36423L69.5865 25.7751C71.2195 26.7179 72.036 27.1893 72.036 27.775C72.036 28.3608 71.2195 28.8321 69.5865 29.7749L65.0779 32.3777C64.6696 32.6134 64.4655 32.7312 64.2118 32.7312C63.9582 32.7312 63.754 32.6134 63.3458 32.3777L29.7225 12.967C29.3143 12.7313 29.1101 12.6135 29.1101 12.467C29.1101 12.3206 29.3143 12.2027 29.7225 11.9671L34.2311 9.36423Z" fill="#69C39F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1107 22.7135C9.4777 23.6563 8.66118 24.1277 8.66118 24.7134C8.66118 25.2992 9.4777 25.7705 11.1107 26.7133L39.5377 43.1242C41.1707 44.0669 41.9873 44.5383 43.0019 44.5383C44.0165 44.5383 44.833 44.0669 46.4661 43.1242L59.8135 35.4187C60.2218 35.183 60.4259 35.0652 60.4259 34.9187C60.4259 34.7723 60.2218 34.6544 59.8135 34.4188L26.1903 15.0081C25.782 14.7724 25.5779 14.6545 25.3242 14.6545C25.0706 14.6545 24.8664 14.7724 24.4582 15.0081L11.1107 22.7135ZM29.7615 22.1518C30.1697 21.9161 30.3739 21.7982 30.6275 21.7982C30.8812 21.7982 31.0853 21.9161 31.4936 22.1518L36.8325 25.234C37.2408 25.4697 37.4449 25.5875 37.4449 25.7339C37.4449 25.8804 37.2408 25.9982 36.8325 26.2339L35.0291 27.275C34.6208 27.5107 34.4167 27.6286 34.1631 27.6286C33.9094 27.6286 33.7053 27.5107 33.297 27.275L27.958 24.1928C27.5498 23.9572 27.3456 23.8393 27.3456 23.6929C27.3456 23.5464 27.5498 23.4286 27.958 23.1929L29.7615 22.1518ZM23.5565 25.8804C23.3028 25.8804 23.0987 25.9982 22.6904 26.2339L20.887 27.275C20.4787 27.5107 20.2746 27.6286 20.2746 27.775C20.2746 27.9214 20.4787 28.0393 20.887 28.275L26.2259 31.3572C26.6342 31.5929 26.8383 31.7107 27.092 31.7107C27.3456 31.7107 27.5498 31.5929 27.958 31.3572L29.7615 30.316C30.1697 30.0803 30.3739 29.9625 30.3739 29.8161C30.3739 29.6696 30.1697 29.5518 29.7615 29.3161L24.4225 26.2339C24.0142 25.9982 23.8101 25.8804 23.5565 25.8804ZM40.3681 28.275C40.7763 28.0393 40.9805 27.9214 41.2341 27.9214C41.4878 27.9214 41.6919 28.0393 42.1002 28.275L47.4391 31.3572C47.8474 31.5928 48.0515 31.7107 48.0515 31.8571C48.0515 32.0036 47.8474 32.1214 47.4391 32.3571L45.6357 33.3982C45.2274 33.6339 45.0233 33.7518 44.7697 33.7518C44.516 33.7518 44.3119 33.6339 43.9036 33.3982L38.5646 30.316C38.1564 30.0803 37.9522 29.9625 37.9522 29.8161C37.9522 29.6696 38.1564 29.5518 38.5646 29.3161L40.3681 28.275ZM34.1631 32.0036C33.9094 32.0036 33.7053 32.1214 33.297 32.3571L31.4936 33.3982C31.0853 33.6339 30.8812 33.7518 30.8812 33.8982C30.8812 34.0446 31.0853 34.1625 31.4936 34.3982L36.8325 37.4804C37.2408 37.716 37.4449 37.8339 37.6986 37.8339C37.9522 37.8339 38.1564 37.716 38.5646 37.4804L40.3681 36.4392C40.7763 36.2035 40.9805 36.0857 40.9805 35.9393C40.9805 35.7928 40.7763 35.675 40.3681 35.4393L35.0291 32.3571C34.6208 32.1214 34.4167 32.0036 34.1631 32.0036Z" fill="#69C39F"/>
                        <path d="M50.0703 10.426L44.767 13.4876" stroke="#69C39F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M67.75 20.6313L62.4467 23.6929" stroke="#69C39F" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <h1>No Events</h1>
                    <p>Add Your First Event</p>
                </div> }
            </div>
        </div>
    </div>

  )
}

export default Events