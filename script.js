function tombveletlensorrendben(t) 
{
    let tomb = [];
    let index = Math.floor(Math.random() * t.length);
    tomb.push(t[index]);
    t.splice(index, 1);
    for (let i = 0; i < 5; i++) 
    {
        index = Math.floor(Math.random() * tomb.length);
        tomb.push(t[index]);
        t.splice(index, 1);
    }
    tomb.push(t[0]);
    return tomb;
}
console.log(tombveletlensorrendben(["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"]));
console.log(tombveletlensorrendben(["H", "K", "SZE", "CS", "P", "SZO", "V"]));
console.log(tombveletlensorrendben([1, 2, 3, 4, 5, 6, 7, 8, 9]));