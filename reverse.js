function reverse(tab) {
    let res=[];
    for (let i = tab.length-1; i >= 0; i--) {
    res.push(tab[i]);
    }
    return res
}