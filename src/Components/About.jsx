import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto'>
            {/* <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2 whitespace-nowrap">Name</th>
                            <th className="px-3 py-2 whitespace-nowrap">DoB</th>
                            <th className="px-3 py-2 whitespace-nowrap">Role</th>
                            <th className="px-3 py-2 whitespace-nowrap">Salary</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
                            <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
                            <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                            <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
                            <td className="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                            <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
                            <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
                            <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
                        </tr>

                        <tr className="*:text-gray-900 *:first:font-medium">
                            <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
                            <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
                            <td className="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
                            <td className="px-3 py-2 whitespace-nowrap">$0</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}



            <form class="container w-full mx-auto">
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default About