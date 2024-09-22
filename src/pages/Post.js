import { useLoaderData } from "react-router-dom";

export default function Post() {
    const posts = useLoaderData();
    console.log(posts)

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></div>
        </>
    )
}