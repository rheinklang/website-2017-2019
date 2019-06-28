// import { ITicketing } from '../schemes/Ticketing';
import api from './api';
import { ITimetable } from '../schemes/Timetable';

export const TimetableAPI = {
	getTimetable: () => api.getItems<ITimetable[]>('timetable'),
};
