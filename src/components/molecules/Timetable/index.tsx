import * as React from 'react';
import { Timetable } from './Timetable';
import { TimetableStore } from '../../../store/TimetableStore';
import './css/timetable.scss';

const timetableStore = new TimetableStore();

export default () => <Timetable timetableStore={timetableStore} />
