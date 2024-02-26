import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  getCitys = '/city/queryCity',
}

/**
 * @description: user login api
 */
export function getCitys(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.getCitys,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
