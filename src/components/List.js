import { HighlightArticle } from "./HighlightArticle";
import { HighlightVideo } from "./HighlightVideo";

export function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightVideo {...item} />
                );

            case 'article':
                return (
                    <HighlightArticle {...item} />
                );
            default:     
        }
    });
};