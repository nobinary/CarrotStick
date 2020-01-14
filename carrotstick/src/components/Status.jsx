import React from 'react'
import './../styles/Status.css'

class Status extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            badges: []
        }
    }

    render() {
        return(
        <div className='status_main'>
            <p>STATUS</p>
            <div className='status'>
            <img src="" alt='status'  className='status_img'/>
            <p> The dung beetle is a...</p>
            </div>
        </div>
        )
    }
}

export default Status