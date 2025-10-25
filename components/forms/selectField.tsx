import React from 'react'
import {Label} from "@/components/ui/label";
import {Controller} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useForm } from "react-hook-form";



function SelectField({name, label, placeholder, control, options, error, required =  false} :SelectFieldProps) {
    return (
        <div className={"space-y-2"}>

            <Label htmlFor={name} className={"form-label"}>{label}</Label>
            <Controller
                name={name}
                control={control}
                rules={{
                    required : required ? `Please select ${label.toUpperCase()}` : false
                }}
                render={({field}) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className={"bg-gray-800 border-gray-600 text-white"}>
                            {options.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value} className={"focus:bg-gray-600 focus:text-white"}>{opt.label}</SelectItem>
                            ))}
                        </SelectContent>
                        {error && <p className={"text-red-500"}>{error.message}</p>}
                    </Select>

                )}

                />
        </div>

    )
}

export default SelectField
