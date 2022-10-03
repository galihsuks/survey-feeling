const jwb = document.getElementById('tambahan')

document.getElementById('end').addEventListener('click',()=>{
    if(!(jwb.value === '' || jwb.value == null))
        sessionStorage.setItem('opini',jwb.value)
    location.replace('./end')
})