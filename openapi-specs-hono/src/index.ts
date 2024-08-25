import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { getUserRoute, postUserRoute } from './routes/user'
import { USER } from './mock-data';

const app = new OpenAPIHono();
app.openapi(getUserRoute, (c)=>{
  const {id} = c.req.valid("param")
  const user = USER.find(user=> user.id === id);
  if(user){
    return c.json(user);
  }
  return c.json({
    id,
    name : "hono",
    age : 0
  })
})



app.openapi(postUserRoute, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})
app.get('/ui', swaggerUI({ url: '/doc' }))

export default app


