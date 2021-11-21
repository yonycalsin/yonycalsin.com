class CommandError extends Error {
  public static conflicts(message: string) {
    return new CommandError(`Conflicts: ${message}`)
  }

  public static invalid(message: string) {
    return new CommandError(`Invalid: ${message}`)
  }
}

export default CommandError
