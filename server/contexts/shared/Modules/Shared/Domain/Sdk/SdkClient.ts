interface SdkClient<Client> {
  getClient(): Promise<Client> | Client
}

export default SdkClient
