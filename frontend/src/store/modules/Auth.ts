import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import {Actions, Mutations} from "@/store/enums/StoreEnums";
import {Module, Action, Mutation, VuexModule} from "vuex-module-decorators";
import * as Yup from "yup";

@Module
export default class AuthStore extends VuexModule {

    /**
     * Create form validation object
     */
    get auth_login_schema() {
        return Yup.object().shape({
            // email: Yup.string().email().required().label("Email"),
            // password: Yup.string().min(4).required().label("Password"),
        });
    }

    /**
     * Perform login action
     */
    @Action({rawError: true})
    auth_login({email, password}) {
        ApiService.post('api/auth', {'method': 'login'})
            .then(response => {
                console.log(response);
            })
    }

}
