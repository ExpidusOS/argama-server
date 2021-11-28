import { MikroORM } from '@mikro-orm/core'
import Organization from './entities/organization'
import config from '../config'

export async function init(): Promise<MikroORM> {
	return await MikroORM.init({
		...config.database,
		entities: [Organization]
	})
}
