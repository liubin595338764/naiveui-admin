import { 
    create, 
    NElement, 
    NEl, 
    NButton, 
    NMessageProvider,
} from "naive-ui";

const naive = create({
    components:[
        NElement,
        NEl,
        NButton,
        NMessageProvider,
    ]
})
export default {
    install:(app,options)=>{
        app.use(naive)
    }
}