/*
import {createServer, Model} from "miragejs";


createServer({
    models: {
        vans: Model,
        users: Model
    },

    routes() {
        this.namespace = "api";
        this.logging = false;

        this.get("/media/:id", (schema, request) => {
            const id = request.params.id;
            try {
                const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media";
                return fetch(url);
            } catch {
                console.error('Failed to fetch media:', id);
                return null;
            }
        });

        /!*this.get("/vans/:id", (schema, request) => {
            const id = request.params.id;
            return schema.vans.find(id);
        });*!/
    }
})*/
