import { faker } from '@faker-js/faker';

const SEX = {
    FEMALE: 'female',
    MALE: 'male',
};

export const User = {
    id: null,
    sex: SEX,
    name: '',
    email: '',
    avatar: '',
    password: '',
    birthDate: Date,
    registeredAt: Date
};

export const createRandomUsers = (count) => {
    
    let res = [];
    
    for( let i = 0; i < count; i++ ){
        res.push( createRandomUser() );
    }

    return res;
};

export const createRandomUser = () => {

    let u = User;
    faker.locale = 'hu';

    const num = faker.datatype.number({min: 0, max: 1});
    //console.log(num);
    //console.log(SEX.MALE);

    const sex = ( num === 0 ) ? SEX.FEMALE : SEX.MALE, 
        firstName = faker.name.firstName(sex),
        lastName = faker.name.lastName(sex);

    console.table(sex, lastName, firstName);

    u.id = faker.datatype.uuid();
    u.sex = sex;
    u.name = `${lastName} ${firstName}`;
    u.email = faker.internet.email(firstName, lastName, true);
    u.avatar = faker.image.avatar();
    u.password = faker.internet.password;
    u.birthDate = faker.date.birthdate();
    u.registeredAt = faker.date.past().getDate();

    return u;
}