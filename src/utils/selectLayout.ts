import { uuid, strfirst2Upper } from './index'


const pathArrs: Array<{
  id: string,
  pathName: string,
  path: string
}> = [];

pathArrs.push(
  {
    id: uuid(),
    pathName: 'login',
    path: '/login'
  },
  {
    id: uuid(),
    pathName: 'admin',
    path: '/admin'
  },
  // {
  //   id: uuid(),
  //   pathName: 'user',
  //   path: '/user'
  // },
)

/**
 * 根据不同的地址来选择不同的layout
 */
export const selectLayout = (pathName: string) => {
  const result = pathArrs.find(item => item.path === pathName);
  if (result) {
    return strfirst2Upper(result.pathName) + 'Layout';
  } else {
    // return strfirst2Upper('normal') + 'Layout';
  }
}

