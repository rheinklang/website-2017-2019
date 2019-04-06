import { ITicketing } from '../schemes/Ticketing';
import api from './api';

export const TicketingAPI = {
	getTicketingInformation: () => api.getItems<ITicketing[]>('ticketing'),
};
