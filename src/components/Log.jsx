import React from "react"

export default function ({ turns }) {
	return (
		<ol id="log">
			{" "}
			{turns.map((turn) => (
				<li key={`${turn.square.row}${turn.square.row}`}>
					{turn.player} selected {turn.square.row},{turn.square.col}
				</li>
			))}
		</ol>
	)
}
