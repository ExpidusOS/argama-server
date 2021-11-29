import { Request, Response, NextFunction } from 'express'
import { BaseMessage } from '../../../message'
import config from '../../../config'
import { DI } from '../../../di'
import { version, repository, homepage, devDependencies, author, license } from '../../../../package.json'
import process from 'process'
import os from 'os'

export default function() {
	return {
		stats: (req: Request, res: Response, next: NextFunction) => {
			try {
				const mem_free = os.freemem()
				const mem_total = os.totalmem()
				res.json(new BaseMessage({
					uptime: {
						server: Date.now() - DI.server_start.getTime(),
						process: process.uptime(),
						system: os.uptime()
					},
					memory: {
						free: mem_free,
						total: mem_total,
						used: mem_total - mem_free
					},
					process: {
						resource_usage: process.resourceUsage()
					},
					processors: os.cpus(),
					loadavg: os.loadavg()
				}, 'instance:stats'))
			} catch (e) {
				next(e)
			}
		},
		info: (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json(new BaseMessage({
					implements: ['v1'],
					process: {
						pid: process.pid,
						env: Object.fromEntries(Object.entries(process.env).filter(([ key ]) => [
							'MYSQL_PASSWORD',
							'MYSQL_USER',
							'MYSQL_DATABASE',
							'PROJECT_ARGAMA_CLIENT_ID',
							'PROJECT_ARGAMA_CLIENT_SECRET'
						].indexOf(key) == -1))
					},
					repository,
					homepage,
					devDependencies,
					author,
					license,
					region: config.region,
					version
				}, 'instance:info'))
			} catch (e) {
				next(e)
			}
		}
	}
}
