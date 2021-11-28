import { Request, Response, NextFunction } from 'express'
import { BaseMessage } from '../../../message'
import { region } from '../../../config'
import { version, repository, homepage, devDependencies, author, license } from '../../../../package.json'

export default function() {
	return {
		info: (req: Request, res: Response, next: NextFunction) => {
			try {
				res.json(new BaseMessage({
					implements: ['v1'],
					repository,
					homepage,
					devDependencies,
					author,
					license,
					version
				}, 'instance:info'))
			} catch (e) {
				next(e)
			}
		}
	}
}
