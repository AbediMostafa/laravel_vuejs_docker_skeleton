import ApiLayer from "@/core/services/ApiLayer";

class AuthApi {

    /**
     * Default route for all auth apis
     */
    public static route = 'api/auth';

    public static login(data, callB) {
        ApiLayer.post(AuthApi.route, 'login', data, callB);
    }
}

export default AuthApi;