import * as React from 'react';
import { observer } from 'mobx-react';
import { TimetableStore } from '../../../store/TimetableStore';
import { ITimetable } from '../../../schemes/Timetable';

interface ITimetableProps {
	timetableStore: TimetableStore
}

@observer
export class Timetable extends React.Component<ITimetableProps> {
	public static displayName = 'Timetable';

	public render() {
		const { timetable } = this.props.timetableStore;

		return (
			<div className="m-timetable">
				{timetable.map(this.renderTimetableEntry)}
			</div>
		)
	}

	private renderTimetableEntry(entry: ITimetable) {
		return (
			<div className={`m-timetable__entry m-timetable__entry--${entry.type}`} key={entry.id}>
				<div className="m-timetable__entry-slot">
					<p>{entry.start_time} - {entry.end_time}</p>
				</div>
				<div className="m-timetable__entry-definition">
					{entry.type === 'guest' && <p className="m-timetable__entry-artist-type">[Gastauftritt]</p>}
					{entry.type === 'headliner' && <p className="m-timetable__entry-artist-type">[Headliner]</p>}
					<h4 className="m-timetable__entry-artist-name">
						{entry.artist.data.name}
					</h4>
					<p className="m-timetable__entry-artist-genre">#{entry.artist.data.genre}</p>
				</div>
			</div>
		)
	}
}
