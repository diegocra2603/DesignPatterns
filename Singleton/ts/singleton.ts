class SingletonTS {
    private static _instance: SingletonTS;
    public random:number;

    private constructor(){
        this.random = Math.random();
    }

    public static GetInstance():SingletonTS  {

        if(!this._instance){
            this._instance = new SingletonTS();
        }

        return this._instance;
    };
}

const singleton = SingletonTS.GetInstance();
const singleton2 = SingletonTS.GetInstance();

console.log(singleton.random);
console.log(singleton2.random);

singleton.random = 7;

console.log(singleton.random);
console.log(singleton2.random);