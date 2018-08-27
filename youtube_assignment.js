var youtube = /** @class */ (function () {
    //fields or properties and methods
    function youtube(videoName, uploadedTime, uploadedTimeDiff, uploadedChannel, newsType, numOfViews, numOfLikes, numberOfDislikes, category, numOfSubscribers, videoTimespan, numOfComments, subtitlesForVideo, isDownloadable) {
        var _this = this;
        this.videoName = videoName;
        this.uploadedTime = uploadedTime;
        this.uploadedTimeDiff = uploadedTimeDiff;
        this.uploadedChannel = uploadedChannel;
        this.newsType = newsType;
        this.numOfViews = numOfViews;
        this.numOfLikes = numOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.category = category;
        this.numOfSubscribers = numOfSubscribers;
        this.videoTimespan = videoTimespan;
        this.numOfComments = numOfComments;
        this.subtitlesForVideo = subtitlesForVideo;
        this.isDownloadable = isDownloadable;
        this.playVideo = function () {
            //on click of an event play the video and return true or false based on success
            return Boolean;
        };
        this.calcuateUploadedTime = function (currentTime, uploadedTime) {
            _this.uploadedTimeDiff = currentTime - uploadedTime;
            //this.uploadedTime = convert time into date;
        };
        this.calcNumOfLikesAndDislikes = function () {
            //onclick of like button
            _this.numOfLikes += 1;
            //onclick of dislike button
            _this.numberOfDislikes += 1;
        };
        this.downloadVideo = function () {
            if (_this.isDownloadable == true) {
                //downoad video
            }
            else {
                //disable download button
            }
        };
        this.subscribeToVideo = function () {
            //if user subscribed
            //increase numOfSubscribers count
        };
    }
    return youtube;
}());
