//Index signatures
enum WeekDays {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}

interface Statistics {
    views: {
        [day in WeekDays]: number; //ogni giorno della settimana è una chiave di tipo stringa e il valore è un numero
    }
    enabled: {
        [day in WeekDays]: boolean; //ogni giorno della settimana è una chiave di tipo stringa e il valore è un booleano
    }
}

const statistics: Statistics = {
    views: {
        monday: 2,
        tuesday: 3,
        wednesday: 4,
        thursday: 5,
        friday: 6,
        saturday: 7,
        sunday: 10
    },
    enabled: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    }
};

interface User {
    name: string;
    surname: string;
}

interface Users {
    [id: string]: User
    admin: User;
}

export {statistics};