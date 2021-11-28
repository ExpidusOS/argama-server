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
	clients: [
		{
			id: process.env.EXPIDUS_CLOUD_CLIENT_ID,
			secret: process.env.EXPIDUS_CLOUD_CLIENT_SECRET,
			redirects: ['https://argama.expidusos.com/login', 'https://argama.expidusos.com/register'],
			grants: ['authorization_code', 'password']
		}
	],
	database: {
		clientUrl: env === 'test'
			? 'sqlite::memory'
			: `mariadb://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@db/${process.env.MYSQL_USER}`,
    debug: !production,
    type: 'mariadb'
	},
	winston: {
		level: logLevels[env]
	}
}
