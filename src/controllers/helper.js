export const badRequest = (errorMessage) => {
    return {
        statusCode: 400,
        body: {
            errorMessage
        },
    }
}

export const created = (body) => {
    return {
        statusCode: 201,
        body,
    }
}

export const serverError = () => {
    return {
        statusCode: 500,
        body: {
            message: 'Internal server error',
        },
    }
}