import { MikroORM } from '@mikro-orm/core'
import Organization from './entities/organization'
import config from '../config'

export const orm = async () => await MikroORM.init({
  ...config.database,
	entities: [Organization]
})
