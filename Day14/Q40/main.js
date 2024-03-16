// Question 40: Album: Create objects for music albums.
function create_album(singer, title, tracks) {
    var album = { singer: singer, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(create_album("Arijit Singh", "Tera yaar hun me"));
console.log(create_album("Rahet Fateh Ali Khan", "Dillagi"));
console.log(create_album("Atif Aslam", "Dil meri na sune", 10));
