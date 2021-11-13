import ApiNames from './ApiNames';
import networkManager from './NetworkManager';
// export default () => axios.create({
//   baseURL: '',
//   headers: {},
// });
export default {
  pingpong: async (data) => {
    console.log(data);
    const reponse = await networkManager.getRequest(ApiNames.pingpong, data);
    console.log(reponse);
    return reponse;
    // const response = await networkManager.getRequest
    // (ApiNames.getEditingPermissionOfASemester, data)
  },
};
