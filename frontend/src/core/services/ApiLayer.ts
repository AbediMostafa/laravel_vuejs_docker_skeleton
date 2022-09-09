import ApiService from "@/core/services/ApiService";
import store from "@/store";

class ApiLayer {
    public static post(resource, method, data, callB) {

        return ApiService
            .post(resource, {method, ...data})
            .finally(() => store.dispatch('indicatorStop'))
            .then(response => callB(response));
    }
}

export default ApiLayer;