import books from './json/books.json'
import { Server } from "miragejs"


export default function makeServer() {
  let server = new Server ({
      routes () {
          this.namespace = "api"
          this.get("/books",() => {
              return books;
          })
      },
  })

return server

  
}