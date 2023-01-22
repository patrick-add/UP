// a) 05 de outubro de 2020 b) 05/10/2020 c) 5 out d) 05 out 2020 e) 05 de out de 2020 f) 05/out
const { format } = require('date-fns');

const a = (data) => {
    console.log(format(data, "dd 'de' MMMM 'de' yyyy"));
}
const b = (data) => {
    console.log(format(data, "dd/MM/yyyy"));
}
const c = (data) => {
    console.log(format(data, "d MMM"));
}
const d = (data) => {
    console.log(format(data, "dd MMM yyyy"));
}
const e = (data) => {
    console.log(format(data, "dd 'de' MMM 'de' yyyy"));
}
const f = (data) => {
    console.log(format(data, "dd/MMM"));
}

e(new Date())