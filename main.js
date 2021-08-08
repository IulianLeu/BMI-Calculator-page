
/* Button Gender Selection */
function genderImgChangeBtnFemale() {
    var Image_Id = document.getElementById('genderImgChange');
    if (Image_Id.src.match("images/male-shadow.png")) {
        Image_Id.src = "images/female-shadow.png";
    }
}
function genderImgChangeBtnMale() {
    var Image_Id = document.getElementById('genderImgChange');
    if (Image_Id.src.match("images/female-shadow.png")) {
        Image_Id.src = "images/male-shadow.png";
    }
}
