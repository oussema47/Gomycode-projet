import { ADDMOVIE, EDITMOVIE, WATCHED, } from "./types";

const initalState = {
    movies: [
        {
            id: 0,
            title: "Lucifer",
            posterUrl: "https://fr.web.img6.acsta.net/pictures/21/05/03/14/41/4314737.jpg",
            rate: 6,
            description:
                "Lassé et mécontent de sa position de Seigneur des Enfers, Lucifer Morningstar démissionne et abandonne son royaume pour la bouillonnante Los Angeles. Dans la Cité des Anges, l'ex maître diabolique est le patron d'un nightclub baptisé Lux.",
            trailer: "https://www.youtube.com/watch?v=X4bF_quwNtw&ab_channel=Lucifer",
            watched: false,
        },
        {
            id: 1,
            title: "Good Girls",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BYmFmNTVjM2ItNDNmNC00NTU3LWIwNDQtNDhlNThhNjE1MDBjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            rate: 4.7,
            description:
                "Trois meilleurs amis se regroupent pour arrêter de jouer selon les règles et prendre le contrôle de leur vie. Elles tiennent une épicerie pour sauver leurs familles en difficulté mais du fait d'être novice, s'en tirer ne sera peut-être pas si facile.",
            trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
            watched: false,
        },
        {
            id: 2,
            title: "La Casa De Papel",
            posterUrl: "https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg",
            rate: 4.2,
            description:
                "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
            trailer: "https://www.youtube.com/embed/msJggy8xtmI",
            watched: false,
        },
        {
            id: 3,
            title: "Breaking bad",
            posterUrl:
                "https://cineuropa.org/Galleries/406/435/poster_big.jpg?1636638869137",
            rate: 4.5,
            description:
                "Une bande de copains en mal de sensations fortes diffuse une radio libre depuis leur ville natale à la campagne. Jérôme la dirige avec un charisme unique tandis que Philippe, le génie technique, vit dans l'ombre de Jérôme, son grand frère.",
            trailer: "https://www.youtube.com/embed/lrcqbavlbyQ",
            watched: false,
        },
        {
            id: 4,
            title: "Scooby!",
            posterUrl:
                "https://cinedweller.com/wp-content/uploads/2020/08/scooby-affiche.jpg",
            rate: 4.2,
            description:
                "En 2000, trois membres du groupe Mystery, Inc. quittent le groupe en raison de frictions de longue date entre eux : l'excès de zèle de Fred, Daphne qui en a assez d'être kidnappée à chaque mystère, et Velma qui n'est jamais créditée pour ses compétences et ses idées. Shaggy et Scooby restent et s'occupent de la camionnette de la bande, la Mystery Machine.",
            trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
            watched: false,
        },
        {
            id: 5,
            title: "Un fils du Sud",
            posterUrl:
                "https://afriquefilms.com/images/cache/resize-750x1000/films/fils-sud/affiche.jpg",
            rate: 4.1,
            description:
                "Dans le sud des États-Unis, le petit-fils d'un membre du Ku Klux Klan joint le mouvement américain des droits civiques.",
            trailer: "https://www.youtube.com/embed/4CJ5p4XisHs",
            watched: false,
        },
        {
            id: 6,
            title: "Tropic of Violence",
            posterUrl:
                "https://cineuropa.org/Galleries/421/272/poster_big.jpg?1644229198608",
            rate: 4.1,
            description:
                "Tropique de la violence est un roman de Nathacha Appanah paru le 25 août 2016 aux éditions Gallimard ayant reçu la même année le tout premier prix Femina des lycéens et le prix France télévisions en 2017.",
            trailer: "https://www.youtube.com/embed/4CJ5p4XisHs",
            watched: false,
        },
        {
            id: 7,
            title: "Saint Laurent",
            posterUrl:
                "https://toutelaculture.com/wp-content/uploads/2022/01/ulliel-750x1000.jpg",
            rate: 4.1,
            description:
                "Yves Saint Laurent, communément appelée YSL, est une entreprise française de luxe spécialisée dans le prêt-à-porter, la maroquinerie, les chaussures, et les accessoires de luxe.",
            watched: false,
        },
        {
            id: 8,
            title: "Ambulance",
            posterUrl:
                "https://storage.gra.cloud.ovh.net/v1/AUTH_a9d76494089446b789523aa8bdb286f4/wikercdn/img/evenement/2rxoejn55lvjv0wp/medium_0222383.jpg",
            rate: 4.1,
            description:
                "Ayant besoin d'argent pour couvrir les frais médicaux de sa femme, un vétéran fait équipe avec son frère adoptif pour voler 32 millions de dollars à une banque de Los Angeles. Cependant, lorsque leur vol tourne mal, ceux-ci détournent une ambulance qui transporte un policier gravement blessé et une ambulancière.",
            watched: false,
        },
        {
            id: 9,
            title: "Le Lorax",
            posterUrl:
                "https://www.cinecreatis.net/wp-content/uploads/2018/09/5492ea2f3489a-750x1000.jpg",
            rate: 4.1,
            description:
                "Dans le monde du Lorax, les poissons chantent, les ours jouent des tours et la nature se porte comme un charme. L'univers de Thneedville où vit Ted est tout autre : très propre, mais artificiel. Fleurs, arbres, buissons sont faux et l'oxygène y est distribué pour compenser l'absence de photosynthèse. Pour conquérir le cur de la belle qu'il convoite, Ted va se risquer hors les murs de sa cité aseptisée et rencontrer le Lorax.",
            trailer: "https://www.youtube.com/embed/4CJ5p4XisHs",
            watched: false,
        },
    ],
}

const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADDMOVIE:
            return { ...state, movies: [...state.movies, action.payload] };
        case WATCHED:
            return {
                ...state,
                movies: state.movies.map((el) =>
                    el.id == action.payload ? { ...el, watched: !el.watched } : el
                ),
            };

        case EDITMOVIE:
            return {
                ...state,
                movies: state.movies.map((el) =>
                    el.id == action.id ? { ...el, ...action.editeddata } : el
                ),
            };
        default:
            return state;
    }
    
};


export default Reducer;