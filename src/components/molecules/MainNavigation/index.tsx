import { observer } from 'mobx-react';
import * as React from 'react';
import { RouteReactID, RouteStore } from '../../../models/RouteStore';
import { IRouteScheme } from '../../../schemes/Route';
import { ILinkProps } from '../../atoms/link';
import { LinkList } from '../../atoms/LinkList';

export interface IMainNavigationProps {
	routeStore: RouteStore;
}

@observer
export class MainNavigation extends React.Component<IMainNavigationProps> {
	private get links(): ILinkProps[] {
		const routeStore = this.props.routeStore;

		return [routeStore.getRouteByID(RouteReactID.HOME)].map(
			(scheme: IRouteScheme): ILinkProps => ({
				href: scheme.slug,
				internal: true,
				openInNewWindow: false,
				text: scheme.title,
			})
		);
	}
	public render() {
		// tslint:disable-next-line
		console.log(RouteReactID.HOME, this.props.routeStore.getRouteByID(RouteReactID.HOME), this.props.routeStore);
		return <LinkList links={this.links} modifier="main-navigation" />;
	}
}
