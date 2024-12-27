function password(obj) {
    const year= obj.birthYear;
    
    const kk= Object.keys(obj);

    if (year.toString().length !==4 || kk.includes('name') !== true || kk.includes('birthYear') !== true ||kk.includes('siteName') !== true ) {
        return 'invalid'
    }
   
   else{
    const name= obj.name;
    const birthYear= obj.birthYear;
    const siteName= obj.siteName;

    const capitalSite= siteName[0].toUpperCase()+siteName.slice(1);
 
    return capitalSite+'#'+name+'@'+birthYear;
   }
 
}

const obj= {
    name: 'sourov',
    birthYear:2000,
    
    siteName: 'whatsapp'
}
console.log(password(obj));
