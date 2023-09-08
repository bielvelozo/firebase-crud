 'use client'
 import Layout from "@/components/Layout";
 import Table from "@/components/Table";
 import Button from "@/components/Button"
 import Form from "@/components/Form";
import useClients from "@/hooks/useClients";






export default function Home() {
  const { selectClient, 
          getAll, 
          newClient, 
          saveClient, 
          deleteClient,
          client,
          clients
        } = useClients()

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
