
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { restbaseurl } from './Constants';


export class RestDataSource {
    SendRequest = async (method, url, callback, data = {}) => {

        try {
            let c1 = '';
            if (await AsyncStorage.getItem('c1')) {
                c1 = await AsyncStorage.getItem('c1');
            }
            const config = {
                baseURL: restbaseurl,
                method,
                url,
                withCredentials: true,
                headers: { Authorization: c1 },
            }
            if (method !== 'GET') {
                config.data = data
            }
            const req = await Axios.request(config);
            const respdata = req.data;
            if (req.status === 200) {
                callback(respdata);
            }

        } catch (err) {
            if (
                err.response
                && err.response.status === 401
                && err.response.data.message === 'Invalid token'
            ) {
                console.log(err)
                // document.location.href = '/login'
            } else if (err.response && err.response.status === 401) {
                alert('Unauthorized.Please try logging in again')
                // navigation.Login()
                // this.props.navigation.navigate('Login')
                // document.location.href = '/login'
            } else if (err.response && err.response.status === 500) {
                console.log('Error in backend')
            } else {
                console.log(err)
            }
        }
    };

    async GetData(callback, url, data = {}, method = 'GET', urlType = 'api') {
        this.SendRequest(method, url, callback, data, urlType);
    }

    async Save(callback, url, data) {
        this.SendRequest('post', url, callback, data);
    }

}