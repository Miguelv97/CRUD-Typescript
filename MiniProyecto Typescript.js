class people {
    id: number = 0;
    name: string = '';
    lastName: string = '';
    age: number = 0;
    arrayGente: Array<any> = [];

}

interface Inombre extends people {
    getAll(): void;
    getById(): void;
    getByName(): void;
    create(): void;
    update(): void;
    delate(): void;
    menu(): void;

}

class Repository implements Inombre {
    id: number = 0;
    name: string = '';
    lastName: string = '';
    age: number = 0;
    arrayGente = [
        { id: 1, name: 'Miguel', lastName: 'Vidal', age: 25 },
        { id: 2, name: 'Sara', lastName: 'Aretaga', age: 20 },
        { id: 3, name: 'Alejandro', lastName: 'Otaiza', age: 23 },
        { id: 4, name: 'Ayleen', lastName: 'Orjuela', age: 21 },
        { id: 5, name: 'Ricardo', lastName: 'Zabaleta', age: 30 }]

    getAll(): void {
        const copymyObject = this.arrayGente.map((item) => { return item });
        //alert(copymyObject)
        console.log(copymyObject)
    }
    getById(id: number): void {
        const found = this.arrayGente.find(element => element.id == id);
        console.log(found);
    }
    getByName(name: string): void {
        const found = this.arrayGente.find(element => element.name == name);
        console.log(found);
    }
    create(id: number, name: string, lastName: string, age: number): void {
        this.arrayGente.push({ id: id, name: name, lastName: lastName, age: age })
        console.log("Los Datos han sido almacenados")
        const copymyObject = this.arrayGente.map((item) => { return item });
        console.log(copymyObject)
    }
    update(id: number, name: string, lastName: string, age: number, direction: string): void {

        this.arrayGente.splice((id - 1), 1, { id: id, name: name, lastName: lastName, age: age })

        const copymyObject = this.arrayGente.map((item) => { return item });
        console.log(copymyObject)

    }
    delate(id: number): void {
        const copyArray = this.arrayGente.filter((i) => i.id != id);
        console.log(copyArray)
    }
}

/*let objRepos = new Repository();
let menu: number = 0;
objRepos.getAll();
objRepos.getById(3);
objRepos.getByName('Sara');
objRepos.update(1);
objRepos.delate(0);*/
class Menu {

    menu(): number {
        let menu = Number(window.prompt('Digita una opcion \n'
            + '1. Mostrar Todos \n'
            + '2. Mostrar por Id \n'
            + '3. Mostrar por nombre \n'
            + '4. Crear o Insertar Persona \n'
            + '5. Actualizar  Persona\n'
            + '6. Eliminar Persona \n'
            + '7. Salir'));
        return menu;
    }
}

let objReposs = new Repository()
let objMenu = new Menu()

switch (objMenu.menu()) {
    case 1:
        objReposs.getAll()
        break;
    case 2:
        let id = Number(prompt('Digita el id'))
        objReposs.getById(id)
        break;
    case 3:
        let name = prompt('Digita el Nombre')
        objReposs.getByName(name)
        break;
    case 4:
        objReposs.create(6, 'Luis', 'Escorcia', 23)
        break;
    case 5:
        objReposs.update(1, 'Miguel David', 'Vidal Guerrero', 25)
        break;
    case 6:
        objReposs.delate(1)
        break;
    case 7:
        alert('Has salido \n' + 'Vuelva pronto!')
        break;
    default:
        alert('Opcion incorrecta')
        break;

}
