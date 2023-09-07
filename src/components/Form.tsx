import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Client";
import Button from "./Button";

interface FormProps {
    client: Client
    clientChange?: (client:Client) => void
    cancel?: () => void
}

export default function Form(props:FormProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>

            {id && 
            <Input label="Id" 
            value={id} readOnly
            className="mb-5"
            /> 
            }
            
            <Input label="Name" value={name} onChange={setName} className="mb-5"/>
            <Input label="Age"  type='number' value={age} onChange={setAge} />

            <div className="mt-7 flex justify-end" >
                <Button color="blue" className="mr-2"
                    onClick={() => props.clientChange?.(new Client(name , +age , id))}
                >
                    {id ? 'Change' : 'Save'}
                </Button>
                <Button onClick={props.cancel}> Cancel </Button>
            </div>
        </div>
    )
}