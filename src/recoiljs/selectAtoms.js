import {selector} from 'recoil'
import {atomDate} from "./atoms"
export const selectorDate=selector({
    key:"selector_date",
    get:({get})=>{
        return get(atomDate)
    }
})