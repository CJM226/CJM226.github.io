
const divObj=document.getElementsByClassName('jsq')[0];
    setInterval(()=>{
        const nowTime=getNowTime();
        divObj.innerText=nowTime;
    })
    function getNowTime(){
        const date=new Date();
        const year=date.getFullYear();
        const month=date.getMonth();
        const day=date.getDate();
        const hour=date.getHours();
        const minite=date.getMinutes();
        const seconds=date.getSeconds();
        return `${year}年${month}月${day}日 ${hour}:${minite}:${seconds<10?'0'+seconds:seconds}`
    }
