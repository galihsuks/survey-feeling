const chordC = new Audio("audio/C.mp3")
const chordF = new Audio("audio/F.mp3")
const chordG = new Audio("audio/G.mp3")
const chordDm = new Audio("audio/Dm.mp3")
const chordEm = new Audio("audio/Em.mp3")
const chordAm = new Audio("audio/Am.mp3")

const waktu = document.getElementById('waktu')
const tmbMulai = document.getElementById('tmbMulai')
const tmbCoba = document.getElementById('tmbCoba')
const jwb = document.querySelectorAll('.jwb')

const audioIcon1 = document.getElementById('audioIcon1')
const audioIcon2 = document.getElementById('audioIcon2')

const count5 = [
    [1,2,3,4,5],
    [1,2,3,5,4],
  //-----------------------
    [1,2,4,3,5],
    [1,2,4,5,3],
    [1,2,5,3,4],
    [1,2,5,4,3],
  //-------------------------
    [1,3,2,4,5],
    [1,3,2,5,4],
    [1,3,4,2,5],
    [1,3,4,5,2],
    [1,3,5,2,4],
    [1,3,5,4,2],
  
    [1,4,2,3,5],
    [1,4,2,5,3],
    [1,4,3,2,5],
    [1,4,3,5,2],
    [1,4,5,2,3],
    [1,4,5,3,2],
  
    [1,5,2,3,4],
    [1,5,2,4,3],
    [1,5,3,2,4],
    [1,5,3,4,2],
    [1,5,4,2,3],
    [1,5,4,3,2],
  //-------------------
  //-------------------
    [2,1,3,4,5],
    [2,1,3,5,4],
    //-----------------------
    [2,1,4,3,5],
    [2,1,4,5,3],
    [2,1,5,3,4],
    [2,1,5,4,3],
    //-------------------------
    [2,3,1,4,5],
    [2,3,1,5,4],
    [2,3,4,1,5],
    [2,3,4,5,1],
    [2,3,5,1,4],
    [2,3,5,4,1],
  
    [2,4,1,3,5],
    [2,4,1,5,3],
    [2,4,3,1,5],
    [2,4,3,5,1],
    [2,4,5,1,3],
    [2,4,5,3,1],
  
    [2,5,1,3,4],
    [2,5,1,4,3],
    [2,5,3,1,4],
    [2,5,3,4,1],
    [2,5,4,1,3],
    [2,5,4,3,1],
  //-----------------
  //-----------------
    [3,2,1,4,5],
    [3,2,1,5,4],
    //-----------------------
    [3,2,4,1,5],
    [3,2,4,5,1],
    [3,2,5,1,4],
    [3,2,5,4,1],
    //-------------------------
    [3,1,2,4,5],
    [3,1,2,5,4],
    [3,1,4,2,5],
    [3,1,4,5,2],
    [3,1,5,2,4],
    [3,1,5,4,2],
  
    [3,4,2,1,5],
    [3,4,2,5,1],
    [3,4,1,2,5],
    [3,4,1,5,2],
    [3,4,5,2,1],
    [3,4,5,1,2],
  
    [3,5,2,1,4],
    [3,5,2,4,1],
    [3,5,1,2,4],
    [3,5,1,4,2],
    [3,5,4,2,1],
    [3,5,4,1,2],
  //------------------
  //------------------
    [4,2,3,1,5],
    [4,2,3,5,1],
    //-----------------------
    [4,2,1,3,5],
    [4,2,1,5,3],
    [4,2,5,3,1],
    [4,2,5,1,3],
    //-------------------------
    [4,3,2,1,5],
    [4,3,2,5,1],
    [4,3,1,2,5],
    [4,3,1,5,2],
    [4,3,5,2,1],
    [4,3,5,1,2],
  
    [4,1,2,3,5],
    [4,1,2,5,3],
    [4,1,3,2,5],
    [4,1,3,5,2],
    [4,1,5,2,3],
    [4,1,5,3,2],
  
    [4,5,2,3,1],
    [4,5,2,1,3],
    [4,5,3,2,1],
    [4,5,3,1,2],
    [4,5,1,2,3],
    [4,5,1,3,2],
  //--------------
  //---------------
    [5,2,3,4,1],
    [5,2,3,1,4],
    //-----------------------
    [5,2,4,3,1],
    [5,2,4,1,3],
    [5,2,1,3,4],
    [5,2,1,4,3],
    //-------------------------
    [5,3,2,4,1],
    [5,3,2,1,4],
    [5,3,4,2,1],
    [5,3,4,1,2],
    [5,3,1,2,4],
    [5,3,1,4,2],
  
    [5,4,2,3,1],
    [5,4,2,1,3],
    [5,4,3,2,1],
    [5,4,3,1,2],
    [5,4,1,2,3],
    [5,4,1,3,2],
  
    [5,1,2,3,4],
    [5,1,2,4,3],
    [5,1,3,2,4],
    [5,1,3,4,2],
    [5,1,4,2,3],
    [5,1,4,3,2],
  ]

let countRand = count5[Math.floor(Math.random() * 120)]
console.log(countRand)
const chords = ['chordC','chordDm','chordEm','chordF','chordG','chordAm']
let mulai = false;
let coba = false;
let jwbbenar = 0;
let jwbsalah = 0;

tmbCoba.addEventListener('click',()=>{
    tmbMulai.classList.remove('active')
    tmbCoba.classList.remove('active')
    waktu.classList.add('active')
    setInterval(pewaktu, 1000);
    coba = true
    chordC.play();
    audioIcon1.style = 'color: aqua';
    setTimeout(()=>{audioIcon1.style = 'color: black';},1000)
    setTimeout(() => {
        eval(chords[countRand[nomor]]+".play()")
        audioIcon2.style = 'color: aqua';
        setTimeout(()=>{audioIcon2.style = 'color: black';},1000)
    }, 500);
})

tmbMulai.addEventListener('click',()=>{
    if(localStorage.getItem('cekudah') == '1'){
        tmbMulai.classList.remove('active')
        tmbCoba.classList.remove('active')
        waktu.classList.add('active')
        setInterval(pewaktu, 1000);
        mulai = true
        chordC.play();
        audioIcon1.style = 'color: aqua';
        setTimeout(()=>{audioIcon1.style = 'color: black';},1000)
        setTimeout(() => {
            eval(chords[countRand[nomor]]+".play()")
            audioIcon2.style = 'color: aqua';
            setTimeout(()=>{audioIcon2.style = 'color: black';},1000)
        }, 500);
    } else {
        alert('Isi biodata didepan dulu!')
    }
})

let detik = 5
let nomor = 0
let beritau = false;
console.log('nomor:'+nomor)
function pewaktu(){ 
    if(detik == 0){
        beritau = true
        waktu.style = 'background-color: red'
        waktu.innerText = "WAKTU HABIS"
        setTimeout(gantinomor(),500)
    }else{
        detik -= 1
        waktu.style = 'color: black'
        if(!beritau) waktu.innerText = "00:0"+detik
    }
};

audioIcon1.addEventListener('click',()=>{
    if(mulai || coba){
        chordC.load();
        chordC.play();
        audioIcon1.style = 'color: aqua';
        setTimeout(()=>{audioIcon1.style = 'color: black';},1000)
    }
})
audioIcon2.addEventListener('click',()=>{
    if(mulai || coba){
        eval(chords[countRand[nomor]]+".load()")
        eval(chords[countRand[nomor]]+".play()")
        audioIcon2.style = 'color: aqua';
        setTimeout(()=>{audioIcon2.style = 'color: black';},1000)
    }
})

jwb.forEach((a)=>{
    a.addEventListener('click',()=>{
        if(mulai || coba){
            beritau = true
            if(mulai){
                if(a.dataset.jwb == chords[countRand[nomor]]){
                    waktu.style = 'background-color: greenyellow'
                    waktu.innerText = "BENAR"
                    jwbbenar += 1
                    document.getElementById('benar').innerText = 'Benar:'+jwbbenar
                } else {
                    waktu.style = 'background-color: red'
                    waktu.innerText = "SALAH" 
                    jwbsalah += 1
                    document.getElementById('salah').innerText = 'Salah:'+jwbsalah
                }
            } else if(coba){
                waktu.style = 'background-color: greenyellow'
                waktu.innerText = "BENAR/SALAH" 
                jwbbenar += 1
                document.getElementById('benar').innerText = 'Benar:'+jwbbenar
                document.getElementById('salah').innerText = 'Salah:'+jwbbenar
            }
            setTimeout(gantinomor(),500)
        }
    })
})

function gantinomor() {
    if(nomor < 4){
        nomor += 1;
        detik = 6;
        console.log('nomor:'+nomor)
        beritau = false
        chordC.load();
        chordC.play();
        audioIcon1.style = 'color: aqua';
        setTimeout(()=>{audioIcon1.style = 'color: black';},1000)
        setTimeout(() => {
            eval(chords[countRand[nomor]]+".load()")
            eval(chords[countRand[nomor]]+".play()")
            audioIcon2.style = 'color: aqua';
            setTimeout(()=>{audioIcon2.style = 'color: black';},1000)
        }, 500);
    } else {
        if(mulai){
            localStorage.setItem('cekudah','2')
            document.getElementById('nilai').value = jwbbenar.toString()
            document.getElementById('tmbLanjut').classList.add('active')
        } else if(coba){
            location.reload()
        }
    }
}