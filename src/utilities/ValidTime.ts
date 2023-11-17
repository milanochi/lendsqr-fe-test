export function ValidTime ( str  : string) {
        let date = new Date(str)
        let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let $month = date.getMonth()
        const month = arr[$month]
        const day = date.getDay()
        const year = date.getFullYear()
        let hrs = date.getHours()
        let mins: number | string = date.getMinutes()
        
        let amPm: string = 'AM';
        (hrs > 12) ? amPm = 'PM' : amPm;
        (hrs === 0) ? hrs = 12 :
        (mins < 10) ?  mins = `0${mins}` : mins;
    
        return (`${month} ${day},${year} ${hrs}:${mins} ${amPm}`)
}
