export const handle = (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello Test"
        }),
    };
};