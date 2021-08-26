import React from 'react'
import { Card as DittoCard } from '@planingo/ditto'
import { Link } from 'react-router-dom'

export const Card = ({link, title, alt, src}) => {
	return (
        <Link to={link}>
            <DittoCard
                key={title}
                style={{with: 280}}
                title={title}
                alt={alt}
                src={src}
            /> 
        </Link>
	)
}
