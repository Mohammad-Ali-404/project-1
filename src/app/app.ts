import express, { NextFunction, Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(express.text())

const userRouter = express.Router()
app.use("/api/v1/users", userRouter)

userRouter.get('/create-users', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user)
  res.json({
    success: true,
    message:"User is created successfully ",
    data: user,
  })
})







const logger = (req: Request, res: Response, next: NextFunction) => {
  next()
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello dev!')
})
app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('Got data')
})
export default app;