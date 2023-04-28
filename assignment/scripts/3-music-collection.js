console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished,tracks){
    const album = {
        title,
        artist,
        yearPublished,
        tracks
    };
    collection.push(album);
    return album;
}
//end addToCollection - adds music to my music collection 
//(title, artist, year published).
console.log(addToCollection('Man on the Moon', 'Kid Cudi', '2009', [{trackName:'Track 1', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//1
console.log(addToCollection('A Kid Named Cudi', 'Kid Cudi', '2008',[{trackName:'Track', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//2
console.log(addToCollection('2014 Forest Hills Drive', 'J. Cole', '2014', [{trackName:'Track', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//3
console.log(addToCollection('Purple Rain', 'Prince', '1984', [{trackName:'Track', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//4
console.log(addToCollection('Nothing Was the Same', 'Drake', '2013', [{trackName:'Track 1', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//5
console.log(addToCollection('Thank Me Later', 'Drake', '2010', [{trackName:'Track', trackDuration: '3:30'}, {trackName:'Track 2', trackDuration: '2:45'}, {trackName:'Track 3', trackDuration: '4:50'}]));//6
//added 6 albums to my 'collection'.
console.log(collection);
//console log the newly updated collection.

function showCollection(array){
    console.log("There are", array.length, "album(s) in my collection.");
    for(let i = 0; i<array.length; i++){ // loop through collection
        console.log(`${array[i].title} by ${array[i].artist}, published in: ${array[i].yearPublished}`); //print title, artist and year published
        for(let j = 0; j < array[i].tracks.length; j++){//loop through the tracks in the album (collection[i])
            console.log(`${j+1}. ${array[i].tracks[j].trackName}: ${array[i].tracks[j].trackDuration}`);//log each track
        }
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
    year: '2010',
    trackName: 'Track 1'
}

function search(searchCriteria){
    if (!searchCriteria || searchCriteria.length === 0){
        return collection;
    } // if no search criteria is entered or the search criteria is empty, return the collection.

    const newArray = [];
    if (searchCriteria.trackName){//if the searchCriteria has a trackName 
        for(let b = 0; b<collection.length; b++){//loop through the collection's albums
            let album = collection[b];
            for(let v = 0; v<album.tracks.length; v++){//loop through the album's (collection[b]) tracks
                if (searchCriteria.trackName === album.tracks[v].trackName){//if the searchCriteria trackName matches the album's trackName, add to my newArray
                    newArray.push(album);
                }
            }

        }
    } else {//otherwise (if the search criteria doesn't contain tracks) search by artist AND year published
        for (let i=0; i<collection.length; i++){
        // loop through the collection and if any of the albums in the collection match the artist AND year, add
        // them to my newArray and return those results.
            let album = collection[i];
            if (searchCriteria.artist === album.artist && searchCriteria.year === album.yearPublished){
                    newArray.push(album);
                }
        }
        // return my results - if they match the array will be updated accordingly. if they don't
        // the array will be empty.
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

