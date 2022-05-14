import React from 'react'
import PersonInfo from './components/person-info'
export default function layout(props) {
    return (
        <div>
            <div>
                <PersonInfo />
            </div>
            {props.children} 
        </div>
    )
}
