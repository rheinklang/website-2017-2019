import { client } from "./client";

export const fetchArticles = async () => {
	return await client.getItems('articles');
};
