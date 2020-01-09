import React from 'react'
import PropTypes from 'prop-types'

const LogItems = ({ log }) => {
    return (
        <li className='collection-item'>
            <div>
                <a href=''>{log.message}</a>
            </div>
        </li>
    )
}

LogItems.propTypes = {
    log: PropTypes.object.isRequired,
}

export default LogItems
