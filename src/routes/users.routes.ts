import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    const { username, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
        email,
        password,
        username,
    });

    delete user.password;

    return response.json(user);
});

export default usersRouter;
