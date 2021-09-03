import React from 'react'
import './addItem.scss'
import { Button, Modal } from '@planingo/ditto'

const AddFirstItem = ({ children, title, cta }) => {
	return (
		<div className="addItemEmpty">
			<Modal
				OpenModal={
					(showModal) =>
					<>
						{cta && <Button className="cta" onClick={showModal}>{cta}</Button>}
					</>
			  	}
				title={title}
			>
				{children}
			</Modal>
		</div>
	)
}

export default AddFirstItem
