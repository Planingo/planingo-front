import React, { useState } from 'react'
import './addItem.scss'
import { Drawer, Button } from 'antd'

const AddItem = ({ Form, title, cta, secondary, onAdd, adding }) => {
	const [visible, setVisible] = useState(false)
	const [item, setItem] = useState()
	return (
		<>
			<div className="addItem">
				<Button
					type="primary"
					label="add"
					ghost={secondary}
					onClick={() => setVisible(true)}
				>
					{cta || title}
				</Button>
			</div>
			<Drawer
				title={title}
				width={720}
				onClose={() => setVisible(false)}
				visible={visible}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: 'right',
						}}
					>
						<Button
							onClick={() => setVisible(false)}
							style={{ marginRight: 8 }}
						>
							Cancel
						</Button>
						<Button
							loading={adding}
							onClick={async () => {
								await onAdd(item)
								setVisible(false)
							}}
							type="primary"
						>
							Submit
						</Button>
					</div>
				}
			>
				<Form setItem={setItem} />
			</Drawer>
		</>
	)
}

export default AddItem
