import Client from "./Client";

export default interface ClientRepository {
    save(client: Client): Promise<Client | null>
    delete(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}