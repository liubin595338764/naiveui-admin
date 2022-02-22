import { 
    create, 
    NElement, 
    NEl, 
    NInput, 
    NButton, 
    NMessageProvider,
} from "naive-ui";

const naive = create({
    components:[
        NElement,
        NEl,
        NInput,
        NButton,
        NMessageProvider,
    ]
})
export default {
    install:(app,options)=>{
        app.use(naive)
    }
}