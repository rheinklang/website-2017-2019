// import { ITicketing } from '../schemes/Ticketing';
import { ITimetable } from '../schemes/Timetable';
import api from './api';

export const TimetableAPI = {
	getTimetable: () => api.getItems<ITimetable[]>('timetable'),
};
