import React, { Component } from 'react'
import Hello from './Hello'

export default class Names extends Component{
    render() {
        const list = [
            { id: 'jerry', name: 'Jerry' },
            { id: 'george', name: 'George' },
            { id: 'elaine', name: 'Elaine' },
            { id: 'cosmo', name: 'Kramer' }
        ]
        return (
            <div>
                {list.map(item => <Hello key={item.id} name={item.name} />)}
            </div>
        )
    }
}
