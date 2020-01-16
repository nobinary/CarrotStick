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
        <h3>BADGES</h3>
        </div>
        )
    }

}

export default Badges