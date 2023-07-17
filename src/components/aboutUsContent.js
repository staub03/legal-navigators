
const people = [
    {
      name: 'Julia Valente',
      role: 'Digital Business Modelling Student',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Adriano Neto',
        role: 'Management & Technology Student',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Marco Psotta',
        role: 'Information Systems Student',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Nathan Bonetti',
        role: 'Management & Technology Student',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leonardo Staub',
        role: 'Information Systems Student',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
  ]

export default function AboutUs() {
    return (
<div className="relative mx-auto grid max-w-2xl py-32 sm:py-48 lg:py-56 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
<div className="max-w-2xl">
  <h2 className="text-3xl font-bold tracking-tight text-legalnavverydarkpurple sm:text-4xl">Meet our Team</h2>
  <p className="mt-6 text-lg leading-8 text-legalnavverydarkpurple">
  We are an interdisciplinary team of students from diverse disciplines. Within the context of the Tech Challenge at the Technical University of Munich we created Legal Navigators. We hope that you will have as much fun using it as we had designing and programming it.
  </p>
</div>
<ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
  {people.map((person) => (
    <li key={person.name}>
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
        <div>
          <h3 className="text-base text-legalnavverydarkpurple font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
          <p className="text-sm text-legalnavpurple font-semibold leading-6 text-indigo-600">{person.role}</p>
        </div>
      </div>
    </li>
  ))}
</ul>
</div>
    )
  }