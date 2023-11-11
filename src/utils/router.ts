export function routerParams(params: {
  path?: string;
  query?: { [key:string] : string };
  state?: { [key:string] : string };
} | any): [string] {
  let result = [];
  result.push(params.path);
  const queryKeys = Object.keys(params?.query || {});
  if(queryKeys.length) {
    let query = '';
    queryKeys.forEach((key, index) => {
      if(index === 0) {
        query += `?${key}=${params.query[key]}`;
      } else {
        query += `&${key}=${params.query[key]}`;
      }
    });
    result = [`${params.path}${query}`];
  }
  if(!!params.state) {
    result.push(params.state);
  }
  return result as any;
}