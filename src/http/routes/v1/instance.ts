import { Router } from 'express'
import genController from '../../controllers/v1/instance'

export default function(): Router {
	const router = Router()
	const controller = genController()

	router.get('/info', controller.info)
	return router
}
