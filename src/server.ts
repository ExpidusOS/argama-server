import waitOn from 'wait-on'
import winston from './providers/winston'
import app from './http/app'
import { orm } from './database'
import config from './config'

export default class Server {
	async start(): Promise<void> {
		winston.debug('beginning server bootup...')

		winston.info('connecting to database')

		if (config.database.clientUrl !== 'sqlite::memory') {
			await waitOn({
				resources: [
					'tcp:db:3306'
				]
			})
		}

		await orm()
		winston.info('connected to database sucessfully')

		app.listen(3000, () => {
			winston.info('server is online')
		})
	}
}
