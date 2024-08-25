import { createRoute } from '@hono/zod-openapi'
import { ParamsSchema } from '../inputs'
import { UserSchema } from '../outputs'
export const getUserRoute = createRoute({
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
  
  

  export const postUserRoute = createRoute({
    method: 'post',
  path: '/user/{id}',
  request: {
    params: ParamsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema
        }
      },
      description: "Get the users details"
    }
  }
  })
  
  