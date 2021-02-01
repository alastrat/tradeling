export default {
    errorResponse: (error: any, query?: string) => ({
        code: 400,
        message: `Sorry, there was an error: ${error instanceof Object ? error.errors[0].message : errorMessages[error](query)}`
    }),
    successResponse: (data: object, meta: object) => ({
        code: 200,
        meta,
        data
    }),

};

const errorMessages: any = ({
    INVALID_SEARCH_TYPE: (query: any) => `The search type introduced '{{err}}' is not allowed.`.replace('{{err}}', query.type),
    CACHE_FLUSH_ERROR: () => `There was an error while flushing the cache.`,
})