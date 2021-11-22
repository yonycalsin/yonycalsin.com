interface DatabaseConnection<Connection> {
  getConnection(): Promise<Connection> | Connection
}

export default DatabaseConnection
