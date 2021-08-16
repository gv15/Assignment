import axios from 'axios';
function loadAxiosConfig(){
axios.defaults.baseURL="http://localhost:3030";
axios.interceptors.request.use(
    function(currentRequest){
        console.log("Request interceptor");
    if(localStorage.token){
        currentRequest.headers.bearer = localStorage.token;
    }
    return currentRequest;
},(err)=>{
    console.log('request interceptor error')
})
axios.interceptors.response.use(
    function(response){
    if(response.data.token){
        localStorage.token = response.data.token;
    }
    return response;
}, err=>{
    console.log(err);
})
}
export default loadAxiosConfig;

