import  t from './nature.jpg';
const univ = 'GHARDAIA';
const facult = 'MI';
const h1Element = `Univ ${univ} / Faculté ${facult}`;
const footer ='© Library 2023 ©'
const logo = <img src={t} alt="" style={{width: '70px', height: '7vh',marginRight:'5px'}} />;

const colors = ['yellow', 'red', 'Lime'];
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

export { h1Element,logo ,footer,getRandomColor};