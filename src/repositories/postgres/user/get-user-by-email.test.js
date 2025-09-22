import { prisma } from '../../../../prisma/prisma'
import { PostgresGetUserByEmailRepository } from './get-user-by-email'
import { user as fakeUser } from '../../../tests'

// eslint-disable-next-line no-undef
describe('GetUserByEmailRepository', () => {
    // eslint-disable-next-line no-undef
    it('should get user by email on db', async () => {
        const user = await prisma.user.create({ data: fakeUser })

        const sut = new PostgresGetUserByEmailRepository()

        const result = await sut.execute(user.email)

        // eslint-disable-next-line no-undef
        expect(result).toStrictEqual(user)
    })

    // eslint-disable-next-line no-undef
    it('should call Prisma with correct params', async () => {
        const sut = new PostgresGetUserByEmailRepository()

        const prismaSpy = import.meta.jest.spyOn(prisma.user, 'findUnique')

        await sut.execute(fakeUser.email)

        // eslint-disable-next-line no-undef
        expect(prismaSpy).toHaveBeenCalledWith({
            where: {
                email: fakeUser.email,
            },
        })
    })

    // eslint-disable-next-line no-undef
    it('should throw if Prisma throws', async () => {
        const sut = new PostgresGetUserByEmailRepository()
        import.meta.jest
            .spyOn(prisma.user, 'findUnique')
            .mockRejectedValueOnce(new Error())

        const promise = sut.execute(fakeUser.email)

        // eslint-disable-next-line no-undef
        await expect(promise).rejects.toThrow()
    })
})
