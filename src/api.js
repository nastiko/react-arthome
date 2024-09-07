// api slides
export async function getSlides() {
    try {
        const request = await fetch("https://ecommerce.anastasia-web.dev/wp-json/wp/v2/slides");

        if(!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    }
    catch(error) {
        console.error('Failed to fetch slides:', error);
    }
}
