import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', AlunoController.store);
router.put('/:id', AlunoController.updade);
router.get('/:id', AlunoController.show);
router.delete('/:id', AlunoController.delete);

export default router;
