// object destructing 

// const band  = {
//     bandName : "led Zappin",
//     famouSong : "Stairway to heaven"
// };

// const bandName = band.bandName;
// const bandfamouSong = band.famouSong;
// console.log(bandName,bandfamouSong);


const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year :1998,
    anotherFamousSong :"Kashmir",
};
// const bandName =band.bandName;
// const famousSong = band.famousSong;


let {bandName,famousSong,...restProp} = band;
bandName = "Queen";

console.log(bandName, famousSong);
    