import auth from 'auth0-js'
import history from './history'

export default class Auth {
    auth0 = new auth.WebAuth({
        domain: 'dev-7z2mbbh3.us.auth0.com',
        clientID: 'zsB6LA2QXlcHYIKxVYR3LABZxelHD4Hb',
        redirectUri: 'http://localhost:3000/',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    login = () => {
    this.auth0.authorize()
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult) {
                localStorage.setItem('access_token', authResult.access_token)
                localStorage.setItem('id_token', authResult.id_token)

                let expiresAt = JSON.stringify((authResult.expiresIn + 1000 + new Date().getTime()))
                localStorage.setItem('expiresAt', expiresAt)
                setTimeout(() => {history.replace('/authCheck')}, 200);
            } else {
                console.log(err)
            }
        })
    }

    logout = () => {
        localStorage.removeItem('acces_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        return new Date().getTime() <expiresAt
    }
}
