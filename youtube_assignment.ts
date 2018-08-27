class youtube{

//fields or properties and methods

constructor(public videoName : string,public uploadedTime: Date,public uploadedTimeDiff: number,public uploadedChannel: string,public newsType: string,public numOfViews :number,public numOfLikes: number,public numberOfDislikes: number,public category: string,public numOfSubscribers: number,public videoTimespan: number,public numOfComments: number,public subtitlesForVideo: boolean,public isDownloadable: boolean){


}
 playVideo = () => {
//on click of an event play the video and return true or false based on success
return Boolean;
}

calcuateUploadedTime = (currentTime:number,uploadedTime:number) =>{
this.uploadedTimeDiff = currentTime-uploadedTime;
//this.uploadedTime = convert time into date;
}

calcNumOfLikesAndDislikes=()=>{
//onclick of like button
this.numOfLikes+=1;
//onclick of dislike button
this.numberOfDislikes+=1;
}

downloadVideo=()=>{
    if(this.isDownloadable == true){
        //downoad video
    }
    else{
        //disable download button

    }
       
}
subscribeToVideo=()=>{
    //if user subscribed
         //increase numOfSubscribers count
    
}



}
