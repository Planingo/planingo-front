import React from 'react'
import './addItem.scss'
import { Button, Modal } from '@planingo/ditto'

const AddFirstItem = ({ children, title, cta }) => {
	return (
		<div className="addItem">
			<Modal
				OpenModal={
					(showModal) => <Button type="text" label="add" onClick={showModal}>
					{cta && <Button type="primary">{cta}</Button>}
				</Button>
			  	}
				title={title}
			>
				{children}
			</Modal>
		</div>
	)
}

export default AddFirstItem
