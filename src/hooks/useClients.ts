import Client from "@/core/Client";
import { useState , useEffect} from "react";
import ClientRepository from "@/core/ClientRepository";
import ClientCollection from "@/backend/db/ClientCollection";

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const [visible, setVisible] = useState<'table' | 'form'>('table')
    const [clients, setClients] = useState<Client[]>([])
    const [client, setClient] = useState<Client>(Client.void())
   
   useEffect(getAll, [])
   
   function getAll() {
   
       repo.getAll().then(clients => {
         setClients(clients)
         setVisible('table')
       } )
     }
 
    function selectClient(client: Client) {
      setClient(client)
      setVisible('form')
    }
     async function deleteClient(client: Client) {
      await repo.delete(client)
      getAll()
    }
 
    function newClient() {
      setClient(Client.void())
      setVisible('form')
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
        getAll
    }
}