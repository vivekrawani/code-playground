import { createRoute } from '@hono/zod-openapi'
import { ParamsSchema } from './inputs'
import { UserSchema } from './outputs'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'



const app = new OpenAPIHono()

const getUserRoute = createRoute({
  method: 'get',
  path: 'users/{id}',
  request: {
    params: ParamsSchema
  },
  responses: {
    200: {
      content: {
        'application/json' : {
          schema : UserSchema
        } 
      },
      description : "Get user details"
    }
  }
})


app.openapi(getUserRoute, (c)=>{
  const {id} = c.req.valid("param")
  return c.json({
    id,
    name : "hono",
    age : 55
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


