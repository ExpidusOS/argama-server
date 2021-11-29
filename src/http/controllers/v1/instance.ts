import { Request, Response, NextFunction } from 'express'
import { BaseMessage } from '../../../message'
import config from '../../../config'
import { DI } from '../../../di'
import { version, repository, homepage, devDependencies, author, license } from '../../../../package.json'
import process from 'process'

export default function() {
	return {
		info: (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json(new BaseMessage({
					implements: ['v1'],
					uptime: {
						server: Date.now() - DI.server_start.getTime(),
						process: process.uptime()
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
