import { selector } from "recoil";
import counter from "../atoms/count";

export const evenOddSelector = selector({
    key: "evenOddSelector",
    get: ({get}) => {
        const count = get(counter);
        
        return count%2==0 ? "even" : "odd";
    }
})