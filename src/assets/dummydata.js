export default DATA = [
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'First Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Second Item',
    },
    {
      id: Math.floor(Math.random()*100000000).toString(),
      name: 'Third Item',
    },
  ];


const RandomUsers = async () => {
  const response = await  fetch('https://randomuser.me/api/?results=20')
    const data = await response.json();
    return data

}

export {RandomUsers}