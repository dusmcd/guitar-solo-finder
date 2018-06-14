const guitarists = [
  {
    id: 1,
    firstName: 'Dave',
    lastName: 'Mustaine',
    bandId: 1,
    guitar: 'Jackson'
  },
  {
    id: 2,
    firstName: 'Marty',
    lastName: 'Friedman',
    bandId: 1,
    guitar: 'Jackson'
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Gilmore',
    bandId: 2,
    guitar: 'Fender Stratocaster'
  },
  {
    id: 4,
    firstName: 'Jimmy',
    lastName: 'Page',
    bandId: 3,
    guitar: 'Gibson Les Paul'
  },
  {
    id: 5,
    firstName: 'Jimi',
    lastName: 'Hendrix',
    bandId: 4,
    guitar: 'Fender Stratocaster'
  },
  {
    id: 6,
    firstName: 'Wes',
    lastName: 'Montgomery',
    bandId: 5,
    guitar: 'Gibson L5'
  },
  {
    id: 7,
    firstName: 'Michael',
    lastName: 'Schenker',
    bandId: 6,
    guitar: 'Dean Flying V'
  },
  {id: 8, firstName: 'Kirk', lastName: 'Hammett', bandId: 7, guitar: 'ESP'},
  {
    id: 9,
    firstName: 'Stevie Ray',
    lastName: 'Vaughan',
    bandId: 8,
    guitar: 'Fender Stratocaster'
  },
  {id: 10, firstName: 'Tony', lastName: 'Rice', bandId: 9, guitar: 'Santa Cruz'}
]

const bands = [
  {id: 1, name: 'Megadeth'},
  {id: 2, name: 'Pink Floyd'},
  {id: 3, name: 'Led Zeppelin'},
  {id: 4, name: 'The Jimi Hendrix Experience'},
  {id: 5, name: 'Wes Montgomery'},
  {id: 6, name: 'UFO'},
  {id: 7, name: 'Metallica'},
  {id: 8, name: 'Stevie Ray Vaughan and Double Trouble'},
  {id: 9, name: 'Tony Rice'}
]

const songs = [
  {
    name: 'Five Magics',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=LnYTRJdMzKI',
    guitaristId: 1
  },
  {
    name: 'Hangar 18',
    difficulty: 'hard',
    speed: 'medium',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=rigELsRq_64',
    guitaristId: 2
  },
  {
    name: 'Tornado of Souls',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=U2GaYKOECwQ',
    guitaristId: 2
  },
  {
    name: 'Time',
    difficulty: 'intermediate',
    speed: 'slow',
    style: 'Melodic',
    videoUrl: 'https://www.youtube.com/watch?v=F_VjVqe3KJ0',
    guitaristId: 3
  },
  {
    name: 'Shine on you Crazy Diamond',
    difficulty: 'easy',
    speed: 'slow',
    style: 'Bluesy',
    videoUrl: 'https://www.youtube.com/watch?v=cWGE9Gi0bB0',
    guitaristId: 3
  },
  {
    name: "Since I've Been Loving You",
    difficulty: 'intermediate',
    speed: 'medium',
    style: 'Bluesy',
    videoUrl: 'https://www.youtube.com/watch?v=oBvxhp4JAe4',
    guitaristId: 4
  },
  {
    name: 'Heartbreaker',
    difficulty: 'hard',
    speed: 'medium',
    style: 'Bluesy',
    videoUrl: 'https://www.youtube.com/watch?v=KFPd6fZaKAs',
    guitaristId: 4
  },
  {
    name: 'Voodoo Child',
    difficulty: 'intermediate',
    speed: 'medium',
    style: 'Bluesy',
    videoUrl: 'https://www.youtube.com/watch?v=xPx-cL2t9TE',
    guitaristId: 5
  },
  {
    name: 'No Blues',
    difficulty: 'hard',
    speed: 'medium',
    style: 'Jazz',
    videoUrl: 'https://www.youtube.com/watch?v=nfjdwUf5dOo',
    guitaristId: 6
  },
  {
    name: 'Four on Six',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Jazz',
    videoUrl: 'https://www.youtube.com/watch?v=r9D7zdJFLp0',
    guitaristId: 6
  },
  {
    name: 'Rock Bottom',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=ypYkkDwJBxw',
    guitaristId: 7
  },
  {
    name: 'Master of Puppets',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=ujwiWjJLwBg',
    guitaristId: 8
  },
  {
    name: 'Creeping Death',
    difficulty: 'intermediate',
    speed: 'medium',
    style: 'Heavy Metal',
    videoUrl: 'https://www.youtube.com/watch?v=iYh9Lyvr0P8',
    guitaristId: 8
  },
  {
    name: 'Rude Mood',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Blues',
    videoUrl: 'https://www.youtube.com/watch?v=KCHVpDwMS2k',
    guitaristId: 9
  },
  {
    name: 'Testify',
    difficulty: 'hard',
    speed: 'medium',
    style: 'Blues',
    videoUrl: 'https://www.youtube.com/watch?v=Wtij9_fLhKA',
    guitaristId: 9
  },
  {
    name: 'Arkansas Traveler',
    difficulty: 'hard',
    speed: 'fast',
    style: 'Bluegrass',
    videoUrl: 'https://www.youtube.com/watch?v=HgyyD_97YCE',
    guitaristId: 10
  }
]

module.exports = {guitarists, songs, bands}
