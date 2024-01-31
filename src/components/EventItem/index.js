import './index.css'

const EventItem = props =>{

    const {item} = props
    const {name,description,startDate,endDate,startTime,endTime} = item

    return(
        <div className="ecs-table-head-item" >
            <h1 className="ecs-table-head-text" >{name}</h1>
            <h1 className="ecs-table-head-text" >{description}</h1>
            <h1 className="ecs-table-head-text" >{startDate}</h1>
            <h1 className="ecs-table-head-text" >{endDate}</h1>
            <h1 className="ecs-table-head-text" >{startTime}</h1>
            <h1 className="ecs-table-head-text" >{endTime}</h1>
        </div>
    )
}

export default EventItem