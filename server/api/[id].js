import { mixes } from "./mixes"
export default defineEventHandler(async(event)=>{

    const {id} = event.context.params
  
        return mixes.filter ((element)=>element.id==id)

})