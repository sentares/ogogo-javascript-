import { body } from 'express-validator'

export const postValidation = [
	body('title', 'Введите заголовок поста').isLength({ min: 3 }).isString,
	body('text', 'Введите текст').isLength({ min: 3 }).isString,
	body('tags', 'Не верный формат тэгов').optional().isString(),
	body('imageUrl', 'Не верная ссылка на фото').optional().isString(),
]
