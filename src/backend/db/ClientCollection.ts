 import Client from "@/core/Client";
 import ClientRepository from "@/core/ClientRepository";
 import firestore, {
     addDoc,
     collection,
     deleteDoc,
     doc,
     getDoc,
     getDocs,
     setDoc,
   } from 'firebase/firestore'
 import db from "../config";

 export default class ClientCollection implements ClientRepository {

    #conversor = {
         toFirestore(client: Client){
             return {
                 name: client.name,
                 age: client.age,
             }
         },

         fromFirestore(
         snapshot:firestore.QueryDocumentSnapshot, 
         options: firestore.SnapshotOptions){
             const data = snapshot.data(options)
             return new Client(data.name, data.age, snapshot.id)
         },
        

  

     }

     async save(client: Client): Promise<Client | null> {
        if(client?.id) {
         await setDoc(
             doc(db , 'clients' , client.id).withConverter(this.#conversor),
             client,
             )

             return client
        } 
        else {

         try {
             const docRef = await addDoc(this.#collectionClient, client);
             const doc = await getDoc(docRef);

             if (doc.exists()) {
               return doc.data();
             } else {
               throw new Error('Document does not exist');
             }
           } catch (error) {

             console.error('Error saving client:', error);
             return null;
           }
        }

     }

     async delete(client: Client): Promise<void> {
         return await deleteDoc(doc(db , 'clients' , client.id))
     }

     async getAll(): Promise<Client[]> {
         const clientsCol = this.#collectionClient
         const clientsSnapshot = await getDocs(clientsCol)
         const clientsList = clientsSnapshot.docs.map((doc) => doc.data()) ?? []
         return clientsList
     }

     #collectionClient = collection(db, 'clients').withConverter(this.#conversor)
 }