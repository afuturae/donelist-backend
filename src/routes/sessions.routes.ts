import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user, token } = await authenticateUserService.execute({
        email,
        password,
    });

    return response.json({ user, token });
});

sessionsRouter.get(
    '/authTest',
    ensureAuthenticated,
    async (request, response) => {
        return response.json({ message: 'You are authenticated' });
    },
);

export default sessionsRouter;
