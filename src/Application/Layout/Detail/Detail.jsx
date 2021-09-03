import React from 'react'
import './detail.scss'

export const Detail = ({Constraints, Calendars}) => {
	return (
		<div className="details">
			<div className="constraints">
				<h2>Contraintes</h2>
				{Constraints}
			</div>
			<div className="calendars">
				<h2>Calendrier</h2>
				{Calendars}
			</div>
		</div>
	)
}
