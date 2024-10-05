// api slides
export async function getSlides() {
    try {
        const request = await fetch("https://ecommerce.anastasia-web.dev/wp-json/wp/v2/slides");

        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch (error) {
        console.error('Failed to fetch slides:', error);
    }
}

// api posts
export async function getPosts(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts";
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch (error) {
        console.error('Failed to fetch slides:', error);
    }
}

// api media
export async function getMedia(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media";
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch {
        console.error('Failed to fetch slides:', id);
    }
}

// api users
export async function getUsers(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/users/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/users";
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch {
        console.error('Failed to fetch users:', id);
    }
}
