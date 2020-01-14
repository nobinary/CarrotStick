import React from 'react'
import './../styles/Badges.css'

class Badges extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            badges: []
        }
    }

    assignBadges = () => {
        // retrieve points
        // assign badges based on points 
    }

    render() {
        return(
        <div className='badges'>
        <p>BADGES</p>
        </div>
        )
    }

}

export default Badges