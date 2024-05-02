import React from 'react'
import PersonItem from './PersonItem'

function PeopleList({ data, deletePerson }) {

    return (
        <div>
            {data.map(person => <PersonItem key={person.id} {...person} deletePerson={deletePerson} />)}
        </div>
    )
}

export default PeopleList