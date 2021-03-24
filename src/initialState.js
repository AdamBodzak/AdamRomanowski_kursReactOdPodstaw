const initialState = {
    twitter: [
        {
            title: 'Ryan Florence',
            link: 'https://twitter.com/ryanflorence',
            image: 'https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg',
            description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        },
        {
            title: 'Michael Jackson',
            link: 'https://twitter.com/mjackson',
            image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
            description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        },
        {
            title: 'Kent C. Dodds',
            link: 'https://twitter.com/kentcdodds',
            image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
            description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        },
    ],
    article: [
        {
            title: 'React',
            link: 'https://pl.reactjs.org',
            description: 'React javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika.',
        },
        {
            title: 'react-router-dom',
            link: 'https://reactrouter.com/web/guides/quick-start',
            description: 'To get started with React Router in a web app, you’ll need a React web app',
        },
        {
            title: 'AppContext',
            link: 'https://reactjs.org/docs/context.html',
            description: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level',
        },
    ],
    note: [
        {
            title: 'Własna aplikacja',
            description: 'Pierwsza własna aplikacja stworzona na podstawie kursu https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw',
        },
    ],
};

export default initialState;