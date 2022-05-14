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
  {
    id: uuid(),
    pathName: 'user',
    path: '/user'
  },
)

/**
 * 根据不同的地址来选择不同的layout
 */
export const selectLayout = (pathName: string) => {

  pathArrs.filter(item => {
    if (pathName === item.path) {
      console.log(22, strfirst2Upper(item.pathName) + 'Layout');
      return strfirst2Upper(item.pathName) + 'Layout';// 首字母大写+layout
    } else {
      return strfirst2Upper('normal') + 'Layout';
    }
  })
}

