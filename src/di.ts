import { MikroORM } from '@mikro-orm/core'
import { init as dbInit } from './database'

export const DI = {} as {
	orm: MikroORM
}

export async function init(): Promise<void> {
	DI.orm = await dbInit()
}
