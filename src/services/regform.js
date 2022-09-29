import httpCommon from "./http-common";
class regform{
    register(sendData){
        return httpCommon.post("./insert.php",sendData);
    }
}
export default new regform();