import * as React from 'react';
import './css/footer.css';

export const Footer = () => {
	return (
		<div className="o-footer">
			<p className="o-footer__text">
				<span className="h-hide-on-mobile">
					Copyright &copy; {new Date().getFullYear()} Verein Rheinklang Festival – Widnau, St. Gallen, Schweiz
				</span>
				<span className="h-hide-on-desktop">
					Copyright &copy; {new Date().getFullYear()} Rheinklang Festival
				</span>
			</p>
		</div>
	);
};
