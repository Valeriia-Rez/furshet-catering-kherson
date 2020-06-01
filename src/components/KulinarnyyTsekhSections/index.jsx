import React from 'react';

const KulinarnyyTsekhSections = (props) => {
  let sectionComponent = null;
  switch (props.match.params.sectionName) {
    case 'polufabrikaty-ruchnoi-lepki':
      sectionComponent = <div>Polufabrikaty</div>;
      break;
    case 'blinchik-sdelai-sam':
      sectionComponent = <div>blinchik sdelaì sam</div>;
      break;
    case 'ratsion-na-ves-den':
      sectionComponent = <div>ratsion-na-ves-den</div>;
      break;
    case 'vypechka':
      sectionComponent = <div>vypechka</div>;
      break;
    case 'biznes-lunch':
      sectionComponent = <div>biznes lanch</div>;
      break;
    case 'vegetarianskoye-menu':
      sectionComponent = <div>vegetarianskoye menu</div>;
      break;
    default:
      sectionComponent = <div>Not found page</div>;
  }
  return <div>{sectionComponent}</div>;
};

export default KulinarnyyTsekhSections;
