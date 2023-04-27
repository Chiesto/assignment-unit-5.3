console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished){
    const music = {
        title,
        artist,
        yearPublished
    };
    collection.push(music);
    return music;
}
//end addToCollection - adds music to my music collection 
//(title, artist, year published).
addToCollection('Pursuit of Happiness', 'Kid Cudi', '2009');
console.log(collection);
//execute the function addToCollection and test it by 
//console logging the newly updated collection.