import Image from 'next/image';

export const PeopleGraph = () => (
  // svg from file:
  // public/assets/peopleGraph.svg
  <Image
    src="/assets/peopleGraph.svg"
    alt="people graph"
    fill
    className="object-cover"
  />
);
