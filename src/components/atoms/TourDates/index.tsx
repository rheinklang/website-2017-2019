import * as React from 'react';
import './css/bit.scss';

export const TourDates = () => {
	return (
		<React.Fragment>
			<a
				className="bit-widget-initializer"
				data-artist-name="Rheinklang"
				data-display-local-dates="false"
				data-display-past-dates="true"
				data-auto-style="false"
				data-text-color="#0b363b"
				data-link-color="#0b363b"
				data-popup-background-color="#f8faee"
				data-background-color="#f8faee"
				data-display-limit="15"
				data-link-text-color="#f8faee"
			/>
		</React.Fragment>
	);
};
