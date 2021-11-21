import type Command from './Command'

interface CommandHandler<T, C extends Command> {
  handle(command: C): Promise<T>
}

export default CommandHandler
