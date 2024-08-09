var Photo = /** @class */ (function () {
    function Photo(id, title, url, thumbnailUrl) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }
    return Photo;
}());
var apiUrl = 'https://jsonplaceholder.typicode.com/photos';
fetch(apiUrl)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data
        .filter(function (photo) { return photo.id > 20 && photo.id < 30; })
        .forEach(function (photo) { return console.log(photo.url); });
});
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then((data: Photo[]) => {
//       const filteredData = data.filter(item => item.id > 20 && item.id < 30);
//       if (filteredData.length > 0) {
//         console.log('Image URLs where ID is between 20 and 30:');
//         filteredData.forEach(item => {
//           console.log(item.url);
//         });
//       } else {
//         console.log('No items found with ID between 20 and 30.');
//       }
//     });
