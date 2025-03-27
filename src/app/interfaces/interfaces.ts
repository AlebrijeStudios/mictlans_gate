export interface datosper{ //Interfaz de los personajes: Principal y enemigos
    id:string;
    data:personajes;
}
export interface personajes{    
    nombre:string;
    imagen:string;
    salud:number;
    armas:string;
    descripcion:string;
    rol:string;
    dano:number;
}

export interface datositem{ //Interfaz de los items
    id:string;
    data:item;
}
export interface item{    
    nombre:string;
    funcionalidad:string;
    imagen:string;
    descripcion:string;
}

export interface datosescene{ //Interfaz de los escenarios
    id:string;
    data:escenarios;
}
export interface escenarios{    
    nombre:string;
    funcionalidad:string;
    imagen:string;
    descripcion:string;
}

export interface datosmeca{ //Interfaz de las mecanicas del videojuego
    id:string;
    data:mecanicas;
}
export interface mecanicas{    
    Controles:string;
    items:string;
    Historia:string;
}