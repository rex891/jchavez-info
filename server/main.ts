import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts"
import { bgBrightGreen } from "https://deno.land/std@0.196.0/fmt/colors.ts"
import "https://deno.land/x/dotenv@v3.2.2/load.ts"

const app = new Application()

const apiRouter = new Router({ prefix: "/api" })
apiRouter.get("/dude", (ctx) => {
    ctx.response.body = Deno.cwd()
})

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())
app.use(async (context, next) => {
    try {
        await context.send({
            root: new URL("dist", import.meta.url).pathname,
            index: "index.html",
        })
    } catch {
        await next()
    }
})

console.log(bgBrightGreen(`started on port: ${Deno.env.get("PORT")}`))

await app.listen({ port: parseInt(Deno.env.get("PORT")!) })
