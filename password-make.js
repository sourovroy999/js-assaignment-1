function password(obj) {
    const year= obj.birthYear;
    // console.log(year);
  
    const kk= Object.keys(obj);
    
    zz= []
    for(let i=0; i<kk.length;i++){
        let char= kk[i].toLowerCase();
        zz.push(char);
    
    }
   
    


  

    if (year.toString().length<4 || Object.keys(obj).length<3  || zz.includes('name') !== true || zz.includes('birthyear') !== true ||zz.includes('sitename') !== true ) {
        return 'invalid'
    }
    // console.log(obj.name);
   else{
    const name= obj.name;
    const birthYear= obj.birthYear;
    const siteName= obj.siteName;
    // const capitalSite= siteName[0].toUpperCase()
    const capitalSite= siteName[0].toUpperCase()+siteName.slice(1);
    // console.log(capitalSite);
    

    return capitalSite+'#'+name+'@'+birthYear;
   }
    

    
}

const obj= {
    name: 'sourov',
    birthYear:2000,
    age:30,
    siteName: 'google'
}
console.log(password(obj));
