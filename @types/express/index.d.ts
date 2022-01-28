/**
 * Extend all express internal stuff
 * https://stackoverflow.com/a/61950149
 */

declare global {
    namespace Express {
        interface Request {
           rid: string;
        }
        interface Response {
            API: IAPI;
        }
    }
}

interface IAPI {
    success(data: unknown, code?: number, message?: string);
    error(code: number, message: string, data?: unknown);
}
