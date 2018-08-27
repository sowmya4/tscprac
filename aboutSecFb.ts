class AboutSecFb{
 //fields or properties and methods
constructor(private username, private password,public birthday:string,public workplace:{"company": string,"position":string,"city/town":string,"Description":string,"timeperiod":{"starttime":number,"endtime":number}},public professionalSkills:Array<string>,public educationDetails: {"university":string,"highschool":string},public currentCity: string,public hometown:string,public otherPlacesLived: Array<string>,public familyMembers:Array<string>,private contactInfo:{"address": string, "city":string,"zip":number,"neighbourhood":string},public websites: string[]){

}
    getAge() {
    let  today = new Date();
    let  birthDate = new Date(this.birthday);
    let  age = today.getFullYear() - birthDate.getFullYear();
    let  m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    alert(age);
    }
        
    setContactInfo(newWork:any){
    this.workplace = newWork;
    }
    getContactInfo(){
    return this.workplace;
    }
    placesVisited():void{
     //display current city and otherplaces lived
    }
    usageOfFbPerDay(){
    //cal howmany times person has loggged in based on how mawmany time username ws given
    }
    

}

let sowmya = new AboutSecFb("sowmya.t","abca456","02-13-1994", { "company": "abc ", "position": "cde", "city/town": "aaa", "Description": "wsss", "timeperiod": { "starttime": 0, "endtime": 0 } }, ["javascript", "angular"],{"university": "abc","highschool": "ccccc"},"hyd","elur",["hyd","chennai"],["amma","nanna","sis"],{"address": "street:abc,drnum:12-12-32", "city":"hyd","zip":12345667,"neighbourhood":"near church"},["soumya.thallapragada@gmail.com","soumya.thallapragada@yahoo.com<mailto:soumya.thallapragada@gmail.com","soumya.thallapragada@yahoo.com>"])
 console.log("sowmya is", sowmya);  