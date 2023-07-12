// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = birthday;

//     }

//     introudece() { return `hello ${this.name}`; } //프로토타입 안에 있다.
//     // 인스턴스 객채.메소드 이렇기 쓰는것
    
//     static multipleNumbers(x,y){
//         return x * y;
//     } //독립적인 것을 이용할때 클래스이름.메소드 this같은거 사용하지 않을때 사용함.


// }

// const john = new Person('jhd', 'jj@nacv.com', '11');
// console.log(john);


class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;

    }

    introduce(){
        return `hello my name is ${this.name}`;
    }
}

class Client extends Person { //프로토타입에 있음
    constructor(name, email, phone, address){
        super(name, email)

        this.phone = phone;
        this.address = address;
    }
}
//super()키워드는 부모클래스의 요소들(변수나 메소드등)을 가져오는데 사용할 수 있다. super.method...이런식으로

const john = new Client('john', 'jhon@example.com', '010-0000-0000', 'seoul');
console.log(john.introduce());
console.log(john);