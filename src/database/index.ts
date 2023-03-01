import { Connection, createConnection, getConnectionOptions } from "typeorm"

export default async (host = "hipersend_database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()
    return createConnection(
        Object.assign(defaultOptions, {
            host
        })
    )
}