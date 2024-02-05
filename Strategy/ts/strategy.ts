interface Strategy {
    login(user: string, password: string): boolean
}

class LoginContext{
    private _strategy: Strategy;

    constructor(strategy: Strategy) {
        this._strategy = strategy
    }

    setStrategy(strategy: Strategy): void {
        this._strategy = strategy
    }

    login = (user:string, password:string) : boolean => this._strategy.login(user, password) 
}

class LoginDBStrategy implements Strategy{

    login(user: string, password: string): boolean {
        console.log("No dirigimos a la base de datos")

        if(user === "admin" && password === "entra") {
            return true
        }

        return false;
    }

}

class LoginServiceStrategy implements Strategy{

    login(user: string, password: string): boolean {
        console.log("No dirigimos a un servicio de autenticacion")

        if(user === "admin" && password === "entra") {
            return true
        }

        return false;
    }

}

class LoginGoogleStrategy implements Strategy{

    login(user: string, password: string): boolean {
        console.log("No dirigimos a google")

        if(user === "admin" && password === "entra") {
            return true
        }

        return false;
    }

}

const auth = new LoginContext(new LoginDBStrategy())
auth.login("admin","entra")
auth.setStrategy(new LoginServiceStrategy())
auth.login("admin","entra")
auth.setStrategy(new LoginGoogleStrategy())
auth.login("admin","entra")