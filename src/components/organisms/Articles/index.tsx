import { observer } from 'mobx-react';
import * as React from 'react';

import { Article } from '../../../components/molecules/Article';
import { IArticle } from '../../../schemes/Article';
import { ArticlesStore } from '../../../store/ArticlesStore';

interface IArticlesProps {
	articlesStore: ArticlesStore
}

@observer
export class Articles extends React.Component<IArticlesProps> {
	public render() {
		const { articles } = this.props.articlesStore;

		return (
			<div className="columns is-multiline m-article__list-wrapper">
				{articles.map((article: IArticle) => {
					return (
						<div key={article.id} className="column is-12-mobile is-12-tablet is-6-desktop">
							<Article title={article.title} image={article.image.data} text={[article.excerpt]} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default Articles;
