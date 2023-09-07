 'use client'
 import Layout from "@/components/Layout";
 import Table from "@/components/Table";
 import Client from "@/core/Client";
 import Button from "@/components/Button"
 import Form from "@/components/Form";
import { useState , useEffect} from "react";
//  import ClientRepository from "@/core/ClientRepository";
//  import ClientCollection from "@/backend/db/ClientCollection";





export default function Home() {
  //  const repo: ClientRepository = new ClientCollection()

   const [visible, setVisible] = useState<'table' | 'form'>('table')
  //  const [clients, setClients] = useState<Client[]>([])
   const [client, setClient] = useState<Client>(Client.void())
  
   const clients = [
     new Client('biel', 18, '1'),
     new Client('Alan', 39, '2'),
     new Client('Celia', 51, '3'),
     new Client('Sofia', 24, '4'),
   ]

   function selectClient(client: Client) {
     setClient(client)
     setVisible('form')
   }
   function deleteClient(client: Client) {
     console.log(client.name)
   }

   function newClient() {
     setClient(Client.void())
     setVisible('form')
   }
  
   function saveClient(client: Client) {
     console.log(client)
     setVisible('table')
   }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
       <Layout title="Register">
        {visible === 'table' ? (
        <>
          <div className="flex justify-end">
            <Button className="mb-4" color="green" onClick={newClient}>New Client</Button>
          </div>
          <Table clients={clients}
            selectClient={selectClient}
            deleteClient={deleteClient}
          />
        </> )

        : (
        <Form client={client} clientChange={saveClient} cancel={() => setVisible('table') }></Form>
        )

        }

      </Layout>
    </div>
  )
}
