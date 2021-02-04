import React, { useState } from 'react'
import './addItem.scss'
import { Drawer } from 'antd'
import { Button } from '@planingo/ditto'

const AddFirstItem = ({ children, title, cta }) => {
	const [visible, setVisible] = useState(false)
	return (
		<>
			<div className="addItem">
				<Button type="text" label="add" onClick={() => setVisible(true)}>
					{cta && <Button type="primary">{cta}</Button>}
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
						<Button onClick={() => setVisible(false)} type="primary">
							Submit
						</Button>
					</div>
				}
			>
				{children}
			</Drawer>
		</>
	)
}

export default AddFirstItem
