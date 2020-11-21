import { ArrowLeftOutlined, CalendarOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import AddCalendar from '../../Application/Calendars/Calendar/Add/AddCalendar'
import AddItem from '../../Application/Layout/Add/AddItem'

const Refinement = ({
	options,
	setIsGrid,
	isGrid,
	backTo,
	FirstActionItem,
	FirstActionIcon,
	firstActionText,
	FirstForm,
	firstActioning,
	onFirstAction,
	SecondActionItem,
	SecondActionIcon,
	secondActionText,
	SecondForm,
	secondActioning,
	onSecondAction,
}) => {
	const intl = useIntl()

	return (
		<div className="refinement">
			{options ? (
				<Radio.Group
					options={options}
					onChange={() => setIsGrid(!isGrid)}
					value={isGrid ? 'Grille' : 'List'}
					optionType="button"
					buttonStyle="solid"
				/>
			) : (
				<Link to={`/${backTo}`}>
					<ArrowLeftOutlined />
				</Link>
			)}
			<div className="refinement-item">
				{firstActionText ? (
					<FirstActionItem
						title={
							<div>
								<FirstActionIcon />
								<p>{firstActionText}</p>
							</div>
						}
						Form={FirstForm}
						adding={firstActioning}
						onAdd={onFirstAction}
					/>
				) : (
					<></>
				)}

				{secondActionText ? (
					<SecondActionItem
						title={
							<div>
								<SecondActionIcon />
								<p>{secondActionText}</p>
							</div>
						}
						Form={SecondForm}
						adding={secondActioning}
						onAdd={onSecondAction}
					/>
				) : (
					<></>
				)}

				<Link to="/calendars">
					<AddItem
						secondary
						title={
							<div>
								<CalendarOutlined />
								<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
							</div>
						}
						Form={AddCalendar}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Refinement
