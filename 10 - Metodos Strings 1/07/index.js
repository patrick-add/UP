const email = "messias@cu.bos";

if (!email.includes('@') || !email.includes('.') || email.indexOf(".") === 0 || email.lastIndexOf(".") === email.length - 1) {
    console.log('E-mail inválido.')
} else {
    console.log('E-mail válido.')
}