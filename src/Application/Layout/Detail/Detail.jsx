import React from 'react'
import './detail.scss'

export const Detail = ({Constraints, Calendars}) => {
	return (
		<div className="details">
			<div className="constraints">
				<h1>Contraintes</h1>
				{Constraints}
			</div>
			<div className="calendars">
				<h1>Calendrier</h1>
				{Calendars}
			</div>
		</div>
	)
}
