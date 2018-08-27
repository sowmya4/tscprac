var AboutSecFb = /** @class */ (function () {
    //fields or properties and methods
    function AboutSecFb(username, password, birthday, workplace, professionalSkills, educationDetails, currentCity, hometown, otherPlacesLived, familyMembers, contactInfo, websites) {
        this.username = username;
        this.password = password;
        this.birthday = birthday;
        this.workplace = workplace;
        this.professionalSkills = professionalSkills;
        this.educationDetails = educationDetails;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.otherPlacesLived = otherPlacesLived;
        this.familyMembers = familyMembers;
        this.contactInfo = contactInfo;
        this.websites = websites;
    }
    AboutSecFb.prototype.getAge = function () {
        var today = new Date();
        var birthDate = new Date(this.birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        alert(age);
    };
    AboutSecFb.prototype.setContactInfo = function (newWork) {
        this.workplace = newWork;
    };
    AboutSecFb.prototype.getContactInfo = function () {
        return this.workplace;
    };
    AboutSecFb.prototype.placesVisited = function () {
        //display current city and otherplaces lived
    };
    AboutSecFb.prototype.usageOfFbPerDay = function () {
        //cal howmany times person has loggged in based on how mawmany time username ws given
    };
    return AboutSecFb;
}());
var sowmya = new AboutSecFb("sowmya.t", "abca456", "02-13-1994", { "company": "abc ", "position": "cde", "city/town": "aaa", "Description": "wsss", "timeperiod": { "starttime": 0, "endtime": 0 } }, ["javascript", "angular"], { "university": "abc", "highschool": "ccccc" }, "hyd", "elur", ["hyd", "chennai"], ["amma", "nanna", "sis"], { "address": "street:abc,drnum:12-12-32", "city": "hyd", "zip": 12345667, "neighbourhood": "near church" }, ["soumya.thallapragada@gmail.com", "soumya.thallapragada@yahoo.com<mailto:soumya.thallapragada@gmail.com", "soumya.thallapragada@yahoo.com>"]);
console.log("sowmya is", sowmya);
