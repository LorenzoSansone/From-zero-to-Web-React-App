  interface SimpleUser {
    name: string;
    email: string;
  }

  interface User {
    telephone: number;
  }

  const user: SimpleUser = {
    name: "Igor",
    email: "fdjf@gmail.com",

    //@ts-ignore //ignora l'errore di tipo, non consigliabile
    telephone: 1234567890
  }

  const printUserTelephone = (user: User): number => {
    return user.telephone;
  }

  console.log(printUserTelephone(user as unknown as User)); //forzatura del tipo, non consigliabile



export{printUserTelephone};  