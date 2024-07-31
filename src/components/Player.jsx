import React from "react"
import { useState } from "react"

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)

	const handleClickEdit = () => {
		setIsEditing((editing) => !editing)

		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>
	if (isEditing) {
		editablePlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={(event) => setPlayerName(event.target.value)}
			/>
		)
	}
	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>

			<button onClick={() => handleClickEdit()}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	)
}
