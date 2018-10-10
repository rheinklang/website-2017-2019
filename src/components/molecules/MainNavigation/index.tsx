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

		if (!routeStore.loaded) {
			return [];
		}

		return [
			routeStore.getRouteByID(RouteReactID.HOME),
			routeStore.getRouteByID(RouteReactID.IMPRESSIONS),
			routeStore.getRouteByID(RouteReactID.ABOUT_US),
			routeStore.getRouteByID(RouteReactID.NEWSLETTER),
			routeStore.getRouteByID(RouteReactID.CONTACT),
		].map(
			(scheme: IRouteScheme): ILinkProps => ({
				href: scheme.slug,
				internal: true,
				openInNewWindow: false,
				text: scheme.navigation_title || scheme.title, // FIXME: remove fallback
			})
		);
	}

	public render() {
		// tslint:disable-next-line
		return <LinkList links={this.links} modifier="main-navigation" />;
	}
}
