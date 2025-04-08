function mudaTema(tema) {
    if (tema==='love') {
    document.body.classList.remove('music');
    document.body.classList.add('love');
    }
    else{
    document.body.classList.remove('love');
    document.body.classList.add('music');
    }

}