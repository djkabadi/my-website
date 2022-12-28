
import { mixes } from "../mixes"

export default defineEventHandler((e)=>{

    const {period} = e.context.params

    if(period=='all'){
        return mixes
    } else{
        return mixes.filter((item)=>item.period.toLowerCase().includes(period.toLowerCase()))

    }

})