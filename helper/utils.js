class Message {
    static SUCCESS = {
        CREATED: 'Resource created successfully.',
        UPDATED: 'Resource updated successfully.',
        DELETED: 'Resource deleted successfully.',
        FETCHED: 'Data fetched successfully.',
        LOGIN_SUCCESS: 'Logged in successfully.',
        LOGOUT_SUCCESS: 'Logged out successfully.',
        REGISTER_SUCCESS: 'Registration completed successfully.',
    };

    static ERROR = {
        BAD_REQUEST: 'Bad request. Please check your input.',
        UNAUTHORIZED: 'Unauthorized access.',
        FORBIDDEN: 'Access denied.',
        NOT_FOUND: 'Resource not found.',
        CONFLICT: 'Conflict occurred. Resource already exists.',
        SERVER_ERROR: 'Something went wrong. Please try again later.',
        VALIDATION_FAILED: 'Validation failed. Please check the data.',
        LOGIN_FAILED: 'Login failed. Invalid credentials.',
        TOKEN_EXPIRED: 'Session expired. Please login again.',
        TOKEN_INVALID: 'Invalid token. Authentication failed.',
    };

    static USER = {
        NOT_FOUND: 'User not found.',
        ALREADY_EXISTS: 'User already exists.',
    };

    static AUTH = {
        LOGIN_FAILED: 'Login failed. Incorrect credentials.',
        TOKEN_MISSING: 'No token provided.',
    };


    static CUSTOM(key, value) {
        return `${key} ${value}`;
    }

    static RESPONSEDATA(DATA){
        const data ={
            status :200,
            message:DATA.MESSAGE,
            results:DATA.RESULTS
        }
        return data;
    }
      static RESERROR(DATA){
        const data ={
            status :500,
            message:DATA.MESSAGE,
            error:DATA.ERROR
        }
        return data;
    }
}

module.exports = Message;
