// curl "localhost:3000/products?productName=sabao"

import { createServer } from 'http'
import { parse } from 'url'
import { randomUUID } from 'crypto'
const PORT = 3000
async function handler(request, response) {
    if (
        request.method === 'GET' &&
        request.url.includes('products')
    ) {
        const { query: { productName } } = parse(request.url, true)
        const result = {
            id: randomUUID(),
            product: productName
        }

        return response.end(JSON.stringify(result))
    }


    return response.end('hey!')
}

createServer(handler)
    .listen(PORT, () => console.log(`products API is running at ${PORT}`))