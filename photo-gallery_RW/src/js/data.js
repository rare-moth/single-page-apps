let imagesPromise;

const imagesData = () => {
if (!imagesPromise){
	imagesPromise = fetch('http://jsonplaceholder.typicode.com/photos')
    .then(result=>result.json());
}
return imagesPromise;
}

export default imagesData