import { observer } from 'mobx-react';
import * as React from 'react';
import { Header } from '../../components/organisms/Header';
import { Footer } from '../../partials/Footer';

import './css/layout.css';

export interface IDefaultLayoutProps {
	children: any;
}

@observer
export class DefaultLayout extends React.Component<IDefaultLayoutProps> {
	public render() {
		const { children } = this.props;

		return (
			<section className="h-layout h-layout--default">
				<header className="h-layout__header">
					<Header />
				</header>
				<article className="h-layout__content">{children}</article>
				<footer className="h-layout__footer">
					<Footer />
				</footer>
			</section>
		);
	}
}
