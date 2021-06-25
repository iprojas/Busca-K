import { Address } from '../../app/interfaces/address';

let lastId = 0;

export function getId(): number {
    return ++lastId;
}

export const addresses: Address[] = [
    {
        id: getId(),
        firstName: 'Cristian',
        lastName: 'Pizzarro',
        company: 'Nombre Taller',
        country: 'CL',
        address1: 'Marcoleta 380',
        address2: '',
        city: 'Santiago Centro',
        state: 'Santiago',
        postcode: '115302',
        email: 'rojas.ip@gmail.com',
        phone: '+56 9  94991536',
        default: true,
    },
    {
        id: getId(),
        firstName: 'Ignacio',
        lastName: 'Rojas',
        company: 'Taller B',
        country: 'LAND',
        address1: 'Orbita Solar, 43.3241-85.239',
        address2: '',
        city: 'MarsGrad',
        state: 'MarsGrad',
        postcode: '4b4f53',
        email: 'jupiter@example.com',
        phone: 'ZX 971 972-57-26',
        default: false,
    },
];
