import bcrypt from "bcryptjs";


const users =[
    // {
    //     name: 'Admin User',
    //     email: 'admin@email.com',
    //     password: bcrypt.hashSync('123456', 10),
    //     isAdmin: true
    // },
    // {
    //     name: 'Saeed Barcha',
    //     email: 'saeedbarcha@email.com',
    //     password: bcrypt.hashSync('123456', 10),
    //     isAdmin: true
    // },
    // {
    //     name: 'normal user',
    //     email: 'normaluser@email.com',
    //     password: bcrypt.hashSync('123456', 10),
    //     isAdmin: false
    // },
    // {
    //     name: 'Imran Khan',
    //     email: 'imrankhan@email.com',
    //     password: bcrypt.hashSync('123456', 10),
    //     isAdmin: false    },
    {
        name: 'Admin User',
        image:'/images/airpods.jpg',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 3149884287,
        dateOfBirth:'2023-07-20T00:00:00.000+00:00',
        gender:'Male',
        address:'Rahimabad',
        isAdmin:true,
    },
    {
        name: 'saeed',
        image:'/images/airpods.jpg',
        email:'saeed@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 3149884287,
        dateOfBirth:'2023-07-20T00:00:00.000+00:00',
        gender:'Male',
        address:'Nagar',
        isAdmin:true,
    },
    {
        name: 'Zuhaib',
        image:'/images/airpods.jpg',
        email:'Zuhaib@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 3149884287,
        dateOfBirth:'2023-07-20T00:00:00.000+00:00',
        gender:'Male',
        address:'UK',
        isAdmin:false,
    },
    {
        name: 'Ali',
        image:'/images/airpods.jpg',
        email:'ali@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 3149884287,
        dateOfBirth:'2023-07-20T00:00:00.000+00:00',
        gender:'Male',
        address:'Hunza',
        isAdmin:false,
    },
    {
        name: 'karim',
        image:'/images/airpods.jpg',
        email:'karim@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 3149884287,
        dateOfBirth:'2023-07-20T00:00:00.000+00:00',
        gender:'Male',
        address:'Gilgit',
        isAdmin:false,
    },
]

export default users;