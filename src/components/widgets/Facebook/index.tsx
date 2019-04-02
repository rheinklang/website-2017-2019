import * as React from 'react';
import './css/facebook.scss';

export const FacebookWidgetEmbeddInternal = () => (
	<div className="fb-page" data-href="https://www.facebook.com/rhnklng/" data-tabs="timeline, events, messages" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/rhnklng/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/rhnklng/">Rheinklang</a></blockquote></div>
)

export const FacebookWidget = () => (
	<div className="container w-facebook">
		<div className="row">
			<div className="col-xs-12 center-xs w-facebook__inner">
				<FacebookWidgetEmbeddInternal />
			</div>
		</div>
	</div>
)
