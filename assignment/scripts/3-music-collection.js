console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished){
    const album = {
        title,
        artist,
        yearPublished
    };
    collection.push(album);
    return album;
}
//end addToCollection - adds music to my music collection 
//(title, artist, year published).
console.log(addToCollection('Man on the Moon', 'Kid Cudi', '2009'));//1
console.log(addToCollection('A Kid Named Cudi', 'Kid Cudi', '2008'));//2
console.log(addToCollection('2014 Forest Hills Drive', 'J. Cole', '2014'));//3
console.log(addToCollection('Purple Rain', 'Prince', '1984'));//4
console.log(addToCollection('Nothing Was the Same', 'Drake', '2013'));//5
console.log(addToCollection('Thank Me Later', 'Drake', '2010'));//6
//added 6 albums to my 'collection'.
console.log(collection);
//console log the newly updated collection.

function showCollection(array){
    console.log("There are", array.length, "albums in my collection.");
    for(let i = 0; i<array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }
    return array;
}
//end showCollection
showCollection(collection);
//test showCollection function

function findByArtist (artist, array){//I used an array input just incase you want to use different collections.
    let results = [];
    for(let i=0; i<array.length; i++){
        if (array[i].artist===artist){
            results.push(array[i]);
        }
    }
    return results;
}
//end findByArtist
//test with Kid Cudi (first 2 items on the list)
console.log(findByArtist ('Kid Cudi',collection));
//test with Drake (later on in the list)
console.log(findByArtist ('Drake',collection));
//test with Lil' Wayne (not on the list)
console.log(findByArtist ('Lil Wayne',collection));

console.log("-----Stretch Goals-----");

const searchProperties = {
    artist: 'Ray Charles',
    year: '1957'
}
const altSearchProperties = {
    artist: 'Drake',
    year: '2010'
}

function search(searchCriteria){
    if (!searchCriteria || searchCriteria.length === 0){
        return collection;
    } // if no search criteria is entered or the search criteria is empty, return the collection.

    const newArray = [];

    for (let i=0; i<collection.length; i++){
        let album = collection[i];
        if (searchCriteria.artist === album.artist && searchCriteria.year === album.yearPublished){
            newArray.push(album);
        }
    }
    return newArray;
}
//end search function
//TEST search function (values that are NOT in my collection) X
console.log(search(searchProperties));
//TEST search function (values that ARE in my collection) X
console.log(search(altSearchProperties));
//TEST search function (no input values) X
console.log(search());