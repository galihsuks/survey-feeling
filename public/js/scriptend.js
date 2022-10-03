const nilai = parseInt(localStorage.getItem('nilai'))
const user = JSON.parse(localStorage.getItem('User'))

if(!user.sudahMasuk == true){
    user.nilai = nilai
    user.sudahMasuk = true
    user.opini = sessionStorage.getItem('opini')
    fetch('http://localhost:3000/end', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
    })
    localStorage.setItem('User', JSON.stringify(user))
} else {
    alert('Data tidak dimasukkan karena sudah ada!')
}
console.log(user)