const initialState = {
    urlList: [
        // { "originalUrl": "https://my.pcloud.com/", "tinyUrl": "p90PG6" },
        // { "originalUrl": "https://www.linkedin1.com/", "tinyUrl": "iRxbw0" },
        // { "originalUrl": "https://www.google11.co.in/", "tinyUrl": "QbAAlI" }
    ],
    loading: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_URL_LIST":
            return {
                ...state,
                urlList: action.payload
            };
        case "UPDATE_LOADER":
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}

export default reducer;