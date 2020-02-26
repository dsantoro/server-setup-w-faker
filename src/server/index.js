import { Server, Model, Factory } from 'miragejs';
import faker from 'faker';

export const server = () => {
    new Server({
        models: {
            user: Model,
        },

        factories: {
            user: Factory.extend({
                name() {
                    return faker.fake("{{name.findName}}");
                },
                email() {
                    return faker.fake("{{internet.email}}").toLowerCase();
                },
                age() {
                    return faker.random.number(100);
                }
            })
        },

        seeds(server) {
            server.createList('user', 20);
        },

        routes() {
            this.namespace = 'api';
            this.resource('users');
        }
    })
}