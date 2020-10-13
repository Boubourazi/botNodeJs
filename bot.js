const config = require('./config');
const twit = require('twit');
const T = new twit(config);

function main(){
    let actualDate = new Date();
    console.log(actualDate.getDay());
    console.log(process.argv);
    T.post('statuses/update', { status: "Aujourd'hui: " + constructDateString(actualDate) +", cela fait " + calculNbrJour(actualDate) + " jours que mon dossier de bourse est en attente de traitement par le @Crous_Bordeaux"}, (err, data, response) => console.log(data));
}

function calculNbrJour(date){
    let start = new Date('06/23/2020');
    return (Math.ceil(Math.abs(date - start) / (1000 * 60 * 60 * 24)));
}

function constructDateString(date){
    let result = "";
    let jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let moisAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    result = jourSemaine[date.getDay()] + " "+ date.getDate() + " " + moisAnnee[date.getMonth()];
    return (result);
}

main();