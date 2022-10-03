const tmbmain = document.getElementById('tmbmain');
const masukin = document.querySelectorAll('.masukin')

let ceklocalstorage = false;
document.addEventListener('DOMContentLoaded',()=>{
    isStorageExist()
    if(!(localStorage.getItem('User')==''||localStorage.getItem('User')==null)){
        ceklocalstorage = true;
        alert('Kamu sudah pernah ngisi!')
    }
    sessionStorage.setItem('cek','0')
})

tmbmain.addEventListener('click',()=>{
    if(!ceklocalstorage){
        let cek = true
        masukin.forEach((a)=>{
            if(a.value === ''||a.value == null){
                cek =false
            }
        })
        if(cek){
            let arr = []
            masukin.forEach((a)=>{
                arr.push(a.value)
            })
            const user = generateUser(arr[0],arr[1],arr[2],arr[3])
            console.log(user)
            localStorage.setItem('User',JSON.stringify(user))
            sessionStorage.setItem('cek','1')
            location.replace("./main")
        }
    }
})

function generateUser(umur,sekolah,main,feeling){
    return {
        umur,
        sekolah,
        main,
        feeling
    }
}
function isStorageExist(){
    if(typeof(Storage) === undefined){
        alert('Browser tidkak mendukung local storage')
        return false;
    }
    return true
}
