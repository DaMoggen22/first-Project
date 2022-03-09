class Student
{
    #name='Piotr';
    #surname='Bąk';
    #pesel='23456564752';
    constructor(name,surname,pesel)
    {
        this.#name=name;
        this.#surname=surname;
        this.#pesel=pesel;
    }
    getName = function() //publiczny getter
    {
        return this.#name;
    }
    getSurname()
    {
        return this.#surname;
    }
    #getPesel() //prywatny getter
    {
        return this.#pesel;
    }
    display()
    {
        document.write(this.#name+'<BR>'+this.#surname+'<BR>'+this.#pesel+'<BR>');
    }
    getDoB() //obliczanie dnia urodzenia
    {
        let str = this.#getPesel().slice(0,6);
        let str5 =+str.slice(2,4);
        let str6=str.slice(0,2);
        let str1=22;
        let str4=34;
        if (str5 > 20) {
            str1 = 'rok: ' + '20' + str6 + '<BR>';
            str4=str.slice(2,4)-20+'<BR>';
        }
        else {
            str1 = 'rok: ' + '19' + str6 + '<BR>';
            str4 = str.slice(2, 4)  + '<BR>';
        }

        let str2= 'miesiąc: ' +str4;
        let str3='dzień: '+str.slice(4,6)+'<BR>';
        return str1+str2+str3;

    }

}

UserName = prompt("Podaj imię: ")
UserSurname = prompt("podaj nazwisko: ")
UserPesel = prompt("podaj pesel: ")

let Student1 = new Student(UserName,UserSurname,UserPesel)

document.write('Pesel: '+UserPesel+'<BR><BR>')
document.write(Student1.getDoB())








