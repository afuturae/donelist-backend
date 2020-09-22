import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '../errors/AppError';
import User from '../models/User';
import authConfig from '../config/auth';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        if (!email) {
            throw new AppError('Invalid email address');
        }
        if (!password) {
            throw new AppError('Invalid password');
        }

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { email },
        });

        if (!user) {
            throw new AppError('Email/Password does not match');
        }

        const checkPasswordMatch = await compare(password, user.password);

        if (!checkPasswordMatch) {
            throw new AppError('Email/Password does not match');
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });

        return { user, token };
    }
}

export default AuthenticateUserService;
