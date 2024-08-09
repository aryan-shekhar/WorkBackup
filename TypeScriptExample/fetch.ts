class Photo {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(id:number,title: string,url: string, thumbnailUrl: string)
    {
        this.id=id;
        this.title=title;
        this.url=url;
        this.thumbnailUrl=thumbnailUrl;
    }

  }
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  
  fetch(apiUrl)
  .then(response => response.json())
  .then((data: Photo[]) => {
      data
          .filter(photo => photo.id > 20 && photo.id < 30)
          .forEach(photo => console.log(photo.url));
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