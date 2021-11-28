import { Options } from '@mikro-orm/core'

const env = process.env.NODE_ENV || 'development'

const logLevels: Record<string, string> = {
	test: 'error',
	development: 'debug',
	production: 'info'
}

const production = env === 'production'

export default {
	env,
	production,
	phys_loc: process.env.PHYSICAL_LOCATION || 'us-west-1',
	clients: [
		{
			id: process.env.EXPIDUS_CLOUD_CLIENT_ID,
			secret: process.env.EXPIDUS_CLOUD_CLIENT_SECRET,
			redirects: ['https://argama.expidusos.com/login', 'https://argama.expidusos.com/register'],
			grants: ['authorization_code', 'password']
		}
	],
	database: {
		clientUrl: `mariadb://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@db/${process.env.MYSQL_USER}`,
    debug: !production,
    type: 'mariadb'
	} as Options,
	winston: {
		level: logLevels[env]
	}
}
