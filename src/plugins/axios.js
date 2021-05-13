"use strict";

import Vue from 'vue';
import axios from "axios";

import {
	Toast,
	Dialog
} from 'vant';

Vue.use(Toast);
Vue.use(Dialog);

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.baseURL = "http://10.111.137.145:9090/ding-talk-api-checker/";
//axios.defaults.baseURL = "http://121.4.80.108:9090";
axios.defaults.baseURL = "/api";

let config = {
	baseURL: process.env.VUE_APP_BASE_API,
	// timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);


export const get = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		_axios.get(url, {
				params: params
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			})
	})
};

export const post = (url, data = {}) => {
	return new Promise((resolve, reject) => {
		_axios.post(url, data)
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err);
			})
	})
};
