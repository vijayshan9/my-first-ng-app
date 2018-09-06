interface Profile 
{
    name: string, 
    id: number
};

let getId = function(profile1: Profile)
{
    return profile1.id;
};

// tslint:disable-next-line:no-console;
console.log(getId(
    {
    name: 'techsith', 
    id: 1 }));


