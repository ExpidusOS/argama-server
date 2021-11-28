import { Express } from 'express'
import { Logger } from 'winston'

export default class DIContainer {
	public readonly app: Express
	public readonly logger: Logger

	constructor(
		app: Express,
		logger: Logger
	) {
		this.app = app
		this.logger = logger
	}
}
