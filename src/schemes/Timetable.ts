import { IDirectusModel } from "./cms/DirectusModel";
import { IDirectusResponse } from "./cms/DirectusResponse";
import { IArtist } from "./Artist";

export interface ITimetable extends IDirectusModel {
	start_time: string;
	end_time: string;
	type: string;
	artist: IDirectusResponse<IArtist>
}
