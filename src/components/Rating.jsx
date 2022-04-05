import { StarIcon } from '@heroicons/react/solid'


export function Rating(value) {
    // nb_stars between 0 and 5
    const nb_stars = Math.floor(value.value)
    const stars = []
    let i = 0;
    for (i; i < nb_stars; i++) stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-400"/>)
    for (i; i < 5; i++) stars.push(<StarIcon key={i} className="w-5 h-5 text-gray-300 dark:text-gray-500"/>)
    return (
        <div className="flex items-center">
            {stars}
        </div>
    )

}