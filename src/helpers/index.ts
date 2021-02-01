export default {
    errorResponse: (error: string, query: string) => ({
        code: 400,
        message: `Sorry, there was an error: ${errorMessages[error](query)}`
    }),
    successResponse: (data: object, meta: object) => ({
        code: 200,
        meta: 1,
        data
    }),

};

const errorMessages: any = ({
    INVALID_SEARCH_TYPE: (query: any) => `The search type introduced '{{err}}' is not allowed.`.replace('{{err}}', query.type)
})