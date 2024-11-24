import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    // name    :  function (type)
    changeColor: (color: string) => void
}

function ColorInput() {
    const [color, setColor] = useState("")
    const listColors: Array<string> = ["black", "blue","yellow","green","pink","purple"]

    function onColorChanged(color: string){
        
        console.log(color)
    }

    return (
        <>
            <Select onValueChange={onColorChanged}>
                <SelectTrigger >
                    <SelectValue placeholder="Select a color"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Color</SelectLabel>
                        {listColors.map((color, index) => <SelectItem key={index} value={color}>{color}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>

        </>
    )
}
export default ColorInput;