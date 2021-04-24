import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { useDrag, useDrop } from 'react-dnd'
import './modules.scss'
import { useUpdateModuleOrderByPathway } from '../../../pathways.hooks'
import { useParams } from 'react-router'

export const Modules = ({modulesOptionnal, modulesMandatory}) => {
    const {id} = useParams()
	const [items, setItems] = useState(null)
    const [updateModuleOrderByPathway] = useUpdateModuleOrderByPathway()

	const modules = [...modulesMandatory, ...modulesOptionnal].sort((obj1, obj2) => obj1?.order-obj2?.order)

    useEffect(() => {
        if (!items) return
        items.map((module, index) => updateModuleOrderByPathway(module.id, id, index))
    }, [id, items, updateModuleOrderByPathway])

	const moveCard = useCallback(
		(dragIndex, hoverIndex) => {
			const newItems = [...items || modules]

			const dragCard = newItems[dragIndex]

			newItems.splice(dragIndex, 1)
			newItems.splice(hoverIndex, 0, dragCard)

			setItems(newItems)
		},
		[items, modules],
	)

	const renderCard = (card, index) => {
		return (
			<Card
				isOptionnal={modulesOptionnal.map(m => m.id).includes(card.id)}
				key={card.id || card.moduleId}
				module={card}
				index={index}
				moveCard={moveCard}
			/>
		)
	}

	return (
		<>
			<div>{(items || modules)?.map((card, i) => renderCard(card, i))}</div>
		</>
	)
}

export const Card = ({ module, index, moveCard, isOptionnal }) => {
	const {id} = useParams()
	const ref = useRef(null)

	const [, drop] = useDrop({
		accept: 'MODULES',
		hover(item, monitor) {
			if (!ref.current) {
				return
			}
			const dragIndex = item.index
			const hoverIndex = index
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			// Determine mouse position
			const clientOffset = monitor.getClientOffset()
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex)
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex
		},
	})
	const [{ isDragging }, drag, preview] = useDrag({
		item: { type: 'MODULES', id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	})
	const opacity = isDragging ? 0 : 1

	preview(drop(ref))

	return (
		<div ref={ref} className="line" style={{ opacity }}>
			<MenuOutlined ref={drag} />
			<p>{`${module.name}${isOptionnal ? ' (Optionnel)' : ''}`}</p>
		</div>
	)
}