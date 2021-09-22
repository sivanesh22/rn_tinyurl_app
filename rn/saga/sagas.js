import React from 'react';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { restbaseurl } from '../globals/Constants';
import resturls from '../globals/Apiurls';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
fetchUrlList = async (options) => {
    try {
        return await axios(options)
    } catch (err) {
        console.log(err, 'Error in fetching url list')
    }
}

function* fetchUrl() {
    try {
        yield put({ type: "UPDATE_LOADER", payload: true });
        const urlList = yield call(fetchUrlList, { method: 'GET', url: `${restbaseurl}${resturls.fetchAllUrl}` })
        yield put({ type: "UPDATE_URL_LIST", payload: urlList.data.urlList });
        yield put({ type: "UPDATE_LOADER", payload: false });
    } catch (e) {
        console.log('error', e)
    }
}

function* mySaga() {
    yield takeEvery("FETCH_URL_LIST", fetchUrl);
}

export default mySaga;