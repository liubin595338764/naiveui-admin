import { create, NButton, NMessageProvider } from "naive-ui";

const naive = create({
    components:[
        NButton,
        NMessageProvider,
    ]
})
export default {
    install:(app,options)=>{
        app.use(naive)
    }
}