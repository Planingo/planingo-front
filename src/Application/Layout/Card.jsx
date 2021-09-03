import React from 'react'
import { Card as DittoCard } from '@planingo/ditto'
import { Link } from 'react-router-dom'

export const Card = ({link, ...props}) => {
	return (
        <Link to={link}>
            <DittoCard
                key={props.title}
                style={{with: 280}}
                onDownload={e => {
                    e.preventDefault()
                }}
                onCloud={e => {
                    e.preventDefault()
                }}
                onDelete={e => {
                    e.preventDefault()
                }}
                {...props}
            /> 
        </Link>
	)
}
