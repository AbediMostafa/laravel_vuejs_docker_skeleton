import {defineStore} from "pinia";
import * as Yup from "yup";
import AuthApi from "@/core/api_modules/AuthApi";

export const useAuthStore = defineStore('AuthStore', {

    state() {
        return {
            submitButton: '',
            loginSchema: Yup.object().shape({
                // email: Yup.string().email().required().label("Email"),
                // password: Yup.string().min(4).required().label("Password"),
            }),

            authMessage: {
                hasError: false,
                errorMsg: '',
            }
        }
    },

    actions: {
        login(data) {
            AuthApi.login(data, ({data}) => {
                console.log(data);
                if (!data.status) {
                    this.authMessage = {
                        hasError: true,
                        errorMsg: data.msg
                    }
                }
            })
        }
    }

})