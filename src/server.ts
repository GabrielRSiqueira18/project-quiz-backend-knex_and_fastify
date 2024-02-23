import { app } from "./app";

app.listen({
  port: 3030
})
.then(() => {
  console.log('Server is running')
})
.catch((e) => {
  console.error(e)
})