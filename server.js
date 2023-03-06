import http from "http"

class server {
    #routes = []

    get(url, callback) {
        this.#routes.push({url, callback, method: "GET" })
    }
    post(url, callback) {
        this.#routes.push({ url, callback, method: "POST" })
    }
    put(url, callback) {
        this.#routes.push({ url, callback, method: "PUT" })
    }
    delete(url, callback) {
        this.#routes.push({ url, callback, method: "DELETE" })
    }
    patch(url, callback) {
        this.#routes.push({ url, callback, method: "PATCH" })
    }

    listen(port) {
        const listner = (req, res) => {
            for(let route of this.#routes) {
                if(req.method == route.method) {
                    if(req.url == route.url) {
                        route.callback(req, res)
                    }
                }
            }
        }


        const server = http.createServer(listner)
        server.listen(port)
    }

}

export {server}