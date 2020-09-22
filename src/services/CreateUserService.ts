import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
    email: string;
    password: string;
    username?: string;
}

class CreateUserService {
    public async execute({
        email,
        password,
        username = '',
    }: Request): Promise<User> {
        if (!email) {
            throw new AppError('Invalid email');
        }
        if (!password) {
            throw new AppError('Invalid password');
        }

        const usersRepository = getRepository(User);

        const checkIfEmailExists = await usersRepository.findOne({
            where: { email },
        });

        if (checkIfEmailExists) {
            throw new AppError('Email already exists');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            email,
            password: hashedPassword,
            username,
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
