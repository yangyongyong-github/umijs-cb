
export const uuid = (): any => {
    const str = + new Date() // 1648088150765
    return str.toString(16) // '17fb9b572ed'
    // return Math.random().toString(16).split(2, 5);
}

/**
 * 等待时间结束
 * @param ms 等待毫秒数
 */
export default function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

/**
 * 字符串首字母大写
 * @params{}
 */
export const strfirst2Upper = (str: string, all: boolean = false) => {
    if (all) {
        return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase())
    } else {
        return str.trim().replace(str[0], str[0].toUpperCase())
    }
}