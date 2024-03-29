interface IObserver<T> {
    refresh(value: T): void;
}

interface ISubject<T> {
    observers: IObserver<T>[];

    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class SubjectTS<T> implements ISubject<T> {

    observers: IObserver<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(e => {
            e.refresh(value);
        });
    }

}

class ObserverTS<T> implements IObserver<T>{
    private fn: (value: T) => void;

    constructor(fn: (value : T) => void){
        this.fn = fn;
    }
    refresh(value : T):void {
        this.fn(value);
    }
}

const subject = new SubjectTS<number>();
const obs1 = new ObserverTS<number>((n) => {
    console.log(`Hello ${n}`)
})
const obs2 = new ObserverTS<number>((n) => {
    console.log(`Hi ${n}`)
})

subject.subscribe(obs1)
subject.subscribe(obs2)
subject.notify(1.2)
subject.notify(30)

const subjectString = new SubjectTS<string>();
const obs1String = new ObserverTS<string>((s) => {
console.log(`${s.toUpperCase()}`)
})
const obs2String = new ObserverTS<string>((s) => {
    console.log(`${s.toLocaleLowerCase()}`)
    })

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Diego")
subjectString.notify("Cruz")
