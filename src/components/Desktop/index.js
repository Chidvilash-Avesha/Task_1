import Events from '../Events'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import './index.css'


function Desktop(){
    return(
        <div className='desktop' >
            <Navbar/>
            <div>
                <Topbar/>
                <Events/>
            </div>
        </div>
    )
}
export default Desktop