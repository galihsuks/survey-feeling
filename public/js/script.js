const tmbmain = document.getElementById('tmbmain');
const masukin = document.querySelectorAll('.masukin')

let ceklocalstorage = false;
document.addEventListener('DOMContentLoaded',()=>{
    isStorageExist()
    if(!(localStorage.getItem('cekudah')=='0'||localStorage.getItem('User')==null)){
        ceklocalstorage = true;
        alert('Kamu sudah pernah ngisi!')
        document.getElementById('form').setAttribute('action','/')
        document.getElementById('form').removeAttribute('method')

    }
    if(!ceklocalstorage) {
        localStorage.setItem('cekudah','0')
        tmbmain.classList.add('active')
    }
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
            localStorage.setItem('cekudah','1')
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
