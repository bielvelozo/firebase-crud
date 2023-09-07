
import Client from "@/core/Client";
import { IconEdit, IconTrash } from "./Icons";
import ActionButton from "./ActionButton"

interface TableProps {
    clients: Client[]
    selectClient?: (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

const  showActions  = props.deleteClient || props.selectClient

    function renderHeader() {
        return (

            <tr>
                <th className=" text-left p-4 ">ID</th>
                <th className=" text-left p-4 ">Name</th>
                <th className=" text-left p-4 ">Age</th>
                {showActions && <th className=" p-4 ">Actions</th>}
                
            </tr>

        )
    }

    
    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className=" text-left p-4 ">{client.id}</td>
                    <td className=" text-left p-4 ">{client.name}</td>
                    <td className=" text-left p-4 ">{client.age}</td>
                    {showActions && renderActions(client)}
                </tr>
            )
        })
    }


    function renderActions(client: Client) {

        return (

            <td className="flex justify-center">

                {
                    props.selectClient ?
                        <ActionButton onClick={() => props.selectClient?.(client) } color={'green'}>
                            {IconEdit}
                        </ActionButton>
                        : false
                }
                {
                    props.deleteClient ?

                        <ActionButton onClick={() => props.deleteClient?.(client)} color={'red'}>
                            {IconTrash}
                        </ActionButton>
                        : false
                }
            </td>

        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to bg-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>{renderData()}</tbody>
        </table>

    )
}