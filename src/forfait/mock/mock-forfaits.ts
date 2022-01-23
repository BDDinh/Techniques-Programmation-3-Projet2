import {Forfait} from '../schemas/forfait.schema';

export const FORFAITS: Forfait[] = [
    {
        destination : 'Mexique',
        villeDepart : 'Québec', 
        hotel :{
            nom : 'Hotel Mexico',
            coordonnees : '123 rue XYZ',
            nombreEtoiles : 3.5,
            nombreChambres : 100,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2020-12-15',
        dateRetour : '2020-12-31',
        prix : 1500,
        rabais : 0,
        vedette : false
    },
    {
        destination : 'Paraguay',
        villeDepart : 'Montréal', 
        hotel :{
            nom : 'Hilton Cancun',
            coordonnees : '567 rue XYZ',
            nombreEtoiles : 2.5,
            nombreChambres : 50,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2020-12-20', 
        dateRetour : '2021-01-10',
        prix : 2500,
        rabais : 0,
        vedette : true
    },
    {
        destination : 'Paris',
        villeDepart : 'Toronto', 
        hotel :{
            nom : 'Le Paris Hotel',
            coordonnees :  '111 rue AAA',
            nombreEtoiles : 4,
            nombreChambres : 160,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-12-22',
        dateRetour : '2022-01-30',
        prix : 5500,
        rabais : 0,
        vedette : false
    },
    {
        destination : 'Londres (UK)',
        villeDepart : 'Montreal', 
        hotel :{
            nom : 'The Majesty Hotel',
            coordonnees :  '222 rue BBB',
            nombreEtoiles : 5,
            nombreChambres : 200,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-11-01',
        dateRetour : '2022-01-30',
        prix : 15500,
        rabais : 100,
        vedette : true
    },
    {
        destination : 'Barcelone',
        villeDepart : 'Montreal', 
        hotel :{
            nom : 'The Hip Hotel',
            coordonnees : '333 rue CCC',
            nombreEtoiles : 4.5,
            nombreChambres : 200,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2022-12-01',
        dateRetour : '2023-07-30',
        prix : 12500,
        rabais : 0,
        vedette : true
    },
    {
        destination : 'Saint-Barth',
        villeDepart : 'Montréal', 
        hotel :{
            nom : 'Best Inn',
            coordonnees : '444 rue DDD',
            nombreEtoiles : 3.5,
            nombreChambres : 50,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-12-01', 
        dateRetour : '2022-01-01',
        prix : 4500,
        rabais : 50,
        vedette : false
    }
]