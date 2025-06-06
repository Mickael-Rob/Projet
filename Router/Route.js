export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Reserver aux utilisateurs deconnéctés
["client"] -> Reserver aux utilisateurs avec le rôle client
["admin"] -> Reserver aux utilisateurs avec le rôle admin
["admin", "client"] -> Reserver aux utilisateurs avec le rôle client OU admin
*/