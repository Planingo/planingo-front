import {
	ArrowLeftOutlined,
	CalendarOutlined,
} from '@ant-design/icons'
import { Button } from '@planingo/ditto'
import React from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import AddCalendar from '../../Application/Calendars/Calendar/Add/AddCalendar'
import { useAddCalendar } from '../../Application/Calendars/Calendar/calendar.hooks'
import AddItem from '../../Application/Layout/Add/AddItem'
import './refinement.scss'

const Refinement = ({
	options,
	setIsGrid,
	isGrid,
	backTo,
	FirstActionIcon,
	firstActionText,
	FirstForm,
	firstActioning,
	onFirstAction,
	SecondActionIcon,
	secondActionText,
	SecondForm,
	secondActioning,
	onSecondAction,
	mainActionButton,
	onDelete,
	onDeleteText,
	Info
}) => {
	const intl = useIntl()

	const [addCalendar, { loading: addingCalendar }] = useAddCalendar()

	return (
		<div className="refinement">
			{options ? (
				<Button
					switch
					onChange={() => setIsGrid(!isGrid)}
					value={isGrid ? 'Grille' : 'List'}
					activeGrid={isGrid}
					activeList={!isGrid}
				/>
			) : (
				<div className='left'>
					<Link to={`/${backTo}`}>
						<ArrowLeftOutlined />
					</Link> 
					<div className="info">
						{Info}
					</div>
				</div>
			)}

			<div className="refinement-item">
				{firstActionText ? (
					<AddItem
						mainActionButton={mainActionButton}
						title={
							<div className="title">
								<FirstActionIcon />
								<p>{firstActionText}</p>
							</div>
						}
						Form={FirstForm}
						adding={firstActioning}
						onAdd={onFirstAction}
						editing={secondActioning}
						onEdit={onSecondAction}
					/>
				) : (
					<></>
				)}

				{secondActionText ? (
					<AddItem
						title={
							<div className="title">
								<SecondActionIcon />
								<p>{secondActionText}</p>
							</div>
						}
						Form={SecondForm}
						adding={secondActioning}
						onAdd={onSecondAction}
						editing={secondActioning}
						onEdit={onSecondAction}
						mainActionButton={mainActionButton}
					/>
				) : (
					<></>
				)}

				<Link to="/calendars">
					<AddItem
						mainActionButton={mainActionButton}
						secondary
						Form={AddCalendar}
						adding={addingCalendar}
						onAdd={addCalendar}
						title={
							<div>
								<CalendarOutlined />
								<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
							</div>
						}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Refinement
