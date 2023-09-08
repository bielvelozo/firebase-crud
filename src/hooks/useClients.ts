import Client from "@/core/Client";
import { useState , useEffect} from "react";
import ClientRepository from "@/core/ClientRepository";
import ClientCollection from "@/backend/db/ClientCollection";
import useSwitch from "./useSwitch";

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const {tableVisible, formVisible , showForm , showTable} = useSwitch()
    const [clients, setClients] = useState<Client[]>([])
    const [client, setClient] = useState<Client>(Client.void())
   
   useEffect(getAll, [])
   
   function getAll() {
   
       repo.getAll().then(clients => {
         setClients(clients)
         showTable()
       } )
     }
 
    function selectClient(client: Client) {
      setClient(client)
      showForm()
    }
     async function deleteClient(client: Client) {
      await repo.delete(client)
      getAll()
    }
 
    function newClient() {
      setClient(Client.void())
      showForm()
    }
   
     async function saveClient(client: Client) {
      await repo.save(client)
      getAll()
    }

    return {
        client,
        clients,
        newClient, 
        saveClient,
        deleteClient,
        selectClient,
        getAll,
        tableVisible,
        formVisible,
        showTable
    }
}