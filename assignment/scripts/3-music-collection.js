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
            results.push(artist);
        }
    }
    return results;
    //return results[0]; - wasn't sure if you wanted the name repeated in the array so I 
    // did this to clean it up if that was the intended result. 
}
//end findByArtist
//test with Kid Cudi
console.log(findByArtist ('Kid Cudi',collection));
//test with Drake
console.log(findByArtist ('Drake',collection));
//test with Lil' Wayne (not on the list)
console.log(findByArtist ('Lil Wayne',collection));
