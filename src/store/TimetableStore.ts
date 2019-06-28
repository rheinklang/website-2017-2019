import { action, observable, computed } from 'mobx';
import { TimetableAPI } from '../api/timetable';
import { ITimetable } from '../schemes/Timetable';

export class TimetableStore {
	@observable private rawTimetable: ITimetable[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawTimetable.length === 0 || forceFetchAPI) {
			this.fetchTimetableInformation();
		}
	}

	@action.bound
	public async fetchTimetableInformation() {
		const rawTimetable = await TimetableAPI.getTimetable();
		if (!rawTimetable || !rawTimetable.data) {
			return;
		}

		this.rawTimetable = rawTimetable.data;
	}

	@computed
	public get isLoaded() {
		return this.rawTimetable.length > 0;
	}

	@computed.struct
	public get timetable() {
		return this.rawTimetable;
	}
}
