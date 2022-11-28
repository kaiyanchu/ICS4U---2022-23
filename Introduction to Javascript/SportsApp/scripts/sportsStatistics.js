let teams = [];
let games = [];
if(localStorage.getItem('games') == null){
    games = [
        {
            'homeTeam': 6,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-08-05"
        },
        {
            'homeTeam': 8,
            'awayTeam': 11,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 0,
            'awayTeam': 2,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 14,
            'awayTeam': 15,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 12,
            'awayTeam': 16,
            'homeScore': 4,
            'awayScore': 1,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 9,
            'awayTeam': 19,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 7,
            'awayTeam': 5,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-08-06"
        },
        {
            'homeTeam': 10,
            'awayTeam': 3,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-08-07"
        },
        {
            'homeTeam': 13,
            'awayTeam': 4,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-08-07"
        },
        {
            'homeTeam': 18,
            'awayTeam': 12,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-08-07"
        },
        {
            'homeTeam': 2,
            'awayTeam': 7,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 16,
            'awayTeam': 9,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 1,
            'awayTeam': 10,
            'homeScore': 2,
            'awayScore': 4,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 4,
            'awayTeam': 14,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-08-13"
        },
        {
            'homeTeam':12,
            'awayTeam': 0,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 19,
            'awayTeam': 8,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 3,
            'awayTeam': 13,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 15,
            'awayTeam': 18,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-08-14"
        },
        {
            'homeTeam': 5,
            'awayTeam': 17,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-08-14"
        },
        {
            'homeTeam': 11,
            'awayTeam': 6,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-13"
        },
        {
            'homeTeam': 17,
            'awayTeam': 19,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 7,
            'awayTeam': 15,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 10,
            'awayTeam': 16,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 8,
            'awayTeam': 3,
            'homeScore': 3,
            'awayScore': 2,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 6,
            'awayTeam': 2,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 0,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 3,
            'date': "2022-08-20"
        },
        {
            'homeTeam': 18,
            'awayTeam': 4,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-08-21"
        },
        {
            'homeTeam': 9,
            'awayTeam': 5,
            'homeScore': 3,
            'awayScore': 0,
            'date': "2022-08-21"
        },
        {
            'homeTeam': 14,
            'awayTeam': 12,
            'homeScore': 3,
            'awayScore': 3,
            'date': "2022-08-21"
        },
        {
            'homeTeam': 13,
            'awayTeam': 11,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-22"
        },
        {
            'homeTeam': 16,
            'awayTeam': 13,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 5,
            'awayTeam': 10,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 4,
            'awayTeam': 9,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 12,
            'awayTeam': 6,
            'homeScore': 4,
            'awayScore': 2,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 11,
            'awayTeam': 0,
            'homeScore': 9,
            'awayScore': 0,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 3,
            'awayTeam': 7,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 1,
            'awayTeam': 8,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-27"
        },
        {
            'homeTeam': 19,
            'awayTeam': 14,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-28"
        },
        {
            'homeTeam': 2,
            'awayTeam': 18,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-08-28"
        },
        {
            'homeTeam': 15,
            'awayTeam': 12,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-08-28"
        },
        {
            'homeTeam': 6,
            'awayTeam': 3,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-30"
        },
        {
            'homeTeam': 8,
            'awayTeam': 4,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-30"
        },
        {
            'homeTeam': 16,
            'awayTeam': 5,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-30"
        },
        {
            'homeTeam': 9,
            'awayTeam': 7,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-30"
        },
        {
            'homeTeam': 12,
            'awayTeam': 15,
            'homeScore': 6,
            'awayScore': 0,
            'date': "2022-08-31"
        },
        {
            'homeTeam': 1,
            'awayTeam': 2,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-31"
        },
        {
            'homeTeam': 0,
            'awayTeam': 19,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-08-31"
        },
        {
            'homeTeam': 18,
            'awayTeam': 12,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-08-31"
        },
        {
            'homeTeam': 11,
            'awayTeam': 14,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-08-31"
        },
        {
            'homeTeam': 10,
            'awayTeam': 13,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-09-01"
        },
        {
            'homeTeam': 7,
            'awayTeam': 11,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 12,
            'awayTeam': 8,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 15,
            'awayTeam': 0,
            'homeScore': 2,
            'awayScore': 3,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 5,
            'awayTeam': 18,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 3,
            'awayTeam': 9,
            'homeScore': 5,
            'awayScore': 2,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 19,
            'awayTeam': 16,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 14,
            'awayTeam': 6,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-09-03"
        },
        {
            'homeTeam': 2,
            'awayTeam': 12,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-09-04"
        },
        {
            'homeTeam': 2,
            'awayTeam': 16,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-09-16"
        },
        {
            'homeTeam': 15,
            'awayTeam': 8,
            'homeScore': 2,
            'awayScore': 3,
            'date': "2022-09-16"
        },
        {
            'homeTeam': 19,
            'awayTeam': 12,
            'homeScore': 0,
            'awayScore': 3,
            'date': "2022-09-17"
        },
        {
            'homeTeam': 14,
            'awayTeam': 0,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-09-17"
        },
        {
            'homeTeam': 12,
            'awayTeam': 10,
            'homeScore': 6,
            'awayScore': 2,
            'date': "2022-09-17"
        },
        {
            'homeTeam': 3,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 3,
            'date': "2022-09-18"
        },
        {
            'homeTeam': 7,
            'awayTeam': 18,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-09-18"
        },
        {
            'homeTeam': 2,
            'awayTeam': 17,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 11,
            'awayTeam': 4,
            'homeScore': 3,
            'awayScore': 3,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 8,
            'awayTeam': 14,
            'homeScore': 1,
            'awayScore': 4,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 16,
            'awayTeam': 7,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 6,
            'awayTeam': 5,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 0,
            'awayTeam': 3,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 18,
            'awayTeam': 19,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-01"
        },
        {
            'homeTeam': 12,
            'awayTeam': 13,
            'homeScore': 6,
            'awayScore': 3,
            'date': "2022-10-02"
        },
        {
            'homeTeam': 9,
            'awayTeam': 2,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-02"
        },
        {
            'homeTeam': 10,
            'awayTeam': 15,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-10-03"
        },
        {
            'homeTeam': 14,
            'awayTeam': 3,
            'homeScore': 5,
            'awayScore': 1,
            'date': "2022-10-08"
        },
        {
            'homeTeam': 0,
            'awayTeam': 10,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-10-08"
        },
        {
            'homeTeam': 12,
            'awayTeam': 16,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-10-08"
        },
        {
            'homeTeam': 5,
            'awayTeam': 19,
            'homeScore': 3,
            'awayScore': 0,
            'date': "2022-10-08"
        },
        {
            'homeTeam': 4,
            'awayTeam': 17,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-10-08"
        },
        {
            'homeTeam': 18,
            'awayTeam': 8,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-10-09"
        },
        {
            'homeTeam': 6,
            'awayTeam': 9,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-10-09"
        },
        {
            'homeTeam': 1,
            'awayTeam': 11,
            'homeScore': 3,
            'awayScore': 2,
            'date': "2022-10-09"
        },
        {
            'homeTeam': 7,
            'awayTeam': 13,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-10-09"
        },        {
            'homeTeam': 15,
            'awayTeam': 2,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-10-10"
        },
        {
            'homeTeam': 3,
            'awayTeam': 4,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-14"
        },
        {
            'homeTeam': 10,
            'awayTeam': 6,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-15"
        },
        {
            'homeTeam': 19,
            'awayTeam': 15,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-15"
        },
        {
            'homeTeam': 8,
            'awayTeam': 0,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-10-15"
        },
        {
            'homeTeam': 12,
            'awayTeam': 7,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-15"
        },
        {
            'homeTeam': 16,
            'awayTeam': 18,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-10-16"
        },
        {
            'homeTeam': 13,
            'awayTeam': 14,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-16"
        },
        {
            'homeTeam': 9,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-10-16"
        },
        {
            'homeTeam': 2,
            'awayTeam': 5,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-10-16"
        },
        {
            'homeTeam': 11,
            'awayTeam': 12,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-16"
        },
        {
            'homeTeam': 4,
            'awayTeam': 15,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-18"
        },
        {
            'homeTeam': 6,
            'awayTeam': 19,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-10-18"
        },
        {
            'homeTeam': 0,
            'awayTeam': 16,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-10-19"
        },
        {
            'homeTeam': 11,
            'awayTeam': 18,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-19"
        },
        {
            'homeTeam': 3,
            'awayTeam': 5,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-19"
        },
        {
            'homeTeam': 14,
            'awayTeam': 7,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-19"
        },
        {
            'homeTeam': 13,
            'awayTeam': 17,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-19"
        },
        {
            'homeTeam': 8,
            'awayTeam': 2,
            'homeScore': 3,
            'awayScore': 0,
            'date': "2022-10-20"
        },
        {
            'homeTeam': 10,
            'awayTeam': 9,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-20"
        },
        {
            'homeTeam': 15,
            'awayTeam': 11,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-22"
        },
        {
            'homeTeam': 7,
            'awayTeam': 6,
            'homeScore': 3,
            'awayScore': 0,
            'date': "2022-10-22"
        },
        {
            'homeTeam': 12,
            'awayTeam': 4,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-10-22"
        },
        {
            'homeTeam': 5,
            'awayTeam': 13,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-10-22"
        },
        {
            'homeTeam': 19,
            'awayTeam': 10,
            'homeScore': 0,
            'awayScore': 4,
            'date': "2022-10-23"
        },
        {
            'homeTeam': 2,
            'awayTeam': 3,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-10-23"
        },
        {
            'homeTeam': 16,
            'awayTeam': 1,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-10-23"
        },
        {
            'homeTeam': 9,
            'awayTeam': 8,
            'homeScore': 2,
            'awayScore': 3,
            'date': "2022-10-23"
        },
        {
            'homeTeam': 17,
            'awayTeam': 14,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-10-23"
        },
        {
            'homeTeam': 18,
            'awayTeam': 0,
            'homeScore': 2,
            'awayScore': 0,
            'date': "2022-10-24"
        },
        {
            'homeTeam': 10,
            'awayTeam': 12,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 14,
            'awayTeam': 2,
            'homeScore': 4,
            'awayScore': 0,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 0,
            'awayTeam': 17,
            'homeScore': 2,
            'awayScore': 3,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 4,
            'awayTeam': 5,
            'homeScore': 4,
            'awayScore': 1,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 6,
            'awayTeam': 16,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 3,
            'awayTeam': 19,
            'homeScore': 1,
            'awayScore': 1,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 8,
            'awayTeam': 7,
            'homeScore': 0,
            'awayScore': 0,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 11,
            'awayTeam': 9,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-10-29"
        },
        {
            'homeTeam': 1,
            'awayTeam': 15,
            'homeScore': 5,
            'awayScore': 0,
            'date': "2022-10-30"
        },
        {
            'homeTeam': 13,
            'awayTeam': 18,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-10-30"
        },
        {
            'homeTeam': 15,
            'awayTeam': 3,
            'homeScore': 2,
            'awayScore': 2,
            'date': "2022-11-05"
        },
        {
            'homeTeam': 19,
            'awayTeam': 4,
            'homeScore': 2,
            'awayScore': 3,
            'date': "2022-11-05"
        },
        {
            'homeTeam': 12,
            'awayTeam': 8,
            'homeScore': 2,
            'awayScore': 1,
            'date': "2022-11-05"
        },
        {
            'homeTeam': 9,
            'awayTeam': 0,
            'homeScore': 4,
            'awayScore': 3,
            'date': "2022-11-05"
        },
        {
            'homeTeam': 7,
            'awayTeam': 10,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-11-05"
        },
        {
            'homeTeam': 5,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 1,
            'date': "2022-11-06"
        },
        {
            'homeTeam': 2,
            'awayTeam': 13,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-11-06"
        },
        {
            'homeTeam': 16,
            'awayTeam': 14,
            'homeScore': 1,
            'awayScore': 4,
            'date': "2022-11-06"
        },
        {
            'homeTeam': 18,
            'awayTeam': 6,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-11-06"
        },
        {
            'homeTeam': 17,
            'awayTeam': 11,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-11-06"
        },
        {
            'homeTeam': 12,
            'awayTeam': 3,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 11,
            'awayTeam': 16,
            'homeScore': 3,
            'awayScore': 1,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 0,
            'awayTeam': 7,
            'homeScore': 3,
            'awayScore': 0,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 18,
            'awayTeam': 10,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 17,
            'awayTeam': 9,
            'homeScore': 4,
            'awayScore': 3,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 15,
            'awayTeam': 6,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 14,
            'awayTeam': 5,
            'homeScore': 1,
            'awayScore': 0,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 19,
            'awayTeam': 1,
            'homeScore': 0,
            'awayScore': 2,
            'date': "2022-11-12"
        },
        {
            'homeTeam': 4,
            'awayTeam': 2,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-11-13"
        },
        {
            'homeTeam': 8,
            'awayTeam': 13,
            'homeScore': 1,
            'awayScore': 2,
            'date': "2022-11-13"
        },

        

    ];
    localStorage.setItem('games', JSON.stringify(games));
}else{
    games = JSON.parse(localStorage.getItem('games'));
}




if(localStorage.getItem('teams') == null ){
    let teamData;
    let team = {};
        team['Name'] = 'AFC Bournemouth';
        team['id'] = 0;
        let teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        let wins = 0;
        let losses = 0;
        let draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/AFC Bournemouth.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Arsenal';
        team['id'] = 1;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Arsenal.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Aston Villa';
        team['id'] = 2;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Aston Villa.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Brentford';
        team['id'] = 3;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Brentford.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Brighton & Hove Albion';
        team['id'] = 4;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Brighton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Chelsea';
        team['id'] = 5;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Chelsea.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Crystal Palace';
        team['id'] = 6;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Crystal Palace.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Everton';
        team['id'] = 7;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Everton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Fulham';
        team['id'] = 8;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Fulham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Leeds';
        team['id'] = 9;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Leeds.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Leicester';
        team['id'] = 10;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Leicester.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Liverpool';
        team['id'] = 11;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Liverpool.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Manchester City';
        team['id'] = 12;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Manchester City.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Manchester United';
        team['id'] = 13;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Manchester United.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Newcastle United';
        team['id'] = 14;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Newcastle.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Nottingham Forest';
        team['id'] = 15;
        team['W'] = 0;
        team['L'] = 0;
        team['D'] = 0;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        team['img'] = "../images/Nottingham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Southampton';
        team['id'] = 16;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Southampton.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Tottenham Hotspur';
        team['id'] = 17;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Tottenham Hotspur.png"
        teams.push(team);
    team = {};
        team['Name'] = 'West Ham United';
        team['id'] = 18;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/West Ham.png"
        teams.push(team);
    team = {};
        team['Name'] = 'Wolverhampton Wanderers';
        team['id'] = 19;
        teamGame  = games.filter((game) => (game.homeTeam === team.id || game.awayTeam === team.id));
        team['games'] = teamGame; 
        wins = 0;
        losses = 0;
        draws = 0;
        teamGame.forEach((game) => {
            if(game.homeTeam === team.id){
                if(game.homeScore > game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore < game.awayTeam){
                    losses++;
                }
            }else{
                if(game.homeScore < game.awayScore){
                    wins++;
                } else if(game.homeScore === game.awayScore){
                    draws++;
                } else if(game.homeScore > game.awayTeam){
                    losses++;
                } 
            }
        });
        team['W'] = wins;
        team['L'] = losses;
        team['D'] = draws;
        team['img'] = "../images/Wolverhampton Wanderers.png"
        teams.push(team);
    console.log(teams);
    localStorage.setItem('teams', JSON.stringify(teams));
}else{
    teams = JSON.parse(localStorage['teams']);
}





createTable(teams);

 function createTable(teams){
     let tableBody = document.querySelector('#standings tbody');
     tableBody.replaceChildren();    
     teams.forEach((team) => {
         const row = document.createElement('tr');
         let td = document.createElement('td');
         const img = document.createElement("img");
         img.classList.add('down');
         let teamName = document.createElement("span");
         const link = document.createElement('a');
         link.href = "../root/teams.html?id=" + team.id;
         link.textContent = team.Name;
         //teamName.textContent = team.Name;
         img.src = team.img;
         img.classList.add('team-logo')
         td.appendChild(img);
         td.appendChild(link);
         row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.W;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.L;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = team.D;
        row.appendChild(td);

        tableBody.appendChild(row);
    });
}

let isAtoZ;
let isMostWins;
let isMostLosses;
let isMostD;

    function sort(field){
        if (field === 'Name'){
            if(!isAtoZ){
                isAtoZ = true;
                teams = teams.sort((teamA, teamB)=>{
                    return(teamA.Name < teamB.Name ? -1 : 1)
                })
            }else{
                teams = teams.sort((teamA, teamB)=>{
                    isAtoZ = false;
                    return(teamA.Name > teamB.Name ? -1 : 1)
                })
            }


        }else if(field ==='D'){
            if(!isMostD){
                isMostD = true;
                teams = teams.sort((teamA, teamB)=>
                    (teamB.D - teamA.D)
                )
            }else{
                isMostD = false;
                teams = teams.sort((teamA, teamB)=>
                    (teamA.D - teamB.D)
                )
            }

        }else if(field === 'Wins'){
            if(!isMostWins){
                isMostWins = true;
                teams = teams.sort((teamA, teamB) =>
                (teamB.W - teamA.W))
            } else{
                isMostWins = false;
                teams = teams.sort((teamA, teamB) =>
                (teamA.W - teamB.W))
            }
        }else if(field === 'Losses'){
            if(!isMostLosses){
                isMostLosses = true;
                teams = teams.sort((teamA, teamB) =>
                     (teamB.L - teamA.L)
                )
            }else{
                isMostLosses = false;
                teams = teams.sort((teamA, teamB) =>
                     (teamA.L - teamB.L)
                )
            }

        }
        createTable(teams);
     }


     const openBurger = () => {
        let icon = document.getElementById('burgerButton');
        //let dropMenu = document.getElementById('teamList');
        icon.classList.toggle('is-active');
       // dropMenu.classList.toggle('is-active');
       let normalNav = document.getElementById('navbarBasicExample');
       normalNav.classList.toggle('is-active');
      };

