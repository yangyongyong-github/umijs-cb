import { uuid } from "utils";
// 一维数组存储对象
/**
 * user flag data
 */
const usersFlagData: Array<{
    id: string,
    name: string,
    flag: string
}> = [];

usersFlagData.push(
    {
        id: uuid(),
        name: 'Admin',
        flag: 'admin'
    },
    {
        id: uuid(),
        name: 'I',
        flag: "useri"
    },
    {
        id: uuid(),
        name: 'II',
        flag: 'userii'
    }
)

const userFlagData: Array<{
    id: string,
    name: string,
    flag: string
}> = [];

userFlagData.push(

    {
        id: uuid(),
        name: 'I',
        flag: "useri"
    },
    {
        id: uuid(),
        name: 'II',
        flag: 'userii'
    }
)

/**
 * gender
 */
const genderData: Array<{
    id: string,
    id_sub: string,
    title: string,
    male: boolean
}> = [];

genderData.push(
    {
        id: uuid(),
        id_sub: 'sex0',
        title: '男',
        male: true
    },
    {
        id: uuid(),
        id_sub: 'sex1',
        title: '女',
        male: false
    }
)


// enum Gender {
//     male = "男",
//     female = "女"
// }

// // let gender: Gender;
// const male = Gender.male;
// const female = Gender.female;

// let gender = [
//     male, female
// ]


export {usersFlagData, userFlagData, genderData };