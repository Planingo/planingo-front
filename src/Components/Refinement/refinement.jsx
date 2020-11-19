import { CalendarOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import AddCalendar from '../../Application/Calendars/Calendar/Add/AddCalendar'

const Refinement = ({
	options,
	setIsGrid,
	isGrid,
	AddItem,
	FirstIcon,
	firstAddText,
	children,
}) => {
	const intl = useIntl()

	return (
		<div className="refinement">
			<Radio.Group
				options={options}
				onChange={() => setIsGrid(!isGrid)}
				value={isGrid ? 'Grille' : 'List'}
				optionType="button"
				buttonStyle="solid"
			/>
			<div className="refinement-item">
				<AddItem
					title={
						<div>
							<FirstIcon />
							<p>{firstAddText}</p>
						</div>
					}
				>
					{children}
				</AddItem>

				<AddItem
					secondary
					title={
						<div>
							<CalendarOutlined />
							<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
						</div>
					}
				>
					<AddCalendar />
				</AddItem>
			</div>
		</div>
	)
}

export default Refinement
