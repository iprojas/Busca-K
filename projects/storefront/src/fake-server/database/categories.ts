import { CategoryDef } from '../interfaces/category-def';
import { BaseCategory, BlogCategory, Category, ShopCategory } from '../../app/interfaces/category';

let lastId = 0;

function makeShopCategory(def: CategoryDef, parent: ShopCategory): ShopCategory {
    return {
        id: ++lastId,
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: CategoryDef, parent: BlogCategory): BlogCategory {
    return {
        id: ++lastId,
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends BaseCategory>(
    makeFn: (def: CategoryDef, parent: T) => T,
    defs: CategoryDef[],
    parent: T = null,
): T[] {
    const categories: T[] = [];

    defs.forEach(def => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends Category>(categories: T[]): T[] {
    let result = [];

    categories.forEach(category => result = [...result, category, ...flatTree(category.children as Category[])]);

    return result;
}

const shopCategoriesDef: CategoryDef[] = [
    {
        name: 'Dirección',
        slug: 'headlights-lighting',
        image: 'assets/images/categories/category-1.jpg',
        items: 131,
        children: [
            {name: 'Bomba de Dirección', slug: 'turn-signals'},
            {name: 'Caja de Dirección', slug: 'fog-lights'},
            {name: 'Columna de Dirección', slug: 'headlights'},
            {name: 'Volante', slug: 'switches-relays'},
           
        ],
    },
    {
        name: 'Ejes',
        slug: 'fuel-system',
        image: 'assets/images/categories/category-2.jpg',
        items: 356,
        children: [
            {name: 'Diferencial Delantero', slug: 'fuel-pumps'},
            {name: 'Diferencial Trasero', slug: 'motor-oil'},
            {name: 'Bandejas y Mazas', slug: 'gas-caps'},
            {name: 'Rueda', slug: 'fuel-injector'},
            {name: 'Semiejes', slug: 'control-motor'},
            {name: 'Suspensión', slug: 'suspension'},
        ],
    },
    {
        name: 'Exterior',
        slug: 'body-parts',
        image: 'assets/images/categories/category-3.jpg',
        items: 54,
        children: [
            {name: 'Parachoque Trasero', slug: 'bumpers'},
            {name: 'Parachoque Delantero', slug: 'hoods'},
            {name: 'Capo', slug: 'grilles'},
            {name: 'Puertas', slug: 'fog-lights'},
            {name: 'Sistema de Cierre', slug: 'door-handles'},
            {name: 'Vidrios y Ventanas', slug: 'vidrios-ventanas'},
            {name: 'Parabrisas', slug: 'parabrisas'},
            {name: 'Luces', slug: 'luces'},
            {name: 'Tapabarros', slug: 'tapabarros'},
        ],
    },
    {
        name: 'Interior',
        slug: 'interior-parts',
        image: 'assets/images/categories/category-4.jpg',
        items: 274,
        children: [
            {name: 'Asientos', slug: 'Asientos'},
            {name: 'Techo', slug: 'Techo'},
            {name: 'Viseras', slug: 'Viseras'},
            {name: 'Tablero de Instrumentos', slug: 'Tablero'},
            {name: 'Interior de Puertas', slug: 'Puertas-int'},
            {name: 'Luces', slug: 'luces'},
        ],
    },
    {
        name: 'Motor',
        slug: 'tires-wheels',
        image: 'assets/images/categories/category-5.jpg',
        items: 508,
        children: [
            {name: 'Sistema de Combustible', slug: 'wheel-covers'},
            {name: 'Sistema de Escape', slug: 'brake-kits'},
            {name: 'Bloque Motor', slug: 'tire-chains'},
            {name: 'Aspiracionde Aire', slug: 'wheel-disks'},
            {name: 'Distribucion de Aire', slug: 'tires'},
            {name: 'Admision de Aire', slug: 'sensors'},
            {name: 'Culata', slug: 'tires-wheels-accessories'},
            {name: 'Perifericos', slug: 'tires-wheels-accessories'},
            {name: 'Lubricación', slug: 'tires-wheels-accessories'},
        ],
    },
    {
        name: 'Frenos y suspension',
        slug: 'engine-drivetrain',
        image: 'assets/images/categories/category-6.jpg',
        items: 95,
        children: [
            {name: 'Freno Delanteros', slug: 'timing-belts'},
            {name: 'Freno Traseros', slug: 'spark-plugs'},
            {name: 'Sistema Electrico', slug: 'oil-pans'},
            {name: 'Suspension del Motor', slug: 'timing-belts2'},
            {name: 'Suspension Delantera', slug: 'spark-plugs2'},
            {name: 'Suspension Trasera', slug: 'oil-pans2'},
        ],
    },
    {
        name: 'Refrigeracion',
        slug: 'oils-lubricants',
        image: 'assets/images/categories/category-7.jpg',
        items: 179,
    },
    {
        name: 'Transmision',
        slug: 'tools-garage',
        image: 'assets/images/categories/category-8.jpg',
        items: 95,
        children: [
            {name: 'Arbol de Transmision', slug: 'timing-belts'},
            {name: 'Caja de Cambio', slug: 'spark-plugs'},
            {name: 'Embrague', slug: 'oil-pans'},
            {name: 'Toma Fuerza', slug: 'oil-pans'},
        ],
    },
];

const blogCategoriesDef: CategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: ShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: ShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: BlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: BlogCategory[] = flatTree(blogCategoriesTree);
