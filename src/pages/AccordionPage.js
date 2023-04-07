import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'ljh1',
      label: 'Can you use React on a Project ?',
      content: `You can use React as a technology in your Project.
            You can use React as a technology in your Project.
            You can use React as a technology in your Project`,
    },
    {
      id: 'ljh2',
      label: 'Can you use CSS on a Project ?',
      content: `You can use CSS as a technology in your Project.
            You can use CSS as a technology in your Project.
            You can use CSS as a technology in your Project`,
    },
    {
      id: 'ljh3',
      label: 'Can you use NodeJs on a Project ?',
      content: `You can use NodeJs as a technology in your Project.
            You can use NodeJs as a technology in your Project.
            You can use NodeJs as a technology in your Project`,
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
